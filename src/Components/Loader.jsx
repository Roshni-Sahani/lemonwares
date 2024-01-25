import footlogo from "../assets/images/footlogo.webp"
const Loader = () => {
  return (
    <div>
      <div className="bg-[#B00000] h-screen fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center z-40">
        <div role="status" className=" animate-bounce">
          <img src={footlogo} alt="img" />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
