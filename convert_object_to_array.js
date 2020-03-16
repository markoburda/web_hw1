// 1. **Convert Object to Array**

//Create a function that converts an object into array

function toArray(obj){
	res = [];
	for(var key of Object.keys(obj)){
		res.push([key, obj[key]]);
	}
	return res;
}

    // toArray({ key1: 'value1', key2: 'value2' }) // [["key1", "value1"], ["key2", "value2"]]
    // toArray({}) // [] Return an empty array if the object is empty.