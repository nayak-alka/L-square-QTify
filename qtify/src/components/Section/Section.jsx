import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../MediaCard/MediaCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Section() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top",
        );
        setData(response.data);
      } catch (error) {
        setData([]);
        console.error("error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={2}
      >
        <Typography variant="h6" gutterBottom>
          Top Albums
        </Typography>
        <Button variant="contained" color="primary">
          Collapse
        </Button>
      </Box>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid key={item.id} item>
            <MediaCard data={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
