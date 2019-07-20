for (let i = 1; i <= 100; i++) {
    if (i%15 == 0) {
        console.log(String(i) +':FizzBuzz');
    }else if (i%3 == 0){
        console.log(String(i) +':Fizz');
    }else if(i%5 == 0){
        console.log(String(i) +':Buzz');
    }else {
        console.log(String(i));
    }
}