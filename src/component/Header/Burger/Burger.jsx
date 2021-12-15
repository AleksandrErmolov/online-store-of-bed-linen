
import '../Burger/Burger.css'


function Burger({ active, setActive }) {
  return (

    <div className={active ? "menu active" : "menu"}>
      <div className="blur">
        <div className="menuContent">
          <div className="menuHeader"> Меню </div>
          <ul>
            <li>Меню</li>
            <li>О нас</li>
            <li>Доставка и оплата</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Burger;
