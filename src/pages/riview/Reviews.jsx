import * as React from "react";
import { LuMenuSquare } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Checkbox from "@mui/material/Checkbox";
// const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
    <div className="w-full flex justify-center border">
      <div className="flex-col w-[50%] flex border">
        <div className="h-[300px] flex-col flex justify-end border">
          <p className="ml-3 text-[20px] font-semibold text-black">
            Customer Reviews
          </p>
          <div className="flex justify-center">
            <div className="justify-between flex w-[95%]">
              <div>hii</div>
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
                  <MenuItem onClick={handleClose}>
                    Sort by <Checkbox />
                  </MenuItem>
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
