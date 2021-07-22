// Function for change value of the bars
const barr_num_add = (val, { extend, static }) => {
	const barr_form = document.querySelector(`#barr-form-${extend}`)
	const barr_width = document.querySelector(`#barr-width-${extend}`)
	const barr_counter_text = document.querySelector(`.barr-counter-text-${extend}`)

	if ( barr_width && barr_counter_text ) {
		barr_width.classList = []
		barr_width.style.width = `${val}%`
		barr_counter_text.textContent = val
	}

	if ( static && barr_form ) {
		barr_form[0].value = val
	}
}

// Function for recibe new value for bars and calback for function of the change value
const barr_changes = extend => {
	const barr_form = document.querySelector(`#barr-form-${extend}`)

	barr_form.addEventListener("submit", e => {
		e.preventDefault()

		const barr_new_value = e.target[0].value
		
		barr_num_add(barr_new_value, { extend })
	})

	barr_form[0].onchange = e => {
		const barr_new_value = e.target.value

		barr_num_add(barr_new_value, { extend })
	}

}

// Function for content the initialice global functions 
const initialize_funct = () => {
	// initialize function for add listener to form for change bars
	barr_changes('uno')
	barr_changes('dos')

	// test for auto change number on load windows
	barr_num_add(50, { extend: 'uno', static: true })
	barr_num_add(80, { extend: 'dos', static: true })
}

window.onload = () => {
	initialize_funct()
}