





// 基础类型 string number null undefined boolean symbol void enum any never

const count: number = 123;

const str: string = '123';

const sNull: null = null;

const uUndefined: undefined = undefined;



// enum

enum Color { Red = 1, Blue}

let sEnum: Color = Color.Blue



// 对象类型 array tuple  Class {} Date

// array 1
let arr: number[] = [12,4];

// array 2
let arr2: Array<number> = [1, 2];
let arr4: Array<object> = [{}, {}];

let tuArr1: (number | string)[] = ['3', '2', 3];
let tuObj: {name: string, age: number}[] = [{name: 'e', age: 0}];

// 类型别名 type alias
type User = {
  name: string,
  age: number 
}
let tuObj1: User[] = [{name: 'e', age: 0}];

// 类实例数组
class Teacher {
  name: string;
  age: number
}
let tuObj2: Teacher[] = [
  new Teacher,
  {
    name: 'nate',
    age: 10
  }
]

// tuple 应用场景 读取特定类型的集合或者文件

const tupleArr = [1, 2, 'nate'];
let tuArr: [number, string] = [1, '3'];




// Date
const date = new Date()

// Function

const foo1 = function() {}

const foo2 = () => {}

// void 没有返回值
function foo(): void {
  console.log('null return');
}

// never 类型是那些总是会抛出异常
// 或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
function error(): never {
  throw new Error('')
}

// 解构赋值
function foo3( { first, second }: {first: number, second: number}): number {
  return first + second
}

foo3({first: 1, second: 2})

// 函数带参数定义
const bar = (str: string) => {
  return str
}

// 函数带参数定义 2
const bar1: (str: string) => string = (str) => {
  return str
}

// 字符串序列化类型
interface Person {
  name: 'string'
}
const objStr = '{"name": "nate"}';
const strRes: Person = JSON.parse(objStr);

// 动态值

let dyVal: number | string = 123

dyVal = 'str'

// 类型注解 和 类型推断、类型断言





