import * as React from "react";
import { LuMenuSquare } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ReviewGraph from "./Chart";

const Reviews = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full flex justify-center border-4">
      <div className="flex-col w-[50%] flex border">
        <div className="h-[200px] md:h-[300px] flex-col flex justify-end border">
          <p className="ml-3 text-[20px] font-semibold text-black">
            Customer Reviews
          </p>
          <div className="flex justify-center">
            <div className="justify-between flex w-[95%] py-5">
              <div className="flex">
                <div className="border-r-2 flex flex-col items-center py-8 justify-center px-5">
                  <p>4.79</p>
                  <div>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.79}
                        precision={0.1}
                        readOnly
                      />
                    </Stack>
                  </div>
                  <p>1934 reviews</p>
                </div>
                <div className="h-[200px]">
                <ReviewGraph />
                </div>
              </div>
              <div>
                <div
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <LuMenuSquare className="text-black text-2xl gap-0 z-[999999]" />
                </div>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>Sort by</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Photo priority <Checkbox />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Newest <Checkbox />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Highest Rating <Checkbox />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Lowest Rating <Checkbox />
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen flex gap-4">
          <div className="w-1/3 border"></div>
          <div className="w-1/3 border"></div>
          <div className="w-1/3 border"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
