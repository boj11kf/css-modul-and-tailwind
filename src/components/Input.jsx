import React from 'react';

/* 
  Tailwind eseteben ez egy jo pelda arra, hogyan a
  leghasznosabb kihasznalni a lehetosegeit

  keszitunk egy custom componenst, abba megadjuk a
  megejeleniteshez szukseges tailwindet es felteteleke, majd
  hasznajuk ahol szuksegunk van ra.

*/

const Input = ({ label, invalid, ...props }) => {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if(invalid){
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-300"
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }
  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  )
};

export default Input;