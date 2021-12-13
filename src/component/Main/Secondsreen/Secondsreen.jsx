import s from "../Secondsreen/Secondsreen.module.scss"
import Card from "./Card/Card";
import Filtr from "./Filtr/Filtr";

function Secondscreen() {

  return (

    <div className={s.secondscreen}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Каталог</h2>


        <div className={s.filtrList}>
          <Filtr src='../img/Filtr/biaz.svg' text="Бязь" />
          <Filtr src='../img/Filtr/ranfors.svg' text="Ранформ" />
          <Filtr src='../img/Filtr/satin.svg' text="Сатин" />
          <Filtr src='../img/Filtr/stripe.svg' text="Страйп Сатин" />
          <Filtr src='../img/Filtr/other.svg' text="Прочий текстиль" />
        </div>

        <div className={s.cardBox}>
          <Card background="../img/Card/image.png" state={2} discount={51}/>
          <Card background="../img/Card/image.png" state={3} discount={51}/>
          <Card background="../img/Card/image.png" state={4} discount={51}/>
        </div>
        

        
      </div>
    </div>

  )
}

export default Secondscreen;