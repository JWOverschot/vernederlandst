let hash = location.hash;
let text = hash.replace(/^./, '').replace(/%20/g, ' ');
let resultElement = document.getElementById('result');

resultElement.innerHTML = '<p>' + text + '</p>';