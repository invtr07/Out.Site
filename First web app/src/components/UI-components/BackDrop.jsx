import classes from './BackDrop.module.css'

export default function BackDrop(prop){
     return (
     <div onClick={prop.onClose} className={classes.backdrop}>
     </div>
     )
}