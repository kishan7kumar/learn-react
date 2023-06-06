import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(userContext);
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
    <div className="p-5">
      <div className="flex items-center">
        <div>
          <input
            className="rounded-md p-2 mr-3 border hover:border-gray-400"
            type="text"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "")
                setListOfRestaurants(originalRestaurants);
            }}
          />
          <button
            className="bg-green-600 p-2 rounded-md text-white hover:bg-green-800"
            onClick={() => {
              console.log(searchText);
              setListOfRestaurants(originalRestaurants);
              const filteredList = filterData(searchText, listOfRestaurants);
              setListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
          className="bg-purple-600 p-2 rounded-md ml-3 text-white hover:bg-purple-800"
        >
          Top Rated
        </button>
        <input
          className="ml-4 p-2 border border-gray-400 rounded-lg"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          className="ml-4 p-2 border border-gray-400 rounded-lg"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {listOfRestaurants.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};
export default Body;
