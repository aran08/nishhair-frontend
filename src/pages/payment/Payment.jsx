import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function CustomizedRadios() {
  return (
    <FormControl className="w-full justify-center">
      <RadioGroup
        defaultValue="Free"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <div className="border rounded-md">
          <div className="flex items-center justify-between px-2 py-2 border-b">
            <div className="flex items-center">
              <FormControlLabel
                value="Free"
                control={<BpRadio />}
                className="pl-1"
              />
              <p>Standard</p>
            </div>
            <p className="">Free</p>
          </div>
          <div className="flex justify-between px-2 pb-3">
            <div className="flex">
              <FormControlLabel
                value="male"
                control={<BpRadio />}
                className="pl-1"
              />
              <div className="pt-5">
                <p>Standard Shipping (Cash on Delivery).</p>
                <p className="text-sm">
                  This shipping option is eligible for Cash on Delivery.
                </p>
              </div>
            </div>
            <h1 className="pt-5">₹99.00</h1>
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}
