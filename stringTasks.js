// Первая буква в строке заглавная
function capitalizeFirstLetter(input) {
    if (!input) return '';
    return input[0].toUpperCase() + input.slice(1);
}

// Обрезание строки с добавлением троеточия
function truncateString(input, maxLength) {
    if (!input || maxLength <= 0) return '';
    if (input.length <= maxLength) return input;

    const truncated = input.slice(0, maxLength + 1).trim();
    const lastSpaceIndex = Math.max(truncated.lastIndexOf(' '), truncated.lastIndexOf('.'), truncated.lastIndexOf(','), truncated.lastIndexOf('!'), truncated.lastIndexOf('?'), truncated.lastIndexOf(':'));

    return lastSpaceIndex > 0 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated.trim() + '...';
}

// Проверка наличия одной строки как подстроки другой
function isSubstring(str1, str2) {
    if (!str1 || !str2) return false;
    return str1.includes(str2) || str2.includes(str1);
}

console.log(capitalizeFirstLetter("hello world"));
console.log(truncateString("JavaScript is a versatile programming language.", 30));
console.log(isSubstring("JavaScript", "Script"));
console.log(isSubstring("Hello", "World"));