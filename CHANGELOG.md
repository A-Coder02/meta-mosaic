# Changelog

## v1.0.11 — (2025-11-09)

### ✨ New Features
- **`images` prop** — Accepts an array of image objects (`{ id, link, title }`) to render inside the mosaic.
- **`size` prop** — Controls both the number of rows and columns.  
  Example: `size={4}` → 4x4 mosaic grid.
- **`bgImageUrl` prop** — Sets the background image for the mosaic layout.
- **`gridWrapperClassName` prop** — Allows adding a custom class to the grid wrapper for easier styling.
- **`gridWrapperStyle` prop** — Inline style object for customizing the grid wrapper appearance.
- **`bgPosition` prop** — Adjusts background image position (e.g., `"center 8px"`).
- **`width` & `height` props** — Responsive control based on breakpoints:  
  `{ xs, md, lg }` values automatically adjust mosaic size per viewport.
- **`setDialog` prop** — Accepts a custom component to render when a mosaic cell is clicked.  
  Example usage:
  ```jsx
  setDialog={(img) => (
    <div>
      <h2>{img.id}</h2>
      <h6 style={{ color: "red" }}>{img.title}</h6>
      <img src={img.link} alt={img.title} />
    </div>
  )}
