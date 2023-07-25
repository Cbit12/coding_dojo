import logo from './logo.svg';
import './App.css';
import PersonCard from './components/personCard/personCard.component';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="Jane"
        lastName="Doe"
        age={45}
        haircolor="Black"
      />   
      <PersonCard
        firstName="John"
        lastName="Smith"
        age={88}
        haircolor="Brown"
      />     
      <PersonCard
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        haircolor="Brown"
      />   
      <PersonCard
        firstName="Maria"
        lastName="Smith"
        age={62}
        haircolor="Brown"
      /> 
    </div>
  );
}

export default App;
