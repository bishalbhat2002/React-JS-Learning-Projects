import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const [showQr, setShowQr] = useState(false);

  const generateQr = () => {
    setShowQr(true);
    setValue(inputValue);
    setInputValue("");
  };

  const handleInput = (e)=>{
     setInputValue(e.target.value)
     if(showQr)
       {
            setShowQr(false)
          } 
  }

  return (
    <>
      <section className="max-w-150 mx-auto p-5 rounded bg-red-300">
        <div className="flex justify-between gap-1">
          <input
            onChange={(e)=>handleInput(e)}
            type="text"
            name="input-text"
            value={inputValue}
            placeholder="Enter your Text here..."
            className="px-4 py-2 w-8/10 border rounded border-amber-50"
          />
          <button
            onClick={generateQr}
            className={`px-5 text-lg rounded bg-gray-100 hover:scale-110 transition-transform duration-200 ease-in-out active:scale-95 ${inputValue.trim === "" ? "hidden" : ""
            }`}
          >
            Generate
          </button>
        </div>

        {showQr === false ? (
          ""
        ) : (
          <div className="w-85 h-85 mx-auto mt-5 p-5 border border-amber-50 bg-white rounded">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "300px", width: "300px" }}
              value={value}
              viewBox={`0 0 256 256`}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default QrCodeGenerator;
