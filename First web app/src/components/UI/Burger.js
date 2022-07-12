import classes from './Burger.module.css';
import navburger from "./Navburger.jpg";

function Burger(props){
     return(
     <div onClick={props.open} className={classes.sidebox}>       
        <img src={"./Navburger.jpg"} alt="NavBurger" />
     </div>
)}

export default Burger;

