import GeneralSearchInput from "../Inputs/GeneralSearchInput"
import ProfileSignUp from "../Inputs/Profile-SignUp"


const GeneralNavbar = () => {
  return (
    <div className='w-full bg-white h-[50px] flex items-center justify-start border-b  font-bold px-5'>
        <div className="flex justify-between items-center w-[1400px]  m-auto">
          <p>NOMBRE</p>
          <GeneralSearchInput/>
          <ProfileSignUp/>
        </div>
    </div>
  )
}

export default GeneralNavbar