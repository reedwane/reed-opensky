import { DataProvider } from "contexts/DataContext";
import LoadingProvider from "contexts/LoadingContext";
import Footer from "global/Footer";
import Header from "global/Header";
import Error from "pages/Error";
import Home from "pages/Home";
import Login from "pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppWrapper } from "styles/styledComponents/appWrapper";

function App() {
  return (
    <AppWrapper>
      <LoadingProvider>
        <DataProvider>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Error />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </DataProvider>
      </LoadingProvider>
    </AppWrapper>
  );
}

export default App;
