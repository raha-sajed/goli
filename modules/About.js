const About = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let about = res.about.map((elem) => {
        return `<h4>${elem.title}</h4>
        <p>${elem.p}
        </p>`;
    });
    document.querySelector(".about1").innerHTML = about.join("");
  };
  export default About;