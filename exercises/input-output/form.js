document.getElementById('pirateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var adjective = document.getElementById('adjective').value;
    var name = document.getElementById('name').value;
    var pirateName = adjective + ' ' + name;
    var output = document.getElementById('output');
    output.innerHTML = '<p>Your pirate name is: <strong>' + pirateName + '</strong></p>';
});