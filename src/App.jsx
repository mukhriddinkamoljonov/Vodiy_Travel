import React, { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import Main from "./Layout/Main";
import Routers from "./Router/Routers";
import { GlobalStyle } from "./styles/GlobalStyle.styled";

function App() {
  const [loading, setLoading] = useState(false);
// sdfdsfdsf
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PropagateLoader color="#00a795" loading={loading} size={20} />
        </div>
      ) : (
        <Main>
          <GlobalStyle>
            <Routers />
          </GlobalStyle>
        </Main>
      )}
    </>
  );
}

export default App;
