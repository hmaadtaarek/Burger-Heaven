import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import {Home, Menu, About, Login, Signup} from './pages'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element = {<Login />} />
        <Route path="/signup" element = {<Signup />} />
        <Route path='/' element = {<Layout />}>
          <Route path="" element = {<Home />} />
          <Route path="menu" element = {<Menu />} />
          <Route path="about" element = {<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
