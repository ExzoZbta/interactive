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
  
    var initialTextContainer1Content = document.querySelector('.text-container1').innerText;

    var initialTextContainer1HTMLContent = document.querySelector('.text-container1').innerHTML;

    var initialAboutContainerContent = document.querySelector('.about-container').innerText;
    
    var initialStartContainerContent = document.getElementById('start').innerHTML;

    var initialCheatsContainerContent = document.getElementById('sv_cheats').innerHTML;
    var initialGodContainerContent = document.getElementById('god').innerHTML;
    var initialNoclipContainerContent = document.getElementById('noclip').innerHTML;
    var initialFirstpersonContainerContent = document.getElementById('firstperson').innerHTML;

    var initialWalkContainerContent = document.getElementById('walk1').innerHTML;
    var initialDecisionsContainerContent = document.getElementById('three-decisions').innerHTML;
    var initialYesConverseContainerContent = document.getElementById('yes-converse').innerHTML;
    var initialNoConverseContainerContent = document.getElementById('no-converse').innerHTML;
    var initialAttackContainerContent = document.getElementById('attack').innerHTML;






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

    function printAdditionalHTML(outputDiv, additionalHTML) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = additionalHTML;
        var children = tempDiv.childNodes;
        children.forEach(function(child, index) {
            setTimeout(function() {
                var newChild = child.cloneNode(true);
                outputDiv.appendChild(newChild);
            }, index * 100); // Delay between each child element
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

    // Initialize command counter
    var walkCommandCounter = 0;

    // Function to reset command counter
    function resetWalkCommandCounter() {
        walkCommandCounter = 0;
    }

    // Function to handle submitting the "walk 1" command
    function handleWalkCommand(outputDiv, commandText) {
        printCommand(outputDiv, commandText);

        // Increment command counter
        walkCommandCounter++;

        // Check if "walk 1" command has been submitted seven times in a row
        if (walkCommandCounter === 7) {
            // Print decisions container content instead of walk container content
            printAdditionalHTML(outputDiv, initialDecisionsContainerContent);
            // Reset command counter
            resetWalkCommandCounter();
        } else {
            // Print walk container content
            setTimeout(function() {
                printAdditionalHTML(outputDiv, initialWalkContainerContent);
            }, 2000); 
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
               "\nabout - Displays information about the page you are currently on." +
               "\nstart - Begin your text-guided adventure.";

                printAdditionalText(document.querySelector('.text-container'), helpText);
            
            // print info about the current page
            } else if (commandText === 'about') {
                printCommand(document.querySelector('.text-container'), commandText);
                printAdditionalText(document.querySelector('.text-container'), initialAboutContainerContent);
            
            // start beginning of prompting
            } else if (commandText === 'start 1') {
                printCommand(document.querySelector('.text-container'), commandText);

                var additionalText = "Your journey is about to begin.........................................."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialStartContainerContent);
                }, 5000);

            } else if (commandText === 'sv_cheats 1') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialCheatsContainerContent);
                }, 2000);
            
            } else if (commandText === 'god') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialGodContainerContent);
                }, 2000); 

            } else if (commandText === 'noclip') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialNoclipContainerContent);
                }, 2000); 

            } else if (commandText === 'firstperson') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialFirstpersonContainerContent);
                }, 2000);

            } else if (commandText === 'walk 1') {
                handleWalkCommand(document.querySelector('.text-container'), commandText);
            
            } else if (commandText === 'mp_conversenpc 1') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialYesConverseContainerContent);
                }, 2000);

            } else if (commandText === 'mp_conversenpc 0') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialNoConverseContainerContent);
                }, 2000);

            } else if (commandText === 'rc_weapon_longsword') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialAttackContainerContent);
                }, 2000);

            } else if (commandText === 'restart') {
                    outputDiv.innerHTML = '';
                    commandInput.value = '';
                    
                    // clear text-container text
                    var textContainer = document.querySelector('.text-container');
                    textContainer.innerHTML = '';
    
                    // clear text-container1 text
                    var textContainer1 = document.querySelector('.text-container1');
                    textContainer1.innerHTML = '';
            
            // go back to homepage
            } else if (commandText === 'changefile terminal.html') {
                printCommand(document.querySelector('.text-container'), commandText);
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
