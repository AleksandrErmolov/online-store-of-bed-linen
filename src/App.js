import app from './App.module.scss';
import Header from './component/Header/Header';
import Secondscreen from './component/Main/Secondsreen/Secondsreen';
import Slider from './component/Main/Slider/Slider';



function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Secondscreen />
    </div>
  );
}

export default App;
