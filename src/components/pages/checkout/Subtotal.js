import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../../../context/reducer";
import { useStateValue } from "../../../context/StateProvider";
import Button from "@mui/material/Button";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button
        variant="outline"
        color="warning"
        onClick={(e) => navigate("/payment")}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
}

export default Subtotal;
