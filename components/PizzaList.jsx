import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN KOLKATA</h1>
      <p className={styles.desc}>
      If you love pampering your taste buds with the best pizza flavors in town, you’ll fall in love with the exciting range of veg Domino’s pizzas. From freshly sourced veggies to 100% authentic mozzarella cheese- our veg pizzas have everything to satisfy your pizza cravings. 
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
