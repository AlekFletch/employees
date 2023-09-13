import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Oleg Ternov', salary: 800, increase: true, rise: true, id: 1},
                {name: 'Aleksandr Frolov', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Michael Saprunov', salary: 5000, increase: false, rise: false, id: 3}
            ],
            maxID: 4,
            term: '',
            filter: 'allEmployees'
        }
    }

    deleteItem = (id) => {
        console.log(id);
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })

    }

    addItem = (name, salary) => {

        let newItem = {name: name, salary: salary, increase: false, id: this.state.maxID};
        const newArr = this.state.data.concat(newItem);
        console.log(newArr);
        this.setState(({maxID}) => {
            return {
                data: newArr,
                maxID: maxID + 1
            }
        })
    }

    onToggleProp = (id, prop) => {
        console.log(`Increase this ${id}`)
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    }
                    return item;
                })
            })
        )
    }

    onChangeSalary = (id, salary) => {
        console.log({salary})
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, salary: salary}
                    }
                    return item;
                })
            })
        )
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onUpdateFilter = (filter) => {
        this.setState({filter})
    }

    onToggleFilter = (items, filter) => {
        if (filter === "salaryMoreThousand") {
            return items.filter(item => {
                return item.salary > 1000
            })
        }

        if (filter === "increasedEmployees") {
            return items.filter(item => {
                return item.increase
            })
        } else {
            return items
        }
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(this.onToggleFilter(data, filter), term)

        return (
            <div className="app">
                <AppInfo
                    numberOfEmployees={employees}
                    increasedEmployees={increased}/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        onUpdateFilter={this.onUpdateFilter}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}/>
                <EmployeesAddForm
                    addItem={this.addItem}/>
            </div>
        );
    }
}

export default App;
