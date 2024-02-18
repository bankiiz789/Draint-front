import React from "react";
import Modal from "../components/Modal";
import LoginForm from "../features/auth/components/LoginForm";

function LandingPage() {
  return (
    <div
      className="hero h-[calc(100vh-64px)] w-full bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="  font-black text-green-800 leading-tight text-4xl">
            KEEP <span className=" underline">YOUR</span> STORY ALIVE
          </h1>
          <p className="py-[2rem] text-l text-black">
            Enjoy with good story from everyone around you <br />
            because Life is story ,Let's tell us
          </p>

          <Modal
            title="Create your Own"
            className="btn bg-white border-2 border-amber-500 hover:bg-amber-500 hover:text-white outline-none rounded-full"
          >
            <LoginForm />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
