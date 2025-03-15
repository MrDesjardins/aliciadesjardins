function encrypt(msg) {
    let newMessage = "";
    for (let i = 0; i < msg.length; i++) {
        const char = msg.charCodeAt(i) // Get the ASCII code
        const isLowerCase = (char >= 97 && char <= 122);
        const isUpperCase = (char >=65 && char <= 90);
        if (isLowerCase || isUpperCase) {
            const asciiConvertion = isLowerCase?97:65;
            const alphaOrder = char - asciiConvertion; // ASCII code to letter number form 0 to 25
            const newAlphaOrder = 25 - alphaOrder; // Apply the secret code
            newMessage = newMessage + String.fromCharCode(newAlphaOrder + asciiConvertion); // Bring back the letter number to ASCII code
        }
        else {
            newMessage += msg[i];
        }
    }
    return newMessage;
}

function setsecretinhtml(){
    const answer = encrypt(document.getElementById('secret_input').value)
    document.getElementById('secret_ouput').innerText = answer;
    document.getElementById("hidden_text").style.display="block";
}