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

    var initialVoice1HTMLContent = document.getElementById('voice1').innerHTML;
    var initialVoice2HTMLContent = document.getElementById('voice2').innerHTML;
    var initialVoice3HTMLContent = document.getElementById('voice3').innerHTML;
    var initialVoice4HTMLContent = document.getElementById('voice4').innerHTML;
    var initialVoice5HTMLContent = document.getElementById('voice5').innerHTML;
    var initialVoice6HTMLContent = document.getElementById('voice6').innerHTML;
    var initialVoice7HTMLContent = document.getElementById('voice7').innerHTML;
    var initialVoice8HTMLContent = document.getElementById('voice8').innerHTML;
    var initialVoice9HTMLContent = document.getElementById('voice9').innerHTML;
    var initialVoice10HTMLContent = document.getElementById('voice10').innerHTML;
    var initialVoice11HTMLContent = document.getElementById('voice11').innerHTML;
    var initialVoice12HTMLContent = document.getElementById('voice12').innerHTML;
    var initialVoice13HTMLContent = document.getElementById('voice13').innerHTML;
    var initialVoice14HTMLContent = document.getElementById('voice14').innerHTML;
    var initialVoice15HTMLContent = document.getElementById('voice15').innerHTML;
    var initialVoice16HTMLContent = document.getElementById('voice16').innerHTML;
    var initialVoice17HTMLContent = document.getElementById('voice17').innerHTML;

    
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

    // make wheatley image appear
    function createWheatley() {
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
               "\necho voice_line # - Display a classic Wheatley voiceline, up to 17." +
               "\nent_create wheatley - Summons Wheatley." +
               "\nplaysound wheatley_# - Plays the corresponding audio for a voice line, up to 17.";

                printAdditionalText(document.querySelector('.text-container'), helpText);
            
            // print info about the current page
            } else if (commandText === 'about') {
                printCommand(document.querySelector('.text-container'), commandText);
                printAdditionalText(document.querySelector('.text-container'), initialAboutContainerContent);
            
            // print voice_line 1 text
            } else if (commandText === 'echo voice_line 1') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice1HTMLContent);
                }, 2000);
                
            // print voice_line 2 text
            } else if (commandText === 'echo voice_line 2') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice2HTMLContent);
                }, 2000);

            // print voice_line 3 text
            } else if (commandText === 'echo voice_line 3') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice3HTMLContent);
                }, 2000); 

            // print voice_line 4 text
            } else if (commandText === 'echo voice_line 4') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice4HTMLContent);
                }, 2000); 

            // print voice_line 5 text
            } else if (commandText === 'echo voice_line 5') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice5HTMLContent);
                }, 2000); 

            // print voice_line 6 text
            } else if (commandText === 'echo voice_line 6') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice6HTMLContent);
                }, 2000); 

            // print voice_line 7 text
            } else if (commandText === 'echo voice_line 7') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice7HTMLContent);
                }, 2000); 

            // print voice_line 8 text
            } else if (commandText === 'echo voice_line 8') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice8HTMLContent);
                }, 2000); 

            // print voice_line 9 text
            } else if (commandText === 'echo voice_line 9') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice9HTMLContent);
                }, 2000); 

            // print voice_line 10 text
            } else if (commandText === 'echo voice_line 10') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice10HTMLContent);
                }, 2000); 

            // print voice_line 11 text
            } else if (commandText === 'echo voice_line 11') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice11HTMLContent);
                }, 2000); 

            // print voice_line 12 text
            } else if (commandText === 'echo voice_line 12') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice12HTMLContent);
                }, 2000); 

            // print voice_line 13 text
            } else if (commandText === 'echo voice_line 13') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice13HTMLContent);
                }, 2000); 

            // print voice_line 14 text
            } else if (commandText === 'echo voice_line 14') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice14HTMLContent);
                }, 2000); 

            // print voice_line 15 text
            } else if (commandText === 'echo voice_line 15') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice15HTMLContent);
                }, 2000); 

            // print voice_line 16 text
            } else if (commandText === 'echo voice_line 16') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice16HTMLContent);
                }, 2000); 

            // print voice_line 17 text
            } else if (commandText === 'echo voice_line 17') {
                printCommand(document.querySelector('.text-container'), commandText);

                setTimeout(function() {
                    printAdditionalHTML(document.querySelector('.text-container'), initialVoice17HTMLContent);
                }, 2000); 

            // play wheatley_1 audio
            } else if (commandText === 'playsound wheatley_1') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_1.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-1-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_2 audio
            } else if (commandText === 'playsound wheatley_2') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_2.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-2-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_3 audio
            } else if (commandText === 'playsound wheatley_3') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_3.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-3-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_4 audio
            } else if (commandText === 'playsound wheatley_4') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_4.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-4-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_5 audio
            } else if (commandText === 'playsound wheatley_5') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_5.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-5-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_6 audio
            } else if (commandText === 'playsound wheatley_6') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_6.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-6-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_7 audio
            } else if (commandText === 'playsound wheatley_7') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_7.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-7-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_8 audio
            } else if (commandText === 'playsound wheatley_8') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_8.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-8-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_9 audio
            } else if (commandText === 'playsound wheatley_9') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_9.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-9-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_10 audio
            } else if (commandText === 'playsound wheatley_10') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_10.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-10-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_11 audio
            } else if (commandText === 'playsound wheatley_11') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_11.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-11-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_12 audio
            } else if (commandText === 'playsound wheatley_12') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_12.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-12-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_13 audio
            } else if (commandText === 'playsound wheatley_13') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_13.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-13-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_14 audio
            } else if (commandText === 'playsound wheatley_14') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_14.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-14-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_15 audio
            } else if (commandText === 'playsound wheatley_15') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_15.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-15-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_16 audio
            } else if (commandText === 'playsound wheatley_16') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_16.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-16-audio');
                    wheatleyAudio.play();
                }, 3500);

            // play wheatley_17 audio
            } else if (commandText === 'playsound wheatley_17') {
                printCommand(document.querySelector('.text-container'), commandText);

                // display console loading text
                var additionalText = "Initializing RC libraries for secure Internet server.\nExecuting audio config file.\nConnection to file coordinator established.\nCurrent schema is up-to-date with version W909451.\nFile: wheatley_17.wav.\nClient reached file_load.";
                printAdditionalText(document.querySelector('.text-container'), additionalText);

                setTimeout(function() {
                    var wheatleyAudio = document.getElementById('wheatley-17-audio');
                    wheatleyAudio.play();
                }, 3500);
            
            // move gnome onto screen
            } else if (commandText === 'ent_create wheatley') {
                printCommand(document.querySelector('.text-container'), commandText);
                createWheatley();
            
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
