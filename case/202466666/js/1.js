function format(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function delformat(sNum) {
  return parseFloat(sNum.replace(/,/g, ""));
}
function getlyysInfo(info = {}) {
  if ($("#clickStatus").val() == 0) {
    return false;
  }
  var info = {};

  var lyysinfo =
    '{"channelCode":"W01","holder":{"age":30,"birthday":"2024-03-09","customerType":"1","name":"","sex":"1","relation":"0"},"insurant":{"age":28,"customerType":"2","name":"","relation":"0","sex":"1"},"productList":[{"attList":[{"attCode":"premium","attText":"保费","attValue":10000},{"attCode":"payMode","attText":"缴费方式","attValue":"year"},{"attCode":"payPeriod","attText":"交费期限","attValue":"term_3"},{"attCode":"policyPeriod","attText":"保险期限","attValue":"to_105"},{"attCode":"plan_term","attText":"利益演示","attValue":"plan_1"}],"productCode":"800000004","productName":"瑞享传世"}]}';

  lyysinfo = JSON.parse(lyysinfo);
  lyysinfo.insurant.age = lyysinfo.holder.age = parseInt($("#age").val());

  let date = new Date(); // 创建当前日期对象
  date.setDate(date.getDate() - 28); // 设置日期为2天前
  let year = date.getFullYear(); // 获取年份
  let month = (1 + date.getMonth()).toString().padStart(2, "0"); // 获取月份并格式化为两位数字
  let day = date.getDate().toString().padStart(2, "0"); // 获取日期并格式化为两位数字

  lyysinfo.insurant.birthday = lyysinfo.holder.birthday =
    year + "-" + month + "-" + day;

  lyysinfo.holder.sex = $("#gender").val() == "男" ? 1 : 2;
  lyysinfo.insurant.sex = $("#gender").val() == "男" ? 1 : 2;

  lyysinfo.productList[0].attList[1].attValue = $("#premark1").val();
  lyysinfo.productList[0].attList[0].attValue = $("#remark2").val();
  lyysinfo.productList[0].attList[2].attValue = $("#premark3").val();

  info.lyysinfo = JSON.stringify(lyysinfo);

  layer.load(1, {
    shade: [0.4, "#393D49"],
  });

  setTimeout(function () {
    // 关闭模态框
    layer.closeAll("loading");
  }, 60000);
  $.ajax({
    url: "/projects/api/index.php/ProductBooking/getLyys",
    type: "POST",
    data: info,
    header: { "content-type": "application/x-www-form-urlencoded" },
    success: function (e) {
      console.log(e);
      if (e.code == 200) {
        sessionStorage.setItem(
          "getLyys_plan_1",
          JSON.stringify(e.data.benefitList)
        );
        setinfo();

        lyysinfo.productList[0].attList[4].attValue = "plan_2";
        info.lyysinfo = JSON.stringify(lyysinfo);

        $.ajax({
          url: "/projects/api/index.php/ProductBooking/getLyys",
          type: "POST",
          data: info,
          header: { "content-type": "application/x-www-form-urlencoded" },
          success: function (e) {
            console.log(e);

            if (e.code == 200) {
              sessionStorage.setItem(
                "getLyys_plan_2",
                JSON.stringify(e.data.benefitList)
              );

              var benefitList1 = JSON.parse(
                sessionStorage.getItem("getLyys_plan_1")
              );
              var benefitList2 = JSON.parse(
                sessionStorage.getItem("getLyys_plan_2")
              );

              var all_je =
                delformat(benefitList1.TB[80 - parseInt($("#age").val())]) +
                delformat(benefitList2.TB_2[80 - parseInt($("#age").val())]);

              all_je = parseFloat(all_je).toFixed(2);

              all_je = format(all_je);

              $(".test-result-je").text(all_je);
              $("#bz_profit").text(
                benefitList1.TB[80 - parseInt($("#age").val())]
              );
              $("#hl_profit").text(
                benefitList2.TB_2[80 - parseInt($("#age").val())]
              );
              setageVal();
            } else {
              $("#error").val(e.msg);
              show_tips(e.msg);
            }
            // 关闭模态框
            layer.closeAll("loading");
          },
        });
      } else {
        $("#error").val(e.msg);
        show_tips(e.msg);
      }
    },
  });
}

// TCP/UDP是什么，有什么区别
// TCP:是传输层上面的协议, 是面向连接的，提供可靠传输的通信协议，保证端到端传输数据的完整性和顺序性，通过三次握手建立连接，四次挥手断开连接。
// UDP:是无连接的，提供不可靠传输，一般用在视频会议，实时游戏等

// 计算总保费
function setageVal() {
  // 获取输入框的值
  // var ipval = $('#drawAgeP').val();
  var ipval = parseInt($("#drawAgeSel").text());
  ipval--;
  var benefitList1 = JSON.parse(sessionStorage.getItem("getLyys_plan_1"));
  var benefitList2 = JSON.parse(sessionStorage.getItem("getLyys_plan_2"));

  // 计算总保费
  var all_je =
    delformat(benefitList1.TB[ipval - parseInt($("#age").val())]) +
    delformat(benefitList2.TB_2[ipval - parseInt($("#age").val())]);
  // 保留两位小数
  all_je = parseFloat(all_je).toFixed(2);

  all_je = format(all_je);
  $(".test-result-je").text(all_je);
  // 显示保费
  $("#bz_profit").text(benefitList1.TB[ipval - parseInt($("#age").val())]);
  $("#hl_profit").text(benefitList2.TB_2[ipval - parseInt($("#age").val())]);
}
function setinfo() {
  let tablestr = "";
  var benefitList = JSON.parse(sessionStorage.getItem("getLyys_plan_1"));

  //确保利益
  var data = [];

  for (var i = 0; i < benefitList.YEAR.length; i++) {
    data.push({
      annual: benefitList.YEAR[i],
      agebegin: benefitList.AGE_BEGIN[i],
      ageend: benefitList.AGE_END[i],
      yearpremium: benefitList.PRM_YEAR_ALL[i],
      accumulatedpremium: benefitList.PRM_ADD_ALL[i],
      baseamount: benefitList.SG[i],
      dividendamount: benefitList.HL_SG[i],
      totalamount: benefitList.TOTAL_SG[i],
      basesurrender: benefitList.TB_1[i],
      dividendsurrender: benefitList.TB_2[i],
      totalsurrender: benefitList.TB[i],
    });
  }

  for (let item of data) {
    tablestr +=
      `<tr>
      <th><div>` +
      item.annual +
      `</div></th>
      <th><div>` +
      item.agebegin +
      `</div></th>
      <th><div>` +
      item.ageend +
      `</div></th>
      <th><div>` +
      item.yearpremium +
      `</div></th>
      <th><div>` +
      item.accumulatedpremium +
      `</div></th>
      <th><div>` +
      item.baseamount +
      `</div></th>
      <th><div>` +
      item.dividendamount +
      `</div></th>
      <th><div>` +
      item.totalamount +
      `</div></th>
      <th><div>` +
      item.basesurrender +
      `</div></th>
      <th><div>` +
      item.dividendsurrender +
      `</div></th>
      <th><div>` +
      item.totalsurrender +
      `</div></th>
    </tr>`;
  }
  $("#lyys-data").html(tablestr);
  switchTable();
}
$(document).ready(function () {
  $(".input-checkbox").iCheck({
    checkboxClass: "icheckbox_btn", //多选
    radioClass: "iradio_btn", //单选
  });

  $(".ensure-btn").click(function () {
    layer.open({
      type: 1,
      title: false,
      skin: "layui-ensure", //样式类名
      anim: 2,
      shift: 2,
      area: ["100%", "100%"],
      scrollbar: false,
      shade: 0.5,
      resize: false,
      closeBtn: 0,
      shadeClose: true, //是否开启遮罩关闭
      move: false, //禁止拖拽
      content: $(".layer-ensure"),
    });
  });
  navFixed();

  // 关闭弹窗
  $(".layer-close").click(function () {
    layer.closeAll();
  });
});

//滚到第二屏时，显示底部按钮
function navFixed() {
  var setHeight = $(window).height() * 0.9; //获取当前屏幕的高度
  var boxBtn = $(".fixed-nav");
  boxBtn.hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > setHeight) {
      boxBtn.show();
    } else {
      boxBtn.hide();
    }
  });
}

// 底部按钮滚动至表单位置
$(".insure-btn").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".product-banner").offset().top + "px",
    },
    400
  );
});

// 周岁选择
var drawAgeSelmin = 30; // 默认周岁选择
for (var c = [], t = this, i = drawAgeSelmin; i <= 104; i++)
  c.push({ id: i, value: i + "周岁", p: i });
var mobileSelect1 = new MobileSelect({
  trigger: "#drawAgeSel",
  wheels: [
    {
      data: c,
    },
  ],
  position: [4], //初始化定位 打开时默认选中的哪个 如果不填默认为0
  transitionEnd: function (indexArr, data) {
    console.log(data);
  },
  callback: function (e, i) {
    // $('#drawAgeSel').text(`${i[0].value}`);

    $("#drawAgeP").val(i[0].p);
    //
    setageVal();
  },
});

// 交费方式
var mobileSelect2 = new MobileSelect({
  trigger: "#payIntv",
  wheels: [
    {
      data: [
        { value: "年交", id: "0", p: "year" },
        { value: "月交", id: "1", p: "month" },
        { value: "趸交", id: "2", p: "single" },
      ],
    },
  ],
  position: [1], //初始化定位 打开时默认选中的哪个 如果不填默认为0
  transitionEnd: function (indexArr, data) {
    console.log(data);
  },
  callback: function (e, i) {
    $("#payIntv").text(`${i[0].value}`);
    $("#remark1").val(i[0].value);
    $("#premark1").val(i[0].p);
    $(".decrease .jj-icon").attr("src", "./images/decrease.png");
    $(".increase .jj-icon").attr("src", "./images/increase.png");
    if (i[0].id == "0") {
      $("#remark2").val(10000);
      $("#payEndYear").text("3年交");
      $("#premark3").val("term_3");

      $(".form-increase").css("pointer-events", "");
    } else if (i[0].id == "1") {
      $("#remark2").val(1000);
      $("#payEndYear").text("3年交");
      $("#premark3").val("term_3");

      $(".form-increase").css("pointer-events", "");
    } else {
      // 趸交 不需要缴费年限
      $("#remark2").val(100000);
      $("#payEndYear").text("趸交");
      $("#remark3").val("趸交");
      $("#premark3").val("single");
      $(".form-increase").css("pointer-events", "none");
    }
    getlyysInfo();
  },
});

// 控制数字和输入
$("#remark2").on("blur", function () {
  // console.log(11);
  let remainder = 1000;
  let min = 100000;
  let max = 1000000;
  let initVal;
  var value = $(this).val();

  if ($("#remark1").val() == "月交") {
    remainder = 100;
    max = 1000000;
    min = 1000;
    initVal = 1000;
    if (value < min) {
      layer.msg("最低交费金额为" + min);
      $(this).val(min);
    }
    if (value > max) {
      layer.msg("最高交费金额为100万");
      $(this).val(min);
    }
  }

  if ($("#remark1").val() == "年交") {
    max = 1000000;
    min = 10000;
    initVal = 10000;
    if (value < min) {
      layer.msg("最低交费金额为" + min);
      $(this).val(min);
    }
    if (value > max) {
      layer.msg("最高交费金额为100万");
      $(this).val(min);
    }
  }

  if ($("#remark1").val() == "趸交") {
    max = 3000000;
    min = 100000;
    initVal = 100000;
    if (value < min) {
      layer.msg("最低交费金额为" + min);
      $(this).val(min);
    }
    if (value > max) {
      layer.msg("最高交费金额为300万");
      $(this).val(min);
    }
  }

  if (value.toString().match(/^\d$/) || value % remainder !== 0) {
    layer.msg("请输入数字且是" + remainder + "的倍数！", { time: 3000 });
    $(this).val(initVal);
  }
  getlyysInfo();
});

// 保障金额 减
$(".decrease").click(function () {
  if ($("#remark1").val() == "月交") {
    let minVal = 1000; // 最小保障金额
    if (parseInt($("#remark2").val()) > minVal) {
      $("#remark2").val(parseInt($("#remark2").val()) - 100); // 累加 -100
      $(".decrease .jj-icon").attr("src", "./images/decrease.png");
    } else {
      layer.msg("最低交费金额为" + minVal);
      $(".decrease .jj-icon").attr("src", "./images/decrease-disabled.png");
    }
  }
  if ($("#remark1").val() == "年交") {
    let minVal = 10000; // 最小保障金额
    if (parseInt($("#remark2").val()) > minVal) {
      $("#remark2").val(parseInt($("#remark2").val()) - 1000); // 累加 -1000
      $(".decrease .jj-icon").attr("src", "./images/decrease.png");
    } else {
      layer.msg("最低交费金额为" + minVal);
      $(".decrease .jj-icon").attr("src", "./images/decrease-disabled.png");
    }
  }

  if ($("#remark1").val() == "趸交") {
    let minVal = 100000; // 最小保障金额
    if (parseInt($("#remark2").val()) > minVal) {
      $("#remark2").val(parseInt($("#remark2").val()) - 1000); // 累加 -1000
      $(".decrease .jj-icon").attr("src", "./images/decrease.png");
    } else {
      layer.msg("最低交费金额为" + minVal);
      $(".decrease .jj-icon").attr("src", "./images/decrease-disabled.png");
    }
  }
  getlyysInfo();
});

// 保障金额 加
$(".increase").click(function () {
  var maxVal = 1000000; // 最大保障金额
  var maxVal2 = 3000000; // 最大保障金额
  if ($("#remark1").val() == "月交") {
    if (parseInt($("#remark2").val()) < maxVal) {
      $("#remark2").val(parseInt($("#remark2").val()) + 100); // 累加100
      $(".decrease .jj-icon").attr("src", "./images/decrease.png");
    } else {
      $(".increase .jj-icon").attr("src", "./images/increase-disabled.png");
      layer.msg("最高交费金额为" + maxVal);
    }
  }
  if ($("#remark1").val() == "年交") {
    if (parseInt($("#remark2").val()) < maxVal) {
      $(".decrease .jj-icon").attr("src", "./images/decrease.png");
      $("#remark2").val(parseInt($("#remark2").val()) + 1000); // 累加1000
    } else {
      $(".increase .jj-icon").attr("src", "./images/increase-disabled.png");
      layer.msg("最高交费金额为" + maxVal);
    }
  }
  if ($("#remark1").val() == "趸交") {
    if (parseInt($("#remark2").val()) < maxVal2) {
      $(".decrease .jj-icon").attr("src", "./images/decrease.png");
      $("#remark2").val(parseInt($("#remark2").val()) + 1000); // 累加1000
    } else {
      $(".increase .jj-icon").attr("src", "./images/increase-disabled.png");
      layer.msg("最高交费金额为" + maxVal);
    }
  }
  getlyysInfo();
});

// 缴费年限
var mobileSelect3 = new MobileSelect({
  trigger: "#payEndYear",
  wheels: [
    {
      data: [
        { value: "趸交", id: "0", p: "single" },
        { value: "3年交", id: "1", p: "term_3" },
        { value: "5年交", id: "2", p: "term_5" },
        { value: "10年交", id: "3", p: "term_10" },
      ],
    },
  ],
  position: [1], //初始化定位 打开时默认选中的哪个 如果不填默认为0
  transitionEnd: function (indexArr, data) {
    console.log(data);
  },

  callback: function (e, i) {
    $("#payEndYear").text(`${i[0].value}`);
    $("#remark3").val(i[0].value);
    $("#premark3").val(i[0].p);
    if (i[0].value == "趸交") {
      $("#remark2").val(100000);
      $("#remark1").val("趸交");
      $("#premark1").val("single");
      $("#payIntv").text("趸交");
      $(".form-payment").css("pointer-events", "none");
    } else {
      if ($("#premark1").val() == "single") {
        $("#remark2").val(1000);
        $("#remark1").val("月交");
        $("#premark1").val("month");

        $("#payIntv").text("月交");
        $(".form-payment").css("pointer-events", "");
      }
    }
    getlyysInfo();
  },
});

// 被保人信息填充
for (var e = [], t = this, i = 0; i <= 65; i++)
  e.push({ id: i, value: i + "周岁" });
var mobileSelect4 = new MobileSelect({
  trigger: "#sexAgeSelect",
  wheels: [
    {
      data: [
        { value: "男", id: "0" },
        { value: "女", id: "1" },
      ],
    },
    { data: e },
  ],
  position: [0, 30], //初始化定位 打开时默认选中的哪个 如果不填默认为0
  transitionEnd: function (indexArr, data) {
    console.log(data);
  },
  callback: function (e, i) {
    $("#sexAgeSelect").text(`${i[0].value}，${i[1].value}`);
    $(".genderselect").val(i[0].value);
    $(".ageselect").val(i[1].value);
    $("#gender").val(i[0].value);
    $("#age").val(i[1].value);

    // mobileSelect3.position = [1];
    // $('#payEndYear').text('3年交');
    // $('#remark3').val('3年交');

    // 根据被保人年龄修改领取年龄
    let ms1html = "";
    drawAgeSelmin = i[1].id;
    for (var c = [], t = this, j = i[1].id; j <= 104; j++) {
      c.push({ id: j + 1, value: j + 1 + "周岁", p: j + 1 });
      ms1html += '<li data-id="' + (j + 1) + '">' + (j + 1) + "周岁</li>";
    }
    mobileSelect1.slider[0].innerHTML = ms1html;

    $("#drawAgeSel").text("80周岁");
    $("#drawAgeP").val(80);

    if (i[1].id >= 0 && i[1].id <= 60) {
      mobileSelect3.wheelsData[0].data = [
        { value: "趸交", id: "0", p: "single" },
        { value: "3年交", id: "1", p: "term_3" },
        { value: "5年交", id: "2", p: "term_5" },
        { value: "10年交", id: "3", p: "term_10" },
      ];
      mobileSelect3.slider[0].innerHTML =
        '<li data-id="0">趸交</li><li data-id="1">3年交</li><li data-id="2">5年交</li><li data-id="3">10年交</li>';
      // $('#remark3').val('term_3');
      // $('#premark3').val('term_3');
      // $('#payEndYear').text('3年交');
    } else if (i[1].id > 60 && i[1].id < 65) {
      mobileSelect3.wheelsData[0].data = [
        { value: "趸交", id: "0", p: "single" },
        { value: "3年交", id: "1", p: "term_3" },
        { value: "5年交", id: "2", p: "term_5" },
      ];
      mobileSelect3.slider[0].innerHTML =
        '<li data-id="0">趸交</li><li data-id="1">3年交</li><li data-id="2">5年交</li>';
      if ($("#premark3").val() == "term_10") {
        mobileSelect3.position = [1];

        $("#remark3").val("term_3");
        $("#premark3").val("term_3");
        $("#payEndYear").text("3年交");
      }
    } else {
      mobileSelect3.wheelsData[0].data = [
        { value: "趸交", id: "0", p: "single" },
        { value: "3年交", id: "1", p: "term_3" },
      ];
      mobileSelect3.slider[0].innerHTML =
        '<li data-id="0">趸交</li><li data-id="1">3年交</li>';
      mobileSelect3.position = [0];

      if (
        $("#premark3").val() != "single" ||
        $("#premark3").val() != "term_3"
      ) {
        mobileSelect3.position = [1];

        $("#remark3").val("term_3");
        $("#premark3").val("term_3");
        $("#payEndYear").text("3年交");
      }
    }

    // if (i[1].id >= 0 && i[1].id <= 60) {
    // 	mobileSelect1.wheelsData[0].data = [
    // 		{ value: '60周岁', id: '0', p: '60' },
    // 		{ value: '65周岁', id: '1', p: '65' },
    // 		{ value: '70周岁', id: '2', p: '70' },
    // 		{ value: '75周岁', id: '3', p: '75' },
    // 		{ value: '80周岁', id: '4', p: '80' },
    // 		{ value: '85周岁', id: '5', p: '85' },
    // 		{ value: '90周岁', id: '6', p: '90' },
    // 		{ value: '95周岁', id: '7', p: '95' },
    // 		{ value: '100周岁', id: '8', p: '100' },
    // 		{ value: '104周岁', id: '9', p: '104' }
    // 	];
    // 	mobileSelect1.slider[0].innerHTML =
    // 		'<li data-id="0">60周岁</li><li data-id="1">65周岁</li><li data-id="2">70周岁</li><li data-id="3">75周岁</li><li data-id="4">80周岁</li><li data-id="5">85周岁</li><li data-id="6">90周岁</li><li data-id="7">95周岁</li><li data-id="8">100周岁</li><li data-id="9">104周岁</li>';
    // } else {
    // 	mobileSelect1.wheelsData[0].data = [
    // 		{ value: '65周岁', id: '1', p: '65' },
    // 		{ value: '70周岁', id: '2', p: '70' },
    // 		{ value: '75周岁', id: '3', p: '75' },
    // 		{ value: '80周岁', id: '4', p: '80' },
    // 		{ value: '85周岁', id: '5', p: '85' },
    // 		{ value: '90周岁', id: '6', p: '90' },
    // 		{ value: '95周岁', id: '7', p: '95' },
    // 		{ value: '100周岁', id: '8', p: '100' },
    // 		{ value: '104周岁', id: '9', p: '104' }
    // 	];
    // 	mobileSelect1.slider[0].innerHTML =
    // 		'<li data-id="1">65周岁</li><li data-id="2">70周岁</li><li data-id="3">75周岁</li><li data-id="4">80周岁</li><li data-id="5">85周岁</li><li data-id="6">90周岁</li><li data-id="7">95周岁</li><li data-id="8">100周岁</li><li data-id="9">104周岁</li>';

    // 	if ($('#drawAgeP').val() == 60) {
    // 		$('#drawAgeSel').text(`65周岁`);
    // 		$('#drawAgeP').val(65);
    // 	}
    // }
    getlyysInfo();
  },
});

// 关闭当前弹窗
$(".layer-close1,.success-btn").click(function () {
  layer.close(layer.index);
});

// 内容导航
$(document).ready(function () {
  var navHeight = $(".menu-replace").offset().top;
  var navFix = $(".detail-tab");
  $(window).scroll(function () {
    if ($(this).scrollTop() > navHeight) {
      navFix.addClass("nav-fixed");
    } else {
      navFix.removeClass("nav-fixed");
    }
  });

  /*导航定位*/
  new hScroll({
    nav1: ".detail-tab a", //导航对应的元素
    nav2: ".floor", //监听的元素
    checkClass: "active2", //选中的样式
  });

  var itemTopList = [];
  $.each($(".floor"), function (index, item) {
    itemTopList.push($(item).offset().top);
  });
  $("body").on("click", ".detail-tab a", function () {
    var index = $(".detail-tab a").index(this);
    $("html,body").animate(
      {
        scrollTop: itemTopList[index],
      },
      300
    );
  });
});

//投保地区数据填充
$(function () {
  var InsuranceCity = "";
  for (i = 0; i < InsuranceArea.length; i++) {
    InsuranceCity = InsuranceCity + InsuranceArea[i] + "、";
  }
  InsuranceCity =
    InsuranceCity.substring(InsuranceCity.length - 1) == "、"
      ? InsuranceCity.substring(0, InsuranceCity.length - 1)
      : InsuranceCity;
  $("#fname").html(InsuranceCity + "。"); //分割后的字符输出
});

// 关闭利益演示表格弹窗
$(".m_close").on("click", function () {
  $(".lytable").hide();
  $("html").css("overflow", "unset");
});

// 利益演示表展开关闭
$(".switch").on("click", function () {
  fillSwitch = !fillSwitch;
  switchTable();
});

var fillSwitch = false; //默认收起利益演示表格
var payYear = 10; //如果交费期间为10年交

function switchTable() {
  if (!fillSwitch) {
    $(".table-tbody tr").each(function (index, item) {
      if (index + 1 > payYear && (index + 1) % 5 != 0) {
        $(item).stop().slideUp();
      }
    });
    $(".switch").find("span").html("展开全部");
    $(".switch").removeClass("sact");
    $(".interestTableParent").css("height", "4.6rem");
  } else {
    $(".table-tbody tr").each(function (index, item) {
      if (index + 1 > payYear && (index + 1) % 5 != 0) {
        $(item).stop().slideDown();
      }
    });
    $(".switch").find("span").html("部分收起");
    $(".switch").addClass("sact");
    $(".interestTableParent").css("height", "9rem");
  }
}

//切换分红水平
$(".lytypeitem").click(function () {
  if (!$(this).hasClass("active")) {
    $(".lytypeitem").removeClass("active");
    $(this).addClass("active");
    let code = $(this).attr("data-code");
    let tablestr = "";
    if (code == "ensure") {
      var benefitList = JSON.parse(sessionStorage.getItem("getLyys_plan_1"));

      //确保利益
      var data = [];

      for (var i = 0; i < benefitList.YEAR.length; i++) {
        data.push({
          annual: benefitList.YEAR[i],
          agebegin: benefitList.AGE_BEGIN[i],
          ageend: benefitList.AGE_END[i],
          yearpremium: benefitList.PRM_YEAR_ALL[i],
          accumulatedpremium: benefitList.PRM_ADD_ALL[i],
          baseamount: benefitList.SG[i],
          dividendamount: benefitList.HL_SG[i],
          totalamount: benefitList.TOTAL_SG[i],
          basesurrender: benefitList.TB_1[i],
          dividendsurrender: benefitList.TB_2[i],
          totalsurrender: benefitList.TB[i],
        });
      }
      for (let item of data) {
        tablestr +=
          `<tr>
					<th><div>` +
          item.annual +
          `</div></th>
					<th><div>` +
          item.agebegin +
          `</div></th>
					<th><div>` +
          item.ageend +
          `</div></th>
					<th><div>` +
          item.yearpremium +
          `</div></th>
					<th><div>` +
          item.accumulatedpremium +
          `</div></th>
					<th><div>` +
          item.baseamount +
          `</div></th>
					<th><div>` +
          item.dividendamount +
          `</div></th>
					<th><div>` +
          item.totalamount +
          `</div></th>
					<th><div>` +
          item.basesurrender +
          `</div></th>
					<th><div>` +
          item.dividendsurrender +
          `</div></th>
					<th><div>` +
          item.totalsurrender +
          `</div></th>
				</tr>`;
      }
      $("#lyys-data").html(tablestr);
      switchTable();
    } else {
      var benefitList = JSON.parse(sessionStorage.getItem("getLyys_plan_2"));

      //红利利益
      var data = [];

      for (var i = 0; i < benefitList.YEAR.length; i++) {
        data.push({
          annual: benefitList.YEAR[i],
          agebegin: benefitList.AGE_BEGIN[i],
          ageend: benefitList.AGE_END[i],
          yearpremium: benefitList.PRM_YEAR_ALL[i],
          accumulatedpremium: benefitList.PRM_ADD_ALL[i],
          baseamount: benefitList.SG[i],
          dividendamount: benefitList.HL_SG[i],
          totalamount: benefitList.TOTAL_SG[i],
          basesurrender: benefitList.TB_1[i],
          dividendsurrender: benefitList.TB_2[i],
          totalsurrender: benefitList.TB[i],
        });
      }
      for (let item of data) {
        tablestr +=
          `<tr>
					<th><div>` +
          item.annual +
          `</div></th>
					<th><div>` +
          item.agebegin +
          `</div></th>
					<th><div>` +
          item.ageend +
          `</div></th>
					<th><div>` +
          item.yearpremium +
          `</div></th>
					<th><div>` +
          item.accumulatedpremium +
          `</div></th>
					<th><div>` +
          item.baseamount +
          `</div></th>
					<th><div>` +
          item.dividendamount +
          `</div></th>
					<th><div>` +
          item.totalamount +
          `</div></th>
					<th><div>` +
          item.basesurrender +
          `</div></th>
					<th><div>` +
          item.dividendsurrender +
          `</div></th>
					<th><div>` +
          item.totalsurrender +
          `</div></th>
				</tr>`;
      }
      $("#lyys-data").html(tablestr);
      switchTable();
    }
  }
});
