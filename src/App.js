
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './copmonents/Home/Home';
import Reviews from './copmonents/Reviews/Reviews';
import Dashbord from './copmonents/Dashbord/Dashbord';
import Blogs from './copmonents/Blogs/Blogs';
import About from './copmonents/About/About';
import NotFound from './copmonents/Notfound/NotFound';
import Navbar from './copmonents/Navbar/Navbar';






function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>







    </div>
  );
}

export default App;
