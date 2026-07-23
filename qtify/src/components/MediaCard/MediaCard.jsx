import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ data }) {
  return (
    <>
      <Card sx={{ width: 160 }}>
        <CardMedia
          component="img"
          alt={data.title}
          height="170"
          image={data.image}
        />
        <CardContent>
          <Chip
            label={`${data.follows} Follows`}
            // sx={{ bgcolor: "black", color: "white" }}
          />
        </CardContent>
      </Card>
      <Typography variant="subtitle1" gutterBottom>
        {data.title}
      </Typography>
    </>
  );
}
