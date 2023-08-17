
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AdminPage from './pages/Admin/AdminPage'
import PowerBy from './assets/components/PowerBy'
function App() {

  const isAuthenticted = true;

  return (
    <div className='bg-blue-500 max-w-[900px] min-w-[320px] m-auto max-h-[1600px]  min-h-[600px] relative'>
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
