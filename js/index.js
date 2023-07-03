// $(document).ready(function () {

// });

const courses = [
    {
        id: 1,
        name: 'HTML',
        coin: 100
    },
    {
        id: 2,
        name: 'CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 4,
        name: 'React Native',
        coin: 400
    },
    {
        id: 5,
        name: 'CSS',
        coin: 500
    },
]

// tìm thấy giá trị đúng và sẽ return ngay giá trị đó chỉ trả ra 1 giá trị
// var course = courses.find((course, index) => {
//     return course.name === "CSS";
// })

//duyệt qua hết mảng và sẽ trả về tất cả giá trị thõa điều kiện 
// var listCourse = courses.filter((course) => {
//     return course.name === "CSS";
// })

// var listCourse = courses.map((newcourse, index) => {
//     // return {
//     //     id: newcourse.id,
//     //     name: `Khóa học:  ${newcourse.name}`,
//     //     coin: newcourse.coin + 10,
//     //     teacher: "Khoa Pham",
//     //     index: index
//     // }
//     return `<h2>${newcourse.name}</h2>`
// })

// console.log(listCourse.join(''));


var total = courses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.coin
}, 0)
console.log(total);