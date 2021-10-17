// 默认数据
const defaultState={
    inputValue: '', // input框中的内容
    list: [
        {
            "key": "1",
            "firstName": "John",
            "lastName": "Brown",
            "age": 32,
            "address": "New York No. 1 Lake Park",
            "tags": ["nice", "developer"],
        },
        {
            "key": "2",
            "firstName": "Jim",
            "lastName": "Green",
            "age": 42,
            "address": "London No. 1 Lake Park",
            "tags": ["loser"],
        },
        {
            "key": "3",
            "firstName": "Joe",
            "lastName": "Black",
            "age": 32,
            "address": "Sidney No. 1 Lake Park",
            "tags": ["cool", "teacher"],
        }
    ] // 列表中的每一项
};

//导出
export default (state=defaultState,action)=>{
    return state;
};
