import React from "react";
import "./App.css";
import Mosaic from "./components/Mosaic";

const ROWS = 20;

const images = Array.from({ length: 400 }, (_, i) => ({
  id: i + 1,
  link: `https://picsum.photos/id/${101 + i}/400/300`,
}));

const SampleImage =
  "https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_570xN.4009560313_q4ps.jpg";

const App = () => {
  return (
    <div>
      <Mosaic
        images={images}
        size={ROWS}
        bgImageUrl={SampleImage}
        // Grid Wrapper custom classNames
        gridWrapperClassName="custom-mosaic-grid-wrapper"
        // Grid Wrapper custom style
        gridWrapperStyle={{
          boxShadow: "0 0 1em rgba(255,255,255,0.5)",
        }}
        bgPosition="center 8px"
        width={{xs: 350, md: 500, lg: 650}}
        height={{xs: 350, md: 500, lg: 650}}
      />
    </div>
  );
};

export default App;
