const Recipe2 = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let rice = res.recipe2.map((elem) => {
        return `  
        <div class="${elem.name} ">
        <div class="img${elem.num}">
          <div class="circle">
            <div class="triangle"></div>
          </div>
          <img
            src="${elem.image} "
            alt="golgoliiiii"
          />
          <span>${elem.time}</span>
        </div>
        <div class="text">
          <h3>${elem.title}</h3>
          <p>
            ${elem.p}
          </p>
          <a href="${elem.link}">${elem.linkt}</a>
        </div>
      </div>`;
      
    });
    document.querySelector(".recipe3 .post").innerHTML = rice.join("");
  };
  export default Recipe2;