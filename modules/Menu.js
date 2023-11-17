const Menu = async () => {
  let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
  let res = await data.json();
  let menuu = res.menu.map((elem) => {
    if (elem.dropdown.length === 0) {
      return `<li class="${elem.class}"><a href="${elem.link}" >${elem.name}</a></li>`;
    } else {
        
      return `<li class="${elem.class}"> <a href="${elem.link}" >${elem.name}</a>
        <div class="${elem.class}">
        
        ${elem.dropdown.map((ep) => {
            return `<div><a href=${ep.link}  >${ep.name}</a></div>`;
          })
          .join("")}
                    
                    
        </div>
        </li>`;
    }
  });
  document.querySelector(".menujs").innerHTML = menuu.join("");
};
export default Menu;
{
  /* <li><a href="#"  >صفحه اصلی</a></li>
                <li class="about">
                  <a href="#" >شركت گلستان</a>
                  <div class="about">
                    <div>
                      <a href="#"  >معرفی شرکت</a>
                    </div>
                    <div>
                      <a href="#" >تاریخچه گلستان</a>
                    </div>
                    <div>
                      <a href="#" 
                        >اخبار و اطلاعیه ها</a
                      >
                    </div>
                    <div>
                      <a href="#" 
                        >مسئولیت های اجتماعی</a
                      >
                    </div>
                    <div>
                      <a href="#" >سازمان فروش</a>
                    </div>
                    <div>
                      <a href="#" 
                        >سازمان توزیع</a
                      >
                    </div>
                    <div>
                      <a href="#" >برندها</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" >محصولات</a>
                </li>
                <li class="blog">
                  <a href="#"  target="_blank">وبلاگ</a>
                  <div class="blog">
                    <div>
                      <a href="#" >مجله گلستان</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" >قرعه كشی</a>
                </li>
                <li>
                  <a href="#" >استخدام</a>
                </li>
                <li class="contact">
                  <a
                    href="#"
                    
                    >تماس با ما</a
                  >
                  <div class="contact-us">
                    <div>
                      <a
                        href="#"
                        class="product-nav-content-li"
                        >دفتر مرکزی</a
                      >
                    </div>
                    <div>
                      <a
                        href="#"
                        class="product-nav-content-li"
                        >صدای مصرف کنندگان</a
                      >
                    </div>
                    <div>
                      <a
                        href="#"
                        class="product-nav-content-li"
                        >ارتباط با مشترکین</a
                      >
                    </div>
                  </div>
                </li>
                <li><a href="en/" >EN</a></li>*/
}
