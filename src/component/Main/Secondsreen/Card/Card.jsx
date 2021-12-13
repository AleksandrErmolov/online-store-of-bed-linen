import s from "../Card/Card.module.scss"
// ('../img/Card/image.svg')
// import '../../../../../public/img/Card/image.'



function Card(props) {

  return (

    <div className={s.card}>
      <div className={s.radius}>
        <span>-{props.discount}%</span>
      </div>
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

        <div className={s.secondBlock}>
          <div className={s.secondBlockTitle}>
            <p className={s.titleone}>5364</p>
            <p className={s.titletwo}>Постельное бельё</p>
          </div>
          <div className={s.buttons}>
            <button> 1,5 сп </button> <button> 2 сп </button> <button> Евро </button> <button> Семейные </button>
          </div>


          <div className={s.compound}>
            <p className={s.compoundTitle}>Состав комплекта:</p>
            <div className={s.lineone}>
              <div className={s.row}>
                <img src="../img/card/biaz.svg" />
                <div>
                  <p>Бязь</p>
                  <p>100% ХБ</p>
                </div>
              </div>

              <div className={s.row}>
                <img src="../img/card/pod.svg" />
                <div>
                  <p>Пододеяльник</p>
                  <p>150*220</p>
                </div>
              </div>
            </div>


            <div className={s.linetwo, s.lineone}>
              <div className={s.row}>
                <img src="../img/card/prost.svg" />
                <div>
                  <p>Простыня</p>
                  <p>150Х220</p>
                </div>
              </div>

              <div className={s.row}>
                <img src="../img/card/nav.svg" />
                <div>
                  <p>Наволочка</p>
                  <p>70*70 (2 шт.)</p>
                </div>
                </div>
            </div>
            <div className={s.blockPrice}>
              <span className={s.oldprice}>1 498 грн</span> <span className={s.newprice}> 599 грн</span>
              <button className={s.buybutton}>Купить со скидкой</button>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default Card;