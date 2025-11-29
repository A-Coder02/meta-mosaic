import React, { useEffect, useState } from "react";

const MosaicPixel = ({
  image,
  bgImageUrl,
  width,
  height,
  row,
  col,
  totalRows,
  totalCols,
  onClickCard,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!image?.link) return;
    const img = new Image();
    img.src = image.link;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(false);
  }, [image]);

  // Calculate with maximum precision
  const cellWidth = width / totalCols;
  const cellHeight = height / totalRows;
  
  // Use Number() with toFixed(5) for precise positioning
  const bgPosX = Number((-(col * cellWidth)).toFixed(5));
  const bgPosY = Number((-(row * cellHeight)).toFixed(5));

  return (
    <div className="mosaic-cell-wrapper">
      {!isLoaded ? null : (
        <div
          className="mosaic-cell"
          style={{
            backgroundImage: `url(${bgImageUrl})`,
            backgroundSize: `${width}px ${height}px`,
            backgroundPosition: `${bgPosX}px ${bgPosY}px`,
          }}
          onClick={() => onClickCard(image)}
        >
          <div
            className="mosaic-cell-img"
            style={{
              backgroundImage: `url(${image.link})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default MosaicPixel;
