import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createIngredient,
  createIngredientCategory,
} from "../../component/state/Ingredients/Action";

const CreateIngredientForm = () => {
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { restaurant, ingredients } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      restaurantId: restaurant.usersRestaurant?.id,
    };
    dispatch(createIngredient({ data, jwt }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.ingredienCategoryId}
              label="Category"
              name="categoryId"
              onChange={handleInputChange}
            >
              {ingredients.category.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button variant="contained" type="submit">
            Create Ingredient
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
