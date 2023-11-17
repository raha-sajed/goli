const Recipe1 = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let rice = res.recipe1.map((elem) => {
        return `  
        <div class="${elem.name}">
        <img
          src="${elem.image}"
          alt="recipe1"
        />
        <div class="text">
          <h3>${elem.title} </h3>
          <p>${elem.p}
          </p>
          <a href="${elem.link}">${elem.linkt}</a>
        </div>
      </div>`;
      
    });
    document.querySelector(".recipe2 .post").innerHTML = rice.join("");
  };
  export default Recipe1;