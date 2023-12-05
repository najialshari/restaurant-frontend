import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseCount,
  increaseCount,
  deleteAll,
  deleteItem,
} from "../../redux/actions/cart";
import { orderAction, orderClean } from "../../redux/actions/order";
import { useEffect } from "react";

const Cart = () => {
  const itemsState = useSelector((state) => state.cart);
  const orderState = useSelector((state) => state.order);
  const cartDispatch = useDispatch();
  const navigate = useNavigate();

  let mySum = 0;
  for (let dummy of itemsState) mySum += dummy.price * dummy.count;

  const handleDecrease = (itemID) => {
    cartDispatch(decreaseCount(itemID));
  };
  const handleIncrease = (itemID) => {
    cartDispatch(increaseCount(itemID));
  };
  const handleOrder = async () => {
    const data = {
      totalPrice: mySum,
      userId: "",
      addressId: "",
      tableUUID: "",
      items: itemsState,
    };
    cartDispatch(orderAction(data));
  };
  useEffect(() => {
    if (orderState.success) {
      console.log("zzzzzzzzz", orderState.success);
      cartDispatch(orderClean());
      cartDispatch(deleteAll());
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderState.success]);

  return (
    <div className="cart">
      <h2>Your cart list total: {mySum.toFixed(2)}$</h2>
      <div className="topBar">
        <Link className="backButtonLink" to={"/"}>
          {" "}
          Back To Menu
        </Link>

        <button className="backButtonLink" onClick={handleOrder}>
          Send Order
        </button>
      </div>

      <div className="cartList">
        {itemsState.map((item, i) => (
          <div className="cartItems" key={i}>
            <div>
              <img src={item.image} width="100px" height="100px" alt="..." />
              {/* <li>{item.categoryMealsId}</li> */}
              <li>
                <strong>{item.name}</strong>
              </li>
              <label>{item.type}</label>
            </div>
            <div className="price">
              <div>
                Qty
                <div>
                  <button
                    disabled={item.count === 0 ? true : false}
                    onClick={() => handleDecrease(item.id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span className="countNumber">{item.count}</span>
                  <button onClick={() => handleIncrease(item.id)}> + </button>
                </div>
              </div>
              <div>
                <p>Price</p>
                <p>{item.price}$</p>
              </div>
              <div>
                <p>Sub(Total)</p>
                <strong>{(item.price * item.count).toFixed(2)}$</strong>
              </div>
              <div>
                <i
                  className="bi bi-trash"
                  onClick={() => cartDispatch(deleteItem(item.id))}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
