import { useEffect, useState } from "react";

const Counter = () => {
  // Normal Variable
  let value = 10;

  // Local State Variable
  var [val, setVal] = useState(10);

  let [name, setName] = useState("Ram"); // let name = "Ram"

  let [cap, setCap] = useState(true); // let cap = true

  useEffect(()=>{
    console.log("useEffect Called")
  },[name])

  return (
    <>
      <div className="border border-red-500 py-5">
        <p>Counter</p>

        <p>{val}</p>

        <button
          className="bg-green-200 px-6 py-2"
          onClick={() => {
            // value = value + 1;
            setVal(val + 1); // Re-render
            console.log(val);
          }}>
          +
        </button>
        <button
          className="bg-red-200 px-6 py-2"
          onClick={() => {
            // value = value - 1;
            setVal(val - 1); // Re-render
            console.log(val);
          }}>
          -
        </button>
      </div>

      <div className="border border-red-500 py-5">
        <p>String Update</p>
        <p>{name}</p>
        <button
          onClick={() => setName("Sam")}
          className="bg-green-200 px-6 py-2">
          Update Name
        </button>
      </div>

      <div className="border border-red-500 py-5">
        <p>Update Boolean</p>
        <p>{cap ? "🟢" : "🔴"}</p>
        <button
          onClick={() => setCap(false)}
          className="bg-green-200 px-6 py-2">
          Update Boolean
        </button>
      </div>
    </>
  );
};

export default Counter