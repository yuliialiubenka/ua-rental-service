import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  mainWrapper: {
    maxWidth: 'fit-content',
    textAlign: 'center',
    margin: '0 auto',
    padding: 24,
    borderRadius: 24,
    color: '#fff',
    background: 'rgb(11, 68, 205)',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  descriptionWrap: {
    listStyle: 'none'
  },
  description: {
    fontSize: 18,
    lineHeight: 1.5,
  },
});