import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container flex justify-center items-center gap-16 h-screen mx-auto">
      <Link to="/newsApi" className="bg-slate-200 p-2">
        News Api
      </Link>
      <Link to="/theguardian" className="bg-slate-200 p-2">
        The Guardian
      </Link>
      <Link to="/worldApi" className="bg-slate-200 p-2">
        World Api
      </Link>
    </div>
  );
};

export default Main;
