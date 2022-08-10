import React from 'react'
import Navbar from '../src/components/Navbar'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import style from '../styles/Search.module.css';

const search_result = () => {
  return (
    <div className='Search_container'>
        
      <Navbar />

      <div className={style.first_container}>
      <Stack spacing={3} direction="row">
           <Button variant="contained" className={style.butt}>Contained 1</Button>
           <Button variant="contained" className={style.butt}>Contained 2</Button>
           <Button variant="contained" className={style.butt}>Contained 3</Button>
           <Button variant="contained" className={style.butt}>Contained 4</Button>
    </Stack>
      </div>
      <div className={style.main_content}>
        <div className={style.part_1}>

        </div>
        <div className={style.part_2}>

        </div>
      </div>
    </div>
  )
}

export default search_result
