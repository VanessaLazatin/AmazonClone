import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://lookcharms.com/wp-content/uploads/2022/05/VRG_ILLO_5183_SpringGiftGuide.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12345101"
          title="Apple Air Tags"
          price={29.99}
          rating={4}
          image="https://media.gq-magazine.co.uk/photos/615c2d62158cad41ab95aa11/master/w_2580%2Cc_limit/04102021_TG_02.jpg"
        />

        <Product
          id="12345102"
          title="UV Phone Sanitizer Box"
          price={39.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/519tCdmehIL.jpg"
        />

        <Product
          id="12345103"
          title="Google Nest Hub (2nd Generation)"
          price={89.99}
          rating={4}
          image="https://media.gq-magazine.co.uk/photos/6246d17aee70fc9528be555e/master/w_2580%2Cc_limit/01042022_O_03.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345104"
          title="Nintendo Switch OLED"
          price={309.99}
          rating={4}
          image="https://media.gq-magazine.co.uk/photos/615c2d6cdbaed025baa6e94e/master/w_2580%2Cc_limit/04102021_TG_17.jpg"
        />

        <Product
          id="12345105"
          title="Anker Nebula Capsule"
          price={399.99}
          rating={3}
          image="https://media.s-bol.com/YEvZWwrG5GEW/MwZ4nAA/855x1200.jpg"
        />

        <Product
          id="12345106"
          title="GoPro Hero10 Black"
          price={429.99}
          rating={5}
          image="https://media.gq-magazine.co.uk/photos/61bb207db37c3f8bda7b929b/master/w_2580%2Cc_limit/Tech%2520gifts_0005_GoPro.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345107"
          title="TheraGun Pro"
          price={549.99}
          rating={3}
          image="https://media.gq-magazine.co.uk/photos/5f845403e71fda43834cae9b/master/w_2580%2Cc_limit/20201012-tech-08.jpg"
        />

        <Product
          id="12345108"
          title="Microsoft Surface Laptop 4"
          price={699.99}
          rating={5}
          image="https://media.gq-magazine.co.uk/photos/619f738d0b6c8042d3154213/master/w_2580%2Cc_limit/Tech%2520gifts_0003_Surface%2520laptop%25204.jpg"
        />

        <Product
          id="12345109"
          title="Apple iPhone 13"
          price={799.99}
          rating={4}
          image="https://media.gq-magazine.co.uk/photos/61bb207c4784a4b9a352be42/master/w_2580%2Cc_limit/Tech%2520gifts_0003_iPhone%252013.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345110"
          title="Apple Ipad Pro 12.9-Inch "
          price={999.99}
          rating={5}
          image="https://media.gq-magazine.co.uk/photos/615c2f7d1bb1b0e0fa52c0db/master/w_2580%2Cc_limit/04102021_TG_19.jpg"
        />

        <Product
          id="12345111"
          title="DJI Mavic 3"
          price={1879.99}
          rating={3}
          image="https://media.gq-magazine.co.uk/photos/619f738ce49c52e5d21f7fb9/master/w_2580%2Cc_limit/Tech%2520gifts_0001_MAVIC.jpg"
        />

        <Product
          id="12345112"
          title="Peloton Bike+"
          price={2299.99}
          rating={5}
          image="https://media.gq-magazine.co.uk/photos/615d77da1bb1b0e0fa52c0f6/master/w_2580%2Cc_limit/Peloton-Bike_4.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
