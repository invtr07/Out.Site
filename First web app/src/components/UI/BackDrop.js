import classes from './BackDrop.module.css';

function BackDrop(props){
     return(
          <div onClick={props.close} className={classes.backdrop}>
          </div>
     )
}

export default BackDrop;