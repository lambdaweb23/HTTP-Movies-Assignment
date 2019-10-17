import React, { useState, useEffect } from "react";
//import axios from "axios";

const UpdateMovieForm = (props) => {
    console.log(props);

    const [movie, setMovie] = useState({
        id: null,
        title: "",
        director: "",
        metascore: 0,
        stars: []
    });

    useEffect(() => {
        if (props.location.state) {
            setMovie({ ...props.location.state });
        }
    }, [props.location.state])

    const changeHandler = e => {
        setMovie({ ...movie, [e.target.name]: [e.target.value] });
    }

    return(
        <div>
            <h2>Update Movie</h2>
            <form>
                Title:
                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    value={movie.title}
                />
                <div className="baseline" />
                Director:
                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    value={movie.director}
                />
                <div className="baseline" />
                Metascore:
                <input
                    type="number"
                    name="metascore"
                    onChange={changeHandler}
                    value={movie.metascore}
                />
                Stars:
                <input
                    type="text"
                    name="stars"
                    onChange={changeHandler}
                    value={movie.stars}
                />
                <div className="baseline" />
                <button className="md-button form-button">Update Movie</button>
            </form>
        </div>
    )
}

export default UpdateMovieForm;