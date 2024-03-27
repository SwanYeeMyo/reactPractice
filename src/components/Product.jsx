import { useEffect, useState } from "react";

import axios from "axios";
import { LineWave } from "react-loader-spinner";
import Products from "./Products";
import NotFound from "./NotFound";

function Product() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setItems(res.data);
      console.log(res.data);
      setTimeout(() => {
        setIsLoaded(true);
      });
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
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      (match) =>
        `<span style="background-color: #A18F7A; color: white">${match}</span>`
    );
  };

  const totalFilteredItems = filteredItems.length;
  return (
    <>
      <div className="text-center">
        <h5 className="p-3 text-[20px] uppercase ">
          This is With tailwind Css
        </h5>
      </div>
      <div className="max-w-xlg mx-auto">
        <div className="flex justify-end my-6">
          <input
            type="text"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" mr-10 w-[350px] border rounded-md opacity-0.5 p-3 border-black"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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

          {isLoaded &&
            (filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <Products
                  item={item}
                  highlightMatch={highlightMatch}
                  searchQuery={searchQuery}
                />
              ))
            ) : (
              <NotFound />
            ))}
        </div>
      </div>
    </>
  );
}

export default Product;
