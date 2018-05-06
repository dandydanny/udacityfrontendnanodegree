/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (const day of days) {
    //capitalize first word, then append rest of the word
    word = day[0].toUpperCase() + day.substr(1);
    console.log(word);
}