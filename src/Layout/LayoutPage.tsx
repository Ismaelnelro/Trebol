import React from 'react'
import avatar from '../assets/avatar1.png'
import '../styles/avatar.css'

const LayoutPage = ({ children }: { children: React.ReactNode }) => {

  const name = "";//--> Este viene del back

  const superUsuario = () => {
  }

  return (
    <div className='max-w-[900px] min-w-[320px] max-h-[1000px] h-screen min-h-[600px] flex flex-col items-center gap-4'>
      <div className='w-full h-auto  flex justify-center p-3' onClick={superUsuario}>
        <img id='avatar_perfil' src={avatar} alt="avatar perfil" />
      </div>

      <div className='w-full h-8 text-center font-bold '>
        <p>{name ? '@' + name : "@ismaeltechs"}</p>
      </div>

      {children}
    </div>
  )
}

export default LayoutPage