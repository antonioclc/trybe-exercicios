let ang1 = 60
let ang2 = 60
let ang3 = 60

if (ang1 >= 0 && ang1 <=180 && ang2 >= 0 && ang2 <=180 && ang3 >= 0 && ang3 <=180) {
    if (ang1 + ang2 + ang3 === 180) {
        console.log('true')
    } else {
        console.log('false')
    }
} else {
    console.log('ângulo incorreto')
}
