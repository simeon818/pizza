import "./index.css";
import { Footer } from "./footer";
import { useState, useEffect } from "react";
import pizzas from "./Pizzas";

const pizzadata = pizzas.sort((a, b) => a.name.localeCompare(b.name));

//data array object
export default function App() {
  const [pizzas, setPizzas] = useState(pizzadata);
  const [isOpen, setIsOpen] = useState(true);
  const [isToggled, setIsToggled] = useState(false);

  const openHours = 9;
  const hour = new Date().getHours();
  const shopOpen = hour >= openHours;

  useEffect(() => {
    if (isToggled) {
      document.body.classList.add("new-style"); // Apply new style to body
    } else {
      document.body.classList.remove("new-style"); // Remove new style from body
    }
  }, [isToggled]); // Runs whenever isToggled changes

  // Function to delete a pizza
  const deletePizza = (pizzaName) => {
    setPizzas(pizzas.filter((pizza) => pizza.name !== pizzaName));
  };

  return (
    <>
      <div className="buttons">
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;
        </button>
        <button
          className="toggle-button"
          onClick={() => setIsToggled(!isToggled)}
        >
          &clubs;
        </button>
      </div>

      {true ? (
        <div>
          {shopOpen && (
            <ul className="pizza-container">
              {pizzas.map((pizza) => (
                <PizzaItem
                  pObj={pizza}
                  key={pizza.name}
                  isToggled={isToggled}
                  onDelete={deletePizza}
                />
              ))}
            </ul>
          )}
        </div>
      ) : (
        <span
          style={{
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            margin: "10%",
          }}
        >
          😍Built with Love from Burgeon
        </span>
      )}

      <Footer />
    </>
  );
}
function PizzaItem({ pObj, key, isToggled, onDelete }) {
  return (
    <li className={`pizza-div ${isToggled ? "toggled-style" : ""}`}>
      <div className="pizza-photo">
        <img src={pObj.photo} alt={pObj.name} />
      </div>
      <div className="pizza-info">
        <h3>{pObj.name}</h3>
        <p>{pObj.ingredients}</p>
        <p className="price">${pObj.price}</p>
      </div>
      <button className="delete-button" onClick={() => onDelete(pObj.name)}>
        Delete
      </button>
    </li>
  );
}
