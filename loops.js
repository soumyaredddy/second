//using arrays with functions//
// var siblings = ["jay","sow","sunny"];
//
// for (x=[0];x<[3];x++)
//   console.log(siblings[x])
  // using function//
// var total = 10;
//
// for(X=0; X<10; X++)
// {
//   console.log(X);
// }
//-------------js--------------//
var student0 = {
  name : "sou",
  age : 18,
  greetins:function(){
    return "hi iam" +this.name+ "my age" +this.age+"years old";
  };
}
console.log(student0);
console.log(student0["name"]);
// var student1 = new object();
//     student1.name = "kavya";
//     student1.age = 50;
//     console.object(student1);
var student2 ={};
 student2.name ="aaa";
 student2.age =5;
 console.log(student2);
 var student=[];
 student.push(student0);
 student.push(student2);
 console.log(student);
