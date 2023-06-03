import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CDN_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const client = axios.create({
    baseURL:
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0630231&lng=73.0700421&restaurantId=",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await client.get(`${id}&submitAction=ENTER`);
      setRestaurantInfo(resp.data.data.cards[0].card.card.info);
      const MenuList =
        resp.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card
          .card.itemCards;
      const filteredMenuList = [];
      MenuList.forEach((element) => {
        filteredMenuList.push(element.card.info);
      });
      setRestaurantMenu(filteredMenuList);
      console.log(filteredMenuList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>{restaurantInfo?.name}</h1>
      <img height={300} src={CDN_URL + restaurantInfo?.cloudinaryImageId} />
      <h2>{restaurantInfo?.city}</h2>
      <h2>{restaurantInfo?.avgRating}</h2>
      <h2>{restaurantInfo?.costForTwoMsg}</h2>
      <h1>Menu</h1>
      <ul>
        {restaurantMenu?.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;
