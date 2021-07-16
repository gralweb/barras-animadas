const barr_width = document.querySelector('#barr-width')
const barr_counter_text = document.querySelector('.barr-counter-text')

const barr_width_dos = document.querySelector('#barr-width-dos')
const barr_counter_text_dos = document.querySelector('.barr-counter-text-dos')

const barr_num_add = val => {
	barr_width.classList = []
	barr_width.classList.add(`barr-width-${val}`)
	barr_counter_text.textContent = val
}

const barr_changes = () => {
	const barr_form = document.querySelector('#barr-form')

	barr_form.addEventListener("submit", e => {
		e.preventDefault()

		const barr_new_value = e.target[0].value
		
		barr_num_add(barr_new_value)
	})

}
const barr_num_add_dos = val => {
	barr_width_dos.classList = []
	barr_width_dos.classList.add(`barr-width-${val}`)
	barr_counter_text_dos.textContent = val
}

const barr_changes_dos = () => {
	const barr_form_dos = document.querySelector('#barr-form-dos')

	barr_form_dos.addEventListener("submit", e => {
		e.preventDefault()

		const barr_new_value = e.target[0].value
		
		barr_num_add_dos(barr_new_value)
	})

}

const initialice_funct = () => {
	barr_changes()
	barr_changes_dos()

	// test for auto change number on load windows
	barr_num_add(50)
	barr_num_add_dos(80)
}

window.onload = () => {
	initialice_funct()
}