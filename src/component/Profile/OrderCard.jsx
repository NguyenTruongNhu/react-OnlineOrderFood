import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://media.istockphoto.com/id/1349560847/vi/anh/pizza-x%C3%BAc-x%C3%ADch-v%C3%A0-rau-tr%C3%AAn-n%E1%BB%81n-t%E1%BB%91i.jpg?s=2048x2048&w=is&k=20&c=e_hxYqlCWw0RY1aRQRL_aZjjn5NcKio3pzdZ1Vuh9Mg="
          alt=""
        />
        <div>
          <p>Pizza</p>
          <p>$30</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">completed</Button>
      </div>
    </Card>
  );
};

export default OrderCard;
