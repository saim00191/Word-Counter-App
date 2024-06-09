// Get the textarea element
const input = document.getElementById('input') as HTMLTextAreaElement;

// Get the paragraph elements where word count and letter count will be displayed
const wordCount = document.getElementById('wordCount') as HTMLParagraphElement;
const letterCount = document.getElementById('letterCount') as HTMLParagraphElement;

// Function to count words
function countWords(text: string): number {
  // Remove extra spaces and split the text into words
  const words = text.trim().split(/\s+/);
  // Return the number of words
  return words.length;
}

// Function to count letters
function countLetters(text: string): number {
  // Remove spaces and return the length of the text
  return text.replace(/\s+/g, '').length;
}

// Function to update word and letter counts
function updateCounts() {
  // Get the text from the textarea
  const text = input.value;
  // Count words in the text
  const wordCountValue = countWords(text);
  // Count letters in the text
  const letterCountValue = countLetters(text);
  // Update the word count display
  wordCount.textContent = `Word count: ${wordCountValue}`;
  // Update the letter count display
  letterCount.textContent = `Letter count: ${letterCountValue}`;
}

// Add event listener to input textarea
input.addEventListener('input', updateCounts);

// Initial call to update word and letter counts on page load
updateCounts();
