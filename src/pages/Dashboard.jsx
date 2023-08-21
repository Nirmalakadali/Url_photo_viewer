import React, { useState } from 'react';
import ImageCard from '../components/Imagecard';
function Dashboard() {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchName, setSearchName] = useState('');

  const handleAddImage = (imageUrl) => {
    const newImage = { url: imageUrl, name: '' };
    setImageUrls([newImage, ...imageUrls]);
  
    if (imageUrls.length === 0) {
      setCurrentImageIndex(0);
    }
  };
  
  const handleSaveName = (imageUrl, newName) => {
    const updatedImageUrls = imageUrls.map((image) =>
      image.url === imageUrl ? { ...image, name: newName } : image
    );
    setImageUrls(updatedImageUrls);
  };
  const handleDeleteImage = (imageUrl) => {
    const filteredImageUrls = imageUrls.filter((image) => image.url !== imageUrl);
    setImageUrls(filteredImageUrls);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const filteredImages = imageUrls.filter((image) =>
    image.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-4">
      <div className='flex flex-row justify-between gap-8 '>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter image URL"
          className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full pb-[8px] pr-[55px] pl-[55px] pt-[8px] border-b-2'
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleAddImage(event.target.value);
              event.target.value = '';
            }
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={handleSearchChange}
          className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full pb-[8px] pr-[55px] pl-[55px] pt-[8px] border-b-2'
          />
      </div>
      </div>
      <div className="flex justify-center items-center w-full">
  <button
    onClick={() => setCurrentImageIndex((currentImageIndex - 1 + filteredImages.length) % filteredImages.length)}
    className=" py-[8px] px-[12px] bg-richblack-800 text-richblack-100 rounded-[8px] border border-richblack-700 hover:bg-richblack-200 hover:text-white"
  >
    &lt; Previous
  </button>
  <div className="flex-1 flex justify-center max-h">
  {filteredImages.length > 0 && currentImageIndex < filteredImages.length && (
  <ImageCard
    imageUrl={filteredImages[currentImageIndex].url}
    onSaveName={handleSaveName}
    imageName={filteredImages[currentImageIndex].name}
    onDeleteImage={handleDeleteImage}
  />
)}

  </div >
  <button
    onClick={() => setCurrentImageIndex((currentImageIndex + 1) % filteredImages.length)}
    className=" py-[9px] px-[19px] bg-richblack-800 text-richblack-100 rounded-[8px] border border-richblack-700 hover:bg-richblack-200 hover:text-white"
  >
    Next &gt;
  </button>
</div>
   
    </div>
  );
}

export default Dashboard;
