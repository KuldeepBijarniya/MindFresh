import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ChangeMusicDetail() {
    const { empid } = useParams();

    // const [empdata, empdatachange] = useState({});

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [link, linkchange] = useState("");
    const [category, categorychange] = useState("");
    const [history, historychange] = useState("");
    const [validation, valchange] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/cards/${empid}`)
            .then((res) => res.json())
            .then((data) => {
                idchange(data.id);
                namechange(data.name);
                linkchange(data.link);
                categorychange(data.category);
                historychange(data.history);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [empid]);

    const handlesubmit = (e) => {
        e.preventDefault();
         const empdata = { id, name, link, history, category };

        fetch(`http://localhost:5000/cards/${empid}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata),
        })
            .then((res) => {
                alert("Saved successfully.");
                window.location.href = '/';
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className='mt-5'>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2 className='text-centre'>Edit Details</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group mt-4">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {/* {name.length == 0 && validation && <span className="text-danger">Enter the name</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group mt-4">
                                            <label>Enter Link</label>
                                            <input value={link} onChange={e => linkchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group mt-4">
                                            <label>Enter Category</label>
                                            <input value={category} onChange={e => categorychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group mt-4">
                                            <label>Enter from where you want to start video</label>
                                            <input value={history} onChange={e => historychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="d-flex mt-4" style={{ justifyContent: "space-between" }}>
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

