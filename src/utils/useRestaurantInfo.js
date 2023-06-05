import { useEffect, useState } from "react";
import axios from "axios";
import { CDN_MENU_URL } from "./constant";

// NOTE: This is a custom hook to fetch particular restaurant list
function useRestaurantInfo(resId) {
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const client = axios.create({
    baseURL: CDN_MENU_URL,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await client.get(`${resId}&submitAction=ENTER`);
      setRestaurantInfo(resp.data.data.cards[0].card.card.info);
    } catch (error) {
      console.log(error);
    }
  };
  return restaurantInfo;
}

export default useRestaurantInfo;
