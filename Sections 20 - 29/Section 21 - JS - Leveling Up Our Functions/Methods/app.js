function print ()
{
    for (let i = 0; i < arguments.length; i++)
        console.log(arguments[i])
}

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    },
    meow1: function () {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    },

    meow2: () => {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
      }
}

let meowindirect = cat.meow;
meowindirect();
cat.meow();

print(" ")

let meowindirect1 = cat.meow1;
meowindirect1();
cat.meow1()
print(" ")

let meowindirect2 = cat.meow2;
meowindirect2();
cat.meow2()