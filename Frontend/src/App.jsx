import './App.css'
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import User from './components/User';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
