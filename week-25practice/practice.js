const obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
}

const newobj = Object.assign({}, obj, {
    key4: "newValue"
});

console.log("after assign value", newobj)