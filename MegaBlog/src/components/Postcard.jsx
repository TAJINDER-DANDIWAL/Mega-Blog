import React from "react";
import { Link } from "react-router-dom";
import authservice from "../../appwrite/confijs";

const Postcard = ({ $id, title, imageUrl }) => {
  return (
    <>
      <Link
        to={`/post/${$id}`}
        className="block w-full rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="w-full">
          <img
            src={authservice.getFilePreview(imageUrl)}
            alt="Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Postcard;
