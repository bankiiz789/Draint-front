import React from "react";
import Modal from "../components/Modal";
import LoginForm from "../features/auth/components/LoginForm";

function LandingPage() {
  return (
    <div
      className="flex justify-around items-center h-[calc(100vh-64px)] px-4 bg-cover bg-blend-darken"
      //   style={{
      //     backgroundImage: `url(https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      //   }}
    >
      <div className="text-center flex flex-col justify-center items-start">
        <h1 className="  font-black text-green-800 leading-tight text-4xl">
          KEEP <span className=" underline">YOUR</span> STORY ALIVE
        </h1>
        <div className=" text-left">
          <p className="py-[2rem] text-l">
            Enjoy with good story from everyone around you <br />
            because Life is story ,Let's tell us
          </p>
        </div>
        {/* <button className="btn bg-amber-500 hover:bg-amber-600 text-white rounded-full">
          Create your own
        </button> */}
        <Modal title="Create your Own">
          <LoginForm />
        </Modal>
      </div>
      <div className="  bg-slate-200 border border-green-400">
        picture
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default LandingPage;
