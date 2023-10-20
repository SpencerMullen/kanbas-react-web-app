import ModuleList from "../Modules/ModuleList";


function Home() {
    return (
        <div>
            <h2>Home</h2>
            <div>
                <button className="btn btn-secondary">Collapse All</button>
                <button className="btn btn-secondary">View Progress</button>
                <button className="btn btn-secondary">Publish All</button>
                <button className="btn btn-danger">+ Module</button>
                <ModuleList />
                <h2>Status</h2>
            </div>
        </div>
    );
}
export default Home;