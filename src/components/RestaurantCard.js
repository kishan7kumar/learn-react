import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const {
    name,
    id,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = props.resData.data;
  return (
    <Link to={`restaurant/${id}`}>
      <div className="res-card">
        <img src={CDN_URL + cloudinaryImageId} className="card-image" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>${costForTwo / 100} For Two</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </Link>
  );
};
export default RestaurantCard;
