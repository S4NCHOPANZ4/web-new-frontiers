import GeneralNavbar from "../components/Navbars/GeneralNavbar"
import { RiStarSFill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const BrandPage = () => {

  const gridCells = 'xl:w-[390px] lg:w-[350px] md:w-[370px] sm:w-[70vw] w-[90vw] xl:h-[400px] lg:h-[370px] md:h-[350px] sm:h-[70vh] h-[90vh]'

  return (
    <div>
      <GeneralNavbar />
      <div className="max-w-[1400px] mx-auto border-b py-2">
        <div className="flex justify-center items-center mt-3 space-x-10">
          <img className="h-[150px] w-[150px] rounded-full" src="data:image/jpeg;base64,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" />
          <div className="h-full mx-2">
            <p className="font-bold text-2xl flex items-center ">Locuritas INC <span className="mx-1 cursor-pointer"><CiEdit /></span></p>
            <div className="flex items-center justify-start   text-yellow-500 ">
              <div className="flex items-center justify-center">
                <RiStarSFill />
              </div>
              <p className="font-semibold ">4.9</p>
            </div>
            <div className="flex space-x-2 py-1">
              <button className="font-medium text-white bg-stone-700 px-2 py-1 text-sm rounded-sm">Editar Perfil</button>
              <button className="font-semibold text-white bg-stone-700 px-2 py-1 text-sm rounded-sm">Ver Estadísticas</button>
            </div>
            <div>
              <p className="text-sm font-semibold">instagram.com/h_buitrago_p/</p>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-center space-x-5  mt-5">
          <div className="flex flex-col items-center justify-center w-[100px]  ">
            <p className="font-medium">Seguidores</p>
            <p className="font-semibold text-lg">10</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[100px]">
            <p className="font-medium">Productos</p>
            <p className="font-semibold  text-lg">10</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[100px] ">
            <p className="font-medium">Ventas</p>
            <p className="font-semibold text-lg">10</p>
          </div>
        </div>

      </div>

      {/* Showcase Products */}
      <div className="max-w-[1400px] mx-auto py-5 flex items-center justify-center">
        <div className="grid md:gap-1 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            <div className={` bg-white border rounded-md ${gridCells}`}>dslkfg</div>
            <div className={` bg-white border rounded-md ${gridCells}`}>dslkfg</div>
            <div className={` bg-white border rounded-md ${gridCells}`}>dslkfg</div>
            <div className={` bg-white border rounded-md ${gridCells}`}>dslkfg</div>
            <div className={` bg-white border rounded-md ${gridCells}`}>dslkfg</div>
            <div className={` bg-white border rounded-md ${gridCells}`}>dslkfg</div>
            <div className={` bg-white border rounded-md ${gridCells}`}>dslkfg</div>
            <div className={` bg-white border rounded-md ${gridCells}`}>dslkfg</div>
        </div>

      </div>

    </div>
  )
}

export default BrandPage