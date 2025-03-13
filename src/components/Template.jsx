import { Outlet } from "react-router-dom";
import NavBar from "./Common/NavBar";

export function Template() {
    return (
        <>
            <NavBar />
            <div style={{marginTop: "60px"}}>
                <Outlet />
            </div>
        </>
    );
}
