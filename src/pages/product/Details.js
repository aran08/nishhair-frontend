import { useEffect, useState } from "react";
import {AiFillFacebook} from "react-icons/ai";
import {BsTwitter,BsPinterest} from "react-icons/bs"
import { GrFormSubtract } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import {useDispatch} from "react-redux"
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/slice/product";
import { toast } from 'react-toastify';
import { createData } from "../../redux/slice/cart";

const Details = () => {
  
  const params = useParams();
  const dispatch = useDispatch()
  const {id} = params;
  const [product,setProduct]= useState();
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

  const handleAddDetails =async () => {
    const res = await dispatch(getProduct(id))
    if(res){
      setProduct(res)
    }else{
      return false
    }
  }

  useEffect(()=>{
    handleAddDetails()
  },[])

  const handleAddData =async () => {
    const res = await dispatch(createData(id))
    console.log(res)
    if(res){
      toast.success("Added Successfully !", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }else{
      return false
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className=" flex mt-28">
        <div className="w-[59%] justify-end gap-1 flex flex-wrap">
          {product && product?.productImages && product.productImages.length>0 && product.productImages.map((item) => (
            <div key={item.id} className="flex">
              <div className="">
                <img src={item.path} alt="" className="w-[400px] h-[535px]" />
              </div>
            </div>
          ))}
        </div>

        <div className="w-[41%] flex justify-center pl-16 pr-16">
        
          <div>
            <p className="text-xs">NISH HAIR</p>
            <p className="text-[26px] font-semibold">{product && product?.title.longTitle} {product && product?.title.shortTitle}</p>
            <p className="py-1">⭐⭐⭐⭐⭐ 7 Reviews</p>
            <p className="text-[#0FB2AE] my-1 text-lg font-semibold">Rs. {product && product?.price.mrp}</p>
            <p className="text-sm font-light">Inclusive of all taxes and shipping.</p>
            <p className="text-sm font-bold mt-4">or Pay ₹275 now. Rest in 0% interest EMIs</p>
            <p className="text-normal font-light mb-4">UPI & Cards Accepted, Online approval in 2 minutes</p>
            <div className="flex gap-3">
              <div className="w-[90px] h-[50px] border border-[#0FB2AE] rounded-3xl flex justify-between items-center px-2">
              <GrFormSubtract onClick={handleSub}
               className={`${count === 1 ? "text-gray-100":""}`}
              />
              {count}
              <MdAdd onClick={handleAdd}/>
              </div>
              <button className="w-[350px] h-[50px] border border-[#0FB2AE] rounded-3xl text-sm text-[#0FB2AE] font-semibold" onClick={handleAddData}>ADD TO CART</button>
            </div>
            <div className="">
              <button className="w-11/12 h-[50px] rounded-3xl bg-[#0FB2AE] my-3 text-sm text-white font-semibold">BUY IT NOW</button>
            </div>
            <p className="text-[#FF1F1F] text-sm font-bold">Please note: there is no return or exchange applicable on discounted, sale and coupon bought items.</p>
            <div className="flex gap-5 my-5">
               <AiFillFacebook/>
               <BsTwitter/>
               <BsPinterest/>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Details;
