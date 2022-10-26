import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewPage from './page/ViewPage';




function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViewPage/>}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
