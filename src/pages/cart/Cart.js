import { RxCross1 } from "react-icons/rx";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { getcartData } from "../../redux/slice/cart";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrFormSubtract } from "react-icons/gr";
import { MdAdd } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const [cartData, setData] = useState();
  console.log("cartData abc", cartData);
  const handleAllData = async () => {
    const res = await dispatch(getcartData());
    if (res) {
      setData(res?.data);
    } else {
      return false;
    }
  };
  const [count, setCount] = useState(1);
  function handleAdd () {
        setCount(count+1);
  }
  function handleSub () {
    if(count>1)
    {
    setCount(count-1);
    }
  }

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

      {cartData && cartData?.data.length > 0 ? (
        cartData &&
        cartData?.data &&
        cartData.data.map((item) => (
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
                          onClick={handleSub}
                          className={count === 1}
                        />
                        {count} 
                        <MdAdd onClick={handleAdd} />
                        </div>
                        <RiDeleteBin5Line className="text-[#E93636]" />
                      </div>
                    </div>
                    <div className="h-20 w-24 flex justify-center items-center font-medium text-[#0FB2AE]">
                      Rs.
                      <p>{`${data.productId?.price.mrp}`*count}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
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
  );
};

export default Cart;
