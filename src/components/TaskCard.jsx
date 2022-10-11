import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TaskCard({ task }) {
  const [editText, setEditText] = useState("");
  return (
    <Card sx={{ minWidth: 275, minHeight: 150 }}>
      <CardContent>
        <Typography variant={"h5"}>{task}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
