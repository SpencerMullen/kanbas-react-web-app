import ModuleList from "./ModuleList";
function Modules() {
  return (
    <div>
      <h2>Modules</h2>
      <button className="btn btn-secondary">Collapse All</button>
      <button className="btn btn-secondary">View Progress</button>
      <button className="btn btn-secondary">Publish All</button>
      <button className="btn btn-danger">+ Module</button>

      <ModuleList />
    </div>
  );
}
export default Modules;