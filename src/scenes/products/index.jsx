import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";

const Product = () => {
  const { data, isLoading } = useGetProductsQuery();
  console.log("data", data);
  return (
    <Box>
      <Header title="PRODUCTS" subtitle="see your list of products" />
    </Box>
  );
};

export default Product;