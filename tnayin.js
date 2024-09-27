//////////////////////////////////HowmWork1

// class A {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
  
//     calc() {
//       return this.x + this.y;
//     }
//   };
  
  
//   class B extends A {
//     constructor(x, y, z) {
//       super(x, y);
//       this.z = z;
//       this.caclValue = null;
//     }
  
//     static myMethod() {
//       console.log('static method')
//     }
  
//     changeCalcValue() {
//       this.caclValue = this.calc(this.x, this.y);
//     }
//   }
  
  
//   const b = new B(10, 20, 30);
//   b.changeCalcValue();
//   console.log(b);


function Foo(...args){


    this.args = args
    
    
    
    }
    
    Foo.prototype.res = function () {
        return args.reduce((total, current) => total + current, 0);
    }

    let boo = new Foo(2,3)
    
    
    let goo = new Foo(2,3,7)
    
    console.log(goo.res())
    
    goo.hello = function(){
    console.log("hello hello")
    }
    
    
    
    goo.res = "hello"
    goo.hello()
    console.log(goo.res)
    
    
    


/////////////////////////////// HomeWork2

// const obj1 = {
// 	a: {
// 		b: {
// 			c: {
// 				d: [
// 					{
// 						name: 'Ani',
// 						lastName: 'Smith',
// 						age: 21
// 					},
// 					{
// 						name: 'John',
// 						lastName: 'Smith',
// 						age: 21
// 					}
// 				]
// 			}
// 		}
// 	},
// 	name: 'Deep Copy',
// 	und: undefined,
// 	un: null
// };


function deepClone(obj) {

  if (obj === null || typeof obj !== 'object') {
    return obj;
  }


  if (Array.isArray(obj)) {
    let newArr = [];
    for (let i = 0; i < obj.length; i++) {
      newArr[i] = deepClone(obj[i]);  
    }
    return newArr;
  }


  if (typeof obj === 'function') {
    return obj.bind({});  
  }


  let clonedObj = Object.create(Object.getPrototypeOf(obj));  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);  
    }
  }

  return clonedObj;
}

let obj2 = deepClone(obj1)

console.log(obj2)
///////////////////////////////





///////////////////////////////////// HomeWork 3
const array = [ 4, 2, 9, 8, 6 ];

let a = [3,5,6,9]

function getMissedNumbers(array){

let min = Math.min(...array)
let max = Math.max(...array)
let res = []
let matching = []


for(let i = min; i<= max; i++ ){
matching.push(i)
}


for(let i = min; i< max; i++ ){
if(!array.includes(i)){
res.push(i)
}
}

return res
}

console.log(getMissedNumbers(array))
console.log(getMissedNumbers(a))




