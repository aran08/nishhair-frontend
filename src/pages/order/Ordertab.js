import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import Cart from "../cart/Cart";
import Address from "../cart/Address";
import Shipping from "../cart/Shipping";
import ProductOrderpage from "../../components/content/ProductOrderpage";
import { getcartData } from "../../redux/slice/cart";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function Ordertab() {
  const [value, setValue] = React.useState("1");
  const [orderDetail, setOrderDetail] = React.useState();
  const [cartData, setCartData] = React.useState();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleAllData = async () => {
    const res = await dispatch(getcartData());
    if (res) {
      setCartData(res?.data);
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    handleAllData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="flex">
      <Box className="w-1/2 ml-10">
        <TabContext value={value}>
          <Box className="">
            <div className="flex justify-end items-center flex-col h-[200px]">
              <img
                src="/images/logo.webp"
                alt=""
                className="w-[170px] h-[80px]"
              />
              <div className=" flex text-sm">
                <Tab label="Cart" />
                <TabList onChange={handleChange}>
                  <Tab label="Information " value="1" />
                  <Tab label="Shipping " value="2" />
                </TabList>
                <Tab label="Payment" />
              </div>
            </div>
          </Box>
          {/* <TabPanel value="1">
            <Cart />
          </TabPanel> */}
          <TabPanel value="1">
            <Address
              orderDetail={orderDetail}
              setOrderDetail={setOrderDetail}
              setValue={setValue}
            />
          </TabPanel>
          <TabPanel value="2">
            <Shipping
              orderDetail={orderDetail}
              setOrderDetail={setOrderDetail}
              cartData={cartData}
              setValue={setValue}
            />
          </TabPanel>
        </TabContext>
      </Box>
      <Box className="w-1/2 pl-10">
        <ProductOrderpage cartData={cartData} />
      </Box>
    </Box>
  );
}
