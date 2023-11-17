const Rice = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let rice = res.rice.map((elem) => {
        return `
          
          <div class="img">
          <img src="${elem.image}" alt="rice" />
        </div>
        <div class="bigline"></div>

        <div class="red">
          <div class="red-box">
            <h4>${elem.name}</h4>
            <h6>${elem.name2}</h6>
          </div>
        </div>
        <div class="line"></div>
        <div class="first-part">
          <div class="ro1">${elem.rol} </div>
          <p>
            ${elem.p}
          </p>
          <div class="links">
          ${elem.links.map((ep) => {
            return ` <a href="#">${ep.text}</a>
            `;
          })
          .join("")}
          </div>
        </div>`;
      
    });
    document.querySelector(".rice").innerHTML = rice.join("");
  };
  export default Rice;