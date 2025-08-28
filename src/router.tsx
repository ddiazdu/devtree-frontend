import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import Index from "./views/Index";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Index />}></Route>
          <Route path="/auth/login" element={<LoginView />}></Route>
          <Route path="/auth/register" element={<RegisterView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
