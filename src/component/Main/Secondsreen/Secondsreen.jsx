import { useState } from "react";
import s from "../Secondsreen/Secondsreen.module.scss"
import Card from "./Card/Card";
import Filtr from "./Filtr/Filtr";

function Secondscreen() {

  const [number, setNumber] = useState(0)


  return (

    <div className={s.secondscreen}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Каталог</h2>


        <div className={s.filtrList}>
          <Filtr src='../img/Filtr/biaz.svg' text="Бязь" onClick={() => { setNumber(0) }}
            active={number === 0 ? "active" : ""} />
          <Filtr src='../img/Filtr/ranfors.svg' text="Ранформ" onClick={() => { setNumber(1) }}
            active={number === 1 ? "active" : ""} />
          <Filtr src='../img/Filtr/satin.svg' text="Сатин" onClick={() => { setNumber(2) }}
            active={number === 2 ? "active" : ""} />
          <Filtr src='../img/Filtr/stripe.svg' text="Страйп Сатин" onClick={() => { setNumber(3) }}
            active={number === 3 ? "active" : ""} />
          <Filtr src='../img/Filtr/other.svg' text="Прочий текстиль" onClick={() => { setNumber(4) }}
            active={number === 4 ? "active" : ""} />
        </div>


        <div>

          {number === 0 ?
            <div className={s.cardBox}>
            <Card background="../img/Card/image.png" state={2} discount={11} />
            <Card background="../img/Card/image.png" state={33} discount={45} />
            <Card background="../img/Card/image.png" state={22} discount={55} />
            </div>
            : null}
          
          {number === 1 ? <div className={s.cardBox}> <Card background="../img/Card/image.png" state={22} discount={61} />
            <Card background="../img/Card/image.png" state={22} discount={61} />
            <Card background="../img/Card/image.png" state={22} discount={61} /> </div> : null}
          {number === 2 ? <div className={s.cardBox}> <Card background="../img/Card/image.png" state={114} discount={41} />
            <Card background="../img/Card/image.png" state={114} discount={41} /> </div> : null}
          {number === 3 ? <div className={s.cardBox}> <Card background="../img/Card/image.png" state={45} discount={32} /> </div> : null}
          {number === 4 ? <div className={s.cardBox}> <Card background="../img/Card/image.png" state={134} discount={27} />
            <Card background="../img/Card/image.png" state={234} discount={37} />
            <Card background="../img/Card/image.png" state={334} discount={57} /> </div> : null}


          {/*           
          <Card background="../img/Card/image.png" state={2} discount={51} />
          <Card background="../img/Card/image.png" state={3} discount={51} />
          <Card background="../img/Card/image.png" state={4} discount={51} /> */}

        </div>



      </div>
    </div>

  )
}

export default Secondscreen;