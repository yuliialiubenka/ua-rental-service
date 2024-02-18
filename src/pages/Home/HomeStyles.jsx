import { createUseStyles } from "react-jss";
import bgImg from '../../img/car-rental-services.png';

export const useStyles = createUseStyles({
    wrapper: {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundPositionX: 'center'
    }
});
  