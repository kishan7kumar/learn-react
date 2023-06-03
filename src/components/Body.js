import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import axios from "axios";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const client = axios.create({
    baseURL:
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0630231&lng=73.0700421&page_type=DESKTOP_WEB_LISTING",
  });

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
              const filteredList = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
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
