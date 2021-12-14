import s from "../Reviews/Reviews.module.scss"

export default function Reviews() {

  return (

    <div className={s.Reviews} style={{ backgroundImage: 'url("../img/reviews/rew.png")' }}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Отзывы о нас</h2>
        <p className={s.description}>Если вы еще не заказали и сомневаетесь, <br/>
          прочитайте отзывы от наших счастливых клиентов!</p>
        <div className={s.tel}>
          <img src="../img/reviews/tel.svg" alt="telefone" />
        </div>
      </div>
    </div>

  )
}