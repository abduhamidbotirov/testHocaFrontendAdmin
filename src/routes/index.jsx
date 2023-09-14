import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts/Posts";
import Admin from "../pages/Admin/Admin";

const index = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={< Posts />} />
                <Route path="/admin" element={< Admin />} />
            </Routes>
        </>
    );
};

export default index;