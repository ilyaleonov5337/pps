function startListening() {
    const startButton = document.getElementById('startButton');
    startButton.textContent = 'Говорите...';

    const recognition = new webkitSpeechRecognition(); 
    recognition.lang = 'ru-RU';

    recognition.start();
    setTimeout(function() {
        recognition.stop();
        startButton.textContent = 'Сказать сукретную фразу';
    }, 5000);

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        const voiceConfirmationInput = document.getElementById('voiceConfirmation');
        voiceConfirmationInput.value = transcript;
        if (transcript.includes('я люблю гуап')) {
            document.getElementById('voiceConfirmationError').style.display = 'none'; // Скрываем сообщение об ошибке
        } else {
            document.getElementById('voiceConfirmationError').style.display = 'block'; // Показываем сообщение об ошибке
        }
    }
    recognition.onerror = function(event) {
        console.error('Speech recognition error occurred:', event.error);
    }
}
