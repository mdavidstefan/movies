import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getData } from '../utils';
import { Content } from '../components/Content'
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

export const SearchPage = () => {

    const [searchText, setSearchText] = useState('');
    const [query, setQuery] = useState('')
    const [type, setType] = useState('movie');
    const urlSearch = `https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&query=${searchText}&page=1`;

    const search = () => {
        setQuery()
        urlSearch = searchText ? `https://api.themoviedb.org/3/search/${type}?query=${searchText}&page=1&api_key=${import.meta.env.VITE_API_KEY}`
            : `https://api.themoviedb.org/3/${type}/popular?page=1&api_key=${import.meta.env.VITE_API_KEY}`;
    }


    const { data, isError, isLoading, error } = useQuery({ queryKey: ['searchText', type, urlSearch], queryFn: getData })

    if (isLoading) return <CircularProgress />

    if (isError) return <div>Error fetching data:{error.message}</div>


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={() => setSearchText(event.target.value)} value={searchText} />
                <IconButton aria-label="search" color="primary" onClick={search}>
                    <SearchIcon />
                </IconButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="text" onClick={() => setType('movie')}>Search movies</Button>

                <Button variant="text" onClick={() => setType('tv')}>Search TV shows</Button>
            </div>
            <div>
                <Content url={urlSearch} type={type} />
            </div>
        </>
    )
}

