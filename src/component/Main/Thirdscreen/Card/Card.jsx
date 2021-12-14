import s from "../Card/Card.module.scss"

export default function Card(props) {

  console.log(props.color)
  return (

    <div className={s.card}>
      <div className={s.wrapper}>
        <img src={props.src} />
        <p className={s.title}>{props.title}</p>
        <p className={s.titleColor}> {props.color}</p>
        <p className={s.description}>{props.description}</p>
      </div>
    </div>

  )
}