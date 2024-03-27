import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { LineWave, MutatingDots, ProgressBar, Rings, ThreeDots } from 'react-loader-spinner'


function App() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setItems(res.data);
      console.log(res.data);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    });
  }, []);
  const filteredItems = items.filter((item) => {
    // Convert search query to lowercase for case-insensitive search
    const search = searchQuery.toLowerCase();

    // Check if the item's title or category contains the search query
    const titleMatch = item.title.toLowerCase().includes(search);
    const categoryMatch = item.category.toLowerCase().includes(search);

    // Check if the item's rating matches the search query


    // Combine all conditions using logical OR (||) to get items that match any criteria
    return titleMatch || categoryMatch;
  });
  // Function to highlight the matched search query within a string
  const highlightMatch = (text, query) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, (match) => `<span style="background-color: #A18F7A; color: white">${match}</span>`);
  };

  const totalFilteredItems = filteredItems.length;
  return (
    <>
      <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div class="flex items-center justify-between">
            <a class="flex-none" href="#">
              <img class="w-10 h-auto" src="../assets/img/logo/logo-short.png" alt="Logo" />
            </a>
            <div class="sm:hidden">
              <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-image-2" aria-controls="navbar-image-2" aria-label="Toggle navigation">
                <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
          <div id="navbar-image-2" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a class="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">Landing</a>
              <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Account</a>
              <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Work</a>
              <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Blog</a>
            </div>
          </div>
        </nav>
      </header>
      <div className='text-center'>
        <h5 className='p-3 text-[20px] uppercase '>This is With tailwind Css</h5>
      </div>
      <div className='max-w-xlg mx-auto'>
        <div className='flex justify-end my-6'>
          <input type="text" name='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className=' mr-10 w-[350px] border rounded-md opacity-0.5 p-3 border-black' />

        </div>

        <div className='grid grid-cols-4 gap-5'>
          {!isLoaded ? (
            <div className="col-span-4 flex flex-col items-center justify-center ">
              <LineWave
                visible={true}
                height="500"
                width="100"
                color="#57696D"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor="#1C2B36"
                middleLineColor="#A18F7A"
                lastLineColor="#57696D"
              />

            </div>
          ) : null}

          {isLoaded && (filteredItems.length > 0 ? (

            filteredItems.map((item) => (
              <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow" key={item.id}>

                <a href="#">
                  <img className="rounded-t-lg max-w-[150px] mx-auto mt-5" src={item.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
                      <span dangerouslySetInnerHTML={{ __html: highlightMatch(item.category, searchQuery) }} />
                    </h5>
                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
                      <span dangerouslySetInnerHTML={{ __html: highlightMatch(item.title, searchQuery) }} />
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 ">
                    <span dangerouslySetInnerHTML={{ __html: highlightMatch(item.description.substring(0, 100), searchQuery) }} />
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className=" mt-52 col-span-4 flex flex-col items-center justify-center">
              <svg className="w-12 h-12 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m0 0l-4-4m4 4l4-4"></path>
              </svg>
              <p className="text-lg font-medium text-gray-500 mb-2">Hmm... We couldn't find what you're looking for.</p>
              <p className="text-sm text-gray-500">Try adjusting your search query.</p>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default App
