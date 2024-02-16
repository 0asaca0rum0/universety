import * as React from "react";

const images = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/02c81dffaa6fe94739c69e87388d0ffc8efd62653952f60e149299b37fdfb3c4?apiKey=560fbc2a70834c07805a703b08db725f",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/66a9d2759e1dbb2aa501dca6c0a9bfadca63702c63f40b8e724e00ba6e3bc50c?apiKey=560fbc2a70834c07805a703b08db725f",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/47e064f54fcbca7ac737b2d19c7084368b4b6a23991544b0d60a5b0a981f6645?apiKey=560fbc2a70834c07805a703b08db725f",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/b89e4cfd6226a989fc64dafbee5ef153c8766c9674262cf11531a45b00fb9e8a?apiKey=560fbc2a70834c07805a703b08db725f",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/02fe30a728c0c70730e3bb6341743667f8e6cb971b7379411914827c89b5289a?apiKey=560fbc2a70834c07805a703b08db725f"
];

export default function Gallery() {
  return (
    <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-8 mb-10 w-full max-w-[1109px] max-md:max-w-full">
        <div className="text-4xl font-bold text-black max-md:max-w-full">
          Gallery
        </div>
        <div className="flex justify-center items-center px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full hover:scale-110 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}
