
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AdminPage from './pages/Admin/AdminPage'
import { useAppSelector } from './store/redux-reducer'
import PowerBy from './components/PowerBy'
function App() {

  const isAuthenticted = true;
  const { profile } = useAppSelector(state => state.profile);

  return (
    // <div className='bg-blue-200 max-w-[900px] min-w-[320px] m-auto max-h-[1700px]  min-h-[600px] relative'>
    <div className='max-w-[900px] min-w-[320px] m-auto min-h-screen landscape:min-h-[800px] relative '
      style={{ backgroundColor: `#${profile.styles.backgroundAppColor}` }}
    >
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
