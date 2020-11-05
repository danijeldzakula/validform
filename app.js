
const doc = document;

const formCharacter = doc.querySelectorAll('.form-character');
const formNumber = doc.querySelectorAll('.form-number');
const formMessage = doc.querySelector('.form-message');




formCharacter.forEach((el, index, node) => {

	el.addEventListener('change', (e) => {
		e.preventDefault();

		let patternCharacter = /^[a-z šđčćž]+$/gi;

		//console.log(e)

		if(e.target.value.length >= 2 && e.target.value.match(patternCharacter)) {
			//console.log('Valid name length and character type');
			let valid = 'message-success';
			validateMessage('SUCCESS: Uspešno ste upisali vaše ime i prezime!', valid);
			return true;
		} else {
			//console.log('Invalid name length or character type');
			let invalid = 'message-error';
			validateMessage('ERROR: Niste dobro upisali vaše ime ili prezime!', invalid);
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

		//console.log(e)

		if(e.target.value.length >= 10 && e.target.value.match(patternNumber)) {
			//console.log('Valid number length and type');
			let valid = 'message-success';
			validateMessage('SUCCESS: Uspešno ste upisali vaš broj telefona!', valid);
			return true;
		} else {
			//console.log('Invalid number length or character type');
			let invalid = 'message-error';
			validateMessage('ERROR: Niste dobro upisali vaš broj telefona!', invalid);
			e.target.value = '';
			return false;
		}

		e.stopPropagination();
		return false;		
	})
})

//* validation 
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

function validateMessage(desc, status) {
  	let node = doc.createElement("P");
  	let textnode = doc.createTextNode(desc);
  	node.className = status;
  	node.appendChild(textnode);
  	formMessage.appendChild(node);

	setTimeout(() => {
	  formMessage.removeChild(node);
	}, 3000);
}

