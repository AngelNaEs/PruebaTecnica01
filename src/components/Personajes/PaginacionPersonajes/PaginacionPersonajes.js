import { Pagination, Stack } from "@mui/material";

export const PaginacionPersonajes = ({ count, page, handleChange }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        sx={{ margin: "30px", display: "flex", justifyContent: "center" }}
        count={count}
        page={page}
        shape="rounded"
        siblingCount={1}
        onChange={handleChange}
      />
    </Stack>
  );
};
