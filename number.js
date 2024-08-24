let randomNumber=Math.floor(Math.random()*100)+1;
const checkButton=document.getElementById('check');
const resetButton=document.getElementById('reset');
const message=document.getElementById('message');
let attempts=0;
const maxAttempts=10;

checkButton.addEventListener('click',function(){
    const userGuess=Number(document.getElementById('guess').value);
    attempts++;

    if(attempts<maxAttempts){
        if(userGuess===randomNumber){
            message.textContent="Congratulations! You guessed it right!";
            message.style.color='green';
            window.location.href='success.html';
        }
        else if(userGuess<randomNumber){
            message.textContent="Try with a larger number";
            message.style.color='red';
        }
        else
        {
            message.textContent="Try with a smaller number";
            message.style.color='red';
        }
    }
    else if(attempts===maxAttempts){
        if(userGuess===randomNumber){
            message.textContent="Congratulations! You guessed it right on your last attempt!";
            message.style.color='green';
            window.location.href='success.html';
        }
        else{
            message.textContent="Sorry, you've used all your attempts!";
            message.style.color='red';
            window.location.href='try.html';
        }
    }
});

resetButton.addEventListener('click', function() {
    randomNumber=Math.floor(Math.random()*100) + 1;
    document.getElementById('guess').value='';
    message.textContent='';
    attempts=0;
});