const myObject={
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "swify by apple"
}

// FOR-IN LOOP
for(const key in myObject){
    // console.log(key)// only keys
    // console.log(myObject[key])// only values
    
    console.log(`${key} shortcut is for ${myObject[key]}`);
} 

const programming =["js", "rb","py","java","cpp"]

for(const key in programming){
    // console.log(key) print the indexes of array
    console.log(programming[key])
}

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"France");

for(const key in map){
    console.log(key);// Does not show any Output && Error for map FOR IN LOOP
}