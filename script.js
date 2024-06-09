// Get the textarea element
var input = document.getElementById('input');
// Get the paragraph elements where word count and letter count will be displayed
var wordCount = document.getElementById('wordCount');
var letterCount = document.getElementById('letterCount');
// Function to count words
function countWords(text) {
    // Remove extra spaces and split the text into words
    var words = text.trim().split(/\s+/);
    // Return the number of words
    return words.length;
}
// Function to count letters
function countLetters(text) {
    // Remove spaces and return the length of the text
    return text.replace(/\s+/g, '').length;
}
// Function to update word and letter counts
function updateCounts() {
    // Get the text from the textarea
    var text = input.value;
    // Count words in the text
    var wordCountValue = countWords(text);
    // Count letters in the text
    var letterCountValue = countLetters(text);
    // Update the word count display
    wordCount.textContent = "Word count: ".concat(wordCountValue);
    // Update the letter count display
    letterCount.textContent = "Letter count: ".concat(letterCountValue);
}
// Add event listener to input textarea
input.addEventListener('input', updateCounts);
// Initial call to update word and letter counts on page load
updateCounts();
