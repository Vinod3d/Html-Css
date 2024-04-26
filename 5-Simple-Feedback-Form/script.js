const allStar = document.querySelectorAll('.star');
const ratingValue = document.querySelector('.rating input');

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

        console.log(ratingValue.value)
		allStar.forEach(i=> {
			i.classList.replace('fa-solid', 'fa-regular')
			i.classList.remove('active-rating')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('fa-regular', 'fa-solid')
				allStar[i].classList.add('active-rating')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})
























// const allStar = document.querySelectorAll('.star');
// const ratingValue = document.querySelector('.rating input');

// allStar.forEach((item, idx) => {
//     item.addEventListener('click', function () {
//         let click = 0;
//         ratingValue.value = idx + 1;

//         allStar.forEach((star, i) => {
//             console.log('i', i, 'idx', idx)
//             if (i <= idx) {
//                 star.classList.replace('fa-regular', 'fa-solid');
//                 star.classList.add('active-rating');
//             } else {
//                 star.classList.replace('fa-solid', 'fa-regular');
//                 star.classList.remove('active-rating');
//                 star.style.setProperty('--i', click);
//                 click++;
//             }
//         });
//     });
// });
