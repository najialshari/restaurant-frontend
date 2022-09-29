import React from "react";
import "./menu.css";
import { Link } from 'react-router-dom' ;
import { useSelector ,useDispatch } from "react-redux";
import { useEffect} from "react";
import { motion } from 'framer-motion';
import { getCategoryMealsAction } from "../../redux/actions/menu";
import { getCategoriesAction } from "../../redux/actions/categories";

function Menu() {
  const categoryTypes = ["Breackfast",
   "Dinner",
   "Launch",
   "Meat",
   "Drinks"];
  // const categoryTypes = [{name:"Breackfast",description:""},
  // {name: "Dinner",description:""},
  // {name: "Launch",description:""},
  // {name: "Meat",description:""},
  // {name: "Drinks",description:""}];

  // const dispatch = useDispatch();
  // const getCategories = async () => {
  //   await dispatch(getCategoriesAction())
  //   .then(()=>{
  //     console.log("getCategory", "success")
  //   }).catch((err)=> {
  //     console.error("getCategory", err)
  //   })
  // }
  // const getCategoryMeals = async () => {
  //   await dispatch(getCategoryMealsAction())
  //   .then(()=>{
  //     console.log("getCategoryMeals", "success")
  //   }).catch((err)=> {
  //     console.error("getCategoryMeals", err)
  //   })
  // }
  // useEffect(() => {
  //   getCategories();
  //   // getCategoryMeals()
  // }, []);

  // const categoriesDb = useSelector(state => state.categories.categories)
  // console.log("categoriesDb", categoriesDb)


  
  const categories = [
    {id:"0",category:"Breackfast",price:"105.95",discount:"10",description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",meal:"Fishes",type:"person",image:"https://pngimage.net/wp-content/uploads/2018/06/mariscada-png-2.png",rating:{rate:3.9,"count":120}},
    {id:"1",category:"Dinner",price:"120.85",discount:"0",description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",meal:"Fishes",type:"person",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aO8yNH-p1gxE2IXCggBXCJrk16GsLkzY8qsK04B4ogdlQoK387oj55MCzuOcYEm5D6Q&usqp=CAU",rating:{rate:3.9,"count":120}},
    {id:"2",category:"Launch",price:"50",discount:"0",description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",meal:"eggs",type:"person",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8p04VZEuStLPP5qnNFr0MfbOGSGfDxS4LyNbmxdQHdHTNKLsK2xoORajNBny7mu06yc&usqp=CAU",rating:{rate:3.9,"count":120}},
    {id:"3",category:"Drinks",price:"80.9",discount:"20",description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",meal:"eggs",type:"person",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquz_9qGbLANmt1hXrRSVW7pzjqD5j0v7LFND5-Zvepcif-KgMBq5ZiS_CjhNxO88OaBI&usqp=CAU",rating:{rate:3.9,"count":120}},
  
  ]
  // useEffect(() => {
  //   getCategory();
  //   getCategoryMeals()
  // }, []);
  
  const PriceAfterDiscount=(price,discount)=>{ 
    const newPrice=(price-(price*(discount/100)));
    return parseFloat(newPrice).toFixed(2)
  }
  return (
    <div className="categories">
      <ul>
        {categories?.map((item) => (
          <li key={item.id}>
            <a id="categoriesType"href={`#${item.category}`}>{item.category}</a>
          </li>
        ))}
      </ul>

      <div className="categories-container">
        {categories?.map((item) => (
          <div className="category-container" key={item.id}>
            <h2 id={`${item.category}`}>{item.category}:</h2>
            
            <div className="category-description" >
              <p>
                Italian Cuisines Italian cuisines is one of the most popular
                cuisines around the world. Moreover, it is widely available in
                our India too. Dishes like pizza, pasta, and lasagna own a
                special place in the hearts’ of people. Furthermore, restaurants
                like Dominos and Pizza hut are available all over the country.
                People of every age love the taste of these Italian dishes.
                Also, Italian dishes are famous for their’ cheese filling. Every
                dish is load with cheese. Which enhances the taste of these
                Italian dishes.n
              </p>
            </div>
            <div className="category-cards">
            {
          categories && (categories.map(itemType => categoryTypes.includes(itemType.category) && (
           
            <motion.div key={itemType.id} className='mealsCard'
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link to={`/meals/${itemType.id}`}
                            className='linkToMeal'>
                            <img className='mealsImage' alt="" src={itemType.image} />
                            <h2 className='mealName'>{itemType.meal}</h2>
                            {/* <p className='mealsprice'>
                                {" "} {itemType.price}"$"
                            </p> */}
                            {itemType.discount>0?
                <p className='mealsprice' ><span className='oldPrice'>{itemType.price}  ${" "}</span> <span> {" "}
                {/* <b> {PriceAfterDiscount(itemType.price)} $</b></span></p>: */}
                <b> {parseFloat(itemType.price-(itemType.price*(itemType.discount/100))).toFixed(2)} $</b></span></p>:
                <p className='mealsprice'><b>{itemType.price} $</b></p>
                
                }
                            {/* <br /> */}
                            <p className='moreDetailsButton'>More detials</p>
                        </Link>
                    </motion.div>
          )))}
          
          </div>
          </div>
        ))}
        {/* <h2 id="Breackfast"> Breackfast</h2>
        <p>
          Italian Cuisines Italian cuisines is one of the most popular cuisines
          around the world. Moreover, it is widely available in our India too.
          Dishes like pizza, pasta, and lasagna own a special place in the
          hearts’ of people. Furthermore, restaurants like Dominos and Pizza hut
          are available all over the country. People of every age love the taste
          of these Italian dishes. Also, Italian dishes are famous for their’
          cheese filling. Every dish is load with cheese. Which enhances the
          taste of these Italian dishes.n
        </p>
        <h2 id="Launch"> Launch:</h2>
        <p>
          Italian Cuisines Italian cuisines is one of the most popular cuisines
          around the world. Moreover, it is widely available in our India too.
          Dishes like pizza, pasta, and lasagna own a special place in the
          hearts’ of people. Furthermore, restaurants like Dominos and Pizza hut
          are available all over the country. People of every age love the taste
          of these Italian dishes. Also, Italian dishes are famous for their’
          cheese filling. Every dish is load with cheese. Which enhances the
          taste of these Italian dishes.n
        </p>
        <h2 id="Meat"> Meat:</h2>
        <p>
          Italian Cuisines Italian cuisines is one of the most popular cuisines
          around the world. Moreover, it is widely available in our India too.
          Dishes like pizza, pasta, and lasagna own a special place in the
          hearts’ of people. Furthermore, restaurants like Dominos and Pizza hut
          are available all over the country. People of every age love the taste
          of these Italian dishes. Also, Italian dishes are famous for their’
          cheese filling. Every dish is load with cheese. Which enhances the
          taste of these Italian dishes.n
        </p>
        <h2 id="Drinks"> Drinks:</h2>
        <p>
          Italian Cuisines Italian cuisines is one of the most popular cuisines
          around the world. Moreover, it is widely available in our India too.
          Dishes like pizza, pasta, and lasagna own a special place in the
          hearts’ of people. Furthermore, restaurants like Dominos and Pizza hut
          are available all over the country. People of every age love the taste
          of these Italian dishes. Also, Italian dishes are famous for their’
          cheese filling. Every dish is load with cheese. Which enhances the
          taste of these Italian dishes.n
        </p> */}
      </div>
    </div>
  );
}

export default Menu;
