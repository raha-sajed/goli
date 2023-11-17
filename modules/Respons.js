const Respons = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let respons = res.respons.map((elem) => {
        return ` 
        <div class="res">${elem.t1}</div>
          <div class="text1">
            <span>${elem.te1}</span>
            <span>${elem.te2}</span>
          </div>
          <div class="text2">${elem.te3}</div>

          <div class="img">
            <img src="${elem.image}" alt="${elem.te3} " />
          </div>
          <div class="line"></div>
          <div class="text-res">
            <h3>${elem.t2} </h3>
            <p>
             ${elem.p}
            </p>
            <a href="${elem.link}">${elem.linkt}</a>
          </div>
        `;
      
    });
    document.querySelector(" .Responsibility").innerHTML = respons.join("");
  };
  export default Respons;