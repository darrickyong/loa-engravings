import React from 'react';
import { MagnifyingGlass } from "react-loader-spinner";

const LoadingGlass = () => {
  return (
    <MagnifyingGlass
      visible
      height="500"
      width="500"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      // glassColor="#0a1526"
      // color="#f5efdc"
      glassColor="#f5efdc"
      color="#00ffff"
    />
  );
}
 
export default LoadingGlass;