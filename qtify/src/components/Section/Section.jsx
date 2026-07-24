import axios from "axios";
import { useEffect, useState } from "react";
import MediaCard from "../MediaCard/MediaCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Carousel from "../Carousel/Carousel";

export default function Section({ section, sectionHdr }) {
  const [data, setData] = useState([]);
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://qtify-backend.labs.crio.do/albums/${section}`,
        );
        setData(response.data);
      } catch (error) {
        setData([]);
        console.error("error fetching data:", error);
      }
    };
    fetchData();
  }, [section]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={2}
      >
        <Typography variant="h6" gutterBottom>
          {sectionHdr}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? "Show All" : "Collapse"}
        </Button>
      </Box>
      {collapse ? (
        <Carousel data={data} />
      ) : (
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid key={item.id} item>
              <MediaCard data={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
