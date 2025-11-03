import React from "react";

function BarChart({ array, sorting }) {
  return (
    <div className="bars">
      {array.map((val, i) => (
        <div
          key={i}
          className="bar"
          style={{
            height: `${val}px`,
            background: sorting
              ? "linear-gradient(to top, #ff6b6b, #ff8787)"
              : "linear-gradient(to top, #61dafb, #4dd0ff)",
            opacity: sorting ? 0.9 : 1,
          }}
        ></div>
      ))}
    </div>
  );
}

export default BarChart;
