//temperature
window.onload = (event) => {
  const celsiusgr = document.querySelector("#celsius");
  const fahrenheitgr = document.querySelector("#fahrenheit");

  celsiusgr.addEventListener("click", () => {
    setCookie("grades", "celsius");
    setCookie("language", "romanian");
    console.log("celsius grade");
  });

  fahrenheitgr.addEventListener("click", () => {
    setCookie("grades", "fahrenheit");
    setCookie("language", "american eng");
    console.log("fahrenheit grade");
  });

  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
  };

  //history
  const push = document.querySelector("#push");
  push.addEventListener("click", () => {
    history.pushState("Push History on", null, "Pushed History");
    console.log(history.state);
  });

  const replace = document.querySelector("#replace");
  replace.addEventListener("click", () => {
    history.replaceState(
      "Replaced",
      null,
      "http://127.0.0.1:5500/allcookies.html"
    );
    console.log(history.state);
  });

  //geolocation
  const Location = () => {
    const location = document.querySelector("#location");

    const actualLocation = (myPos) => {
      console.log(myPos);
      const latitude = myPos.latitude;
      const longitude = myPos.longitude;
      console.log(latitude + " " + longitude );
      const api =
        "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en";

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          location.innerText = data.localityInfo.administrative[2].description;
        });
    };

    navigator.geolocation.getCurrentPosition(actualLocation);
  };
  const findButton = document.querySelector("#Location");
  findButton.addEventListener("click", Location);
};

