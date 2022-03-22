import Button from "@mui/material/Button";
import { useStateValue } from "../../../context/StateProvider";
import "./product.css";
import useState from "react";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addTo = () => {};

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  return (
    <>
      <div className="product">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="" />
        <Button onClick={addToBasket} variant="outline" color="warning">
          Add to basket
        </Button>
      </div>
    </>
  );
}

export default Product;
