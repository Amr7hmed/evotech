//import { useState } from "react";

// import { useSelector } from "react-redux";
// import LoadingIcon from "./LoadingIcon";

export default function StaticContentHolder({ children }) {
  //const [loading, setLoading] = useState(true);

  //const lang = useSelector((state) => state.lang.data);
// <main dir={lang === "en" ? "ltr" : "rtl"}>
  return (
    <main>
      {false ? (
        // <LoadingIcon />
        <h1>loadin</h1>
      ) : (
        <>{children}</>
      )}
    </main>
  );
}
