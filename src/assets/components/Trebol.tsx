import { Link } from 'react-router-dom'
import '../../styles/trebol.css'

const Trebol = ({ net }: { net: any }) => {


  return (
    <div className='w-full max-w-[25rem] h-[4.5rem]'>
      <Link to={net.url} target='_blank' className='w-full h-full' >
        <div id='trebol' className=''>
          <div className='img'>
            <img src={net.icon} alt="" />
          </div>
          <div className='title'>
            {net.name}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Trebol