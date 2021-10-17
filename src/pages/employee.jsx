
import { Component, React } from "react";
import "antd/dist/antd.css"
import { Form, Input, InputNumber, Button } from "antd";
class Employee extends Component {


  componentDidMount(){
    console.log(this.props.location,"1111")
  }

  render() {
    return (
      <Form name="nest-messages" style={{ marginLeft: "20%" }}>
        <Form.Item name={["user", "FirstName"]} label="FirstName"
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Input defaultValue={this.props.location.state.firstName} />
        </Form.Item>
        <Form.Item
          name={["user", "LastName"]}
          label="LastName"
          // rules={[
          //   {
          //     required: true,
          //   },
          // ]}
        >
          <Input defaultValue={this.props.location.state.lastName} />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber defaultValue={this.props.location.state.age} />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Address">
          <Input.TextArea defaultValue={this.props.location.state.address} />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
Employee.contextTypes = { router: () => React.PropTypes.func.isRequired };
export default Employee;
