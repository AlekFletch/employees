import './employees-list-item.css';


const EmployeesListItem = ({name, salary, increase, rise, onDelete, onToggleProp, onChangeSalary}) => {


    let classItem = "list-group-item d-flex justify-content-between";

   if (increase) {
        classItem = classItem + " increase";
    }
    if (rise) {
        classItem = classItem + " like";
    }

    return (
        <li className={classItem}>
            <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
            <input type="text" onChange={onChangeSalary} className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}

export default EmployeesListItem;