import React, { useState } from 'react';
import Joke from './Joke.tsx';
import { request } from './typedFetch.ts'

export default function ExampleComponent() {

    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);
    const [joke, setJoke] = useState("")

    //const url="https://www.thecocktaildb.com/api/json/v1/1/random.php"
    const url="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

    async function handleClick() {
        request<any>(url)
            .then((res) => {

                // these two below will be "batched" (grouped) together
                setCount(count => count + 1)
                setJoke(res.joke.toString())
                // React 18+ will rerender only once at the end.
            })
            .catch(() => {
                console.log("So this is awkward... Something went wrong.")
                setError(true)
            })
        // React 18 will rerender only now
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {error ? <p>We have a problem. Refresh the page to try again.</p> : null}
            <h1>Click to get a random Dad joke, and to increase count</h1>
            <p data-testid="counter">Count: {count}</p>
            {joke && <Joke joke={joke} />}
            <button
                data-testid="button"
                onClick={handleClick}
                style={{ width: "3rem", alignSelf: "center", marginTop: "0.5rem" }}
            >
                Click
            </button>
        </div>
    )
}
