import './App.css';
import Header from './Components/Header/Header/Header.js';
import { Route,Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Hire from './Components/Hire/Hire';
import Projects from './Components/Projects/Projects';
import Admin from './Components/Manage/Admin';
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <div >
      <Routes>

        <Route path='/admin' element={<><Admin/><Footer /></>} />
        <Route path='/courses' element={<><Header /><Courses /><Footer /></>} />
        <Route path='/projects' element={<><Header /><Projects /><Footer /></>} />
        <Route path='/hire' element={<><Header /><Hire /><Footer /></>} />
        <Route path='/' element={<><Header /><Main /><Footer /></>} />

      </Routes>

    </div>
  );
}

export default App;
