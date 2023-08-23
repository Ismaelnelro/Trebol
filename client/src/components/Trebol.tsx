import { Link } from 'react-router-dom'
import '../styles/trebol.css'
import { Network } from '../store/feature/profile/profileSlice'

const Trebol = ({ net }: { net: Network }) => {

  

  return (
    <div className='w-full max-w-[25rem]'>
      {net &&
        <Link to={net.url} target='_blank' className='w-full h-full' >
          <div id='trebol' className=''>
            <div className='img'>
              <img src={`/src/assets/icons/icon${net.icon}.png`} alt="" />
            </div>
            <div className='title'>
              {net.name}
            </div>
          </div>
        </Link>
      }
    </div>
  )
}

export default Trebol