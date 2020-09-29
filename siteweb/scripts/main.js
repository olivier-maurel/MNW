pattern = document.getElementById('pattern');
pattern.style.top = '-100vh';
pattern.style.left = '-100vw';

function keyPress(code) {
    console.log(code);
    if (pattern.style.top == '-100vh' && pattern.style.left == '-100vw') {
        switch (code) {
            case 'ArrowUp':
                pattern.style.top = '0vh';
                break;
            case 'ArrowLeft':
                pattern.style.left = '0vw';
                break;
            case 'ArrowDown':
                pattern.style.top = '-200vh';
                break;
            case 'ArrowRight':
                pattern.style.left = '-200vw';
                break;
        }
    } else if (pattern.style.left == '0vw' || pattern.style.left == '-200vw' || pattern.style.top == '0vh' || pattern.style.top == '-200vh') {
        switch (code) {
            case 'ArrowUp':
                pattern.style.top = '-100vh';
                break;
            case 'ArrowLeft':
                pattern.style.left = '-100vw';
                break;
            case 'ArrowDown':
                pattern.style.top = '-100vh';
                break;
            case 'ArrowRight':
                pattern.style.left = '-100vw';
                break;
        }
    } 
}