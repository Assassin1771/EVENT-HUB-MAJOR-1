import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  container: {
    marginTop: "30px",
  },
  fgh:{
    color:"white",
    marginTop:"0cm",
    marginLeft:".3cm",
   
  },
  ghj:{
    margintop:"-30cm"
  },
  qwe:{
marginTop:"-9cm"
  },
  [theme.breakpoints.down("sm")]: {
    container: {
      marginTop: "20px",
      padding: 0,
    },
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));

