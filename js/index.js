const barr_width = document.querySelector('#barr-width')
const barr_counter_text = document.querySelector('.barr-counter-text')

const barr_width_dos = document.querySelector('#barr-width-dos')
const barr_counter_text_dos = document.querySelector('.barr-counter-text-dos')

// Function for change value of the bars
const barr_num_add = (val, static) => {
	const barr_form = document.querySelector('#barr-form')

	barr_width.classList = []
	barr_width.style.width = `${val}%`
	barr_counter_text.textContent = val

	if ( static ) {
		barr_form[0].value = val
	}
}

// Function for recibe new value for bars and calback for function of the change value
const barr_changes = () => {
	const barr_form = document.querySelector('#barr-form')

	barr_form.addEventListener("submit", e => {
		e.preventDefault()

		const barr_new_value = e.target[0].value
		
		barr_num_add(barr_new_value)
	})

	barr_form[0].onchange = e => {
		const barr_new_value = e.target.value

		barr_num_add(barr_new_value)
	}

}

// Clone function 1
const barr_num_add_dos = (val, static) => {
	const barr_form_dos = document.querySelector('#barr-form-dos')

	barr_width_dos.classList = []
	barr_width_dos.classList.add(`barr-width-${val}`)
	barr_counter_text_dos.textContent = val

	if ( static ) {
		barr_form_dos[0].value = val
	}
}

// Clone function 2
const barr_changes_dos = () => {
	const barr_form_dos = document.querySelector('#barr-form-dos')

	barr_form_dos.addEventListener("submit", e => {
		e.preventDefault()

		const barr_new_value = e.target[0].value
		
		barr_num_add_dos(barr_new_value)
	})

	barr_form_dos[0].onchange = e => {
		const barr_new_value = e.target.value

		barr_num_add_dos(barr_new_value)
	}

}

// Function for content the initialice global functions 
const initialice_funct = () => {
	barr_changes()
	barr_changes_dos()

	// test for auto change number on load windows
	barr_num_add(50, true)
	barr_num_add_dos(80, true)
}

window.onload = () => {
	initialice_funct()
}