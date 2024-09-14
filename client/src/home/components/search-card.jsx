import { Box, Card, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const SearchCard = () => {
  return (
    <Card sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
      <Stack sx={{ alignItems: "center" }} spacing={2} direction="row">
        <Typography variant="">Search</Typography>
        <TextField sx={{ minWidth: 300 }} size="small" label="search" />
      </Stack>
      <Stack sx={{ alignItems: "center" }} spacing={2} direction="row">
        <Typography>Sort</Typography>
        <TextField
          slotProps={{
            select: {
              native: true,
            },
          }}
          select
          size="small"
          //   label="search"
        >
          <option>ascending</option>
          <option>Descending</option>
        </TextField>
      </Stack>
    </Card>
  );
};

export default SearchCard;
