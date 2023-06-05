import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();
  const client = axios.create({
    baseURL:
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0630231&lng=73.0700421&page_type=DESKTOP_WEB_LISTING",
  });

  // NOTE: Here the empty array in dependency array ensures that the useEffect is called only on the initial render and if we do not add it then it will be called after every render. Also if you want to call useEffect for multiple state variable then you have to use multiple useEffect.
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await client.get("");
      setListOfRestaurants(resp.data.data.cards[2].data.data.cards);
      setOriginalRestaurants(resp.data.data.cards[2].data.data.cards);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOnline) {
    return <p>You are offline</p>;
  }
  return originalRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "")
                setListOfRestaurants(originalRestaurants);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              setListOfRestaurants(originalRestaurants);
              const filteredList = filterData(searchText, listOfRestaurants);
              setListOfRestaurants(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
          className="filter-btn"
        >
          Show Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};
export default Body;
