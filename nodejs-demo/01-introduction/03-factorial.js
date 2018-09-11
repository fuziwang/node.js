#!/usr/bin/node

var factorial = n =>{
  if(n==1||n==0)
    return 1;
  else
    return n*factorial(n-1);
};

var sum = factorial(10);
console.log(sum);

/*
   factorial(n)=>{
      var sum = 1;
      if(n==0)
        return 1;
      for(var i = 2;i<=n;i++)  sum *=i;
      return sum;
   }

   factorial(10);
*/
