## Query on JSON Object
A library for using "AND" or "OR" operator on JSON object.

#### Valid JSON Object only

This library will do the "AND" or "OR" operation on complex JSON object.

> Method description

```
qjson.query(JSON Object, parameter for operation (should be valid object), condition);
```

## Example: 
```
let jsonObj = [
    {
        make:  "toyota"
        model: "camry"
        year: "2019"
        color: "gray"
        type: "sedan"
    },
    {
        make:  "toyota"
        model: "corola"
        year: "2016"
        color: "yellow"
        type: "sedan"
    },
    {
        make:  "toyota"
        model: "camry"
        year: "2013"
        color: "red"
        type: "sedan"
    }
]
```

> Performing AND operation

```
let result = qjson.query(jsonObj, {make: "toyota", model: "camry"}, "AND");

output: [
    {
        make:  "toyota"
        model: "camry"
        year: "2019"
        color: "gray"
        type: "sedan"
    },
    {
        make:  "toyota"
        model: "camry"
        year: "2013"
        color: "red"
        type: "sedan"
    }
]
```

> Performing OR operation

```
let result = qjson.query(jsonObj, {make: "toyota", model: "camry"}, "OR");

output: [
    {
        make:  "toyota"
        model: "camry"
        year: "2019"
        color: "gray"
        type: "sedan"
    },
    {
        make:  "toyota"
        model: "corola"
        year: "2016"
        color: "yellow"
        type: "sedan"
    },
    {
        make:  "toyota"
        model: "camry"
        year: "2013"
        color: "red"
        type: "sedan"
    }
]
```
