import { useState, useEffect } from "react";
import CategoryVShow from "./CategoryVShow";

export default function Dbconnect(props) {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch(`http://localhost:5000/cards`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    fetchData();
    document.title = `${capitalizeFirstLetter(props.category)} - Mind Fresh`;
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Mind Fresh -  {capitalizeFirstLetter(props.category)} Music</h1>
      <div className="container">
        <div className="row">
          {user.map((element) => { 
            if (props.category == "general" || element.category == props.category) {
            return <div className="col-md-4" key={element.id}>
              <CategoryVShow id = {element.id} name = {element.name} link={element.link} category={element.category} history={element.history} />
            </div>
          }
          })}
        </div>
      </div>
    </>

  )

}
