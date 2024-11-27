import * as React from 'react';
import Chip from '@mui/material/Chip';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import DoneIcon from '@mui/icons-material/Done'
import { useState } from 'react';

export const SingleChip = ({ id, name, selectedGenres, setSelectedGenres }) => {
    const [selected, setSelected] = useState(false)
    const handleClick = () => {
        setSelected(!selected)
        if (selectedGenres.indexOf(id) == -1) {
            setSelectedGenres(prev => [...prev, id])
        } else {
            setSelectedGenres(prev => prev.filter(item => item != id))
        }
    }

    return (

        <Chip
            icon={selected ? <DoneIcon /> : <RadioButtonUncheckedIcon />}
            label={name}
            clickable
            onClick={handleClick}
        />

    );
}
