import {
  Button,
  List,
  Grid,
  Typography,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../services/LocalStorageService";
import { useGetLoggedUserQuery } from "../services/userAuthApi";
import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, TextField, Alert } from "@mui/material";
import { usePostMutation, useGetPostsQuery } from "../services/postAPI";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken("token");
    navigate("/login");
  };

  const token = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(token);

  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  const [secretMessage, setSecretMessage] = useState("");
  const { data: { messages: posts } = {}, isSuccess: postsSuccess } =
    useGetPostsQuery();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const [post] = usePostMutation();

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.user.email,
        name: data.user.name,
      });
    }
  }, [data, isSuccess]);

  const handleSubmit = async () => {
    console.log("Secret Message:", secretMessage);
    setSecretMessage("");
    const response = await post(secretMessage);
    setError({
      status: true,
      msg: "Posted Successful",
      type: "success",
    });
  };

  useEffect(() => {
    if (postsSuccess) {
      console.log("Fetched Posts:", posts);
    }
  }, [postsSuccess, posts]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Hi, {userData.name} Welcome to Our Secret Pool
            </Typography>
            <Button
              variant="contained"
              color="warning"
              size="large"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container sx={{ height: "90vh", marginTop: "20px" }}>
        <Grid item lg={5} sm={5} xs={12}>
          <Typography variant="h4" component="span">
            Post Your Secret
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="secret"
            name="secret"
            label="Secret Message"
            value={secretMessage}
            onChange={(e) => setSecretMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{
              padding: "10px",
              marginTop: "20px",
              width: "50%",
              marginLeft: "25%",
            }}
            onClick={handleSubmit}
          >
            Post
          </Button>
        </Grid>
        <Grid sx={{ marginLeft: "20%" }}>
          <Box>
            <Typography variant="h4">List of Posts</Typography>
            <List
              sx={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              {posts?.map((post) => (
                <ListItem
                  key={post._id}
                  sx={{ borderBottom: "1px solid #eee", padding: "5px 0"}}
                >
                  <ListItemText primary={post.message} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
    </>
  );
};

export default Dashboard;
