interface Testimonial {
    name: string,
    date: string,
    city: string,
    text: string,
    stars: number,
}

export function getTestimonialHTML () {
	let testimonialsHTML = ""
	testimonials.forEach(testimonial=>{
		let first80 = /^.{80}[^\s]+\s/.exec(testimonial.text)
        let firstText = ""
        let secondText = ""
		if (first80) {
			firstText = first80[0] // Cut off at word boundary if possible.
			secondText = testimonial.text.slice(firstText.length)
		} else {
			firstText = testimonial.text
		}
		testimonialsHTML += `
			<div class="card">
				<div class="stars">${"★".repeat(Math.round(testimonial.stars)) + "☆".repeat(Math.round(5 - testimonial.stars))}</div>
				<div class="name">${testimonial.name}</div>
				<div class="information">
					${testimonial.date} | ${testimonial.city}
				</div>
				<div class="text">
					${firstText}
					${secondText ? `
						<span class="expanded">${secondText}</span>
						<span class="contracted">...</span>
					` : ''}
				</div>
				${secondText ? `
					<div class="show-more" onclick="
                        const target = event.target;
                        let expanded = target.parentElement?.querySelector('.text .expanded');
                        let contracted = target.parentElement?.querySelector('.text .contracted');
                        if (expanded && contracted) {
                            expanded.style.display = 'inline';
                            contracted.style.display = 'none';
                        }
                        target.remove();
                    ">(Show more)</div>
				` : ''}
			</div>
		`
	})
    return testimonialsHTML
}

const testimonials:Testimonial[] = [ 
    { name: 'Lilly', date: 'October 31, 2021', city: 'Hayden, ID', text: 'This is a sample review, but I loved the service and the quality of the work. I will definitely be using them again.', stars: 5, }, 
    { name: 'Tyler', date: 'January 8, 2022', city: 'Denver, CO', text: 'This is a sample review, but I loved the service.', stars: 4, }, 
    { name: 'Preston', date: 'February 1, 2022', city: 'Seattle, WA', text: 'This is a sample review, but I loved the service and the quality of the work. I will definitely be using them again. I will definitely be using them again.', stars: 5, }, 
    { name: 'Nancey', date: 'May 15, 2021', city: 'Los Angeles, CA', text: 'This is a sample review, but I loved the service and the quality of the work. I will definitely be using them again many times.', stars: 5, }, 
    { name: 'Arnold', date: 'March 21, 2022', city: 'Portland, OR', text: 'This is a sample review, but I loved the service and the quality of the work.', stars: 4, }, 
    { name: 'Ronald', date: 'April 17, 2021', city: 'New York, NY', text: 'This is a sample review, but I loved the service and the quality of the work. I will definitely be using them again. I loved the service and the quality of the work. I will definitely be using them again.', stars: 5, }, 
    { name: 'John', date: 'October 31, 2021', city: 'Hayden, ID', text: 'This is a sample review, but I loved the service and the quality of the work. I will definitely be using them again.', stars: 5, }, 
    { name: 'Dante', date: 'April 17, 2021', city: 'New York, NY', text: 'This is a sample review, but I loved the service and the quality of the work. I will definitely be using them again. I loved the service and the quality of the work. I will definitely be using them again.', stars: 5, }, 
    { name: 'Ed', date: 'January 8, 2022', city: 'Denver, CO', text: 'This is a sample review, but I loved the service.', stars: 4, }, 
    { name: 'Justin', date: 'February 1, 2022', city: 'Seattle, WA', text: 'This is a sample review, but I loved the service and the quality of the work. I will definitely be using them again. I will definitely be using them again.', stars: 5, }, 
    { name: 'Taylor', date: 'May 15, 2021', city: 'Los Angeles, CA', text: 'This is a sample review, but I loved the service and the quality of the work. I will definitely be using them again many times.', stars: 5, }, 
    { name: 'Charlie', date: 'March 21, 2022', city: 'Portland, OR', text: 'This is a sample review, but I loved the service and the quality of the work.', stars: 4, }, 
]