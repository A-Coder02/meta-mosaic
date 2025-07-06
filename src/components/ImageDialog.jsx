import React, { useEffect, useRef, useState } from "react";

const ImageDialog = ({
  image,
  onClose,
  animationType = "bottom",
  position,
  setDialog, // 🆕 New prop
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [offsetStyle, setOffsetStyle] = useState({});
  const dialogRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (animationType === "position" && dialogRef.current && position) {
      const { offsetWidth, offsetHeight } = dialogRef.current;
      setOffsetStyle({
        position: "absolute",
        left: position.x - offsetWidth / 2,
        top: position.y - offsetHeight / 2,
      });
    }
  }, [animationType, position]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const animationClass = isVisible
    ? animationType === "position"
      ? "zoom-in"
      : `slide-in-${animationType}`
    : animationType === "position"
    ? "zoom-out"
    : `slide-out-${animationType}`;

  return (
    <div
      className="dialog-overlay"
      onClick={handleClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        ref={dialogRef}
        className={`dialog-content ${animationClass}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "90%",
          maxHeight: "90%",
          overflow: "auto",
          ...(animationType === "position" ? offsetStyle : {}),
        }}
      >
        {typeof setDialog === "function" ? (
          setDialog(image)
        ) : (
          <>
            <h3>Image Info</h3>
            <img
              src={image.link}
              alt="Preview"
              style={{ width: "100%", height: "auto", borderRadius: "4px" }}
            />
            <p>ID: {image.id}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageDialog;
