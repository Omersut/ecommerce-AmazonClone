import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import CheckOut from "./components/pages/checkout";
import Home from "./components/pages/home";
import Login from "./components/pages/login/Login";
import Payment from "./components/pages/payment";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
