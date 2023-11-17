const Side = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let side = res.side.map((elem) => {
        return `<h1>${elem.title1}</h1>
        <h3>${elem.title1}</h3>
        <p>${elem.p}</p>
        <div> <a href="${elem.link}">${elem.linkt}</a> </div>`;
    });
    document.querySelector(".side-text").innerHTML = side.join("");
  };
  export default Side;