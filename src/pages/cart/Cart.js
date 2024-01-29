import { RxCross1 } from "react-icons/rx";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { deletecartData, getcartData } from "../../redux/slice/cart";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrFormSubtract } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "@mui/material";

const Cart = ({ setShowDrawer }) => {
  const dispatch = useDispatch();
  const [cartData, setData] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [checkOut, setcheckOut] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleAllData = async () => {
    const res = await dispatch(getcartData());
    if (res) {
      setData(res?.data);
    } else {
      return false;
    }
  };
  const handleSub = (id) => {
    setData((prevData) => ({
      data: prevData.data.map((item) => ({
        ...item,
        products: item.products.map((data) => {
          if (data.productId === id) {
            return {
              ...data,
              qty: Math.max(1, data.qty - 1), // Ensure quantity doesn't go below 0
            };
          }
          return data;
        }),
      })),
    }));
  };
  
  const handleAdd = (id) => {
    setData((prevData) => ({
      data: prevData.data.map((item) => ({
        ...item,
        products: item.products.map((data) => {
          if (data.productId === id) {
            return {
              ...data,
              qty: data.qty + 1,
            };
          }
          return data;
        }),
      })),
    }));
  };
  

  useEffect(() => {
    handleAllData(setData);
  }, []);

  useEffect(() => {
    if (cartData && cartData?.data.length > 0) {
      const totalPrice = cartData.data.reduce(
        (acc, item) =>
          acc +
          item.products.reduce(
            (productAcc, data) =>
              productAcc + data.productId.price.mrp * data.qty,
            0
          ),
        0
      );
      setTotalPrice(totalPrice);
    }
  }, [cartData]);

  const handleDelete = (item) => {
    try {
      dispatch(deletecartData(item));
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      setcheckOut(true);
    } else {
      console.log('Accept T&C to move Next Step');
    }
  };

  return (
    <div className=" w-[380px] md:w-[480px] z-[999999]  ">
      <div className="flex justify-center">
        <div className="border-b-[1px] flex justify-between items-center h-[70px] w-11/12 font-medium">
          <p>CART</p>
          <RxCross1
          onClick={()=>setShowDrawer(null)}
          />
        </div>
      </div>
      <div>
        {cartData && cartData?.data.length > 0 ? (
          cartData &&
          cartData?.data &&
          cartData.data.map((item) => (
            <>
              <div key={item.products} className="flex justify-center py-2">
                <div className="flex gap-1 w-11/12">
                  {item &&
                    item?.products &&
                    item?.products.map((data) => (
                      <div key={data} className="flex gap-5 justify-between">
                        <div>
                          <img
                            src={data.productId?.image}
                            alt=""
                            className="h-36 w-26"
                          />
                        </div>
                        <div className="w-[250px]">
                          <p>
                            {data.productId?.title?.longTitle}
                            {data.productId?.title?.shortTitle}
                          </p>
                          <div className="flex gap-3 items-center pt-4">
                            <div className="border-2 border-black flex gap-2 items-center rounded-2xl px-2 py-1">
                              <GrFormSubtract
                                onClick={() => handleSub(data.productId)}
                              />
                              {data.qty}
                              <MdAdd
                                onClick={() => handleAdd(data.productId)}
                              />
                            </div>
                            <RiDeleteBin5Line
                              className="text-[#E93636]"
                              onClick={() => handleDelete(item.id)}
                            />
                          </div>
                        </div>
                        <div className="h-20 w-24 flex justify-center items-center font-medium text-[#0FB2AE]">
                          Rs.
                          <p>{`${data.productId?.price.mrp * data.qty}`}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="flex-col flex justify-center items-center h-[90vh]">
            <MdOutlineRemoveShoppingCart className="h-[100px] w-[100px]" />
            <p className="text-[17px] text-black py-5">
              Your cart is currently empty.
            </p>
            <a
              href="/product"
              className="bg-[#18B5B1] w-[170px] h-[50px] rounded-3xl text-white font-medium flex items-center justify-center"
            >
              Start Shopping
            </a>
          </div>
        )}
      </div>
      {cartData && cartData?.data.length > 0 && (
        <div>
          <div className="flex justify-between px-6 text-sm font-semibold h-10 border-y-2 items-center">
            <p>ADD ORDER NOTE</p>
            <IoMdAdd />
          </div>
          <div>
            <p className="text-sm font-medium px-6 pt-5">
              Tax included. Shipping calculated at checkout.
            </p>
            <div className="flex px-8 items-center">
              <Checkbox 
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p className="text-xs">
                I agree to the shipping policy and the return and
                exchange policy.
              </p>
            </div>
            <div className="flex flex-col items-center py-8">
              <Link href='/checkout'>
                <button
                  className="border-2 bg-[#0FB2AE] text-white font-semibold rounded-3xl w-60 h-10 mb-2"
                  onClick={handleSubmit}
                  disabled={!isChecked}
                >
                  {checkOut} CHECKOUT - RS.{totalPrice}
                </button>
              </Link>
              <p>VIEW CART</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
