function calcWord(text) {
    return text.split(' ').length;
}

function calcChar(text) {
    var characters = 0;
    for (let i = 0; i < text.length; i++)
        if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z'))
            characters++;
    return characters;
}

function calcSentence(text) {
    var sentences = 0;
    for (let i = 0; i < text.length; i++)
        if (text[i] == '!' || text[i] == '?' || text[i] == '.')
            sentences++;
    return sentences;
}

function calcGrade() {
    const text = document.querySelector('#input').value;
    if (text.length > 0) {
        const chars = calcChar(text);
        const words = calcWord(text);
        const sentences = calcSentence(text);
        var grade = Math.round(0.0588 * ((chars / words) * 100) - 0.296 * ((sentences / words) * 100) - 15.8);
        const result = document.querySelector('#result');
        if (grade < 1)
            result.innerText = 'Before grade 1';
        else if (grade <= 16)
            result.innerText = grade;
        else
            result.innerText = '16+';
        return grade;
    }
}

function clearText() {
    document.querySelector('#input').value = '';
}

function reset() {
    document.querySelector('#input').value = '';
    document.querySelector('#result').innerText = 'Enter your text above';
}