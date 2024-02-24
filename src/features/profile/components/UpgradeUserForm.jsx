import React from "react";
import { useState } from "react";
import { useRef } from "react";
import useProfile from "../hooks/useProfile";
// import * as UpgradeApi from "../../../api/upgrade-api";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";

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
      toast.success("upgrade success");
      await fetchTargetUserProfile();
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
            <img src="" alt="" />
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
            className="h-[200px] w-[200px] bg-amber-500 cursor-pointer"
            onClick={() => qrCodeEl.current.click()}
          >
            upload your account
            <img src={qrCodeImage ? URL.createObjectURL(qrCodeImage) : null} />
          </div>
          <button type="submit" className="btn">
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}

export default UpgradeUserForm;
