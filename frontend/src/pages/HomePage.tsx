import theme from '../colorPalette.js';
import GeneralNavbar from '../components/GeneralNavbar';

const HomePage = () => {

  //Test Values
  const testCards = new Array(8).fill('test');

  return (
    <div>
      <GeneralNavbar/>
        <div className="w-full mx-auto  p-2 flex items-center flex-col">
          <div className='max-w-[1400px] flex justify-center space-x-6 '> 
            <GlobalCategoires background='linearGradient_ver1' title='Ropa'/>
            <GlobalCategoires background='linearGradient_ver2' title='Accesorios'/>
            <GlobalCategoires background='linearGradient_ver3' title='Freelancers'/>
            <GlobalCategoires background='linearGradient_ver4' title='Artesanias'/>
          </div>
          <div className='max-w-[1400px] my-5'>
            <p className='font-bold text-4xl my-3 '>Trending</p>

            <div className='w-full  flex flex-wrap items-center justify-center '>
              {testCards.map((item, index) => {
                return(
                  <div key={index} className='w-[300px] h-[310px] bg-stone-400  rounded-md m-2 scaleElement'>
                    {item}
                  </div>
                )
              })}
            </div>

          </div>
        </div>
        
    </div>
  )
}

interface GlobalCategoriesProps {
  background: string;
  title: string;
}

const GlobalCategoires = ({ background, title }: GlobalCategoriesProps ) => {
    return (
        <div style={{
          backgroundColor: theme.secondaryColor
        }} className={`cursor-pointer h-[310px] w-[310px]  rounded-[1.5rem] ${background} scaleElement flex items-end py-4 px-6`}>
          <p className='font-bold text-[2.15rem] text-white'>{title}</p>
        </div>
    )
}
export default HomePage