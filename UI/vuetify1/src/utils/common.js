// 设置 baseurl
var baseurl = '';
if (window.location.host.indexOf("127.0.0.1") > -1) {
    baseurl = "http://127.0.0.1:7007";
} else {
    baseurl = "http://60.204.250.158:7007";
} 

console.log("After setting baseurl:", baseurl);

// 获取 Cookie
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

// 设置 Cookie
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

// 导出方法
export { baseurl, getCookie, setCookie };