import React from 'react';
import './categoryMeal.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addItem, deleteItem } from '../../redux/actions/cart';
import { getCategoryMealsByIdAction } from '../../redux/actions/menu';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

function CategoryMeal() {
  let { id } = useParams();
  
  const [categoryMeal, setCategoryMeal] = useState()
  const dispatch = useDispatch();
  
  const getCategoryMealsById = async () => {
    await dispatch(getCategoryMealsByIdAction(id))
      .catch((err) => {
        console.error("getCategoryMealsByIdAction", err)
      })
  }
  useEffect(() => {
    getCategoryMealsById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const tempCategoryMeal = useSelector(state => state?.menu?.categoryMealsById)
  
  useEffect(() => {
    setCategoryMeal(tempCategoryMeal);
  }, [tempCategoryMeal]);
  


  const PriceAfterDiscount = (price, discount = 10) => {
    const newPrice = (price - (price * (discount / 100)));
    return parseFloat(newPrice).toFixed(2)
  }

  return (
    <div className='SingleCard'>
      <Link className='backButtonLink' to={'/'}  > Back To Menu</Link>
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
                <h2 >{categoryMeal?.Meal?.name}</h2>
                <label>{categoryMeal?.MealType?.name}</label>
                {categoryMeal.discount > 0 ?
                  <p ><span className='oldPrice'>{categoryMeal.price}  ${" "}</span> <span> {" "}<b> {PriceAfterDiscount(categoryMeal.price, categoryMeal.discount)} $</b></span></p> :
                  <p>{categoryMeal.price}  $</p>

                }
              </>
              </div>
              {
                true ?
                  <>
                    <button className='removeButton'
                      onClick={() => dispatch(deleteItem(categoryMeal.id))}
                    >Remove</button>

                    <button className='addButton'
                      onClick={() => dispatch(addItem(1, categoryMeal.id, 1, categoryMeal.price, categoryMeal.price, 1, 1,
                        categoryMeal.image, categoryMeal?.Meal?.name, categoryMeal?.MealType?.name))}
                    > Add To The Cart</button>
                  </> : null
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
