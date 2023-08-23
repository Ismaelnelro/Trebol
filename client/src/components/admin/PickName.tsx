
export const PickName = ({ handleName }: { handleName: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div id='ChooseName' className='w-full flex flex-col'>
      <h1 className=' text-lg font-light bg-white w-[50%]  m-auto'>Name</h1>
      <input type="text" className='w-[50%] h-9 m-auto bg-transparent border-[1px] border-t-0 border-l-0 border-r-0 border-b-2 border-b-black text-black text-center p-2 focus:outline-none' onChange={(e) => handleName(e)} />
    </div>
  )
}
