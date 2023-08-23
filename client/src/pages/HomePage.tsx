import LayoutPage from "../Layout/LayoutPage"
import Trebol from "../components/Trebol";
import { useAppSelector } from "../store/redux-reducer"

const HomePage = () => {

  const { profile } = useAppSelector(state => state.profile)
  const { network } = profile;

  return (
    <LayoutPage>
      {/* <div className="flex flex-col justify-center items-center w-full min-h-[350px] h-full  gap-3 mb-20"> */}
      <div className="flex flex-col justify-center items-center w-full h-auto  gap-5 p-5 mb-20">
        {network.map((net, index) => (
          <Trebol key={index} net={net} />
        ))
        }
      </div>
    </LayoutPage>
  )
}

export default HomePage