import "./app-info.css";

const AppInfo = ({numberOfEmployees, increasedEmployees}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Argo Web Soft</h1>
            <h2>Общее число сотрудников: {numberOfEmployees}</h2>
            <h2>Премию получат: {increasedEmployees}</h2>
        </div>
    )
}

export default AppInfo;