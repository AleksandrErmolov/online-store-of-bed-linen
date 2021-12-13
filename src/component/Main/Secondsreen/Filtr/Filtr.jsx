import s from "../Filtr/Filtr.module.scss"


function Filtr(props) {

  return (

    <div className={s.filtr}>
      <div className={s.img}>
        <img src={props.src} />
      </div>
      <div className={s.text}>
        <p className={s.title}>{props.text}</p>
      </div>

    </div>

  )
}

export default Filtr;