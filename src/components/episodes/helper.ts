
export const animateOnClick = (ref: any) => {
	const accordian = ref;

	accordian.addEventListener('click', (event) => {

		if (!isBlurred(event.target, 'header')) {
			toggleItem(accordian)
		}
	})
}


export const isBlurred = (target: HTMLElement, ...clsToCheck) => {
	// 🗑🔥  Garbage Code (update this later)  🔥🗑
	let currentTarget: HTMLElement = target;
	const allClasses: string[] = [];
	
	// Get the className of all parents
	while (currentTarget) {
		allClasses.push(currentTarget.classList.value);
		currentTarget = currentTarget.parentElement as HTMLElement;
	}
	const output: boolean[] = [];

	// Check if all parents classes includes some class
	clsToCheck.forEach(c => {
		allClasses.forEach(v => output.push(v.includes(c)))
	})

	// output = [false, true, false, false, false, false...]
	// if some item of this array is true, the menu does not will be closed
	return !output.includes(true);
}



const toggleItem = (item: HTMLElement) => {
	const desc = item.querySelector('.description') as HTMLElement;
	
	if (desc.classList.contains('open')) {
		desc.style.height = "0px";
		desc.classList.remove('open')
	} else {
		desc.style.height = desc.scrollHeight + "px";
		desc.classList.add('open')
	}
}