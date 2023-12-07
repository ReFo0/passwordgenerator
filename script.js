function generatePassword() {
    var length = document.getElementById("passwordLength").value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var specialChars = ".$#!?"; 
    var includeSpecialChars = document.getElementById("includeSpecialChars").checked;
    var password = "";

    var allChars = charset;

    if (includeSpecialChars) {
        allChars += specialChars;
    }

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    document.getElementById("password").value = password;
}
