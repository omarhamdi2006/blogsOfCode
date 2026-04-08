import './App.css'
import Home from './Home'
import Articles from './Articles'
import Contact from './Contact'

import { Route,Routes } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </>
  )
}

export default App
