import React from 'react'
import { arrOfPhotosTypes } from "../lib/types/types"

const CarouselDots: React.FC<arrOfPhotosTypes> = ({ arrOfPhotos, indexCount }) => {
  
  return (
    <div>
      {
        arrOfPhotos.map((item, i) => {
          const isActive = i === indexCount;
          if(!isActive){
            return (
              <input
                key={i}
                type="radio"
                id={`carousel_dot_${i}`}
                name="carousel_dot"
                value="photo"
                checked={isActive}
                readOnly={true}
                style={{
                  outline: 'none', // Remove default outline
                  boxShadow: isActive ? '0 0 0 3px #D9B08C' : 'none', // Beige ring for the active dot
                  backgroundColor: isActive ? '#D9B08C' : '#D8D8D8', // Optional: Beige background for the active dot
                  borderRadius: '50%', // Keep the circular shape
                  width: '16px', // Adjust size as needed
                  height: '16px', // Adjust size as needed
                  appearance: 'none', // Remove default radio styling
                  cursor: 'pointer',
                  marginRight: '8px' // Add spacing between dots
                }}
              />
            );
          }

          return (
            <input
              key={i}
              type="radio"
              id={`carousel_dot_${i}`}
              name="carousel_dot"
              value="photo"
              checked={isActive}
              readOnly={true}
              style={{
                outline: 'none', // Remove default outline
                boxShadow: isActive ? '0 0 0 3px #D9B08C' : 'none', // Beige ring for the active dot
                backgroundColor: isActive ? '#D9B08C' : 'transparent', // Optional: Beige background for the active dot
                borderRadius: '50%', // Keep the circular shape
                width: '16px', // Adjust size as needed
                height: '16px', // Adjust size as needed
                appearance: 'none', // Remove default radio styling
                cursor: 'pointer',
                marginRight: '8px' // Add spacing between dots
              }}
            />
          );
        })
      }
    </div>
  );
}

export default CarouselDots;
