


function Main({ name, city, position}){
  
  return(
    <div>
    
    <img src="https://img.freepik.com/premium-photo/taddy-bear-white-clod-high-definition-photographic-creative-image_993236-63633.jpg"
    alt="card imge" />

    <div className="mainBlock_detais"><h3>{name}</h3>
    <p><span>{city}</span> <span>{position}</span></p>
    </div>
     
    </div>
  )
}

export default Main;
