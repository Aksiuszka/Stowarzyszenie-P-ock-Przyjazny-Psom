import React from 'react'

const Pet =({name, animal, breed, location, images, id})=> {
  let defaultImage="http://pet-images.dev-apis.com/pets/none.jpg";
  if(images.length){
    defaultImage = images[0];
  };
  return (
    <a href={`/details/${id}`}>
      <div>
        <img src={defaultImage} alt={name}/>
      </div>
      <div>
        <h2>{name}</h2>
        <h4>{animal} - {breed} - {location}</h4>
      </div>
    
    </a>
  )
}

export default Pet