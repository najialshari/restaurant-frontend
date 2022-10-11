import React from 'react';
import './categoryMeal.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { addToCart } from '../../../Reducers/Actions/cartActions';
// import { removecategoryMeal } from '../../../Reducers/Actions/cartActions';
import { getCategoryMealsByIdAction } from '../../redux/actions/menu';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

function CategoryMeal() {
  // const insideCart = useSelector(state => state.cartReducer.data);
  let { id } = useParams();
  console.log("id",id)
  const [categoryMeal, setCategoryMeal] = useState()
  const dispatch = useDispatch();
  const getCategoryMealsById = async () => {
    await dispatch(getCategoryMealsByIdAction(id))
    .then(()=>{
      console.log("getCategoryMealsByIdAction", "success")
    }).catch((err)=> {
      console.error("getCategoryMealsByIdAction", err)
    })
  }
  useEffect(() => {
    getCategoryMealsById();
  }, [id]);
  const tempCategoryMeal = useSelector(state => state?.menu?.categoryMealsById)
  useEffect(() => {
    setCategoryMeal(tempCategoryMeal);
  }, [tempCategoryMeal]);
  console.log("categoryMeal:",categoryMeal);
  

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
                <h2 >{categoryMeal?.MealType?.name}{" "}{categoryMeal?.Meal?.name}</h2>{" "} 
                {categoryMeal.discount>0?
                <p ><span className='oldPrice'>{categoryMeal.price}  ${" "}</span> <span> {" "}<b> {PriceAfterDiscount(categoryMeal.price,categoryMeal.discount)} $</b></span></p>:
                <p>{categoryMeal.price}  $</p>
                
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
                  // onClick={() => dispatch(addToCart(categoryMeal.id,qty))}
                  > Add To The Cart</button>
                  </>:null
              }
            </div>
          </div>
        ) : <div className='noDetails'>
        'No Details'
        </div>}
      </div>
    </div>
  )
}

export default CategoryMeal;
