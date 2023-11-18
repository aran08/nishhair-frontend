const Profile = () => {
  return (
    <div className="bg-[#F1F3F6] w-full h-screen mt-[95px] flex flex-col items-center">
      <div className="w-10/12 border border-black flex gap-5">
      <div className="border border-black w-1/3 h-[500px] ">
        <div className=" w-[100%] h-[52px] flex gap-5 border border-black">
          <div className="border border-black w-12 h-[50px] rounded-full flex justify-center items-center ml-2">
            <img src="" alt="" />
          </div>
          <div className="border border-border h-[50px]">
            <p>Hello,</p>
            <p>Aran Choudhary</p>
          </div>
        </div>
        <div className="border border-black w-[100%] h-[426.5px] mt-5"></div>
      </div>
      <div className="border border-black w-full h-[500px]"></div>
      </div>
    </div>
  );
};

export default Profile;