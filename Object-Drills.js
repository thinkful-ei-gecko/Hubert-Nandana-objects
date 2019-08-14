// OBJECT DRILLS

// 1. Object initializers and methods

function loaf() {
    return {
        flour: 300,
        water: 210,
        hydration() {
            return (this.water / this.flour) * 100;
        }
    }
}

let bread = loaf();
console.log(bread.hydration());