// const phone = {
//     color: "red",
//     year: 1999,
//     price: 15,
//     screen: 13,
//     define: (a, b, c, d) => {
//         this.color = a;
//         this.year = b;
//         this.price = c;
//         this.screen = d;
//         return (
//             "phone color is: " +
//             this.color +
//             " its year of production is: " +
//             this.year +
//             " its  price is: " +
//             this.price +
//             "$ its screen size is: " +
//             this.screen +
//             "inch"
//         );
//     },
//     ret: () => {
//         return this;
//     },
// };

// console.log(phone.define("white", 1995, 20, 15));
// console.log(phone.define("blue", 1995, 20, 15));
// console.log(phone.ret());
// console.log(this);

const btn = document.querySelector(".button");
const name = prompt("What is your name ");
const content = document.querySelector(".content");
let counter = 0;
btn.addEventListener("click", () => {
    counter++;
    if (counter % 2 !== 0) {
        btn.innerHTML = "show";
        content.style.display = "none";
    } else {
         btn.innerText = "close";
        content.style.display = "block";
        if (name.toLowerCase() === "nawras" || name === "نورس") {
            content.style.backgroundColor = "purple";
            content.innerHTML = "هلا بروحي ^-^";
        } else {
            content.style.backgroundColor = "red";
            content.innerHTML = "اقلب وجهككككككككككككككك";
        }
    }
});
// let pop = 10e6;
// pop += 1;
// console.log(`ahmad
// ali
// obada
// ibrahim`);
