import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurantInfo(id);
  const restaurantMenu = useRestaurantMenu(id);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className=" p-5 flex flex-row h-full w-full ">
        <div>
          <h1 className="text-2xl font-semibold text-orange-600">
            Restaurant: {restaurantInfo?.name}
          </h1>
          <div className="flex justify-center mt-3">
            <img
              className="h-[400px]"
              src={CDN_URL + restaurantInfo?.cloudinaryImageId}
            />
          </div>

          <h2 className="mt-3">City: {restaurantInfo?.city}</h2>
          <h2 className="mt-2 ">Stars: {restaurantInfo?.avgRating}</h2>
          <h2>{restaurantInfo?.costForTwoMsg}</h2>
        </div>

        <div className="ml-10 h-full flex flex-col grow">
          <h1 className="text-2xl text-purple-600 font-semibold mb-4">Menu</h1>
          <div className="grow overflow-y-auto min-h-0">
            <ul>
              {restaurantMenu?.map((menu) => (
                <li key={menu.id}>
                  <div className="inline-block mb-2">{menu.name}</div>
                  <button
                    className="border text-sm border-green-600 text-black rounded-lg hover:bg-green-600 hover:text-white px-2 ml-3"
                    onClick={() => handleAddItem(menu)}
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
