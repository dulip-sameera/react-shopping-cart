import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useHover from "../hooks/useHover";
import { addToCart } from "../store/features/cart.slice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const [priceHover, priceHoverProps] = useHover();

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        imgUrl: item.imgURL,
      })
    );
  };

  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg hover:scale-105 duration-300">
      <Link to={`/store/${item.id}`}>
        <div className=" w-full h-3/4 relative">
          <div className="absolute top-0 left-0 w-full h-full hover:bg-customBlack opacity-50"></div>
          <img className="w-full h-full" src={item.imgURL} alt={item.name} />
        </div>
      </Link>

      <div className="px-6 py-4 text-customCyan bg-customDarkGrey flex items-center justify-between">
        <Link to={`/store/${item.id}`}>
          <div className="text-customDarkCyan font-bold pr-10 h-full">
            {item.name}
          </div>
        </Link>
        <div
          className="text-sm text-customDarkCyan bg-customBlack p-2 rounded-md w-20 flex items-center justify-center font-bold hover:cursor-pointer hover:bg-cyan-800"
          onClick={addToCartHandler}
          {...priceHoverProps}
        >
          {priceHover ? "Add to Cart" : `$${item.price}`}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
