import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function IndexMe() {
  const [robots, setRobots] = React.useState<string>("index,follow");
  const [header, setHeader] = React.useState<string>("Index Me");

  useEffect(() => {
    setTimeout(() => {
      setRobots("noindex, nofollow");
      setHeader("Don't Index Me");
    }, 2500);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content={robots} />
      </Helmet>
      <h1>{header}</h1>
      <div>this should be indexed</div>
    </>
  );
}
