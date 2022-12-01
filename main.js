// alert('hi')
//     console.log('Rishi Gandhi')
// var number4 = 21;
// var number5 = 35;
// console.log(number4+number5);

// var marks = {
//     shubham : 90,
//     rishi : 100,
//     Sandy : 80
// };
//   array = [ 1,2,3,4,5,6,7,8, 'velya' ];
//     // for (var i=0; i< array.length;i++)

   
// array.push ("Rishi");
// console.log(array);
function clicked(){
        console.log('The button was clicked')
    }
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})