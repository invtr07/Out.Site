import classes from './Burger.module.css';

function Burger(props){
     return(
     <div onClick={props.open} className={classes.sidebox}>       
        <img src="../assets/Navburger.jpg" alt="NavBurger" />
     </div>
)}

export default Burger;

