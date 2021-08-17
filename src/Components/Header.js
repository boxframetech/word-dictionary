import React from 'react'
import './Header.css'
import {TextField,createTheme,ThemeProvider} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import languages from '../languageCategory'

const Header = ({langCategory, setLangCategory, word, setWord}) => {

    const darkTheme = createTheme({
        palette: {
          type: 'dark',
          primary:{
              main:'#fff'
          }
        },
      });

    return (
        
            <div className="header">
                <span className="title">
                      {word ? word : 'Word Dictionary'}  
                </span>

                <div className="inputs">
                    <ThemeProvider theme={darkTheme}>
                        <TextField id="standard-basic" className='search' label="Enter a dictionary word"  value={word} 
                        onChange={(e)=> setWord(e.target.value)}
                        />

                        <TextField
                            className='select'
                            id="standard-select-currency"
                            select
                            label="Select Language"
                            value={langCategory}
                            onChange={(e) => setLangCategory(e.target.value)}
                            // helperText="Please select your language"
                            >
                    
                           {
                               languages.map((lang_option)=>(
                                   <MenuItem key={lang_option.label} value={'lang_option.value'}>{lang_option.value}</MenuItem>
                               ))
                           }

                        </TextField>
                    </ThemeProvider>
                </div>
            </div>
            
    )
}

export default Header
