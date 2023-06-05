import { useEffect, useState } from "react";
import axios from "axios";
import { CDN_MENU_URL } from "./constant";

// NOTE: This is a custom hook to fetch restaurant menu items
function useRestaurantMenu(resId) {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const client = axios.create({
    baseURL: CDN_MENU_URL,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await client.get(`${resId}&submitAction=ENTER`);
      const MenuList =
        resp.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card
          .card.itemCards;
      const filteredMenuList = [];
      MenuList.forEach((element) => {
        filteredMenuList.push(element.card.info);
      });
      setRestaurantMenu(filteredMenuList);
    } catch (error) {
      console.log(error);
    }
  };
  return restaurantMenu;
}

export default useRestaurantMenu;
