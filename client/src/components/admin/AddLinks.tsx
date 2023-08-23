import useProfileHooks from '../../hooks/useProfileHooks';
import '../../styles/trebol.css'

const ICONS = ['1', '2', '3'];




export const AddLinks = () => {

  const { handdleDeleteSocialMediasFields, handdleAddNewFieldNetwork, handdleEditFields, handdleIconsFields, profile } = useProfileHooks();


  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-2">
        <button className='w-1/2 h-auto border-[1px] border-black  rounded-3xl text-black font-bold'
          onClick={handdleAddNewFieldNetwork} disabled={profile.network.length === 5 ? true : false}>+Add Links</button>
        {(profile.network.length === 5) && <p className="text-xs text-red-800">Only 5 links are available</p>}
      </div>


      {profile.network && profile.network.map((net, index) => (
        <div key={index} className="w-full flex flex-col gap-5 border-[2px] p-5 relative">
          <button className='absolute top-0 right-0 text-xs p-1 underline text-red-700' onClick={() => handdleDeleteSocialMediasFields(net)}>Delete</button>
          <div className="w-full flex justify-between">
            <p>Pick icon:</p>
            <div className="flex gap-4">
              {ICONS.map((icon, i) => (
                <img
                  key={i}
                  id={icon}
                  src={`/src/assets/icons/icon${icon}.png`}
                  className={`w-7 h-7 cursor-pointer`}
                  onClick={(e) => handdleIconsFields(e, index)}
                  alt="icons"
                />

              ))}
            </div>
          </div>

          <div className="w-full block ">
            Enter name:
            <input type="text" className=' w-full block bg-transparent border-[1px] border-t-0 border-l-0 border-r-0 border-b-2 border-b-black text-black text-center  focus:outline-none' placeholder="min. 10 characters" onChange={(e) => handdleEditFields(e, 'name', index)} value={net.name} />
          </div>


          <div className="w-full block ">
            Enter Url:
            <input type="text" className=' w-full block bg-transparent border-[1px] border-t-0 border-l-0 border-r-0 border-b-2 border-b-black text-black text-center  focus:outline-none' onChange={(e) => handdleEditFields(e, 'url', index)} value={net.url} />
          </div>


          <div className='w-full max-w-[25rem]' key={index}>
            <div id='trebol' style={{ height: '3rem', padding: "0", paddingLeft: '.5rem' }}>
              <div className='img'>
                <img src={`/src/assets/icons/icon${net.icon}.png`} alt="" />
              </div>
              <div className='title'>
                {net.name}
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </>
  )
}
