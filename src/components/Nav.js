import { Route, Routes } from 'react-router-dom';
import SelectFromPage from '../pages/SelectFromPage';
import Selecting from './Selecting';

const Nav = () => {
  return (
    <Routes>
        <Route path="/" element={<Selecting/>}/>
        <Route path="/select" element={<SelectFromPage/>}/>
    </Routes>
  )
}

export default Nav;