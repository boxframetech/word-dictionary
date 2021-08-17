import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import {Container} from '@material-ui/core'
import Header from './Components/Header'

let dictionaryApiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/duck'

function App() {

  const [word,setWord] = useState('')
  const [langCategory,setLangCategory] = useState('en')


  const [meanings,setMeanings] = useState([])

  const dictionaryApi = async() => {
    try{

      const data = await axios.get(dictionaryApiUrl)

      setMeanings(data.data)

    }catch(error){

      console.log(error)

    }
  }

  console.log(meanings)

  useEffect(() => {
      dictionaryApi()
  }, [])


  return (
    <div className="App">
     <Container maxWidth='md' className='d-flex'>
        <Header langCategory={langCategory} setLangCategory={setLangCategory} word={word} setWord={setWord}/>
     </Container>
    </div>
  );
}

export default App;
