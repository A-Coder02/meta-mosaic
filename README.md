# 🧩 meta-mosaic

[![npm version](https://badge.fury.io/js/meta-mosaic.svg)](https://badge.fury.io/js/meta-mosaic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18%2B-blue)](https://reactjs.org/)

A modern, responsive, and highly customizable image mosaic component for React applications. Create stunning photo galleries with breakpoint support, custom overlays, and interactive modals.

![Demo Mosaic](https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_570xN.4009560313_q4ps.jpg)

## ✨ Features

- 🎨 **Fully Customizable** - Custom styling, overlays, and modal components
- 📱 **Responsive Design** - Built-in breakpoint support for all screen sizes
- ⚡ **Performance Optimized** - Efficient rendering with minimal re-renders
- 🎯 **TypeScript Ready** - Full TypeScript support with type definitions
- 🔧 **Easy Integration** - Simple API with sensible defaults
- 🖼️ **Flexible Layout** - Configurable grid sizes and image arrangements
- 🎪 **Interactive Modals** - Custom dialog components for image previews
- 🎨 **CSS-in-JS Support** - Inline styles and CSS classes supported

---

## 🚀 Installation

Use one of the following commands to add `meta-mosaic` to your project:

```bash
npm install meta-mosaic
# or
yarn add meta-mosaic
```

---

## ⚡ Quick Start

Get up and running with `meta-mosaic` in minutes:

### Basic Example

```tsx
import React from "react";
import Mosaic from "meta-mosaic";

const images = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  link: `https://picsum.photos/id/${101 + i}/400/300`,
}));

function App() {
  return (
    <Mosaic
      images={images}
      size={20}
      width={{ xs: 350, md: 500, lg: 650 }}
      height={{ xs: 350, md: 500, lg: 650 }}
    />
  );
}

export default App;
```

### Advanced Example with Custom Modal

```tsx
import React from "react";
import Mosaic from "meta-mosaic";

const images = Array.from({ length: 400 }, (_, i) => ({
  id: i + 1,
  link: `https://picsum.photos/id/${101 + i}/400/300`,
}));

function App() {
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
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Image {img.id}</h2>
          <img 
            src={img.link} 
            alt={`Image ${img.id}`} 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
    />
  );
}

export default App;
---

## 📋 API Reference

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `images` | `Array<{ id: number, link: string }>` | ✅ | - | Array of image objects to display in the mosaic |
| `size` | `number` | ✅ | - | Grid size determining the number of rows/columns |
| `width` | `{ xs: number, md: number, lg: number }` | ✅ | - | Responsive width breakpoints in pixels |
| `height` | `{ xs: number, md: number, lg: number }` | ✅ | - | Responsive height breakpoints in pixels |
| `bgImageUrl` | `string` | ❌ | - | URL of the main background image |
| `bgPosition` | `string` | ❌ | `'center'` | CSS background-position value |
| `gridWrapperClassName` | `string` | ❌ | - | Custom CSS class for the mosaic wrapper |
| `gridWrapperStyle` | `React.CSSProperties` | ❌ | - | Inline styles for the mosaic wrapper |
| `setDialog` | `(img: ImageType) => JSX.Element` | ❌ | - | Function to render custom modal/dialog content |

### Image Object Type

```typescript
interface ImageType {
  id: number;
  link: string;
}
```

---

## 🎨 Customization

### Responsive Breakpoints

The component supports three breakpoint sizes:

```tsx
// Responsive sizing
width={{ xs: 320, md: 600, lg: 900 }}
height={{ xs: 320, md: 600, lg: 900 }}
```

- `xs`: Mobile devices (default: < 768px)
- `md`: Tablets (768px - 1024px)
- `lg`: Desktop (> 1024px)

### Custom Styling

```tsx
// Using CSS classes
<Mosaic
  gridWrapperClassName="my-custom-mosaic"
  // ... other props
/>

// Using inline styles
<Mosaic
  gridWrapperStyle={{
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden"
  }}
  // ... other props
/>
```

### Custom Modal Dialog

Create interactive image previews with custom modal components:

```tsx
setDialog={(img) => (
  <div className="custom-modal">
    <div className="modal-header">
      <h3>Image {img.id}</h3>
      <button onClick={closeModal}>×</button>
    </div>
    <div className="modal-body">
      <img src={img.link} alt={`Image ${img.id}`} />
      <p>Click outside to close</p>
    </div>
  </div>
)}
```

---

## 🚀 Examples

### Photo Gallery

```tsx
const galleryImages = [
  { id: 1, link: "/photos/sunset.jpg" },
  { id: 2, link: "/photos/mountains.jpg" },
  { id: 3, link: "/photos/ocean.jpg" },
  // ... more images
];

<Mosaic
  images={galleryImages}
  size={15}
  width={{ xs: 300, md: 600, lg: 800 }}
  height={{ xs: 300, md: 600, lg: 800 }}
  setDialog={(img) => <ImagePreview image={img} />}
/>
```

### Portfolio Showcase

```tsx
<Mosaic
  images={portfolioImages}
  size={25}
  bgImageUrl="/hero-background.jpg"
  bgPosition="center top"
  width={{ xs: 350, md: 700, lg: 1000 }}
  height={{ xs: 400, md: 700, lg: 1000 }}
  gridWrapperStyle={{
    border: "2px solid #333",
    borderRadius: "12px"
  }}
/>
```

---

## 🛠️ Development

### Prerequisites

- Node.js 16+
- React 18+
- TypeScript (optional but recommended)

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/meta-mosaic.git

# Install dependencies
cd meta-mosaic
npm install

# Start development server
npm run dev
```

### Building

```bash
# Build for production
npm run build

# Run linting
npm run lint
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by modern photo gallery designs
- Built with React and TypeScript
- Thanks to all contributors and users

---

## 📞 Support

- 📧 Email: support@meta-mosaic.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/meta-mosaic/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/meta-mosaic/discussions)
- 📖 Documentation: [Full Documentation](https://meta-mosaic.dev)

---

<div align="center">
  <p>Made with ❤️ by the meta-mosaic team</p>
  <p>
    <a href="https://github.com/your-username/meta-mosaic/stargazers">⭐ Star us on GitHub</a> |
    <a href="https://twitter.com/metamosaic">🐦 Follow on Twitter</a> |
    <a href="https://meta-mosaic.dev">🌐 Visit our website</a>
  </p>
</div>
