import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  beforeChat: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:`url(https://wallpaper.dog/large/20525674.jpg)`,
    backgroundSize:"contain"
    
  },
  afterChat: {
    backgroundColor: "#393E46",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "25px",
  },
  chatUser: {
    margin: 0,
    marginLeft: "8px",
    color: "white",
  },
  messagesContainer: {
    backgroundImage:`url(https://wallpaper.dog/large/20525674.jpg)`,
    backgroundSize:"contain",
    overflow: "auto",
  },
  sendButton: {
    backgroundColor: " #06283D",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    padding: "10px",
    cursor: "pointer",
    outline: "none",
    "&:hover": {
      backgroundColor: " #06283D",
    },
  },
}));
