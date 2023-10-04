import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Details from './pages/Details';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <Routes> 
        <Route path='/home' element={<Home/>} />     
        <Route path='/details/:title' element={<Details/>} />     
        <Route path='*' element={<NotFound/>} />     
    </Routes>
  ); 
}

export default App
