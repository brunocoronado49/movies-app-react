import React, {useEffect, useState} from 'react'
import Card from '../components/Card';

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=a40a5853'

const List = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [error, setError] = useState('')

    useEffect(async () => {
        const res = await fetch(`${API}&s=batman`)
        const resJSON = await res.json()
        console.log(resJSON)
        setMovies(resJSON.Search)
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!search) {
            return setError('Please, write a valid text.')
        }

        const res = await fetch(`${API}&s=${search}`)
        const resJSON = await res.json()

        if(!resJSON.Search) {
            return setError('There are not results.')
        }

        console.log(resJSON)
        setMovies(resJSON.Search)
        setError('')
        setSearch('')
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4 offset-md-4 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <input
                                type="text" 
                                className="form-control" 
                                placeholder="Search"
                                onChange={e => handleChange(e)}
                                value={search}/>
                        </div>
                        <center>
                            <h5>{error? error : ''}</h5>
                        </center>
                        <div className="form-group p-2">
                            <button 
                            className="btn btn-danger w-100" 
                            type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                {
                    movies.map((movie) => (
                        <Card 
                            key={movie.imdbID} 
                            title={movie.Title} 
                            poster={movie.Poster} 
                            type={movie.Type}
                            year={movie.Year}/>
                    ))
                }
            </div>
        </div>
    )
}

export default List
