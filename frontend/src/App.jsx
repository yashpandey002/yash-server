import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import AddProfile from "./pages/AddProfile";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-users" element={<AllUsers />} />
                <Route path="/add-profile" element={<AddProfile />} />
            </Routes>
        </>
    );
}

export default App;
