const express = require('express');
const app = express();
const WebSocket = require('ws');
const http = require('http');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// 添加 CORS 头
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 定义 /getFriendList 路由
app.get('/getFriendList', (req, res) => {
    let flist = [
        {
            'id': 'user_hy8dp3r5j',
            'nickname': '阿明',
            'avatar': 'https://www.cignacmb.com/public/images/comm2023/icon-user.png',
            "createDate": '2024-05-13 16:20:05',
            'flists': ['user_2hshr5j', 'user_hysd315j', 'user_hy8dp3r5j'],
            'area': '广东深圳',
            'lastTimeLogin': '2024-05-10 10:45:51'
        },
        { 
            'id': 'user_k9zq7x2b',
            'nickname': '小红', 
            'avatar': 'https://www.cignacmb.com/public/images/comm2023/icon-Accessible.png',
            "createDate": '2024-06-20 09:15:30',
            'flists': ['user_4jkl8m3n', 'user_p0q9r2s', 'user_t1u2v3w'],
            'area': '北京',
            'lastTimeLogin': '2024-06-18 14:20:12',
            'msgs':['在吗','在的']
        }, 
        {
            'id': 'user_w8x9y0z1',
            'nickname': '小李',
            'avatar': 'https://example.com/avatar3.jpg',
            "createDate": '2024-07-05 12:30:45',
            'flists': ['user_a1b2c3d', 'user_e4f5g6h', 'user_i7j8k9l'],
            'area': '上海',
            'lastTimeLogin': '2024-07-03 08:55:20'
        }
    ];
    res.send(flist);
});
 
// WebSocket 服务器
wss.on('connection', (ws, req) => {
    const ip = req.socket.remoteAddress; // 获取客户端的IP地址
    const port = req.socket.remotePort; // 获取客户端的端口号
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message); // 解析接收到的JSON数据
            console.log(data); 
            if (data.type === 'text') {
                // 广播消息给所有连接的客户端
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(data));
                    }
                });
            }
        } catch (error) {
            console.error('处理消息时出错:', error);
        }
    });

    ws.on('close', () => {
        console.log('客户端已断开连接');
    });

    ws.on('error', (err) => {
        console.error('WebSocket错误:', err);
    });
});

// 启动服务器
server.listen(8550, () => {
    console.log('服务器正在监听8550端口...');
}); 