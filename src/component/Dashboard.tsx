import React from "react";
import { NavComponent } from "./NavComponent";
import PageRoutes from "./PageRoutes";

const Dashboard: React.FC = () => {
   
    return (<div className="w-[100%]">

 
            <div >
            <NavComponent/>
            </div>
            <div className="Post">
            <PageRoutes/>
            </div>

    </div>  );
}

export default Dashboard;