# 🧩 MetaMosaic

> A simple and responsive React component to create a mosaic grid of images — with background image, custom styles, and click dialog support.

---

## 🚀 Installation

```bash
npm install meta-mosaic
# or
yarn add meta-mosaic
```

Then import it in your project:

```jsx
import { MetaMosaic } from "meta-mosaic";
import "meta-mosaic/dist/meta-mosaic.css";
```

---

## ⚡ Quick Example

```jsx
import React from "react";
import { MetaMosaic } from "meta-mosaic";
import "meta-mosaic/dist/meta-mosaic.css";

const images = Array.from({ length: 400 }, (_, i) => ({
  id: i + 1,
  link: `https://picsum.photos/id/${101 + i}/400/300`,
  title: `Image ${i + 1}`,
}));

const bgImage = "https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_570xN.4009560313_q4ps.jpg";

function App() {
  return (
    <MetaMosaic
      images={images}
      size={20}
      bgImageUrl={bgImage}
      gridWrapperClassName="custom-mosaic-wrapper"
      gridWrapperStyle={{ boxShadow: "0 0 1em rgba(255,255,255,0.5)" }}
      bgPosition="center 8px"
      width={{ xs: 350, md: 500, lg: 650 }}
      height={{ xs: 350, md: 500, lg: 650 }}
      setDialog={(img) => (
        <div>
          <h2>{img.id}</h2>
          <h6 style={{ color: "red" }}>{img.title}</h6>
          <img src={img.link} alt={img.title} />
        </div>
      )}
    />
  );
}

export default App;
```

---

## 🧩 Props Guide

| Prop                     | Type       | Description                                                                        |
| ------------------------ | ---------- | ---------------------------------------------------------------------------------- |
| **images**               | `Array`    | List of images to display in mosaic. Each image should have `{ id, link, title }`. |
| **size**                 | `number`   | Defines number of rows and columns. Example: `size={4}` → 4x4 grid.                |
| **bgImageUrl**           | `string`   | Background image for the mosaic layout.                                            |
| **gridWrapperClassName** | `string`   | Add your custom class to the grid wrapper.                                         |
| **gridWrapperStyle**     | `object`   | Inline CSS styles for grid wrapper.                                                |
| **bgPosition**           | `string`   | Adjust the background image position (e.g. `"center 8px"`).                        |
| **width**                | `object`   | Responsive width based on breakpoints: `{ xs, md, lg }`.                           |
| **height**               | `object`   | Responsive height based on breakpoints: `{ xs, md, lg }`.                          |
| **setDialog**            | `function` | Custom component that opens when clicking a mosaic cell.                           |

---

## 💡 Example: setDialog

```jsx
setDialog={(img) => (
  <div>
    <h2>{img.id}</h2>
    <h6 style={{ color: 'red' }}>{img.title}</h6>
    <img src={img.link} alt={img.title} />
  </div>
)}
```

This function runs when a user clicks on a cell. You can render any custom component here.

---

## 🪄 Responsive Behavior

You can set different `width` and `height` values for small, medium, and large screens:

```jsx
width={{ xs: 350, md: 500, lg: 650 }}
height={{ xs: 350, md: 500, lg: 650 }}
```

The component adjusts automatically based on screen size.

---

## 📦 Changelog

### v1.0.11 — (2025-11-09)

#### ✨ New Features

* Added all props: `images`, `size`, `bgImageUrl`, `gridWrapperClassName`, `gridWrapperStyle`, `bgPosition`, `width`, `height`, and `setDialog`.
* Fully responsive and customizable grid.
* Clickable mosaic cells with custom dialog support.

---

## 🧠 Tips

* Use high-quality images for better visual effect.
* The `bgImageUrl` should have similar aspect ratio as your grid.
* Combine `gridWrapperStyle` with `className` for fine-tuned control.

---

## 📜 License

MIT © [MetaMosaic](https://www.npmjs.com/package/meta-mosaic)
