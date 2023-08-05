


// const subTotal = () =>{
//   let total = 0;
//   [...document.querySelectorAll('.count')].
//   forEach((count) =>{
//      total = Number(count.querySelector('.input').value) *
//      Number(count.querySelector('.input').dataset.price);
//      document.querySelector('.subtotal').
//      textContent = total;
//   });

// };
// const calculateSeparateItem = (count, action) =>{
//   let total = 0;
//   const input = count.querySelector('.input');
//   switch(action){
//     case 'plus':
//     input.value++;
//     total = input.value * Number(input.dataset.price);
//     count.querySelector('.subtotal').
//     textContent = total;
//     break;
//     case 'minus':
//     if (input.value != 0){
//     input.value--;
//     total = input.value * Number(input.dataset.price);
//     count.querySelector('.subtotal').
//     textContent = total;
//     }
//     break;
//   }
// };
// document.getElementById('basket')
// .addEventListener('click', (event) => {
//   if(event.target.classList.contains('minus')){
//     calculateSeparateItem(
//       event.target.closest('.basket__item'),'minus');

//   }
//   if(event.target.classList.contains('plus')){
//     calculateSeparateItem(
//       event.target.closest('.basket__item'),'plus');

//   }
// });
// document.querySelectorAll('.triger__item').
// forEach((item) => item.addEventListener('click', function(e){
//   e.preventDefault();
//   document.querySelectorAll('.triger__item').
// forEach((child) => child.classList.remove('--active'));

//  item.classList.add('--active');
//  console.log(item.dataset.price);
// })
// );