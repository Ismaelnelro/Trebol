import { useNavigate } from "react-router-dom";
import LayoutPage from '../../Layout/LayoutPage'

const COLORS = ['1D5D9B', '33BBC5', 'D4E2D4', '6528F7', 'FD8D14'];
const AVATARS = ['1', '2', '3', '4', '5'];

const AdminPage = () => {
  const handdlePerfil = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {

  }

  const navigate = useNavigate();

  return (
    <LayoutPage>
      <div>
        <button className='border-[1px] p-2 border-black rounded-lg uppercase hover:shadow-xl  transition-all ease-out duration-200 hover:font-light hover:text-transparent hover:bg-white hover:text-blue-700'
          onClick={() => navigate('./home')}
        >
          home
        </button>
      </div>

      <div className='min-w-[350px] max-w-[90%] rounded-lg shadow-2xl p-6 flex flex-col justify-center items-center text-center gap-10 bg-white mb-20 '>

        <div id='ChooseName' className='w-full flex flex-col'>
          <h1 className=' text-lg font-light bg-white w-[50%]  m-auto'>Name</h1>
          <input type="text" className='w-[50%] h-9 m-auto bg-transparent border-[1px] border-t-0 border-l-0 border-r-0 border-b-2 border-b-black text-black text-center p-2 focus:outline-none' />
        </div>


        <div id='ChooseBG' className='w-full flex flex-col gap-2'>
          <h1 className=' text-lg font-light bg-white w-full '>Backgorund Color</h1>

          <div id='color_options' className='border-[1px] border-slate-600 rounded-md shadow-xl max-w-[100%] w-auto  m-auto p-4 h-auto flex flex-wrap justify-center gap-4'>
            {COLORS.map((color, i) => (
              <div
                key={i}
                id={color}
                className={`w-10 h-10 cursor-pointer`}
                style={{ "backgroundColor": `#${color}` }}
                onClick={(e) => handdlePerfil(e)}
              >

              </div>
            ))}
          </div>
        </div>


        <div id='ChooseAvatar' className='w-full flex flex-col gap-2'>
          <h1 className=' text-lg font-light bg-white w-full'>Avatars</h1>

          <div id='color_options' className='border-[1px] border-slate-600 rounded-md shadow-2xl max-w-[100%] w-auto  m-auto p-4 h-auto flex flex-wrap justify-center gap-4'>
            {AVATARS.map((avatar, i) => (
              <img
                key={i}
                // src={avatar}
                src={`./src/assets/avatars/avatar${avatar}.jpg`}
                className={`w-10 h-10 cursor-pointer`}
              />

            ))}
          </div>
        </div>
        <div>
          <button className='w-52 h-10 bg-blue-300 hover:bg-blue-400 rounded-lg text-black font-bold'>Save</button>
        </div>
      </div>
    </LayoutPage>
  )
}

export default AdminPage