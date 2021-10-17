import { Component, React } from "react";
import { Table, Divider, Tag } from 'antd';
import { Link } from "react-router-dom";
import "antd/dist/antd.css"
import store from '../store/index';
// import {hashHistory} from 'react-router'

const { Column, ColumnGroup } = Table;


class list extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();

    }

    del(index) {
        const ToDoList1 = JSON.parse(JSON.stringify([...this.state.list]))

        this.setState({ list: ToDoList1.filter(item => item.key !== index) })
        console.log(111)

        // console.log(index);
        // var lists=this.state.list;
        // lists.splice(index-1,1);
        // this.setState({list:lists})
        console.log(this.state.list);
    }

    // edit(firstName, lastName, age, address) {
    //     hashHistory.push({
    //         pathname: '/employee',
    //         query: {
    //             firstName: firstName,
    //             lastName: lastName,
    //             age: age,
    //             address: address
    //         },
    //     });
    // }

    render() {

        return (
            <div>

                <Table dataSource={this.state.list}>
                    <ColumnGroup title="Name">
                        <Column title="First Name" dataIndex="firstName" key="firstName" />
                        <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column
                        title="Tags"
                        dataIndex="tags"
                        key="tags"
                        render={tags => (
                            <span>
                                {tags.map(tag => (
                                    <Tag color="blue" key={tag}>
                                        {tag}<br />
                                    </Tag>
                                ))}
                            </span>
                        )}
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <Link to={{
                                    pathname: '/employee',
                                    state: {
                                        firstName: record.firstName,
                                        lastName: record.lastName,
                                        age: record.age,
                                        address: record.address
                                    }
                                }}>编辑</Link>
                                <Divider type="vertical" />
                                <a onClick={() => this.del(record.key)}>删除</a>
                            </span>
                        )}
                    />
                </Table>
            </div >
        )
    }

}

export default list;