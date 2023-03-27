import './App.css';
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Projectpage from './pages/Projectpage';
function App() {
  return (
   <div>
    
    <BrowserRouter>
      <Routes>
       
          <Route path="/upload" element={<Upload /> } exact />
          <Route path="/Projectpage/:id" element={<Projectpage/> } exact />
           <Route path="/" element={<Home/>} exact>

        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
