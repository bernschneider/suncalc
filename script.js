var sunrisePos = SunCalc.getPosition(Date.now(), 53.3, 10.1);
console.log(sunrisePos.azimuth * 180 / Math.PI);
h = sunrisePos.altitude * 180 / Math.PI;
document.body.main.innerHTML = `<p>Sun altitude: ${h} degrees</p>`;
