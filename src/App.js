import app from './App.module.scss';
import Header from './component/Header/Header';
import Reviews from './component/Main/Reviews/Reviews';
import Secondscreen from './component/Main/Secondsreen/Secondsreen';
import Slider from './component/Main/Slider/Slider';
import ThirdScreen from './component/Main/Thirdscreen/ThirdScreen';



function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Secondscreen />
      <ThirdScreen />
      <Reviews />
    </div>
  );
}

export default App;
