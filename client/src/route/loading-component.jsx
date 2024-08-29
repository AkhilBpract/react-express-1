import React, { Suspense } from "react";

const LoadingComponent = (Component) => (props) => {
    console.log(props)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

export default LoadingComponent;
