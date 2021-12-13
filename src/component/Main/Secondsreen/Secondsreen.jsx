import s from "../Secondsreen/Secondsreen.module.scss"
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
      </div>
    </div>

  )
}

export default Secondscreen;