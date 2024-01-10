import Conditions from "../../components/content/Conditions";
import Payment from "../payment/Payment";
import { LiaLessThanSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { createOrder} from "../../redux/slice/order";
import { useNavigate } from "react-router-dom";

const Shipping = ({ orderDetail,cartData,setValue }) => {
  const  navigate = useNavigate()
  console.log(cartData);
  const dispatch = useDispatch();
  const  handleSubmit = () => {};
  let productArray = []
  for(let i of cartData && cartData?.data){
      productArray.push({
        "productId" : i.products[0]?.productId,
        "qty":i.products[0]?.id.quantity || 1,
      })
  }
  let data = {
    userId: cartData && cartData.data && cartData.data[0] && cartData.data[0]?.userId ,
    products: productArray,
    address: {
      locality: orderDetail?.Address,
      city: orderDetail?.City,
      state: orderDetail?.State,
      country: orderDetail?.Country,
      zipcode: orderDetail?.PIN,
    },
    status: "pending",
    paymentStatus: "pending",
  }; 

  const handlePayment = async () => {
    await dispatch(createOrder(data)); 
    };

  return (
    <div className="flex justify-end" onSubmit={handleSubmit}>
      <div className="w-11/12 pl-10">
        <div className="border-2">
          <div className="grid grid-cols-6 gap-4 h-10 py-1">
            <div className="flex justify-center items-center">Contact</div>
            <div className="col-start-2 col-span-4 flex items-center">
              {orderDetail?.email}
            </div>
            <div className="flex items-center justify-center">
              <a
                href="/information"
                className="text-xs font-semibold underline text-blue-700"
              >
                Change
              </a>
            </div>
          </div>
          <div className="border-t-2 grid grid-cols-6 gap-4 py-2">
            <div className="flex justify-center items-center">Ship to</div>
            <div className="col-start-2 col-span-4 flex items-center">
              {orderDetail?.Address },{" "}
              {orderDetail?.PIN },{" "}
              {orderDetail?.City },{" "}
              {orderDetail?.State },{" "}
              {orderDetail?.Country }
            </div>
            <div className="flex items-center justify-center">
              <a
                href="/information"
                className="text-xs font-semibold underline text-blue-700"
              >
                Change
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-semibold text-[18px] mt-8">Shipping method</p>
          <div className="my-2">
            <Payment />
          </div>
        </div>
        <div className="flex justify-between w-full mb-16">
          <div className="flex items-center gap-2">
            <a href="/information">
              <LiaLessThanSolid className="text-[#1F9BE2]" />
            </a>
            <div href="/checkbox" className="text-[#1F9BE2]" 
            onClick={()=>setValue("1")}
            >
              Return to information
            </div>
          </div>
          <button
            className="bg-[#105989] h-16 w-44 rounded text-white font-medium text-sm"
            onClick={handlePayment}
          >
            <h2 type="submit" onClick={()=>  navigate(`/order`)}>Continue to payment</h2>
          </button>
        </div>
        <Conditions />
      </div>
    </div>
  );
};

export default Shipping;