import React from 'react'
// import avatar from '../assets/avatar1.png'
import avatar from '../assets/avatars/avatar4.jpg'
import '../styles/avatar.css'
import { useAppSelector } from '../store/redux-reducer';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {

  const { name, avatar} = useAppSelector(state => state.profile)


  const superUsuario = () => {
  }

  return (
    // <div className=' max-w-[900px] min-w-[320px]  landscape:h-full max-h-[900px] min-h-[1024px] flex flex-col items-center gap-4 relative'>
    <div className=' max-w-[900px] min-w-[320px] w-full  h-auto  flex flex-col items-center gap-4 relative'>
      <div className='w-full h-[10rem]  flex justify-center p-3' onClick={superUsuario}>
        <img id='avatar_perfil' src={`./src/assets/avatars/avatar${avatar}.jpg`} alt="avatar perfil" className='w-full h-full' />
      </div>

      <div className='w-full h-8 text-center font-bold '>
        <p>{name ? '@' + name : "@nametechs"}</p>
      </div>

      {children}
    </div>
  )
}

export default LayoutPage