import { DataContext, DataProvider } from "contexts/DataContext";
import LoadingProvider from "contexts/LoadingContext";
import Footer from "global/Footer";
import Header from "global/Header";
import Error from "pages/Error";
import Home from "pages/Home";
import Login from "pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LoadingProvider>
        <DataProvider>
          <BrowserRouter>
            <Header />

            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="/" element={<Home />} />

              <Route path="*" element={<Error />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </DataProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
