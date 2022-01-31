// const mass = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24], [25, 26], [27, 28], [29, 30], [31, 32], [35, 36], [37, 38], [39, 40]];
//  let allMass = []
// for (let i = 0; i < mass.length; i++) {
//  console.log(...mass[i])
//  allMass.push(...mass[i])
//  }
// console.log(allMass)

const mass = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16], [17, 18], [19, 20], [21, 22], [23, 24], [25, 26], [27, 28], [29, 30], [31, 32], [35, 36], [37, 38], [39, 40]];

let allMass = []

for (let i=0; i<mass.length; i++){
  for (let j=0; j<mass[i].length; j++){
  allMass.push(mass[i][j])
  }
}


console.log(allMass);

