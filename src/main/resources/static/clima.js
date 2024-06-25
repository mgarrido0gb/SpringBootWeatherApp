
function get_coordenadas () {
    const pos = navigator.geolocation.getCurrentPosition(function (pos) {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
  
      get_pronostico(lat, lon)
    });
    console.log("LISTO");
  }
  
  async function get_pronostico(lat, lon) {
    const api_key = '4fd6998fe6650d6d7da3f108a579bf6f'

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    const resp = await fetch(url)
    const data = await resp.json()
    const temperature = data.main.temp -273;
    $('#pronostico').html("En este momento hay una temperatura de " + temperature + "°C");

    console.log(data)
  }
  
  get_coordenadas();