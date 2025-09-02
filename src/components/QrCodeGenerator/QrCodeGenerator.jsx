import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Header from "../SmallComponents/Header";
import Explanation from "../SmallComponents/Explanation";

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [showQr, setShowQr] = useState(false);

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

  const explained = "This is QR code generator. Here, We can generate QR code.";
  return (
    <>
      <div className="w-full bottom-10 flex justify-center">
      <Header heading="QR Code Generator"/>
      </div>
      <section className="w-90 lg:w-160 mx-auto p-5 rounded bg-red-300">
        <div className="flex justify-between gap-1">
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            name="input-text"
            value={inputValue}
            placeholder="Enter your Text here..."
            className="px-4 py-2 w-9/10 border rounded border-amber-50"
          />
          <button
            onClick={generateQr}
            className={`px-2 lg:px-5 text-sm font-semibold rounded bg-gray-100 hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 ${
              inputValue.trim === "" ? "hidden" : ""
            }`}
          >
            Generate
          </button>
        </div>

        {showQr === false ? (
          ""
        ) : (
          <div className="w-80 h-80 mx-auto mt-5 p-5 border border-amber-50 bg-white rounded">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={value}
              viewBox={`0 0 256 256`}
            />
          </div>
        )}

      </section>
      <Explanation explained={explained} className="mt-10 lg:mt-15" />
    </>
  );
};

export default QrCodeGenerator;
