import React, { useState } from "react";

const Search = () => {
    const [query, setquery] = useState("");
    const [results, setresults] = useState([]);

    const handleSubmit = async event => {
        event.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8434a0b660ab72dea068e0d5edd42503&query=${query}`);
        const data = await response.json();
        setresults(data.results);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={event => setquery(event.target.value)} />
                    <button type="submit">Rechercher</button>
            </form>
            <ul>
                {results.map(result => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>


        </div>
    )

}

export default Search;