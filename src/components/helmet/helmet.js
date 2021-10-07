import React from "react";

import { Helmet } from "react-helmet";

const Title = ({ children }) => {
  return <Helmet>{children}</Helmet>;
};

export default Title;
