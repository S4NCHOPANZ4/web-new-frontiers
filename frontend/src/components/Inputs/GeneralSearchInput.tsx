import { RiSearch2Line } from "react-icons/ri";
import SearchResults from "./SearchResults";
import { useEffect, useRef, useState } from "react";
const GeneralSearchInput = () => {

    const [visibleResults, setVisibleResults] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setVisibleResults(false);
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [containerRef]);

    return (
        <div ref={containerRef} className=" w-[50vw] bg-white relative ">
            <div className={`flex items-center w-full border h-full px-1  rounded-sm ${visibleResults? 'border-2 border-stone-500' : ''}`}>
                <input onFocus={() => setVisibleResults(true)} placeholder="Pa onde" className="font-medium w-full focus:outline-none my-1 pl-2  " />
                <button>
                    <RiSearch2Line className={`text-2xl ${visibleResults? 'text-stone-600' : 'text-stone-400'} mx-1`} />
                </button>
            </div>
            <SearchResults visible={visibleResults} setVisibleResults={setVisibleResults}/>
        </div>
    )
}

export default GeneralSearchInput