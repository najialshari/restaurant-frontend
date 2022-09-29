import React from "react";
import "./menu.css";

function Menu() {
  const categories = ["Breackfast", "Dinner", "Launch", "Meat", "Drinks"];
  // const getCategory =()=>{
  console.log(categories, "category");

  // }
  return (
    <div className="categories">
      <ul>
        {categories?.map((category) => (
          <li>
            <a href={`#${category}`}>{category}</a>
          </li>
        ))}
      </ul>
      <div className="categories-items">
        <h2 id="Dinner">Dinenr:</h2>
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

        <h2 id="Breackfast"> Breackfast</h2>
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
        </p>
      </div>
    </div>
  );
}

export default Menu;
