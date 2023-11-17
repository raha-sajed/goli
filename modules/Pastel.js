const Pastel = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let pastel = res.pastel.map((elem) => {
        return `<div class="${elem.class}">
        <img
          src="${elem.image}"
          alt="${elem.text}"
        />
        <div>${elem.text}</div>
        <div class="line"></div>
      </div>`;
    });
    document.querySelector(".pastel").innerHTML = pastel.join("");
  };
  export default Pastel;