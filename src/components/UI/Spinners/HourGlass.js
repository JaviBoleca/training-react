import classes from './HourGlass.module.css';

const HourGlass =()=>{
    return(
        <div className={classes.container}>
            <div className={classes["lds-hourglass"]}></div>
        </div>
    )
}
export default HourGlass;