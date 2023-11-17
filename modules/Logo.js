const Logo = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let loogo= `<a href="${res.link}"
        ><img src="${res.logo.image}" alt="${res.logo.name}"/></a>`
  
    document.querySelector(".right").innerHTML = loogo;
  };
export default Logo;
