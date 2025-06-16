document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("resize", ()=>{
        getConsoleImageHeight()
    })

    const getConsoleImageHeight = () => {
        const img = document.getElementById("console");
        if (img.complete) {
            const imgHeight = img.clientHeight;
            document.documentElement.style.setProperty('--console-height', `${imgHeight}px`)
        } else {
            img.addEventListener('load', () => {
                const imgHeight = img.clientHeight;
                document.documentElement.style.setProperty('--console-height', `${imgHeight}px`)
            });
        }
    }
    getConsoleImageHeight()
  
    var initialTextContainer1Content = document.querySelector('.text-container1').innerText;

    var initialTextContainer1HTMLContent = document.querySelector('.text-container1').innerHTML;

    var initialAboutContainerContent = document.querySelector('.about-container').innerText;
    
    var initialScoutVoiceHTMLContent = document.getElementById('scout').innerHTML;
    var initialSoldierVoiceHTMLContent = document.getElementById('soldier').innerHTML;
    var initialPyroVoiceHTMLContent = document.getElementById('pyro').innerHTML;
    var initialDemomanVoiceHTMLContent = document.getElementById('demoman').innerHTML;
    var initialHeavyVoiceHTMLContent = document.getElementById('heavy').innerHTML;
    var initialEngineerVoiceHTMLContent = document.getElementById('engineer').innerHTML;
    var initialMedicVoiceHTMLContent = document.getElementById('medic').innerHTML;
    var initialSniperVoiceHTMLContent = document.getElementById('sniper').innerHTML;
    var initialSpyVoiceHTMLContent = document.getElementById('spy').innerHTML;

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

    // make headcrab image appear
    function createGnome() {
        var imageContainer = document.getElementById('summon-container');

        imageContainer.style.top = '50%';
        imageContainer.style.opacity = '1';
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
               "\n----wheatley.html" +
               "\n----team-fortress.html" +
               "\nhelp - Displays this list of commands and their descriptions." +
               "\nabout - Displays information about the page you are currently on." +
               "\nrc_switch_char [name of character] - Displays a list of 10 voice lines of the corresponding character." +
               "\n==List of 9 characters to select from: " +
               "\n----scout" +
               "\n----soldier" +
               "\n----pyro" +
               "\n----demoman" +
               "\n----heavy" +
               "\n----engineer" +
               "\n----medic" +
               "\n----sniper" +
               "\n----spy" +
               "\nplaysound [character_#] - Plays the corresponding voice line of that specific character, up to 10 each per character (9 characters)." +
               "\ncl_changehud # - Changes the color of the page's background, range is from digits 1 - 3";

                printAdditionalText(document.querySelector('.text-container'), helpText);
            
            // print info about the current page
            } else if (commandText === 'about') {
                printCommand(document.querySelector('.text-container'), commandText);
                printAdditionalText(document.querySelector('.text-container'), initialAboutContainerContent);
            
            // change page background to red
            } else if (commandText === 'cl_changehud 1') {
                printCommand(document.querySelector('.text-container'), commandText);

                var additionalText = "Changing background...";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    document.body.style.background = 'rgba(184, 56, 59)';
                }, 2000);

            // change page background to blue
            } else if (commandText === 'cl_changehud 2') {
                printCommand(document.querySelector('.text-container'), commandText);
              
                var additionalText = "Changing background...";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    document.body.style.background = 'rgba(88, 133, 162)';
                }, 2000);

            // change page background to orange
            } else if (commandText === 'cl_changehud 3') {
                printCommand(document.querySelector('.text-container'), commandText);
              
                var additionalText = "Changing background...";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    document.body.style.background = 'rgba(207, 115, 54)';
                }, 2000);
            
            // print scout text
            } else if (commandText === 'rc_switch_char scout') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialScoutVoiceHTMLContent);
                }, 2000);

            // print soldier text
            } else if (commandText === 'rc_switch_char soldier') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialSoldierVoiceHTMLContent);
                }, 2000);

            // print pyro text
            } else if (commandText === 'rc_switch_char pyro') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialPyroVoiceHTMLContent);
                }, 2000); 

            // print demoman text
            } else if (commandText === 'rc_switch_char demoman') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialDemomanVoiceHTMLContent);
                }, 2000); 

            // print heavy text
            } else if (commandText === 'rc_switch_char heavy') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialHeavyVoiceHTMLContent);
                }, 2000); 

            // print engineer text
            } else if (commandText === 'rc_switch_char engineer') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialEngineerVoiceHTMLContent);
                }, 2000); 

            // print medic text
            } else if (commandText === 'rc_switch_char medic') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialMedicVoiceHTMLContent);
                }, 2000); 

            // print sniper text
            } else if (commandText === 'rc_switch_char sniper') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialSniperVoiceHTMLContent);
                }, 2000); 

            // print spy text
            } else if (commandText === 'rc_switch_char spy') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialSpyVoiceHTMLContent);
                }, 2000);

            // play scout_1 audio
            } else if (commandText === 'playsound scout_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-1-audio');
                    scoutAudio.play();
                }, 3500);
            
            
            // play scout_2 audio
            } else if (commandText === 'playsound scout_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-2-audio');
                    scoutAudio.play();
                }, 3500);

            // play scout_3 audio
            } else if (commandText === 'playsound scout_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-3-audio');
                    scoutAudio.play();
                }, 3500);

            // play scout_4 audio
            } else if (commandText === 'playsound scout_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-4-audio');
                    scoutAudio.play();
                }, 3500);

            // play scout_5 audio
            } else if (commandText === 'playsound scout_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-5-audio');
                    scoutAudio.play();
                }, 3500);

            // play scout_6 audio
            } else if (commandText === 'playsound scout_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-6-audio');
                    scoutAudio.play();
                }, 3500);

            // play scout_7 audio
            } else if (commandText === 'playsound scout_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-7-audio');
                    scoutAudio.play();
                }, 3500);

            // play scout_8 audio
            } else if (commandText === 'playsound scout_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-8-audio');
                    scoutAudio.play();
                }, 3500);

            // play scout_9 audio
            } else if (commandText === 'playsound scout_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-9-audio');
                    scoutAudio.play();
                }, 3500);

            // play scout_10 audio
            } else if (commandText === 'playsound scout_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: scout_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var scoutAudio = document.getElementById('scout-10-audio');
                    scoutAudio.play();
                }, 3500);

            // play soldier_1 audio
            } else if (commandText === 'playsound soldier_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-1-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_2 audio
            } else if (commandText === 'playsound soldier_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-2-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_3 audio
            } else if (commandText === 'playsound soldier_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-3-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_4 audio
            } else if (commandText === 'playsound soldier_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-4-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_5 audio
            } else if (commandText === 'playsound soldier_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-5-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_6 audio
            } else if (commandText === 'playsound soldier_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-6-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_7 audio
            } else if (commandText === 'playsound soldier_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-7-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_8 audio
            } else if (commandText === 'playsound soldier_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-8-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_9 audio
            } else if (commandText === 'playsound soldier_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-9-audio');
                    soldierAudio.play();
                }, 3500);

            // play soldier_10 audio
            } else if (commandText === 'playsound soldier_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var soldierAudio = document.getElementById('soldier-10-audio');
                    soldierAudio.play();
                }, 3500);

            // play pyro_1 audio
            } else if (commandText === 'playsound pyro_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: soldier_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-1-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_2 audio
            } else if (commandText === 'playsound pyro_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-2-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_3 audio
            } else if (commandText === 'playsound pyro_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-3-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_4 audio
            } else if (commandText === 'playsound pyro_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-4-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_5 audio
            } else if (commandText === 'playsound pyro_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-5-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_6 audio
            } else if (commandText === 'playsound pyro_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-6-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_7 audio
            } else if (commandText === 'playsound pyro_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-7-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_8 audio
            } else if (commandText === 'playsound pyro_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-8-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_9 audio
            } else if (commandText === 'playsound pyro_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-9-audio');
                    pyroAudio.play();
                }, 3500);

            // play pyro_10 audio
            } else if (commandText === 'playsound pyro_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: pyro_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var pyroAudio = document.getElementById('pyro-10-audio');
                    pyroAudio.play();
                }, 3500);

            // play demoman_1 audio
            } else if (commandText === 'playsound demoman_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-1-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_2 audio
            } else if (commandText === 'playsound demoman_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-2-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_3 audio
            } else if (commandText === 'playsound demoman_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-3-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_4 audio
            } else if (commandText === 'playsound demoman_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-4-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_5 audio
            } else if (commandText === 'playsound demoman_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-5-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_6 audio
            } else if (commandText === 'playsound demoman_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-6-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_7 audio
            } else if (commandText === 'playsound demoman_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-7-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_8 audio
            } else if (commandText === 'playsound demoman_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-8-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_9 audio
            } else if (commandText === 'playsound demoman_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-9-audio');
                    demomanAudio.play();
                }, 3500);

            // play demoman_10 audio
            } else if (commandText === 'playsound demoman_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: demoman_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var demomanAudio = document.getElementById('demoman-10-audio');
                    demomanAudio.play();
                }, 3500);

            // play heavy_1 audio
            } else if (commandText === 'playsound heavy_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-1-audio');
                    heavyAudio.play();
                }, 3500);
            
            // play heavy_2 audio
            } else if (commandText === 'playsound heavy_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-2-audio');
                    heavyAudio.play();
                }, 3500);
            
            // play heavy_3 audio
            } else if (commandText === 'playsound heavy_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-3-audio');
                    heavyAudio.play();
                }, 3500);

            // play heavy_4 audio
            } else if (commandText === 'playsound heavy_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-4-audio');
                    heavyAudio.play();
                }, 3500);

            // play heavy_5 audio
            } else if (commandText === 'playsound heavy_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-5-audio');
                    heavyAudio.play();
                }, 3500);

            // play heavy_6 audio
            } else if (commandText === 'playsound heavy_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-6-audio');
                    heavyAudio.play();
                }, 3500);

            // play heavy_7 audio
            } else if (commandText === 'playsound heavy_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-7-audio');
                    heavyAudio.play();
                }, 3500);

            // play heavy_8 audio
            } else if (commandText === 'playsound heavy_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-8-audio');
                    heavyAudio.play();
                }, 3500);

            // play heavy_9 audio
            } else if (commandText === 'playsound heavy_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-9-audio');
                    heavyAudio.play();
                }, 3500);

            // play heavy_10 audio
            } else if (commandText === 'playsound heavy_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: heavy_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var heavyAudio = document.getElementById('heavy-10-audio');
                    heavyAudio.play();
                }, 3500);

            // play engineer_1 audio
            } else if (commandText === 'playsound engineer_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-1-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_2 audio
            } else if (commandText === 'playsound engineer_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-2-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_3 audio
            } else if (commandText === 'playsound engineer_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-3-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_4 audio
            } else if (commandText === 'playsound engineer_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-4-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_5 audio
            } else if (commandText === 'playsound engineer_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-5-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_6 audio
            } else if (commandText === 'playsound engineer_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-6-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_7 audio
            } else if (commandText === 'playsound engineer_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-7-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_8 audio
            } else if (commandText === 'playsound engineer_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-8-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_9 audio
            } else if (commandText === 'playsound engineer_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-9-audio');
                    engineerAudio.play();
                }, 3500);

            // play engineer_10 audio
            } else if (commandText === 'playsound engineer_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: engineer_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var engineerAudio = document.getElementById('engineer-10-audio');
                    engineerAudio.play();
                }, 3500);

            // play medic_1 audio
            } else if (commandText === 'playsound medic_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-1-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_2 audio
            } else if (commandText === 'playsound medic_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-2-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_3 audio
            } else if (commandText === 'playsound medic_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-3-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_4 audio
            } else if (commandText === 'playsound medic_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-4-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_5 audio
            } else if (commandText === 'playsound medic_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-5-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_6 audio
            } else if (commandText === 'playsound medic_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-6-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_7 audio
            } else if (commandText === 'playsound medic_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-7-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_8 audio
            } else if (commandText === 'playsound medic_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-8-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_9 audio
            } else if (commandText === 'playsound medic_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-9-audio');
                    medicAudio.play();
                }, 3500);

            // play medic_10 audio
            } else if (commandText === 'playsound medic_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: medic_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var medicAudio = document.getElementById('medic-10-audio');
                    medicAudio.play();
                }, 3500);

            // play sniper_1 audio
            } else if (commandText === 'playsound sniper_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-1-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_2 audio
            } else if (commandText === 'playsound sniper_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-2-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_3 audio
            } else if (commandText === 'playsound sniper_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-3-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_4 audio
            } else if (commandText === 'playsound sniper_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-4-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_5 audio
            } else if (commandText === 'playsound sniper_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-5-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_6 audio
            } else if (commandText === 'playsound sniper_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-6-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_7 audio
            } else if (commandText === 'playsound sniper_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-7-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_8 audio
            } else if (commandText === 'playsound sniper_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-8-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_9 audio
            } else if (commandText === 'playsound sniper_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-9-audio');
                    sniperAudio.play();
                }, 3500);

            // play sniper_10 audio
            } else if (commandText === 'playsound sniper_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: sniper_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var sniperAudio = document.getElementById('sniper-10-audio');
                    sniperAudio.play();
                }, 3500);

            // play spy_1 audio
            } else if (commandText === 'playsound spy_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-1-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_2 audio
            } else if (commandText === 'playsound spy_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-2-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_3 audio
            } else if (commandText === 'playsound spy_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-3-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_4 audio
            } else if (commandText === 'playsound spy_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-4-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_5 audio
            } else if (commandText === 'playsound spy_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-5-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_6 audio
            } else if (commandText === 'playsound spy_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-6-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_7 audio
            } else if (commandText === 'playsound spy_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-7-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_8 audio
            } else if (commandText === 'playsound spy_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-8-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_9 audio
            } else if (commandText === 'playsound spy_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-9-audio');
                    spyAudio.play();
                }, 3500);

            // play spy_10 audio
            } else if (commandText === 'playsound spy_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version T0101010.\nFile: spy_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var spyAudio = document.getElementById('spy-10-audio');
                    spyAudio.play();
                }, 3500);

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
