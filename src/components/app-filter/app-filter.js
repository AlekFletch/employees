import "./app-filter.css";

import {Component} from "react";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {name: 'allEmployees', textName: 'Все сотрудники', classText: "btn btn-light"},
                {name: 'increasedEmployees', textName: 'На повышение', classText: "btn btn-outline-light"},
                {name: 'salaryMoreThousand', textName: 'З/П больше 1000$', classText: "btn btn-outline-light"}
            ],
            filter: ''
        }
    }

    onUpdateTable = (filter) => {

        this.setState(({buttons}) => ({
                buttons: buttons.map(item => {
                    if (item.name === filter) {
                        return {...item, classText: "btn btn-light"}
                    } else {
                        return {...item, classText: "btn btn-outline-light"}
                    }

                })
            })
        )
    }

    onUpdateFilter = (e) => {
        const filter = e.currentTarget.getAttribute('data-toggle');
        this.setState({filter})
        this.onUpdateTable(filter)
        this.props.onUpdateFilter(filter)
    }

    render() {

        const {buttons} = this.state;

        const elements = buttons.map(item => {
            const {name, textName, classText} = item;
            return (
                <button type="button"
                        className={classText}
                        data-toggle={name}
                        onClick={this.onUpdateFilter}>
                    {textName}
                </button>
            )
        })


        return (
            <div className="btn-group">
                {elements}
            </div>
        )
    }
}

export default AppFilter;