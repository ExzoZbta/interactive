document.addEventListener("DOMContentLoaded", function() {
    // Define typeNextCharacter function
    function typeNextCharacter(element, text, index = 0) {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(function() {
                typeNextCharacter(element, text, index);
            }, 50); // delay in milliseconds for printing chars
        }
    }

    function submitCommand(event) {
        // check if user presses Enter key or clicks the Submit button
        if (!event || event.keyCode === 13 || event.type === 'click') {
            var commandInput = document.getElementById('commandInput');
            var outputDiv = document.getElementById('output');
            var commandText = commandInput.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase

            if (commandText === 'clear') {
                outputDiv.innerHTML = '';
                commandInput.value = '';
            } else if (commandText === 'changefile ashes.html') {
                commandInput.value = '';
                var newCommand = document.createElement('div');
                newCommand.classList.add('command');
                newCommand.textContent = '] ';
                outputDiv.appendChild(newCommand);

                // typing animation
                typeNextCharacter(newCommand, commandText);

                // delay before switching to ashes.html (ms)
                setTimeout(function() {
                    window.location.href = 'ashes.html';
                }, 500000000000); 

                // Display additional text
                var additionalText = "Initializing RC libraries for secure Internet server. Executing server config file. Connection to file coordinator established. Current schema is up-to-date with version D109439. Connection to RC servers successful.   Public IP to RC is 130.132.173.194. File: ashes.html. Client reached file_load.";
                var sentences = additionalText.split('. ');
                sentences.forEach(function(sentence, index) {
                    setTimeout(function() {
                        var newSentence = document.createElement('div');
                        newSentence.classList.add('command'); // Use the 'command' class for styling
                        newSentence.textContent = '] ' + sentence + '.';
                        outputDiv.appendChild(newSentence);

                        // typing animation for the sentence
                        typeNextCharacter(newSentence, sentence);
                    },);
                });
            } else {
                var newCommand = document.createElement('div');
                newCommand.classList.add('command');
                newCommand.textContent = '] '; 
                outputDiv.appendChild(newCommand);

                // typing animation
                typeNextCharacter(newCommand, commandText);

                // clear user input after submit
                commandInput.value = '';
            }
        }
    }

    // event listener for Enter key
    var commandInput = document.getElementById('commandInput');
    commandInput.addEventListener('keydown', submitCommand);

    // event listener for Submit button
    var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', submitCommand);
});
