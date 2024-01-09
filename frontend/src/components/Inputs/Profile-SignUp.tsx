// import theme from '../../colorPalette.ts';

import { useEffect, useState } from "react"
import Registration from "../Signup-Login/Registration";

const ProfileSignUp = () => {

  const [registerOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    if (registerOpen) {

      // Block the scroll event
      const handleScroll = (e: Event) => {
        e.preventDefault();
      };
      // Apply styles to disable global scrolling
      document.body.style.overflow = 'hidden';
      // Add the event listener to block scrolling
      window.addEventListener('scroll', handleScroll);
      // Cleanup when the component unmounts
      return () => {
        document.body.style.overflow = ''; // Restore global scrolling
        window.removeEventListener('scroll', handleScroll);
      };
    } 

  }, [registerOpen])

  return (
    <div >
      <p style={{ userSelect: 'none' }} onClick={() => setRegisterOpen(true)} className="flex items-center space-x-1 font-semibold">
        <span className="cursor-pointer font-bold hover:underline ">POR HACER</span>
      </p>
      {registerOpen &&
        <Registration setOpen={setRegisterOpen}/>
      }
    </div>
  )
}

export default ProfileSignUp