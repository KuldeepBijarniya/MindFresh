import React from 'react'
import ReactPlayer from "react-player";
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CategoryVShow(user) {
    // const [played, setPlayed] = useState(0);
    const {id, name, link, category, history} = user;
    const url = `${link}?start=${history}`;
    const [empdata, empdatachange] = useState(null);

    const LoadEdit = (id) => {
        // navigate("/employee/edit/" + id);
        window.location.href = `/changeamusic/${id}`;
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:5000/cards/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/cards").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger"> {category} </span>
                </div>
                <ReactPlayer width='100%' controls url={url} onProgress={(progress) => {
                    let hhistory = progress.playedSeconds;
                    console.log(hhistory);
                }} />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim eius dolorem earum blanditiis perspiciatis officiis maiores quod non? Vero saepe nesciunt modi et fugiat totam voluptatum ad praesentium distinctio.</p>
                    <div className='d-flex mt-4' style={{ justifyContent: "space-between" }}>
                    <a onClick={() => { LoadEdit(id) }} className="btn btn-success">Edit</a>
                    <a onClick={() => { Removefunction(id) }} className="btn btn-danger">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
