// es6 rest parameter

// function fun(...rest){
//     let sum = 1;
//     for(let i of rest){
//      sum*=i;
//     }
//     return sum;
//    }
//    console.log(fun(1,2));
//    console.log(fun(1,2,3));
//    console.log(fun(1,2,3,4));   
   

// rest operator

// rest with function and other arguments
function fun(a,b,...c){
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('poojitha'));
   }
   fun('vinay','kumar','mahesh','poojitha','midhun','sachin');
   