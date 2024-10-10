const forBusinessTab = () => {
  let tabs_menu_id = document.getElementById("tabs_menu_id");
  let for_business_id = document.getElementById("for_business_id");
  let for_customer_id = document.getElementById("for_customer_id");
  let for_business_tab_pane_id = document.getElementById(
    "for_business_tab_pane_id"
  );
  let for_customer_tab_pane_id = document.getElementById(
    "for_customer_tab_pane_id"
  );

  tabs_menu_id.classList.remove("ks_tab_customer");

  for_business_id.classList.add("ks_cur_act");
  for_customer_id.classList.remove("ks_cur_act");

  for_business_tab_pane_id.classList.add("ks_cur_act");
  for_customer_tab_pane_id.classList.remove("ks_cur_act");
};

const forCustomerTab = () => {
  let tabs_menu_id = document.getElementById("tabs_menu_id");
  let for_business_id = document.getElementById("for_business_id");
  let for_customer_id = document.getElementById("for_customer_id");
  let for_business_tab_pane_id = document.getElementById(
    "for_business_tab_pane_id"
  );
  let for_customer_tab_pane_id = document.getElementById(
    "for_customer_tab_pane_id"
  );

  tabs_menu_id.classList.add("ks_tab_customer");

  for_business_id.classList.remove("ks_cur_act");
  for_customer_id.classList.add("ks_cur_act");

  for_business_tab_pane_id.classList.remove("ks_cur_act");
  for_customer_tab_pane_id.classList.add("ks_cur_act");
};

const tabLinkNews = () => {
  let tab_link_news_id = document.getElementById("tab_link_news_id");
  let tab_link_customer_story_id = document.getElementById(
    "tab_link_customer_story_id"
  );

  let tab_pane_news_id = document.getElementById("tab_pane_news_id");
  let tab_pane_customer_story_id = document.getElementById(
    "tab_pane_customer_story_id"
  );

  let w_tab_content_id = document.getElementById("w_tab_content_id");
  w_tab_content_id.classList.remove("ks-customer-active");

  tab_link_news_id.classList.add("ks_w_current");
  tab_link_customer_story_id.classList.remove("ks_w_current");

  tab_pane_news_id.classList.add("ks_w_tab_active");
  tab_pane_customer_story_id.classList.remove("ks_w_tab_active");
};

const tabLinkCutomerStory = () => {
  let tab_link_news_id = document.getElementById("tab_link_news_id");
  let tab_link_customer_story_id = document.getElementById(
    "tab_link_customer_story_id"
  );

  let tab_pane_news_id = document.getElementById("tab_pane_news_id");
  let tab_pane_customer_story_id = document.getElementById(
    "tab_pane_customer_story_id"
  );

  let w_tab_content_id = document.getElementById("w_tab_content_id");
  w_tab_content_id.classList.add("ks-customer-active");

  tab_link_news_id.classList.remove("ks_w_current");
  tab_link_customer_story_id.classList.add("ks_w_current");

  tab_pane_news_id.classList.remove("ks_w_tab_active");
  tab_pane_customer_story_id.classList.add("ks_w_tab_active");
};

let divElementWidth = 0;
let countClick = 0;

const leftArrowClick = () => {
  let slide_parent_id = document.getElementById("slide_parent_id");
  let childrenDiv = slide_parent_id.querySelectorAll(".ks_w_slide");

  if (countClick == 0) {
    countClick =
      document.getElementById("slide_parent_id").childElementCount - 1;
    console.log("--------countClick: ", countClick);

    // document.getElementById(
    //   "count_click_id"
    // ).innerText = `Count Click: ${countClick}`;

    divElementWidth = -(
      (document.getElementById("slide_parent_id").childElementCount - 1) *
      460
    );
    console.log("--------, divElementWidth: ", divElementWidth);

    childrenDiv.forEach((el) => {
      el.style.setProperty(
        "transform",
        `translateX(${divElementWidth}px)`,
        "important"
      );
    });
  } else if (countClick > 0) {
    countClick = countClick - 1;
    console.log("--------countClick: ", countClick);

    // document.getElementById(
    //   "count_click_id"
    // ).innerText = `Count Click: ${countClick}`;

    divElementWidth = divElementWidth + 460;
    // document.getElementById(
    //   "count_pixel_id"
    // ).innerText = `Count Pixel: ${divElementWidth}px`;

    childrenDiv.forEach((el) => {
      el.style.setProperty(
        "transform",
        `translateX( ${divElementWidth}px)`,
        "important"
      );
    });
  }
};

const rightArrowClick = () => {
  let slide_parent_id = document.getElementById("slide_parent_id");
  let childrenDiv = slide_parent_id.querySelectorAll(".ks_w_slide");

  // if (countClick < (document.getElementById("slide_parent_id").childElementCount - 1)) {
  if (
    countClick <
    document.getElementById("slide_parent_id").childElementCount - 1
  ) {
    countClick = countClick + 1;
    console.log("--------countClick: ", countClick);

    // document.getElementById(
    //   "count_click_id"
    // ).innerText = `Count Click: ${countClick}`;

    divElementWidth = divElementWidth - 460;
    // document.getElementById(
    //   "count_pixel_id"
    // ).innerText = `Count Pixel: ${divElementWidth}px`;

    childrenDiv.forEach((el) => {
      el.style.setProperty(
        "transform",
        `translateX( ${divElementWidth}px)`,
        "important"
      );
    });
  } else {
    divElementWidth = 0;
    countClick = 0;

    childrenDiv.forEach((el) => {
      el.style.setProperty("transform", `translateX(0px)`, "important");
    });

    // document.getElementById(
    //   "count_click_id"
    // ).innerText = `Count Click: ${countClick}`;
    // document.getElementById(
    //   "count_pixel_id"
    // ).innerText = `Count Pixel: ${divElementWidth}px`;
  }
};

// function changeOpacity(className) {
//   var elems = document.querySelectorAll(className);
//   var index = 0,
//     length = elems.length;
//   for (; index < length; index++) {
//     elems[index].style.transition = "opacity 0.5s linear 0s";
//     elems[index].style.opacity = 0.5;
//   }
// }

// function myFunction() {
//   var x = document.querySelectorAll("#testDiv p.example");
//   x[0].style.setProperty("background-color", "red", "important");
// }

// for (var i = 0, len = checkboxes.length; i < len; i++) {
//   //work with checkboxes[i]
// }

// for (var i = 0, element; (element = checkboxes[i]); i++) {
//   //work with element
// }

// var countChildDiv =
//   document.getElementById("slide_parent_id").childElementCount;
// console.log("-------countChildDiv: ", countChildDiv);

// console.log("-------, I am here tooo");
// console.log(el);
// el.style.transition = "opacity 0.5s linear 0s";
// el.style.opacity = 0.5;

// el.style.setProperty("background-color", "red", "important");

// var div_array = [...children]; // converts NodeList to Array
// div_array.forEach((divElement) => {
//   console.log("-------, I am here");
//   console.log(divElement);

//   // do something awesome with each div
// });

// ---------
