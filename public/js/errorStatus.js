
function showErrorLayerMsg(status) {
    switch (status) {
        case 400:
            errorLmsg('错误请求')
            break
        case 401:
            errorLmsg('未授权，请重新登录')
            setTimeout(() => {
                window.location.href="/" 
            }, 1500); 
            break
        case 403:
            errorLmsg('拒绝访问')
            break
        case 404:
            errorLmsg('请求错误,未找到该资源')
            break
        case 405:
                    errorLmsg('请求错误,未找到该资源')
            break
        case 408:
             errorLmsg('请求超时')
            break
        case 500:
                   errorLmsg('服务器端出错')
            break
        case 501:
                  errorLmsg('网络未实现')
            break
        case 502:
                 errorLmsg('网络错误')
            break
        case 503:
                  errorLmsg('服务不可用')
            break
        case 504:
                 errorLmsg('网络超时')
            break
        case 505:
            errorLmsg('http版本不支持该请求,未找到该资源')
            break
        default:
            errorLmsg('未连接')
    }
}

function errorLmsg(msg) {
    layer.open({
        type: 1,
        content: '<div style="padding: 16px;">'+ msg +'</div>',
    });
}

