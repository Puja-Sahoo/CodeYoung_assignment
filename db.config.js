 module.exports={
     HOST:"locolhost",
     USER: "root",
     PASSWORD: "qwerty@123",
     DB:"translation",
     dialect:"mysql",
     pool:{
         max:25,
         min:0,
         acquire:30000,
         idle:10000
     }
 };
