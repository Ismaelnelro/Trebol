
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { useState } from 'react'
import AdminPage from './pages/Admin/AdminPage'
import PowerBy from './assets/components/PowerBy'
function App() {

  const [isAuthenticted, setisAuthenticted] = useState(true)

  return (
    <div className='bg-blue-400 max-w-[900px] min-w-[320px] m-auto max-h-[1300px] h-screen min-h-[600px] relative'>
      <Routes>
        {isAuthenticted &&
          <Route path='/admin' element={<AdminPage />} />
        }
        <Route path='/' element={<HomePage />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
      <PowerBy />

    </div>
  )
}

export default App
