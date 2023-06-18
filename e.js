// function f() {
//  try {
//   throw '1';
//  } catch(e) {
//   console.log('2');
//   throw e;
//  } finally {
//   return true;
//  }
// }
// try {
//  console.log(f());
// } catch(e) {
//  console.log('3');
// }
// finally{
//   console.log('4');
// }


// var obj = { 
//   name: "vivek", 
//   getName: function(){ 
//   console.log(this.name); 
//  } 
// }     
// obj.getName();


// let fs = require('fs');
// console.log('1');
// fs.readFile('test.txt', 'utf8', function(error, data) {
//   try{
//     console.log('4')
//   }
//   catch (error) {
//     throw error;
//   }
//   console.log('2');
// });
// console.log('3');

// let sample = {prop1 :"hello"};
// sample.prop2 = "JS";
// console.log(sample);

// let re = /hello/i;
// let result = re.test('Hello from JavaScript');
// console.log(result)

// Function test(x, y, z) {
//  console.log(x + y + z);
// };
// test('hello', ' buddy ');

// E Unsupported engine {tive>
// >> npm WARN EBADENGINE   package: 'expo-cli@6.0.8',
// >> npm WARN EBADENGINE   required: { node: '>=12 <=16' },
// >> npm WARN EBADENGINE   current: { node: 'v18.12.0', npm: '8.19.2' }
// >> npm WARN EBADENGINE }