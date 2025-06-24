import { useState } from "react";

const Comment = () => {
  // Local State Variable
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  // Object - to Reduce the No of States
  const [comment, setComment] = useState({ name: "", message: "" }); // Default Value

  // Array
  const [data, setData] = useState([]);

  return (
    <>
      <p>Comment Component</p>

      <div className="flex flex-col justify-start items-start gap-4">
        {/* name */}
        <input
          className="border border-green-200"
          onChange={(e) => {
            setComment((prev) => {
              return { ...prev, name: e.target.value };
            }); // Re-Render
          }}
        />

        {/* message */}
        <input
          className="border border-green-200"
          onChange={(e) => {
            setComment((prev) => {
              return { ...prev, message: e.target.value };
            });
          }}
        />

        <button
          onClick={() =>
            setData((prev) => {
              return [...prev, comment];
            })
          }>
          Submit
        </button>
      </div>

      <p>name:{name}</p>
      <p>message:{message}</p>
      <p>comment:{JSON.stringify(comment)}</p>

      <p>data:{JSON.stringify(data)}</p>
    </>
  );
};

export default Comment