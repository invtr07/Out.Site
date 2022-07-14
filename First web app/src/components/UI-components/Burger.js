import classes from './Burger.module.css';
import navburger from "../assets/Navburger.jpg";

function Burger(props){
     return(
     <div onClick={props.open} className={classes.sidebox}>       
        <img src="../assets/Navburger.jpg" alt="NavBurger" />
     </div>
)}

export default Burger;

