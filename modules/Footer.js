const Footer = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let rice = res.footer.map((elem) => {
        return `<div class="${elem.class}">
        <img src="${elem.image}" alt="${elem.class}" />
        <h4>${elem.t}</h4>
        <a href="${elem.link}">${elem.link1}</a>
        <a href="${elem.link}">${elem.link2}</a>
        <a href="${elem.link}">${elem.link3}</a>
        <a href="${elem.link}">${elem.link4}</a>
        <a href="${elem.link}">${elem.link5}</a>
      </div>`;
      
    });
    document.querySelector(".end").innerHTML = rice.join("");
  };
  export default Footer;