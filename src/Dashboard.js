import Sidebar from "./Sidebar";

function Dashboard() {
    return (
        <div className="flex h-screen">
            {/* Sidebar on the Left */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <h1 className="text-2xl font-bold">Dashboard Recruteur</h1>
            </div>
        </div>
    );
}

export default Dashboard;
