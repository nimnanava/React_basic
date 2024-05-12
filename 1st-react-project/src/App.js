
import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <>
      <h1>NImna navanjana</h1>

      <Main />
     
      <p>nimna navanjana bandara</p>

     <Main>
      <h5>Nimna Navanjana</h5>
      <p> i am children  </p>
     </Main>

     <Main name = "amila" city = "tangalle" position= "web developer"/>
     <Main name = "nimna" city = "rikillagaskada" position= "web developer"/>

     

    </>
  );
}

export default App;
