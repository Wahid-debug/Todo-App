import {
  Box,
  CssBaseline,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loadPosts = async () => {
      console.log("page", page)
    const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
    setPosts(res.data.data);
    console.log(res.data.data)
  };
  useEffect(() => {
    loadPosts();
  }, [page]);

  return (
    <div className="App">
      <CssBaseline />
      <Container component={Box} py={3}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item sm={3}>
              <Card key={post.id} style={{ height: 250 }}>
                <CardContent>
                  <Typography variant="h6">
                    <img style={{height:"50%",borderRadius:50}} src={post.avatar} />
                  </Typography>
                  <Typography variant="body1">{`${post.first_name} ${post.last_name} `}</Typography>
                </CardContent>
                <Typography varient="body2">{`Email- ${post.email}`}</Typography>
                <Typography varient="body2">{`ID- ${post.id}`}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box py={3} display="flex" justifyContent="center">
          <Pagination
            count={2}
            color="secondary"
            variant="outlined"
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      </Container>
    </div>
  );
}

export default User;