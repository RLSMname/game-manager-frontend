
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NoPage from "./pages/NoPage";
import Games from "./pages/Games";
import Home from "./pages/Home"
import Details from "./pages/Details";
import Layout from "./pages/Layout";
import Add from "./pages/Add";
function App() {

  const [list, setList] = useState([
    {id: 1, title:"t1", developer:"dev1", rating:7},
    {id: 2, title:"t2", developer:"dev2", rating:2},
    {id: 3, title:"t3", developer:"dev3", rating:3},
    {id: 4, title:"t4", developer:"dev4", rating:8},
    {id: 5, title:"t5", developer:"dev5", rating:3},
    {id: 6, title:"t6", developer:"dev6", rating:4},
    {id: 7, title:"t7", developer:"dev7", rating:7.5},
    
]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games list={list}/>} />
          <Route path="games/add" element={<Add setList={setList}></Add>}></Route>
          <Route path="games/:id" element={<Details />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
