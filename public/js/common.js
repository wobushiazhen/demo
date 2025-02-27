
// import { showErrorLayerMsg } from './errorStatus.js'

// 加载
(function () {
  function hideLoader() {
    document.querySelector(".progress").innerHTML = "100%";
    document.querySelector(".load").style.display = "none";
  }
  if (document.querySelector(".load")) {
    window.addEventListener("load", hideLoader);
  }
})();

// 公共头部
/**
 * c_header
 * @params activeItem // 默认激活的项目
 */
function c_header(activeItem = "test") {
  var header = `
    <div class="pc-header">
        <div class="header-inner">  
            <div class="inner-l"> 
                <div class="inner-l-text">
                    <p>azhen知识库</p>
                    <i class="iconfont icon-zhishiku"></i>
                </div> 
                <div class="inner-l-search">
                    <i class="iconfont icon-sousuo"></i>
                    <input type="text" name="header_search" id="header_search" placeholder="资源/教程">
                </div>
              </div>
              <div class="inner-r">    
                  <ul class="layui-nav" lay-filter="">    
                      <li class="layui-nav-item ${activeItem == "test" ? "layui-this" : ""
    }"><a href="/">测试题</a></li>  
                      <li class="layui-nav-item ${activeItem == "apis" ? "layui-this" : ""
    }"><a href="/apis.html">高阶API</a></li>
                      <li class="layui-nav-item ${activeItem == "knowledge" ? "layui-this" : ""
    }"><a href="/knowledge.html">知识库</a></li>
                      <li class="layui-nav-item" ${activeItem == "tool" ? "layui-this" : ""
    }>  
                          <a href="javascript:;">工具</a>       
                          <dl class="layui-nav-child" >
                              <dd><a href="">ppt</a></dd> 
                              <dd><a href="">破解</a></dd>
                              <dd><a href="">音视频</a></dd>
                              <dd><a href="/useTools/browserPlugin.html">浏览器插件</a></dd>
                          </dl>
                      </li>
                      <li class="layui-nav-item"><a href="">社区</a></li>
                  </ul>
              </div> 
        </div>
    </div>
`;
  return header;
}

// 获取cookie
function getCookie(name) {
  if (!name) return null;
  const arr = document.cookie.split("; ");
  let result = null;
  arr.forEach((item) => {
    const [cookieName, value] = item.split("=");
    if (cookieName === name) result = decodeURIComponent(value);
  });
  return result;
}

// 设置cookie
function setCookie(name, value, options = {}) {
  if (!name) return;
  let cookieString = `${name}=${value}`;

  if (options.expires) {
    const expires = options.expires;
    if (expires instanceof Date) {
      cookieString += `; expires=${expires.toUTCString()}`;
    } else {
      const days = parseInt(expires);
      if (!isNaN(days)) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        cookieString += `; expires=${expirationDate.toUTCString()}`;
      }
    }
  }

  if (options.path) {
    cookieString += `; path=${options.path}`;
  }

  if (options.domain) {
    cookieString += `; domain=${options.domain}`;
  }

  if (options.sameSite) {
    cookieString += `; SameSite=${options.sameSite}`;
    if (options.sameSite.toLowerCase() === "none") {
      cookieString += "; Secure"; // SameSite=None 必须与 Secure 一起使用
    }
  }

  if (options.secure) {
    cookieString += "; Secure";
  }

  document.cookie = cookieString;
}

// 删除cookie
function delCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// 日期格式转换为 YY-MM-DD hh:mm:ss
function formattedDateString(dateUTC = "") {
  const date = new Date(dateUTC);
  // 获取年、月、日、时、分、秒
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始，需要加1
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const formattedDateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDateString;
}

// 获取url参数 
function getUrlString(name) {
  const str = new URLSearchParams(window.location.search);
  return str.get(name);
}

// 获取图像验证码
function getCaptchaImg() {
  return (async () => {
    try {
      const res = await requestAxios('GET', {}, '/getCaptcha');
      return res;
    } catch (error) {
      throw error;
    }
  })();
}

// 请求封装
function requestAxios(method = "GET", data = {}, url) {
  console.log(method, data, url);
  return axios({
    method,
    data: data,
    url: baseurl + url,
    // withCredentials:true, // 跨域请求时发送Cookie
    headers: {
      authorization: getCookie("uToken"),
      // "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      // showErrorLayerMsg(err.response.status || 500)
    });
}

// header_search
window.onload = function () {
  if (!getCookie('uToken') && !getCookie('LOGINSTATUS')) {
    layer.confirm('您还没有权限，请跳转到登录页面', { icon: 3 }, function () {
      window.location.href = '/UI/vuetify1/dist/index.html';
    }, function () { 
      window.location.reload();
    });
  }

  $("input[name='header_search']").on("keydown", function (e) {
    console.log(e.keyCode);
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      const keyword = e.target.value;
      if (keyword) {
        location.href = `/searchpage.html?keyword=${encodeURIComponent(keyword)}`
      }
      // requestAxios("GET", {}, `/header_search?keyword=${encodeURIComponent(keyword)}`).then(res => {
      //   console.log(res);
      //   if (res && res != '') {
      //     location.href = '/searchpage.html'
      //   }
      // });
    }
  });

};
