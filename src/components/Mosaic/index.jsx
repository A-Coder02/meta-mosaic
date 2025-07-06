import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import MosaicPixel from "./MosaicPixel";
import ImageDialog from "../ImageDialog";

const Mosaic = ({
  images = [],
  size: defaultSize = 14,
  bgImageUrl = null,
  gridWrapperClassName = null,
  gridWrapperStyle = {},
  width: widthQuery = { xs: 350, md: 500, lg: 700 },
  height: heightQuery = { xs: 350, md: 500, lg: 700 },
  bgPosition = "center",
  setDialog = null
}) => {
  const [size, setSize] = useState(defaultSize);

  const [showDialog, setShowDialog] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const onClickCard = (selectedCard = null) => {
    if (selectedCard) setSelectedCard(selectedCard);
    setShowDialog(true);
  };

  const closeDialog = () => setShowDialog(false);

  const { isXs, isMd, isLg } = useMediaQuery();
  let width = 350;
  let height = 350;

  if (isXs) {
    width = widthQuery.xs;
    height = heightQuery.xs;
  }

  if (isMd) {
    width = widthQuery.md || 350;
    height = heightQuery.md || 350;
  }

  if (isLg) {
    width = widthQuery.lg || 350;
    height = heightQuery.lg || 350;
  }
  useEffect(() => {
    if (defaultSize > 0) setSize(defaultSize);
  }, [defaultSize]);

  useEffect(() => {
    const numberOfCells = size * size;
    if (numberOfCells < images.length) {
      const newSize = Math.ceil(Math.sqrt(images.length));
      if (newSize !== size) setSize(newSize);
    }
  }, [images.length, size]);

  let numberOfRows = size;
  let numberOfColumns = size;
  // todo: if number of row increment necessary then incementet

  return (
    <div
      className={`mosaic-grid-wrapper ${
        gridWrapperClassName ? gridWrapperClassName : ""
      }`}
      style={{
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: `${width}px ${height}px`,
        backgroundPosition: bgPosition,
        width: `${width}px`,
        height: `${height}px`,
        ...gridWrapperStyle,
      }}
    >
      <div className="mosaic-grid-wrapper-overlay" />

      {images.map((img) => (
        <MosaicPixel
          image={img}
          bgImageUrl={bgImageUrl}
          width={width}
          height={height}
          bgPosition={bgPosition}
          onClickCard={onClickCard}
        />
      ))}

      {showDialog && (
        <ImageDialog
          image={selectedCard}
          onClose={closeDialog}
          animationType="top"
          position={"top"}
          setDialog={setDialog}
        />
      )}
    </div>
  );
};

export default Mosaic;
