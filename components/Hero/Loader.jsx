import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        color: "white",
        height: "100vh",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Good things take some time
      <div className="pl-2 grid gap-2">
        <div className="flex animate-pulse items-center justify-center space-x-1">
          <div className="bg-primary h-2 w-2 rounded-full"></div>
          <div className="bg-primary h-2 w-2 rounded-full"></div>
          <div className="bg-primary h-2 w-2 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
