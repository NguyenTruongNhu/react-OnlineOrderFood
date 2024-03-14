import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";

const categories = ["pizza", "biryani", "burger", "chicken", "rice"];
const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];

const menu = [1, 1, 1, 1, 1, 1, 1];
const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/vietnam/vietnam fast food/3
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://media.istockphoto.com/id/946138618/vi/anh/m%E1%BA%B7t-tr%C6%B0%E1%BB%9Bc-c%E1%BB%A7a-t%C3%B2a-nh%C3%A0-th%C6%B0%C6%A1ng-m%E1%BA%A1i-phong-c%C3%A1ch-c%E1%BB%95-%C4%91i%E1%BB%83n-3d-render.jpg?s=2048x2048&w=is&k=20&c=4JY-d7KH3uGIk3e94NC8WbuwsVFehi8eD90nmV0oQ2Q="
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://media.istockphoto.com/id/489803256/vi/anh/d%C6%B0%E1%BB%9Bi-%C4%91%C3%A2y-l%C3%A0-g%C3%B3c-nh%C3%ACn-c%E1%BB%A7a-gia-%C4%91%C3%ACnh-tr%E1%BA%BB-vui-v%E1%BA%BB-trong-mua-s%E1%BA%AFm.jpg?s=2048x2048&w=is&k=20&c=S12srq51-TSosCkjkMmiyH8cAjuSi2ZhrYxhHJEqhhY="
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2021/04/22/02/36/barista-6197867_640.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">VietNam Fast Food</h1>
          <p className="text-gray-500 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus nihil iste eum hic deserunt ex nam amet facere! Id
            error quasi quaerat non aperiam quidem asperiores sunt impedit
            doloremque ipsa?
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Binh Thanh, TP HCM</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter ">
          <div className="box space-y-5 lg:sticky top-28 ">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
