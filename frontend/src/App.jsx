import { Routes, Route } from "react-router-dom";
import CreateBooks from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import EditBooks from "./pages/EditBooks";
import ShowBooks from "./pages/ShowBooks";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes> 
      <Route path='/' element={ <Home /> } />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBooks />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      <Route path='/books/delete/:id' element={<DeleteBooks />} />
    </Routes>
  )
}
