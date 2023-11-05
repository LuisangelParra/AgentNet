import { LeftBar } from "../components/left-bar/left-bar";
import { TopBar } from "../components/top-bar/top-bar";

export function AgentDashboard() {
    return ( 
        <div className="dashboard">
            <div>
                <TopBar />
            </div>
            <div className="main">
                <LeftBar />
            </div>
            
        </div>
     );
}