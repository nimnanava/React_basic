// const name = 'Nimna navanjana'
// const position = 'web developer'

// const myObj ={
//   name : `${name}` ,
//   position : `${position}`,
//   city : 'Rikillagaskada'
// }


function Main({children, name, city, position}){
  // const{city} = myObj
  return(
    <div>
      this is main Components
      <ul>
        <li>{name}</li>
        <li>{position}</li>
        {/* <li>{myObj.name}</li>
        <li>{myObj.position}</li> */}
        <li>{city}</li>
        
      </ul>
      {children} 
    </div>
  )
}

export default Main;
