# 🧩 meta-mosaic

A responsive, customizable image mosaic component for React. Supports breakpoints, overlays, custom styling, and custom modals for image previews.

![Demo Mosaic](https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_570xN.4009560313_q4ps.jpg)

---

## 🚀 Installation

```bash
npm install meta-mosaic
# or
yarn add meta-mosaic
⚡ Quick Usage
tsx
Copy
Edit
import React from "react";
import Mosaic from "meta-mosaic";

const images = Array.from({ length: 400 }, (_, i) => ({
  id: i + 1,
  link: `https://picsum.photos/id/${101 + i}/400/300`,
}));

const App = () => {
  return (
    <Mosaic
      images={images}
      size={20}
      bgImageUrl="https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_570xN.4009560313_q4ps.jpg"
      gridWrapperClassName="custom-mosaic-grid-wrapper"
      gridWrapperStyle={{ boxShadow: "0 0 1em rgba(255,255,255,0.5)" }}
      bgPosition="center 8px"
      width={{ xs: 350, md: 500, lg: 650 }}
      height={{ xs: 350, md: 500, lg: 650 }}
      setDialog={(img) => (
        <div>
          <h2>{img.id}</h2>
          <img src={img.link} alt={`Image ${img.id}`} />
        </div>
      )}
    />
  );
};
🧩 Props
Prop	Type	Description
images	Array<{ id: number, link: string }>	List of images to populate the mosaic
size	number	Grid size (e.g., number of rows)
bgImageUrl	string	URL of the main background image
bgPosition	string	CSS background-position value
width	{ xs: number, md: number, lg: number }	Responsive widths
height	{ xs: number, md: number, lg: number }	Responsive heights
gridWrapperClassName	string	Custom class for the mosaic wrapper
gridWrapperStyle	React.CSSProperties	Inline styles for the wrapper
setDialog	(img) => JSX.Element	Function to render custom modal/dialog content

📐 Responsive Layout
Pass breakpoints to width and height:

js
Copy
Edit
width={{ xs: 320, md: 600, lg: 900 }}
height={{ xs: 320, md: 600, lg: 900 }}
🪄 Custom Dialog
Use the setDialog prop to render custom components on image click:

tsx
Copy
Edit
setDialog={(img) => (
  <div>
    <h2>{img.id}</h2>
    <img src={img.link} alt={`Image ${img.id}`} />
  </div>
)}
