import * as React from "react";
import { LuMenuSquare } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ValueComponent from "./Block";
import VerifiedTwoToneIcon from '@mui/icons-material/VerifiedTwoTone';

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
    <div className="w-full flex justify-center mt-80">
      <div className="flex-col w-[50%] flex">
        <div className="h-[200px] md:h-[300px] flex-col flex justify-end">
          <p className="ml-3 text-[20px] font-semibold text-black">
            Customer Reviews
          </p>
          <div className="flex justify-center">
            <div className="justify-between flex w-[95%] py-5">
              <div className="flex w-full">
                <div className="border-r-2 flex flex-col items-center py-8 justify-center px-5 w-1/3">
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
                <div className="h-[200px] w-[40%] flex-col flex justify-center">
                   <div className="flex gap-1 items-center pl-2">
                      <p className="w-[23%]">5 Star</p>
                      <ValueComponent value={1610} maxValue={2000}/>
                      <p className="pr-3">1610</p>
                   </div>
                   <div className="flex gap-1 items-center pl-2">
                      <p className="w-[23%]">4 Star</p>
                      <ValueComponent value={273} maxValue={2000}/>
                      <p className="pr-3">273</p>
                   </div>
                   <div className="flex gap-1 items-center pl-2">
                      <p className="w-[23%]">3 Star</p>
                      <ValueComponent value={56} maxValue={2000}/>
                      <p className="pr-3">56</p>
                   </div>
                   <div className="flex gap-1 items-center pl-2">
                      <p className="w-[23%]">2 Star</p>
                      <ValueComponent value={5} maxValue={2000}/>
                      <p className="pr-3">5</p>
                   </div>
                   <div className="flex gap-1 items-center pl-2">
                      <p className="w-[23%]">1 Star</p>
                      <ValueComponent value={5} maxValue={2000}/>
                      <p className="pr-3">1</p>
                   </div>
                </div>
              </div>
              {/* menubutton */}
              <div className="">
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
        <div className="flex gap-4">
          <div className="w-1/3">
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
            <div className="flex-col flex items-center border-2 b0rder-black mb-3">
            <div className="h-[400px] w-full overflow-x-hidden overflow-y-hidden">
              <img src="/images/review1.webp" alt="" />
            </div>
            <div className="w-11/12">
              <div className="flex justify-between items-center">
                <p>⭐⭐⭐⭐⭐</p>
                <p className="opacity-50 text-sm font-semibold">12/05/2024</p>
              </div>
              <p className="pt-2 font-semibold">Nancy</p>
              <div className="flex items-center pb-2 text-[#0FB2AE] gap-2">
                <VerifiedTwoToneIcon/>
                <p>Verified Purchase</p>
              </div>
              <p className="text-sm font-medium">I just love hair topper it’s changed my lifestyle I feel more confident it’s look so natural and bouncy lots of love 💕</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
