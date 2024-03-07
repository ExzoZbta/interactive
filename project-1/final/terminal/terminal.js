document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("resize", ()=>{
        getConsoleImageHeight()
    })

    const getConsoleImageHeight = () => {
        const img = document.getElementById("console");
        const imgHeight = img.clientHeight;
        document.documentElement.style.setProperty('--console-height', `${imgHeight}px`)
    }
    getConsoleImageHeight()
  
    // Store the initial content of text-container1
    var initialTextContainer1Content = document.querySelector('.text-container1').innerText;

    // print the command on screen that the user typed in the textbox
    function printCommand(outputDiv, commandText) {
        var newCommand = document.createElement('div');
        newCommand.classList.add('command');
        newCommand.textContent = '] '; 
        outputDiv.appendChild(newCommand);

        // typing animation
        typeNextCharacter(newCommand, commandText);

        // clear user input after submit
        commandInput.value = '';
    }

    // prints text from a particular command
    function printAdditionalText(outputDiv, additionalText) {
        var lines = additionalText.split('\n');
        lines.forEach(function(line, index) {
            setTimeout(function() {
                var newLine = document.createElement('div');
                newLine.classList.add('command');
                outputDiv.appendChild(newLine);
                
                typeNextCharacter(newLine, line);
            }, index * 100); // Delay between each line
        });
    }
    
    // animation for text appearing on screen
    function typeNextCharacter(element, text, index = 0) {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(function() {
                typeNextCharacter(element, text, index);
            }, 50); // delay in milliseconds for printing chars
        }
    }

    // registers a command used by the user, performs the command's function
    function submitCommand(event) {
        // check if user presses Enter key or clicks the Submit button
        if (!event || event.keyCode === 13 || event.type === 'click') {
            var commandInput = document.getElementById('commandInput');
            var outputDiv = document.getElementById('output');
            var commandText = commandInput.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
            
            // clear terminal text
            if (commandText === 'clear') {
                outputDiv.innerHTML = '';
                commandInput.value = '';
                
                // clear text-container text
                var textContainer = document.querySelector('.text-container');
                textContainer.innerHTML = '';

                // clear text-container1 text
                var textContainer1 = document.querySelector('.text-container1');
                textContainer1.innerHTML = '';
            
            // display list of commands
            } else if (commandText === 'help') {
                printCommand(document.querySelector('.text-container'), commandText);
                var helpText = "Available commands:" +
               "\nclear - Clears the terminal." +
               "\nchangefile [filename] - Switches to the specified HTML file." +
               "\n==List of files you can navigate to: " +
               "\n----ashes.html" +
               "\n----bee-movie.html" +
               "\n----breen.html" +
               "\n----died.html" +
               "\n----kenough.html" +
               "\n----npc.html" +
               "\n----pacer-test.html" +
               "\n----portal.html" +
               "\n----team-fortress.html" +
               "\nhelp - Displays this list of commands and their descriptions." +
               "\nabout - Displays information about the page you are currently on";

                printAdditionalText(document.querySelector('.text-container'), helpText);
            
            // print info about the current page
            } else if (commandText === 'about') {
                printCommand(document.querySelector('.text-container'), commandText);
                printAdditionalText(document.querySelector('.text-container'), initialTextContainer1Content);
            
            } else if (commandText === 'changefile terminal.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to ashes.html (ms)
                setTimeout(function() {
                    window.location.href = '../terminal/terminal.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T442310.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: terminal.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

            // switch to ashes.html
            } else if (commandText === 'changefile ashes.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to ashes.html (ms)
                setTimeout(function() {
                    window.location.href = '../ashes/ashes.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version D109439.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: ashes.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);
            
            // switch to bee-movie.html
            } else if (commandText === 'changefile bee-movie.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to ashes.html (ms)
                setTimeout(function() {
                    window.location.href = '../bee-movie/bee-movie.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version J83333.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: bee-movie.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

            // switch to breen.html
            } else if (commandText === 'changefile breen.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to breen.html (ms)
                setTimeout(function() {
                    window.location.href = '../breen/breen.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version C312034.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: breen.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);
            
            // switch to died.html
            } else if (commandText === 'changefile died.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to breen.html (ms)
                setTimeout(function() {
                    window.location.href = '../died/died.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version E34667.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: died.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);
            
            // switch to kenough.html
            } else if (commandText === 'changefile kenough.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to breen.html (ms)
                setTimeout(function() {
                    window.location.href = '../kenough/kenough.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version B12290.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: kenough.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);
            
            // switch to npc.html
            } else if (commandText === 'changefile npc.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to breen.html (ms)
                setTimeout(function() {
                    window.location.href = '../npc/npc.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version F829551.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: npc.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

            // switch to pacer-test.html
            } else if (commandText === 'changefile pacer-test.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to breen.html (ms)
                setTimeout(function() {
                    window.location.href = '../pacer-test/pacer-test.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version P13337.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: pacer-test.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);
            
            // switch to wheatley.html
            } else if (commandText === 'changefile wheatley.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to breen.html (ms)
                setTimeout(function() {
                    window.location.href = '../portal/wheatley.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: wheatley.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

            // switch to team-fortress.html
            } else if (commandText === 'changefile team-fortress.html') {
                printCommand(document.querySelector('.text-container'), commandText); // Append command to text-container
                // delay before switching to breen.html (ms)
                setTimeout(function() {
                    window.location.href = '../team-fortress/team-fortress.html';
                }, 5000); 

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting server config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nConnection to RC servers successful.\nPublic IP to RC is 130.132.173.194.\nFile: team-fortress.html.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

            // print general text from user
            } else {
                printCommand(document.querySelector('.text-container'), commandText);
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
