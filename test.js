/*
Hi everyone, this is Nathan writing. The following code, written
in JavaScript, will output the string "Hello world!" if the
variable randomInt is greater than or equal to 5.

Otherwise, it will output "Smell ya' later, world!"

I'll accomplish this using the Math.floor and Math.random methods,
and string interpolation, all in a single function.
*/

const helloOrNah = () => {

    let randomInt = Math.floor(Math.random() * 11);

    hello = "Hello world!";

    smellYaLater = "Smell ya' later, world!";
    
    if (randomInt >= 5){
        console.log(hello);
    } else {
        console.log(smellYaLater);
    };
};

helloOrNah();