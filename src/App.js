import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Heading from './components/heading';

function App() {
  return (
    <div className="app">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,600&family=Lexend+Deca:wght@300;400&family=Nunito:wght@200&family=Paytone+One&display=swap" rel="stylesheet"></link>
      <Heading/>
      <Form/>
    </div>
  );
}

export default App;
