import { useEffect, useRef, useState } from "react";
import styles from '../../styles.ts'
import { MdOutlineDone } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
import { CiShoppingTag } from "react-icons/ci";
import { LiaExchangeAltSolid } from "react-icons/lia";


interface RegistrationProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Registration = ({ setOpen }: RegistrationProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [mode, setMode] = useState(1)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [containerRef]);

    return (
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-[#292929a4] '>
            <div ref={containerRef} className='h-[70vh] w-[60vw] bg-white  rounded-lg flex items-center justify-between overflow-hidden'>
                {
                    mode === 3 ?
                        <CreateNewAccount setMode={setMode} setOpen={setOpen}/>
                        :
                        <>
                            <div className="w-[50%] flex flex-col h-full justify-between linearGradient_ver3 p-4 py-10">
                                <p className="text-4xl  text-white">Lleva tus ideas al mundo</p>
                                <div className="mt-10 flex flex-col space-y-2">
                                    <div className="flex items-center space-x-2 text-white">
                                        <MdOutlineDone />
                                        <p className="text-md font-medium ">Apoya emprendimientos </p>
                                    </div>
                                    <div className="flex items-center space-x-2 text-white">
                                        <MdOutlineDone />
                                        <p className="text-md font-medium ">Lleva tus ideas a las personas </p>
                                    </div>
                                    <div className="flex items-center space-x-2 text-white">
                                        <MdOutlineDone />
                                        <p className="text-md font-medium ">Empieza a crear una imagen para tu marca</p>
                                    </div>
                                </div>
                            </div>
                            {mode === 1 && <SignUp setMode={setMode} />}
                            {mode === 2 && <Login setMode={setMode} />}
                        </>
                }



            </div>
        </div>
    )
}

interface ModeProps {
    setMode: React.Dispatch<React.SetStateAction<number>>;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;

}


const SignUp = ({ setMode }: ModeProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    return (

        <div className="w-[50%] flex flex-col justify-start h-full px-10 py-8">
            <p className="text-3xl">
                Registrate
            </p>
            <p className="text-md font-semibold text-stone-500 noUserSelect">
                ¿Ya tienes una cuenta? <span onClick={() => setMode(2)} className="text-stone-800 font-bold cursor-pointer hover:underline">Inicia sesion</span>
            </p>
            <div className="flex flex-col mt-10 space-y-2">
                <input placeholder="Email" className={`${styles.input} `} />
                <div className="relative">
                    <input placeholder="Password" type={showPassword ? "text" : "password"} className={`${styles.input} w-full pr-10`} />
                    <div onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer bg-white h-[80%] flex items-center justify-center top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
                        {
                            showPassword ?
                                <FiEye />
                                :
                                <FiEyeOff />
                        }
                    </div>
                </div>
                <div>
                    <p className="text-xs font-medium text-red-500">
                        8 caracteres!
                    </p>
                </div>
                <div className="relative">
                    <input placeholder="Confirm password" type={showConfirmPassword ? "text" : "password"} className={`${styles.input} w-full pr-10`} />
                    <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute cursor-pointer bg-white h-[80%] flex items-center justify-center top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
                        {
                            showConfirmPassword ?
                                <FiEye />
                                :
                                <FiEyeOff />
                        }
                    </div>
                </div>
                <button onClick={() => setMode(3)} className="linearGradient_ver3 text-white py-2 rounded-md">Continuar</button>
                <div className="">
                    <p className="text-center text-stone-500">O</p>
                </div>
                <button className="border py-2 rounded-md flex items-center justify-center text-stone-500 transition-all hover:bg-stone-50 bg-white">
                    <FcGoogle className="text-2xl" />
                    <p className="mx-2">Iniciar sesion con google</p>
                </button>

            </div>
        </div>
    )
}

const Login = ({ setMode }: ModeProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <div className="w-[50%] flex flex-col justify-start h-full px-10 py-8">
            <p className="text-3xl">
                Inicar Sesión
            </p>
            <p className="text-md font-semibold text-stone-500 noUserSelect">
                ¿No tienes una cuenta? <span onClick={() => setMode(1)} className="text-stone-800 font-bold cursor-pointer hover:underline">Registrate</span>
            </p>
            <div className="flex flex-col mt-10 space-y-2">
                <input placeholder="Email" className={`${styles.input} `} />
                <div className="relative">
                    <input placeholder="Password" type={showPassword ? "text" : "password"} className={`${styles.input} w-full pr-10`} />
                    <div onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer bg-white h-[80%] flex items-center justify-center top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
                        {
                            showPassword ?
                                <FiEye />
                                :
                                <FiEyeOff />
                        }
                    </div>
                </div>
                <div>
                    <p className="text-xs font-medium text-red-500">
                        Wrong credentials
                    </p>
                </div>

                <button className="linearGradient_ver3 text-white py-2 rounded-md">Continuar</button>
                <div className="">
                    <p className="text-center text-stone-500">O</p>
                </div>
                <button className="border py-2 rounded-md flex items-center justify-center text-stone-500 transition-all hover:bg-stone-50 bg-white">
                    <FcGoogle className="text-2xl" />
                    <p className="mx-2">Iniciar sesion con google</p>
                </button>

            </div>
        </div>
    )
}

const CreateNewAccount = ({ setMode, setOpen }: ModeProps) => {

    const[selectedOption, setSelectedOption] = useState<null | string>(null)

    const handleClickContinue = () => {
        setOpen && setOpen(false)
    }

    const handleClickSkip = () => {
        setOpen && setOpen(false)

    }

    return (
        <div className="w-full h-full py-5 flex items-center justify-evenly flex-col relative">
            <div className="flex flex-col w-full items-center space-y-5">
                <div className="flex flex-col items-center justify-center ">
                    <p className="text-4xl">¡Bienvenido a Doom!</p>
                    <p className="font-medium text-stone-400">Dejanos saber cual es tu objetivo en Doom</p>
                </div>
                <div className="w-[60%] flex items-center justify-center flex-col space-y-2 ">
                    <div onClick={() => setSelectedOption('buyerUser')} className={`${selectedOption === 'buyerUser' ? 'linearGradient_ver3 text-white' : 'bg-white hover:bg-stone-50 text-stone-600'} noUserSelect h-[50px] w-full  border rounded-md flex items-center justify-center cursor-pointer space-x-2`}>
                        <CiShoppingCart className={`text-3xl ${selectedOption === 'buyerUser' ? '' : 'text-red-400'}`} />
                        <p className="">Quiero comprar y apoyar creadores</p>
                    </div>
                    <div onClick={() => setSelectedOption('sellerUser')} className={`${selectedOption === 'sellerUser' ? 'linearGradient_ver3 text-white' : 'bg-white hover:bg-stone-50 text-stone-600'} noUserSelect h-[50px] w-full  border rounded-md flex items-center justify-center cursor-pointer space-x-2`}>
                        <CiShoppingTag className={`text-3xl ${selectedOption === 'sellerUser' ? '' : 'text-red-400'}`} />
                        <p className="">Quiero llevar mi marca a mas publico</p>
                    </div>
                    <div onClick={() => setSelectedOption('mixUser')} className={`${selectedOption === 'mixUser' ? 'linearGradient_ver3 text-white' : 'bg-white hover:bg-stone-50 text-stone-600'} noUserSelect h-[50px] w-full  border rounded-md flex items-center justify-center cursor-pointer space-x-2`}>
                        <LiaExchangeAltSolid className={`text-3xl ${selectedOption === 'mixUser' ? '' : 'text-red-400'}`} />
                        <p className="">Ambas opciones</p>
                    </div>
                </div>
            </div>

            <div className="absolute w-full flex justify-between items-center  bottom-5 px-5">
                <button  onClick={() => {handleClickSkip()}} className="text-stone-500 px-2 py-1 font-medium">Skip</button>
                <button onClick={() => {handleClickContinue()}} className="linearGradient_ver3 text-white py-2 rounded-md px-4">Continue</button>
            </div>
        </div>
    )
}



export default Registration