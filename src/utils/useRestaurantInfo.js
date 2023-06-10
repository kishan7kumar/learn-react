import { useEffect, useState } from "react";
import axios from "axios";
import { CDN_MENU_URL } from "./constant";

// NOTE: This is a custom hook to fetch particular restaurant list
function useRestaurantInfo(resId) {
  const [restaurantInfo, setRestaurantInfo] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `${CDN_MENU_URL}/${resId}&submitAction=ENTER`
      );
      setRestaurantInfo(resp.data.data.cards[0].card.card.info);
    } catch (error) {
      console.log(error);
    }
  };
  return restaurantInfo;
}

export default useRestaurantInfo;
