import React from 'react';

const Movie = ({ title, overview, poster }) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
            <h3 style={{ color: "blue" }}>
                {overview}
            </h3>
            <img src={"https://image.tmdb.org/t/p/w500"+poster} alt={title} />
        </div>
    );
};

export default Movie;
