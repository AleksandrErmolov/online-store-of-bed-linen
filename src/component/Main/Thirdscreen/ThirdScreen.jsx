import s from "../Thirdscreen/ThirdScreen.module.scss"
import Card from "./Card/Card"

export default function ThirdScreen() {

  return (

    <div className={s.thirdScreen} style={{ backgroundImage: 'url("../img/thirdScreen/bg.png")' }}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Нам доверяют с 2008 года</h2>
        <div className={s.cardBox}>
          <Card src={'../img/thirdScreen/1.svg'} title={'Доставка по всей'} color={"Украине"} description={"После Вашей заявки, мы перезвоним и сообщим точный срок доставки"}/>
          <Card src={'../img/thirdScreen/2.svg'} title={'Только качественные'} color={"Материалы"} description={"Постельное белье не выцветает, не линяет и не деформируется"}/>
          <Card src={'../img/thirdScreen/3.svg'} title={'Всегда лучшие'} color={"Цены"} description={"У нас вы всегда сможете найти лучшие предложения по цене"}/>
        </div>
      </div>
    </div>

  )
}