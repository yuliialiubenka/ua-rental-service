import { useStyles } from './EmptyBlockStyles';
import Image from "../../img/empty-block.png";

const EmptyBlock = () => {
    const classes = useStyles();       
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={Image} alt="Empty block" width={400} />
            <p className={classes.text}>Cars gallery is empty...</p>
        </div>
    );
}

export default EmptyBlock;