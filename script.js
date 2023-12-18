// // Update
// const onUpdate = (car) => {
//     // let updated = cars.map(value => value);
//     // let updated = cars.map(value => value.id === car.id ? 'yangilash' : 'yangilash emas');
//     // let updated = cars.map(value => value.id === car.id ? {...value, name: "Nissan", year: 2022} : value);
//     let updated = cars.map(value => value.id === car.id ? {...value, [car.key] : car.value} : value);

//     console.log(updated);
// }

// onUpdate({ id: 1, key: 'name', value: "Nissan" });

//////////////////////////////////////////////////////////////////////////////////
// Create
// const onCreate = (car) => {
//     // cars.push(car);
//     cars = [...cars, { id: cars.length + 1 , name: 'Nissan', year: 2022}];
// }

// onCreate();
// console.log(cars);

////////////////////////////////////////////////////////////////////////////////////

// Delete

// const onDelete = (ids) => {
//     let filteredData = cars.filter((value) => value.id !== ids);
//     console.log(filteredData);
// }

// onDelete(1);

///////////////////////////////////////////////////////////////////////////////////////////

// Read
// const onRead = () => {
//     let data = cars.forEach(({id, year, engine, name}) => {
//         console.log(id, name, year, engine);
//     })
// }

// onRead();

// CRUD => Create, Read, Update, Delete

// Scope

// const result = 5;

// function resultFunc() {
//     // const result = 10; // local variable
    // const result = 10;
//   console.log(result);
// }

// resultFunc();
// console.log(result); // 5

// block scope => if/else, for(), while, do/while, {};

// if (true) {
//     var a = 'Html';
//     let b = 'Css';
//     const c = 'JavaScript';
// }

// console.log(a);
// console.log(b);
// console.log(c);

// {
//     console.log(result);
//     // var result = 10;
//     // let result = 10;
//     // const result = 10
// }

// console.log(result);

// for(of) vs for(in)

// let obj = {
//     name: 'Test'
// }

// let arr = ['Test1', 'Test2'];
// let str = 'Webbrain!'

// for (let value of str) {
//     console.log(value);
// }

// console.log('name' in obj);
