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
      <div className="w-full p-3 border h-full rounded-lg flex flex-col bg-white hover:border-gray-400 hover:shadow-lg">
        <img src={CDN_URL + cloudinaryImageId} className="h-40 w-full" />
        <h3 className="font-medium text-lg mt-3">{name}</h3>
        <h4 className="font-light text-gray-500 mb-3 text-xs">
          {cuisines.join(", ")}
        </h4>

        <div className="flex mt-auto justify-between items-center">
          <h4 className="bg-green-500 text-sm text-white font-semibold inline-block px-3 rounded-lg">
            {avgRating}
          </h4>
          <h4 className="text-sm text-gray-600">${costForTwo / 100} For Two</h4>
          <h4 className="text-sm  text-gray-600">{deliveryTime} Mins</h4>
        </div>
      </div>
    </Link>
  );
};
export default RestaurantCard;
