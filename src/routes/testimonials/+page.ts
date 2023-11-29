import { getTestimonialHTML } from "$lib/testimonials"

/** @type {import('./$types').PageLoad} */
export function load(data:{ params:any }) {
	return {content: getTestimonialHTML()}
}

export function sortCardContainers () {
	document.querySelectorAll('.card-container').forEach((container)=>{
        let myContainer = container as HTMLElement
        let firstCard = myContainer.querySelector('.card')
		if (firstCard) {
			while (myContainer.querySelector('.column')) {
				myContainer.querySelectorAll('.column').forEach(column=>{
					let firstCard = column.querySelector('.card')
					if (firstCard) {
						myContainer.appendChild(firstCard)
					} else {
						column.remove()
					}
				})
			}
			// Divide the container into columns and put all elements into them
			let containerWidth = myContainer.offsetWidth/*  - (parseFloat(window.getComputedStyle(myContainer, null).getPropertyValue('padding')) * 2) */
			let childWidth = parseFloat(window.getComputedStyle(firstCard, null).getPropertyValue('min-width')) + ((parseFloat(window.getComputedStyle(firstCard, null).getPropertyValue('margin'))/*  + parseFloat(window.getComputedStyle(child, null).getPropertyValue('padding')) */) * 2)
			let numberOfColumns = Math.floor(containerWidth / childWidth)
			let columns = []
			for (let i = 0; i < numberOfColumns; i++) {
				let column = document.createElement('div')
				column.classList.add('column')
				myContainer.appendChild(column)
				columns.push(column)
			}
			let cards = myContainer.querySelectorAll('.card')
			let newCardWidth = (containerWidth / numberOfColumns) - (parseFloat(window.getComputedStyle(firstCard, null).getPropertyValue('margin')) * 2)
			for (let i = 0; i < cards.length; i++) {
				let card = cards[i] as HTMLElement
				card.style.width = newCardWidth + 'px'
				columns[i % numberOfColumns].appendChild(card)
			}
		}
	})
}

function generateClickableStars () {
	let stars = ""
    for (let i = 0; i < 5; i++) {
        stars+=`<span onclick="
			event.target.parentElement.parentElement.querySelector('[name=\\'rating\\']').value = ${i+1};
			for (let j = 0; j < ${i+1}; j++) {
				event.target.parentElement.querySelector(':nth-child('+(j+1)+')').innerHTML = '★'
			}
			for (let j = ${i+1}; j < 5; j++) {
				event.target.parentElement.querySelector(':nth-child('+(j+1)+')').innerHTML = '☆'
			}
		">☆</span>`
    }
	return stars
}

export const clickableStars = generateClickableStars()