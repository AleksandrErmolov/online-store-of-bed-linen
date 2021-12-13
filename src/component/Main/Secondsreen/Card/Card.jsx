import s from "../Card/Card.module.scss"
// ('../img/Card/image.svg')
// import '../../../../../public/img/Card/image.'



function Card(props) {

  return (

    <div className={s.card}>

      <div className={s.firstBlock} style={{ backgroundImage: `url(${props.background})` }}>

        <div className={s.properties}>

          <div className={s.washing}>
            <img src="../img/Card/washing.svg" />
            <p>Гарантия 350 стирок</p>
          </div>

          <div className={s.sertificat}>
            <img src="../img/Card/badge.svg" />
            <p>Сертификат качества</p>
          </div>

        </div>

        <div className={s.state}>
          <p className={s.text}>осталось {props.state} шт.</p>
        </div>


      </div>
    </div>

  )
}

export default Card;