import React from 'react'
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import { colors } from '@mui/material';


const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      border: '3px solid #bdbdbd',
      overflow: 'hidden',
      borderRadius: 10,
    
    //   outerWidth: "100%",
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#fcfcfb',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
   
      '&.Mui-focused': {
        backgroundColor: '#fcfcfb',
        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        // borderColor: ,                                theme.palette.primary.main
        borderColor: "#212121",
        
      },
    },
  }));

const InputBox = () => {
  return (
    <div>
      
       <RedditTextField
        label="Reddit"
        // defaultValue="react-reddit"
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11,
          width:"23.7rem"
         }}
      />
    </div>
  )
}

export default InputBox
