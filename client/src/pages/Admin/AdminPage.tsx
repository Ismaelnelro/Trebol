import { useNavigate } from "react-router-dom";
import LayoutPage from '../../Layout/LayoutPage'
import useProfileHooks from "../../hooks/useProfileHooks";
import { PickName } from "../../components/admin/PickName";
import { PickBG } from "../../components/admin/PickBG";
import { PickAvatar } from "../../components/admin/PickAvatar";


import '../../styles/trebol.css'
import { AddLinks } from "../../components/admin/AddLinks";

const AdminPage = () => {
  const navigate = useNavigate();

  const {
    handleBackGroundColor,
    handleAvatar,
    handleName,
  } = useProfileHooks();


  
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
        <PickName handleName={handleName} />
        <PickBG handleBackGroundColor={handleBackGroundColor} />
        <PickAvatar handleAvatar={handleAvatar} />
        <AddLinks/>

        <div>
          <button className='w-52 h-10 bg-blue-300 hover:bg-blue-400 rounded-lg text-black font-bold'>Save</button>
        </div>


      </div>
    </LayoutPage>
  )
}

export default AdminPage