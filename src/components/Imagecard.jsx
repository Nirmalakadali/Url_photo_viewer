import React, { useState, useEffect } from 'react';

const ImageCard = ({ imageUrl, imageName, onSaveName, onDeleteImage }) => {
  const [editedName, setEditedName] = useState(imageName || '');

  useEffect(() => {
    setEditedName(imageName || '');
  }, [imageUrl, imageName]);

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleSaveName = () => {
    onSaveName(imageUrl, editedName);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mx-1 my-1 w-auto max-w-2xl max-h-100">
      <img src={imageUrl} alt="User uploaded" className="w-auto h-auto object-cover rounded-xl" />
      <div className="mt-2">
        <div className="capitalize font-bricolage mb-2 text-center text-xl ">{imageName || 'Untitled'}</div>
        <input
          type="text"
          placeholder="Edit image name"
          value={editedName}
          onChange={handleNameChange}
          className="px-2 py-1 border rounded w-full"
        />
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={handleSaveName}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Name
          </button>
          <button
            onClick={() => onDeleteImage(imageUrl)}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
