import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

interface GalleryItemProps {
  image: string;
  text: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, text }) => (
  <div className="gallery-item relative">
    <Image
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }} // optional
      src={image}
      alt="Gallery"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black bg-opacity-70 p-4">
      {text}
    </div>
  </div>
);
GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const page = () => {
  // Define your data for each gallery item
  const galleryData = [
    { image: "/wardrobe/tops-img.jpg", text: "Tops" },
    { image: "/wardrobe/bottoms.jpg", text: "Bottoms" },
    { image: "/wardrobe/footwear.jpg", text: "Footwear" },
    { image: "/wardrobe/accessories.jpg", text: "Accessories" },
    { image: "/wardrobe/outerwear.jpg", text: "Outerwear" },
    { image: "/wardrobe/underwear.jpg", text: "Underwear" },
  ];

  return (
    <div className="gallery-page">
      {galleryData.map((item, index) => (
        <GalleryItem key={index} image={item.image} text={item.text} />
      ))}
    </div>
  );
};

export default page;
