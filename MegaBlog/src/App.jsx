import { useState, useEffect } from 'react'
import './App.css'
import AuthService from './AppWrite/auth'
import { useDispatch } from 'react-redux'
import { LogIn, LogOut } from '../store/authSlice'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    AuthService.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch(LogIn({userdata}))
      }else{
        dispatch(LogOut())
      }
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      setLoading(false);
    })
  }
  ,[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
