document.getElementById("obtenerclima").addEventListener("click", function() {
  const ciudad = document.getElementById("ciudad").value; 
  const apiKey = "630e169f5b34726d710af64b504f0fae"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

 
 if (ciudad.trim() === "") {
    alert("Por favor, rptmai escribe una jodiaa ciudad");
    return;
  }


  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("resultado").innerHTML = `
        <h1>${data.name}, ${data.sys.country}</h1>
        <p class="info-clima"> 🌡️ Temperatura: ${data.main.temp} °C</p>
        <p class="info-clima">🌤️ Clima: ${data.weather[0].description}</p>
        <p class="info-clima">💨 Viento: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => console.error("Error:", error));

    document.getElementById("borrarclima").addEventListener("click", function() {
  document.getElementById("resultado").innerHTML = " ";
  document.getElementById("")

});

    
});
