import React from "react";
import { useState } from "react";
import { useRef } from "react";
import useProfile from "../hooks/useProfile";
// import * as UpgradeApi from "../../../api/upgrade-api";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import myQrCode from "../../../assets/mySlip.jpg";

function UpgradeUserForm() {
  const qrCodeEl = useRef(null);
  const [qrCodeImage, setQrCodeImage] = useState("");
  const [loading, setLoading] = useState(false);

  const { upgradeUser, fetchTargetUserProfile } = useProfile();

  const handleSubmitUpgrade = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!qrCodeImage) {
        toast.warn("please upload slip");
      }
      const formData = new FormData();

      if (qrCodeImage) {
        formData.append("slipSrc", qrCodeImage);
      }

      await upgradeUser(formData);
      await fetchTargetUserProfile();
      toast.info("waiting for admin verify");
      document.getElementById("upgrade account").close();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={handleSubmitUpgrade}>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1>Scan QR code to upgrade your account</h1>
          <div className="h-[200px] w-[200px] bg-amber-500 ">
            <img src={myQrCode} alt="" />
          </div>
          <input
            type="file"
            className="hidden"
            ref={qrCodeEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                setQrCodeImage(e.target.files[0]);
              }
            }}
          />
          <div
            className="h-[200px] w-[200px] bg-gray-200 cursor-pointer flex justify-center items-center border-dashed border-2 border-black"
            onClick={() => qrCodeEl.current.click()}
          >
            <img
              className=" z-10"
              src={qrCodeImage ? URL.createObjectURL(qrCodeImage) : null}
            />
            {!qrCodeImage ? <h1 className="z-0">+Add Slip Photo</h1> : null}
          </div>
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white"
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}

export default UpgradeUserForm;
