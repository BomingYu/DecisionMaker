function addTextButton(){
    var numOfOpt = document.querySelectorAll('[id^=op]').length + 1;
    var textBoxContainer = document.getElementById('textBoxContainer');
    var newText = document.createElement('input');
    newText.setAttribute('type','text');
    newText.setAttribute('class','optionText');
    newText.setAttribute('id','op'+numOfOpt);
    newText.setAttribute('value','Optin '+numOfOpt);

    textBoxContainer.appendChild(newText)

}

function makeDecision(){
    var numOfOpt = document.querySelectorAll('[id^=op]').length;

    var options = [];

    for(let i=0; i<numOfOpt; i++){
        options.push(document.getElementById('op'+(i+1)).value);
        //
    }
    console.log(options.length);
    var randomNum = Math.random();
    var randomPointer = Math.floor(randomNum*options.length);
    document.getElementById('result').innerHTML = options[randomPointer];
}


