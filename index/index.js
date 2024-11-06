$(document).ready(function () {
  function configureCodeBlock(elem, lang) {
    layui.code({
      elem: elem,
      preview: true,
      previewStyle: "word-wrap: break-word;",
      wordWrap: true,
      lang: lang,
      theme: "dark",
    });
  }
  configureCodeBlock("#demo1", "html");
  configureCodeBlock("#demo2", "css");
  configureCodeBlock("#demo3", "js");
  configureCodeBlock("#demo4", "js");
  configureCodeBlock("#demo6", "js");
  configureCodeBlock("#demo7", "css");
  configureCodeBlock("#demo8", "css");
  configureCodeBlock("#demo9", "css"); 
  configureCodeBlock("#democss1", "css");
  configureCodeBlock("#demo10", "html");
  configureCodeBlock("#demo11", "html");
  configureCodeBlock("#demo12", "js");
  configureCodeBlock("#demo13", "js");
  configureCodeBlock("#demo14", "git");
});

// 鼠标悬浮显示代码
$(".link-ul .link-item").hover(function () {
  if ($(this).find(".code").hasClass("hidden")) {
    $(this).find(".code").removeClass("hidden");
    $("body").addClass("show-scrollbar");
  } else {
    $(this).find(".code").addClass("hidden");
    $("body").removeClass("show-scrollbar"); // 移开时执行
  }
});

// 显示侧边工具
document.addEventListener("scroll", function () {
  let cont = document.querySelector(".pc-rfixed");
  var scrollPosition = window.scrollY;
  var threshold = 200;
  var opacity = Math.min(1, scrollPosition / threshold);
  cont.style.opacity = opacity.toString();
  if (opacity <= 0.6) {
    cont.style.display = "none";
  } else {
    cont.style.display = "block";
  }
});

function scrollTop1() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
