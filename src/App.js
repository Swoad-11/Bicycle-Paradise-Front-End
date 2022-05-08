import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import ErrorNotFound from "./Components/Error404/ErrorNotFound";
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login/Login';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import Signup from './Components/Login/Signup/Signup';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import AddItems from './Components/AddItems/AddItems';
import MyItems from './Components/MyItems/MyItems';
import ManageItems from './Components/ManageItems/ManageItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/additems" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/manageitems" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path="*" element={<ErrorNotFound></ErrorNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
