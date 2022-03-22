import "./CheckoutProduct.css";
import Button from "@mui/material/Button";
import { useStateValue } from "../../../context/StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

    console.log(basket);

    localStorage.setItem("basket", JSON.stringify(basket));
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price} amount:</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>

        {!hideButton && (
          <Button onClick={removeFromBasket} variant="outlined">
            Remove from basket
          </Button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
