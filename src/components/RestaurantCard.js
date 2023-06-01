import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = props.resData.data;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} className="card-image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>${costForTwo / 100} For Two</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
