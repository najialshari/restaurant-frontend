import React from 'react';
import './categoryMeal.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { addToCart } from '../../../Reducers/Actions/cartActions';
// import { removecategoryMeal } from '../../../Reducers/Actions/cartActions';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

function CategoryMeal() {
  // const insideCart = useSelector(state => state.cartReducer.data);
  const dispatch = useDispatch();
  // console.log(insideCart);
  let { id } = useParams();
  const [categoryMeal, setCategoryMeal] = useState()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    // fetch(`http://localhost:8000/api/v1/menus/categoryMeals/${id}`)
      .then((response) => response.json())
      // .then ((datajosn) => console.log(datajosn))   
      .then((datajosn) => setCategoryMeal(datajosn))
      .catch((err) => console.error(err))
  }, [id])

  const discount = 10;
  const PriceAfterDiscount=(price,discount=10)=>{ 
    const newPrice=(price-(price*(discount/100)));
    return parseFloat(newPrice).toFixed(2)
  }
  
  return (
    <div className='SingleCard'>
      {/* <button className='backButton'> */}
        <Link className='backButtonLink' to={'/'}  > Back To Menu</Link>
        {/* </button> */}
      <div className='oneMealCard'>

        {categoryMeal?.id ? (

          <div key={categoryMeal.id} className='pro'>

            <div className='mealTop'>
              <img className='mealImage' alt="" src={categoryMeal.image} />
              <br />
              <h3 className='description'>
                {categoryMeal.description}
              </h3>

            </div>
            <div>
              <div className='price'><>
                <h2 >{categoryMeal.title}</h2>{" "} 
                {discount>0?
                <p ><span className='oldPrice'>{categoryMeal.price}  ${" "}</span> <span> {" "}<b> {PriceAfterDiscount(categoryMeal.price)} $</b></span></p>:
                <p>{PriceAfterDiscount(categoryMeal.price)} $</p>
                
                }
                </>
              </div>
              {
                // insideCart?.find((item) => item === categoryMeal.id) ?
                true?
                <>
                  <button className='removeButton' 
                  // onClick={() => dispatch(removecategoryMeal(categoryMeal.id))}
                  >Remove</button>
                  
                  <button className='addButton' 
                  // onClick={() => dispatch(addToCart(categoryMeal.id))}
                  > Add To The Cart</button>
                  </>:null
              }
            </div>
          </div>
        ) : 'No Details'}
      </div>
    </div>
  )
}

export default CategoryMeal;
