window.onscroll = function () {
    var header = document.getElementById('myHeader');
    if (window.pageYOffset > 80) {
        header.classList.add('color-change');
    } else {
        header.classList.remove('color-change');
    }
};

let open = document.getElementById('open')
let block = document.getElementById('block')

function Open() {
    open.style.display = 'block'
    block.style.transition = 'right 0.3s';
    setTimeout(function () {
        block.style.right = '0';
    }, 50);
}

function Close() {
    block.style.right = '-300px'
    block.style.transition = 'right 0.3s'
    setTimeout(function () {
        open.style.display = 'none';
    }, 400)
}

let ops = document.getElementById('ops');
ops.addEventListener('click', (event) => {
    event.preventDefault();
    Open();
});


let closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    Close();
});


let nameInput = document.getElementById('name');
let name2Input = document.getElementById('name2');
let telInput = document.getElementById('tel');
let emailInput = document.getElementById('emile');

function sandEmail() {
    document.getElementById('name').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('emile').value = '';
}

function sendEmail() {
    function Form(elements) {
        if (elements.value === '') {
            elements.classList.add('inputs');
        } else {
            elements.classList.remove('inputs');
        }
    }

    Form(nameInput);
    Form(name2Input);
    Form(telInput);
    Form(emailInput);
    if (nameInput.value.trim() !== '' && name2Input.value.trim() !== '' && telInput.value.trim() !== '' && emailInput.value.trim() !== '') {
        Screen()
    }


    function Screen() {
        blockForm.style.display = 'block';
        document.getElementById('name').value = '';
        document.getElementById('name2').value = '';
        document.getElementById('tel').value = '';
        document.getElementById('emile').value = '';
    }

    // const subject = 'New Form Submission';
    // const body = `Name: ${namee}\nSurname: ${namee2}\nTelephone: ${tel}\nEmail: ${emaile}`;
    // window.location.href = `mailto:alexing90l@gmail.com?subject=${subject}&body=${body}`;
}

let blockForm = document.getElementById('block-form');

function BlackForm() {
    blockForm.style.display = 'none'
}

