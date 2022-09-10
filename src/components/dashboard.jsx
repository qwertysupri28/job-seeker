import Sidebar from './sidebar';
import Topbar from './topbar';
import LandingPage from './landingPage';

const Dashboard = () => {

    return (
        <>
          <Topbar />
          <div className="module_container">
            <Sidebar />
            <LandingPage />
          </div>
        </>
    );
};

export default Dashboard;