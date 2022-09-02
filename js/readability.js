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
    const text = document.querySelector('textarea').value;
    if (text.length > 0) {
        const chars = calcChar(text);
        const words = calcWord(text);
        const sentences = calcSentence(text);
        var grade = Math.round(0.0588 * ((chars / words) * 100) - 0.296 * ((sentences / words) * 100) - 15.8);
        const result = document.querySelector('input');
        if (grade < 1)
            result.value = 'Before grade 1';
        else if (grade <= 16) {
            result.value = grade;
        }
        else
            result.value = "16+";
        return grade;
    } else
        reset();
}

function clearText() {
    document.querySelector('textarea').value = '';
}

function reset() {
    document.querySelector('textarea').value = '';
    document.querySelector('input').value = '';
}

function pasteText() {
    navigator.clipboard.readText()
    .then(clipText => {
        document.querySelector('textarea').value = clipText;
    });
}