
const doc = document;

const formCharacter = doc.querySelectorAll('.form-character');
const formNumber = doc.querySelectorAll('.form-number');
const formMessage = doc.querySelector('.form-message');




formCharacter.forEach((el, index, node) => {

	el.addEventListener('change', (e) => {
		e.preventDefault();

		let patternCharacter = /^[a-z šđčćž]+$/gi;

		console.log(e)

		if(e.target.value.length >= 3 && e.target.value.match(patternCharacter)) {
			console.log('Valid name length and character type');
			return true;
		} else {
			console.log('Invalid name length or character type');
			e.target.value = '';
			return false;
		}

		e.stopPropagination();
		return false;
	})
})


formNumber.forEach((el, index, node) => {
	el.addEventListener('change', (e) => {
		e.preventDefault();

		let patternNumber = /^[0-9 -\/]+$/gi;

		console.log(e)

		if(e.target.value.length >= 10 && e.target.value.match(patternNumber)) {
			console.log('Valid number length and type');
			return true;
		} else {
			console.log('Invalid number length or character type');
			e.target.value = '';
			return false;
		}

		e.stopPropagination();
		return false;		
	})
})

function validateCharacter(e) {
	let patternCharacter = /^[a-z šđčćž]+$/gi;
    return patternCharacter.test(e.key);
}

function validateCharacterMobile(e) {
    e.target.value = e.target.value.replace(/^[0-9 -\/]+$/gi,'');
    return false;
}

function validateNumber(e) {
    let patternNumber = /^[0-9 -\/]+$/gi;
    return patternNumber.test(e.key);
}

function validateNumberMobile(e) {
    e.target.value = e.target.value.replace(/^[a-z šđčćž]+$/gi,'');
    return false;
}

