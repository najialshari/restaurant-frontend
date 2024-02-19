import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import {
  decreaseItem,
  increaseItem,
  deleteAll,
  deleteItem,
} from "../../redux/actions/cart";
import { orderAction, orderClean } from "../../redux/actions/order";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Link,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
  const itemsState = useSelector((state) => state.cart);

  const cartDispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = itemsState.reduce((n, {subTotal}) => n + subTotal, 0)
  const items = itemsState.reduce((n, {qty}) => n + qty, 0)

  const handleDecrease = (itemID, subtotal) => {
    cartDispatch(decreaseItem(itemID, subtotal));
  };
  const handleIncrease = (itemID, subtotal) => {
    cartDispatch(increaseItem(itemID, subtotal));
  };
  const handleOrder = async () => {
    const data = {
      totalPrice: subtotal,
      userId: "",
      addressId: "",
      tableUUID: "",
      items: itemsState,
    };
    cartDispatch(orderAction(data)).then(() => {
      cartDispatch(orderClean());
      cartDispatch(deleteAll());
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });
  };
  return (
    <div className="cartContainer">
      <div className="cartLeftPart">
        <>
          <Typography variant="h4" my={"1rem"}>
            Food Cart ({items})
          </Typography>
          <Divider />
        </>
        {itemsState.map((item, i) => (
          <div key={i}>
            <div className="cartItem">
              <div className="cartItemImg">
                <img src={item.image} alt="..." />
              </div>
              <div className="cartItemDetailsContainer">
                <div className="cartItemDetailsTopRow">
                  <div>
                    <Typography
                      variant="h5"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body">{item.type}</Typography>
                  </div>

                  {item.discount > 0 ? (
                    <div>
                      <Typography variant="body2" component={"span"} mr={"3px"}>
                        <s>{item.price}$</s>
                      </Typography>
                      <Typography
                        variant="h6"
                        component={"span"}
                        fontSize={"24px"}
                      >
                        {item.price - (item.price * item.discount) / 100}$
                      </Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography variant="h6" fontSize={"24px"}>
                        {item.price}$
                      </Typography>
                    </div>
                  )}
                </div>
                <div className="cartItemDetailsBottomRow">
                  <div>
                    <IconButton
                      aria-label="decrease"
                      sx={{
                        width: 25,
                        height: 25,
                        backgroundColor: "#f7f7f7",
                      }}
                      onClick={() => {
                        const itemNetPrice =
                          item.price - (item.price * item.discount) / 100;
                        item.qty > 1 &&
                          handleDecrease(item.categoryMealsId, itemNetPrice);
                      }}
                    >
                      <Remove />
                    </IconButton>
                    <InputBase
                      readOnly
                      value={item.qty}
                      inputProps={{
                        style: {
                          textAlign: "center",
                          width: "40px",
                          height: "15px",
                          border: "1px solid #e1e1e1",
                          borderRadius: "5px",
                          margin: "0 5px",
                          color: "black",
                        },
                      }}
                    />
                    <IconButton
                      aria-label="add"
                      sx={{
                        width: 25,
                        height: 25,
                        backgroundColor: "#f7f7f7",
                      }}
                      onClick={() => {
                        const itemNetPrice =
                          item.price - (item.price * item.discount) / 100;
                        handleIncrease(item.categoryMealsId, itemNetPrice);
                      }}
                    >
                      <Add />
                    </IconButton>
                  </div>
                  <div className="itemCardLinks">
                    <Link component="button" variant="body2" underline="none">
                      Share
                    </Link>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        height: "15px",
                        margin: { xs: "auto 5px", md: "auto 10px" },
                      }}
                    />
                    <Link component="button" variant="body2" underline="none">
                      Add to Fav
                    </Link>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        height: "15px",
                        margin: { xs: "auto 5px", md: "auto 10px" },
                      }}
                    />
                    <Link
                      component="button"
                      variant="body2"
                      underline="none"
                      onClick={() =>
                        cartDispatch(deleteItem(item.categoryMealsId))
                      }
                    >
                      Remove{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
          </div>
        ))}
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h5" m={"1rem"}>
            Subtotal: {subtotal.toFixed(2)} $
          </Typography>
        </Box>
      </div>
      <div className="cartRightPart">
        <Button
          variant="contained"
          onClick={()=>items > 0 && handleOrder()}
          sx={{
            backgroundColor: "#fb8b24",
            textTransform: "capitalize",
            width: "100%",
            "&:hover": {
              backgroundColor: "#ff5722",
            },
          }}
        >
          Checkout
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "50%",
          }}
        >
          <Typography variant="body" fontWeight={"500"}>
            Items ({items})
          </Typography>
          <Typography variant="body" fontWeight={"500"}>
            {subtotal.toFixed(2)} $
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "30%",
          }}
        >
          <Typography variant="h6">Subtotal</Typography>
          <Typography variant="h6">{subtotal.toFixed(2)} $</Typography>
        </Box>
      </div>
    </div>
  );
};
export default Cart;
