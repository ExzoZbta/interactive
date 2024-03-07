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

    var initialDeath1HTMLContent = document.getElementById('death1').innerHTML;
    var initialDeath2HTMLContent = document.getElementById('death2').innerHTML;
    var initialDeath3HTMLContent = document.getElementById('death3').innerHTML;
    var initialDeath4HTMLContent = document.getElementById('death4').innerHTML;
    var initialDeath5HTMLContent = document.getElementById('death5').innerHTML;
    var initialDeath6HTMLContent = document.getElementById('death6').innerHTML;
    var initialDeath7HTMLContent = document.getElementById('death7').innerHTML;
    var initialDeath8HTMLContent = document.getElementById('death8').innerHTML;
    var initialDeath9HTMLContent = document.getElementById('death9').innerHTML;
    var initialDeath10HTMLContent = document.getElementById('death10').innerHTML;
    var initialDeath11HTMLContent = document.getElementById('death11').innerHTML;
    var initialDeath12HTMLContent = document.getElementById('death12').innerHTML;
    var initialDeath13HTMLContent = document.getElementById('death13').innerHTML;
    var initialDeath14HTMLContent = document.getElementById('death14').innerHTML;
    var initialDeath15HTMLContent = document.getElementById('death15').innerHTML;
    var initialDeath16HTMLContent = document.getElementById('death16').innerHTML;
    var initialDeath17HTMLContent = document.getElementById('death17').innerHTML;
    var initialDeath18HTMLContent = document.getElementById('death18').innerHTML;

    
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
               "\necho [death_#] - Displays the last words of a character. There are 18 quotes.";


                printAdditionalText(document.querySelector('.text-container'), helpText);
            
            // print info about the current page
            } else if (commandText === 'about') {
                printCommand(document.querySelector('.text-container'), commandText);
                printAdditionalText(document.querySelector('.text-container'), initialAboutContainerContent);
            
            // print death #1 text
            } else if (commandText === 'echo death_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Isaac....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath1HTMLContent);
                }, 2000); 

            // print death #2 text
            } else if (commandText === 'echo death_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Liu Kang....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath2HTMLContent);
                }, 2000);
                
            // print death #3 text
            } else if (commandText === 'echo death_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Handsome Jack....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath3HTMLContent);
                }, 2500);
            
            // print death #4 text
            } else if (commandText === 'echo death_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of The Joker....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath4HTMLContent);
                }, 2300); 


            // print death #5 text
            } else if (commandText === 'echo death_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Revolver Ocelot....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath5HTMLContent);
                }, 2500);

            // print death #6 text
            } else if (commandText === 'echo death_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Margin, The Fell Omen....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath6HTMLContent);
                }, 2800);

            // print death #7 text
            } else if (commandText === 'echo death_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Baldur, son of Odin....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath7HTMLContent);
                }, 3000);

            // print death #8 text
            } else if (commandText === 'echo death_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of an unnamed Security Guard from Half-Life....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath8HTMLContent);
                }, 4000); 

            // print death #9 text
            } else if (commandText === 'echo death_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of an unnamed Scientist from Half-Life....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath9HTMLContent);
                }, 3900);
            
            // print death #10 text
            } else if (commandText === 'echo death_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Paper Bowser....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath10HTMLContent);
                }, 2700);

            // print death #11 text
            } else if (commandText === 'echo death_11') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of GLaDOS....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath11HTMLContent);
                }, 2000); 
            
            // print death #12 text
            } else if (commandText === 'echo death_12') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Albert Wesker....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath12HTMLContent);
                }, 2800); 

            // print death #13 text
            } else if (commandText === 'echo death_13') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Hawthorne....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath13HTMLContent);
                }, 2300); 

            // print death #14 text
            } else if (commandText === 'echo death_14') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Grampa Simpson....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath14HTMLContent);
                }, 2700); 

            // print death #15 text
            } else if (commandText === 'echo death_15') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of The Crestfallen Warrior....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath15HTMLContent);
                }, 3200); 
            
                // print death #16 text
            } else if (commandText === 'echo death_16') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Jochi Khasar....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath16HTMLContent);
                }, 2800); 

                // print death #17 text
            } else if (commandText === 'echo death_17') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of The Sea Emperor....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath17HTMLContent);
                }, 3000); 

            // print death #18 text
            } else if (commandText === 'echo death_18') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Loading the last words of Flowey....."
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDeath18HTMLContent);
                }, 2000); 
            
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
