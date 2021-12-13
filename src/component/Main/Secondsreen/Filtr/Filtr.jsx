import s from "../Filtr/Filtr.module.scss"


function Filtr(props) {

  let gg;

  props.active ? gg = "#4EB4E6" : gg = "rgba(78, 180, 230, 0.25);"
  console.log(gg)
  
  return (

    <div className={s.filtr} onClick={props.onClick} style={{ backgroundColor: {gg}}}>
  < div className = { s.img } >
    <img src={props.src} />
      </div >
  <div className={s.text}>
    <p className={s.title}>{props.text}</p>
  </div>

    </div >

  )
}

export default Filtr;