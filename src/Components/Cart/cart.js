import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseCount,
  increaseCount,
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
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material";
const Cart = () => {
  const itemsState = useSelector((state) => state.cart);
  const [qty, setQty] = useState(1);

  // const orderState = useSelector((state) => state.order);
  const cartDispatch = useDispatch();
  const navigate = useNavigate();

  let mySum = 0;
  for (let dummy of itemsState) mySum += dummy.price * dummy.count;

  // const handleDecrease = (itemID) => {
  //   cartDispatch(decreaseCount(itemID));
  // };
  // const handleIncrease = (itemID) => {
  //   cartDispatch(increaseCount(itemID));
  // };
  const handleOrder = async () => {
    const data = {
      totalPrice: mySum,
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

  const handleDecrease = () => {
    qty > 1 && setQty(qty - 1);
  };
  const handleAdd = () => {
    setQty(qty + 1);
  };
  return (
    <div className="cartContainer">
      <div className="cartLeftPart">
        {/* <div className="topBar">
          <Link className="backButtonLink" to={"/menu"}>
            {" "}
            Back To Menu
          </Link>

          <button className="backButtonLink" onClick={handleOrder}>
            Send Order
          </button>
        </div> */}

        <div className="cartItemContainer">
          {itemsState.length > 0 && (
            <>
              <Typography variant="h4" my={"1rem"}>
                Food Cart{" "}
              </Typography>
              <Divider />
            </>
          )}
          {itemsState.map((item, i) => (
            <>
              <div className="cartItem" key={i}>
                <div className="cartItemImg">
                  <img src={item.image} alt="..." />
                  {/* <li>{item.categoryMealsId}</li> */}
                </div>
                <div className="price">
                  <div className="priceLeft">
                    <div>
                      <Typography variant="h4">{item.name}</Typography>
                      <Typography variant="caption">{item.type}</Typography>
                    </div>
                    <div>
                      <Typography variant="h6">Quantity</Typography>
                      <div>
                        <IconButton
                          aria-label="decrease"
                          sx={{
                            width: 25,
                            height: 25,
                            backgroundColor: "#f7f7f7",
                          }}
                          onClick={handleDecrease}
                        >
                          <Remove />
                        </IconButton>
                        <InputBase
                          onChange={(e) =>
                            !isNaN(Number(e.target.value)) &&
                            Number(e.target.value) > 0 &&
                            setQty(Number(e.target.value))
                          }
                          value={qty}
                          inputProps={{
                            style: {
                              textAlign: "center",
                              width: "40px",
                              height: "20px",
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
                          onClick={handleAdd}
                        >
                          <Add />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Typography variant="h6">{item.price}$</Typography>
                  </div>

                  {/* <div>
                  <i
                    className="bi bi-trash"
                    onClick={() => cartDispatch(deleteItem(item.id))}
                  ></i>
                </div> */}
                </div>
              </div>
              <Divider sx={{margin: "1rem 0"}}/>
            </>
          ))}
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="h5">Subtotal: 555$</Typography>
          </Box>
        </div>
      </div>
      <div className="cartRightPart">
        <Button
          variant="contained"
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
            // height:"4rem",
          }}
        >
          <Typography variant="body" fontWeight={"500"}>
            Items (3)
          </Typography>
          <Typography variant="body" fontWeight={"500"}>
            {mySum.toFixed(2)} $
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
          <Typography variant="h6">{mySum.toFixed(2)} $</Typography>
        </Box>
      </div>
    </div>
  );
};
export default Cart;
