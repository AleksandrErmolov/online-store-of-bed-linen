import { useState } from 'react';
import app from '../../App.module.scss'
import s from '../Header/Header.module.scss'
import Burger from './Burger/Burger';


function Header() {



  const [menuActive, setMenuActive] = useState(false)

  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.headerFirstLine}>
            <div className={s.menu}>
              <button style={{ backgroundImage: 'url("../img/header/menu.svg")' }} onClick={() => setMenuActive(!menuActive)}></button>
              {/* <img src="../img/header/menu.svg" alt="icon Facebook" /> */}
            </div>
            <div className={s.social}>
              <img src="../img/header/facebook.svg" alt="icon Facebook" />
              <img src="../img/header/instagram.svg" alt="icon instagram" />
              <img src="../img/header/telegram.svg" alt="icon telegram" />
            </div>
            <div className={s.logo}>
              <img src="../img/header/logo.svg" alt="icon Facebook" />
            </div>
            <div className={s.tel}>
              <img className={s.telimg} src="../img/header/tel.svg" alt="icon tel" />
              <span>8 800 337 51 74</span>
              <div className={s.cart}>
                <img src="../img/header/cart.svg" alt="icon cart" />
                <div className={s.round}>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>
          <Burger active={menuActive} setMenuActive={setMenuActive} />

          <div className={s.secondline} >
            <span> О нас</span>
            <img src="../img/header/stars.svg" alt="stars" />
            <span>Доставка и оплата</span>
            <img src="../img/header/stars.svg" alt="stars" />
            <span>Возврат</span>
          </div>
        </div>


      </header>



    </>

  );
}

export default Header;
