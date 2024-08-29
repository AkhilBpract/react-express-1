import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Helmet } from "react-helmet-async";
import { DOMAIN_NAME } from "../config";

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => {
  const favicon = localStorage.getItem("favicon");
  return (
    <>
      <Helmet>
        <title>
          {title} | {DOMAIN_NAME}
        </title>
        <link rel="apple-touch-icon" sizes="180x180" href={favicon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
        <link rel="shortcut icon" href={favicon} type="image/png/ico" />
        {meta}
      </Helmet>

      <div ref={ref} {...other}>
        {children}
      </div>
    </>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
