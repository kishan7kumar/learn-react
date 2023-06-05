import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurantInfo(id);
  const restaurantMenu = useRestaurantMenu(id);
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
