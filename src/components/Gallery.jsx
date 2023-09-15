import React from "react";
import wood1 from "../assets/wood1.jpeg";
import wood2 from "../assets/wood2.jpeg";
import wood3 from "../assets/wood3.jpeg";
import wood4 from "../assets/wood4.jpeg";
import GalleryCard from "./GalleryCard";

function Gallery() {
  const images = [
    {
      img: wood1,
      title: "Door",
    },
    {
      img: wood2,
      title: "Almari",
    },
    {
      img: wood3,
      title: "Bed",
    },
    {
      img: wood4,
      title: "Furniture",
    },
    {
      img: wood1,
      title: "Door",
    },
    {
      img: wood2,
      title: "Almari",
    },
    {
      img: wood3,
      title: "Bed",
    },
    {
      img: wood4,
      title: "Furniture",
    },
  ];

  return (
    <>
      <div className="bg-[#95B2B8] pt-4">
        <h2 className="text-center font-semibold  text-2xl">Gallery</h2>
        <div className="flex  gap-4 overflow-auto py-4">
          {images.map((item) =>( <div ><GalleryCard item={item}/></div> ))}
        </div>
        </div>
    </>
  );
}

export default Gallery;
