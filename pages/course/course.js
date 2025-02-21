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

// Вставляем вызов функции Close в ваш код
let closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    Close();
});


function alertBtn()
{
document.getElementById("alertBtn").style.display="none";
}

///  ff

const phrases = ["с нами", "JavaScript","Python","HTML","CSS","C#","TypeScript"];
let currentPhrase = 0;
let currentCharacter = 0;
let htmlElement = document.querySelector('.typing');
let typingSpeed = 200;
let deletingSpeed = 100;

function type() {
    if (currentCharacter < phrases[currentPhrase].length) {
        htmlElement.textContent += phrases[currentPhrase].charAt(currentCharacter);
        currentCharacter++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(deleteText, 300);
    }
}

function deleteText() {
    if (currentCharacter > 0) {
        htmlElement.textContent = phrases[currentPhrase].substring(0, currentCharacter - 1);
        currentCharacter--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        currentPhrase++;
        if (currentPhrase >= phrases.length) {
            currentPhrase = 0;
        }
        setTimeout(type, 200);
    }
}

setTimeout(type, 200); 
//

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('heade');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        navbar.style.opacity = '0.8';
        navbar.style.margin='0 0  5px 0'
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.opacity = '1';
        navbar.style.margin='8px 0 0 0'
    }
});