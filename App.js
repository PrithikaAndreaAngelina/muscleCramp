import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Profile from './Profile'
import Home from './Home'
import Main from './Main'
import Alert from './Alert'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< Login />}></Route>  
      <Route exact path='/profile' element={< Profile />}></Route> 
      <Route exact path='/home' element={< Home />}></Route>  
      <Route exact path='/main' element={< Main />}></Route>
      <Route exact path='/alert' element={< Alert />}></Route> 
      </Routes>
      </BrowserRouter>
  );
};

export default App;