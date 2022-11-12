import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className=" flex justify-center items-center text-2xl font-bold bg-banner h-screen w-screen ">
      <NavLink to="/store">
        <button className="bg-white py-2 px-3 rounded-lg  ">Shop Now</button>
      </NavLink>
    </div>
  );
}

export default Home;
