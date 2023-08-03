import React from "react";

const CountryInfoItem = ({ label, content }) => {
  return (
    <div>
      <b className="text-slate-200 text-lg">{label}: </b>
      <span className="text-slate-200 text-lg">{content}</span>
    </div>
  );
};

export default CountryInfoItem;
