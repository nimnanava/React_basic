
import './App.css';
import Main from './Components/Main';
import myData from './data/myData';

function App() {
  return (
    <>
      <h1>NImna navanjana</h1>

      {myData.map(({name , city, position , id}) => {
        return <Main key={id} name = {name} city={city} position={position} />
      })}

     

    </>
  );
}

export default App;
