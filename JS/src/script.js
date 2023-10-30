const vowels = 'aeiouAEIOU';
let text = "Lorem ipsum dolor sit amet...";




for (let i = 0; i < vowels.length; i++) {
    const vowel = vowels.charAt(i);
    
    if (text.includes(vowel)){
    text = text.replaceAll(vowels.charAt(i), "")

    }
    
}




console.log("El nuevo texto es: " + text);
