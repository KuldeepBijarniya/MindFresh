import React from 'react'
import { Link} from "react-router-dom";
import { useState } from 'react';

export default function AddMusic() {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [link, linkchange] = useState("");
    const [category, categorychange] = useState("");
    const [history, historychange] = useState("");
    const [validation, valchange] = useState(false);


    // const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, link, history, category };

        fetch("http://localhost:5000/cards", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            window.location.href = '/';
        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <div className='mt-5'>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2 className='text-centre'>Add Music</h2>
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
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
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
