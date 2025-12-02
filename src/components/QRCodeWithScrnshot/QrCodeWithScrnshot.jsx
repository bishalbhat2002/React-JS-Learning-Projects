import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";

const QrCodeWithScrnshot = () => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [img, setImg] = useState("");
  const [photoExplain, setPhotoExplain] = useState("");

  const generateQr = () => {
    if (inputValue.length > 0) {
      setShowQr(true);
      setValue(inputValue);
      setInputValue("");
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (showQr) {
      setShowQr(false);
    }
  };

  const handlePaste = (e) => {
    const item = e.clipboardData.items[0];
    if (item.type.startsWith("image")) {
      const file = item.getAsFile();
      setImg(URL.createObjectURL(file));
    }
  };

  const explained = "This is QR code generator along with the Screenshot. Here, We can generate QR code on top of that we can embbed the QR code on the Screenshot.";
  return (
    <>
      <div className="w-full bottom-10 flex justify-center">
        <Header heading="QR Code Generator" />
      </div>
      <section className="w-90 lg:w-160 mx-auto">
        <div className="flex justify-between gap-3 p-5 bg-zinc-600  border border-zinc-500 rounded">
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            name="input-text"
            value={inputValue}
            placeholder="Enter your Text here..."
            className="px-4 py-2 w-9/10 border rounded border-zinc-300 bg-zinc-500 text-zinc-200"
          />
          <button
            onClick={generateQr}
            className={`px-2 lg:px-5 text-sm font-semibold rounded bg-zinc-500 border border-zinc-300 text-zinc-100 hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 ${
              inputValue.trim === "" ? "hidden" : ""
            }`}
          >
            Generate
          </button>
          <input
            placeholder="Paste image (Ctrl+V)"
            className="border-none outline-1 outline-zinc-300 bg-zinc-100 text-center rounded-sm"
            onPaste={handlePaste}
          />
        </div>

        <div className="relative w-full mt-5 rounded-md border border-zinc-500 p-5 bg-zinc-600">
          {img && (
            <img
              src={img}
              className="mx-auto w-full border-zinc-500 border-3 rounded-md"
            />
          )}

          {showQr === false ? (
            ""
          ) : (
            <div className="absolute -top-[47px] -right-[25px] w-60 mx-auto mt-5 p-5 pt-0 border border-amber-50 bg-white rounded scale-60">
              <p className="text-lg text-center text-zinc-600 font-bold">
                Scan Me For video
              </p>
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={value}
                viewBox={`0 0 256 256`}
              />
            </div>
          )}

          {photoExplain && <div className="mt-3 bg-zinc-700 border border-zinc-400 px-4 py-2 rounded-md text-zinc-400 text-lg font-medium">
               <p>{photoExplain}</p>
          </div>}

        </div>
          
          <textarea
          type="text"
          rows={4}
          onChange={(e)=>setPhotoExplain(e.target.value)}
          className="mt-10 mx-auto w-90 h-15 px-4 py-2 text-md font-bold bg-zinc-700 border border-zinc-500 text-zinc-400 rounded lg:w-160 lg:text-lg">
          Explation of the Screenshot or QR code....
          </textarea>
      </section>
      <Explanation explained={explained} className="mt-10 lg:mt-15" />
    
    </>
  );
};

export default QrCodeWithScrnshot;
