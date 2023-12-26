import { RxCross1 } from "react-icons/rx";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { getData } from "../../redux/slice/cart";
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"


const Cart = () => {
  const dispatch = useDispatch()
  const [cartData, setData] = useState();

  console.log("cart data",cartData);
  
  const handleAllData = async () => {
    const res = await dispatch(getData());
    if (res) {
      setData(res?.data);
    } else {
      return false;
    }
  };

  useEffect(() => {
    handleAllData();
  }, []);

  return (
    <div className="w-[480px] z-[999999]">
      <div className="flex justify-center">
        <div className="border-b-[1px] flex justify-between items-center h-[70px] w-11/12 font-medium">
          <p>CART</p>
          <RxCross1 />
        </div>
      </div>
      
      {
        cartData && cartData?.data.length>0 ? (
      cartData && cartData?.data && cartData.data.map((item) => (
        <div key={item.id}>
          <div>{item.userId}</div>
          <div>{item.image}</div>
        </div>
        ))) : (
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
  );
};

export default Cart;
