import moment from "moment";
import React from "react";

const parseDate = (timestamp) => {
  const formattedDate = moment(timestamp).format("DD/MM/YYYY, HH:mm:ss");
  return formattedDate;
};

export default parseDate;
