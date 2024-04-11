function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '2d5646e34152455e948220931241104'; // Replace with your actual API key

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        .then(response => response.json())
        .then(data => {
            const weatherIcon = data.current.condition.icon;
            const temperature = data.current.temp_c;
            const windSpeed = data.current.wind_kph;
            const currentDate = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

            document.getElementById('weatherIcon').src = weatherIcon;
            document.getElementById('temperature').textContent = `Temperatura: ${temperature}°C`;
            document.getElementById('windSpeed').textContent = `Velocidade do vento: ${windSpeed} km/h`;
            document.getElementById('currentDate').textContent = `Hoje é ${currentDate}`;
        })
        .catch(error => console.error('Erro ao buscar dados do tempo:', error));
}
