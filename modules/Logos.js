const Logos = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let logo = res.logos.map((elem) => {
        return `<a href="${elem.link}">
        <div class="${elem.class}"></div>
      </a>`;
      
    });
    document.querySelector(".social").innerHTML = logo.join("");
  };
  export default Logos;