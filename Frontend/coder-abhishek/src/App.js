import logo from "./logo.svg";
import "./App.css";
import ChatApp from "./component/ChatApp";
import Blog from "./component/blog/Blog";
import Dashboard from "./component/dashboard/Dashboard";
import MyPortfolio from "./component/portfolio/MyPortfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/chat" element={<ChatApp />}></Route>
        <Route path="/portfolio" element={<MyPortfolio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
