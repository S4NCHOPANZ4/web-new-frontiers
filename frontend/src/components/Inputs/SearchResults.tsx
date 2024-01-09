
interface SearchResultsProps {
    visible: boolean;
    setVisibleResults: React.Dispatch<React.SetStateAction<boolean>>;
  }

const SearchResults = ({visible, setVisibleResults} : SearchResultsProps) => {

    //TEST RESULTS DELETE THIS!!
    const resultsListTest = Array.from({ length: 10 });
    return (
    <div style={{userSelect: 'none'}} className={`${!visible && 'hidden'} absolute top-full w-full bg-white  z-20 border-l border-r border-b `}>
        {resultsListTest.map((result, index) => {
            return(
                <div>
                    <SearchItem text={index+' Result'} setVisibleResults={setVisibleResults}/>
                </div>
            )
        })}
    </div>
  )
}
interface SearchItem {
    text: string;
    setVisibleResults: React.Dispatch<React.SetStateAction<boolean>>;
}



const SearchItem = ({text, setVisibleResults}: SearchItem) => {

    const handleClick = () => {
        setVisibleResults(false);
    }

    return(
        <div onClick={() => handleClick()} className="px-2 py-2 text-sm text-stone-700 cursor-pointer hover:bg-stone-100">
            <p>{text}</p>
        </div>
    )
}

export default SearchResults