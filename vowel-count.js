var vowelCount = function(str) {
    // Convert the string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();
    
    // Initialize a counter for the number of vowels
    var count = 0;
    
    // Iterate over each character in the string
    for (var i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            // If it is, increment the counter
            count++;
        }
    }
    
    // Return the total count of vowels
    return count;
};

// Test the function
console.log(vowelCount("Hello World"));