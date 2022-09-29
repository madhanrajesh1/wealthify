import Image from "next/image.js";
import React from "react";
import Wrappers from "../assets/wrappers/Recipe.js";
import fruit from "../assets/image/fruit.jpeg";
const Recipe = () => {
  return (
    <Wrappers>
      <div className="Nutrition">
        {/* <!-- <span className="cover1" style="background-image: url(/images/Path.png); "></span>
         <span className="cover1" style=" background-image: url(/images/Path1.png);"></span> --> */}
        <h3>Receipe</h3>
      </div>

      <div className="searchbar">
        <form method="get">
          <span className="searchrec"></span>
          <i className="fa fa-search fa-xl icon" aria-hidden="true"></i>
          <input type="search-bar" typeof="text" placeholder="Search" />
          <input className="button" type="submit" value="SEARCH "></input>
        </form>
      </div>

      {/* <!-- grid 3 * 4 --> */}

      <div className="fruitgrid">
        <div className="category">
          <p>SORT BY</p>
          <ul>
            {" "}
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            &nbsp; Name
          </ul>
          <hr className="line" />
          <ul>
            {" "}
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            &nbsp; Cuisines
          </ul>
          <hr className="line" />
          <ul>
            {" "}
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            &nbsp; Food Group
          </ul>
          <hr className="line" />
          <ul>
            {" "}
            <i className="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
            &nbsp; Ingredient
          </ul>
          <hr className="line" />
        </div>
        <div className="grid11">
          <Image src={fruit} />
          <p>imagename</p>
        </div>
        <div className="grid12">
          <Image src={fruit} />
          <p>imagename</p>
        </div>
        <div className="grid13">
          <Image src={fruit} />
          <p>imagename</p>
        </div>
      </div>

      {/* <!--grid copy--> */}
      <div className="fruitgrid">
        <div className="category"></div>
        <div className="grid11">
          <Image src={fruit} />
          <p>imagename</p>
        </div>
        <div className="grid12">
          <Image src={fruit} />
          <p>imagename</p>
        </div>
        <div className="grid13">
          <Image src={fruit} />

          <p>imagename</p>
        </div>
      </div>

      <div className="fruitgrid">
        <div className="category"></div>
        <div className="grid11">
          <Image src={fruit} />
          <p>imagename</p>
        </div>
        <div className="grid12">
          <Image src={fruit} />
          <p>imagename</p>
        </div>
        <div className="grid13">
          <Image src={fruit} />
          <p>imagename</p>
        </div>
      </div>
    </Wrappers>
  );
};

export default Recipe;
