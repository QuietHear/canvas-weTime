let c = $('canvas')[0],
    ctx = c.getContext("2d"),
    model = [
        // 0
        [
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0]
        ],
        // 1
        [
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1]
        ],
        // 2
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ],
        // 3
        [
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ],
        // 4
        [
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 1]
        ],
        // 5
        [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ],
        // 6
        [
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ],
        // 7
        [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0]
        ],
        // 8
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ],
        // 9
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 0]
        ],
        // :
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        // 天
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0],
        ]
    ], // 数字模型
    ballR = 0, // 小球半径
    ballRebound = 0.3, // 掉落底部反弹系数
    activeColor = [
        "#3f4177",
        "#3f4177",
        "#ffb6f6",
        "#3c97ff",
        "#ff226c",
        "#ff7a51",
        "#3c97ff",
        "#ff226c",
        "7bff",
        "#ff3ebf",
        "ff4b"
    ], // 彩色小球颜色集合
    begin_left = 0, // 左边开始距离
    begin_top = 0, // 顶部开始距离
    full = [], // 记录当前展示的时间
    full_length, // 记录当前展示的时间长度
    full_left, // 每个数字对应的left值
    history_day, // 历史时间--天
    history_hour, // 历史时间--时
    history_minute, // 历史时间--分
    history_second, // 历史时间--秒
    now_day, // 当前时间--天
    now_hour, // 当前时间--时
    now_minute, // 当前时间--分
    now_second, // 当前时间--秒
    ballList = [], // 新生成的球列表
    status = false, // 是否继续绘制
    begin = false, // 第一次载入页面
    resize = false, // 是否正在重置
    canvas_config = { // 用户自己传的配置
        beginTime: '', // 开始时间
        normalColor: '' // 小球默认颜色
    };

//初始化函数
let init = (config) => {
    c.width = $(c).width();
    c.height = $(c).height();
    if (mobileDirection()) {
        if (c.width >= 411) {
            if (!begin) {
                begin = true;
                canvas_config.beginTime = new Date(config.beginTime !== undefined ? config.beginTime : '2018-06-05');
                canvas_config.beginTime.setHours(0);
                canvas_config.beginTime = canvas_config.beginTime.getTime();
                canvas_config.normalColor = config.normalColor !== undefined ? config.normalColor : "#e4393c";
            }
            ballList = [];
            full_length = 0;
            history_day = [-1, -1, -1, -1, -1];
            history_hour = [-1, -1];
            history_minute = [-1, -1];
            history_second = [-1, -1];
            status = true;
            resize = false;
            changeSize();
            draw();
        }
        else {
            status = false;
            alert('请使用屏幕宽度411px及以上的设备观看！');
        }
    }
};

// 手机端横竖屏检测
let mobileDirection = () => {
    if (window.orientation !== undefined) {
        if (window.orientation === 90) {
            return true;
        }
        else if (window.orientation === 0) {
            alert('请将手机横屏再观看！');
            status = false;
            return false;
        }
    }
    else {
        return true;
    }
};

// 根据屏幕调整各项距离
let changeSize = () => {
    contrastTime();
    let difference = now_day.length + 1 + now_hour.length + 1 + now_minute.length + 1 + now_second.length - full.length;
    if (c.width >= 1647) {
        ballR = 7;
    }
    if (c.width >= 1441) {
        ballR = 6;
    }
    else if (c.width >= 1235) {
        ballR = 5;
    }
    else if (c.width >= 1029) {
        ballR = 4;
    }
    else if (c.width >= 823) {
        ballR = 3;
    }
    else if (c.width >= 617) {
        ballR = 2;
    }
    else {
        ballR = 1;
    }
    begin_left = (c.width - (205 + 206 * ballR - difference * 16 * (ballR + 1))) / 2;
    begin_top = (c.height - (19 + 20 * ballR)) / 2;
};

// 绘制
let draw = () => {
    if (status) {
        ctx.clearRect(0, 0, c.width, c.height);
        contrastTime();
        changeBall();
        drawColorBall();
        moveColorBall();
        requestAnimationFrame(draw);
    }
};

// 对比时间
let contrastTime = () => {
    let now = new Date().getTime(); //获取系统当前时间
    let currentTime = Math.floor((now - canvas_config.beginTime) / 1000),
        day, hour, minute, second;
    // 重置当前时间串
    full = [];
    now_day = [0, 0, 0, 0, 0];
    now_hour = [0, 0];
    now_minute = [0, 0];
    now_second = [0, 0];
    // 天计算
    day = Math.floor(currentTime / (60 * 60 * 24));
    now_day[4] = day % 10;
    day = Math.floor(day / 10);
    now_day[3] = day % 10;
    day = Math.floor(day / 10);
    now_day[2] = day % 10;
    day = Math.floor(day / 10);
    now_day[1] = day % 10;
    day = Math.floor(day / 10);
    now_day[0] = day % 10;
    currentTime %= (60 * 60 * 24);
    full = [...now_day];
    full.push(11); // 天
    // 时计算
    hour = Math.floor(currentTime / (60 * 60));
    now_hour[1] = hour % 10;
    hour = Math.floor(hour / 10);
    now_hour[0] = hour % 10;
    currentTime %= (60 * 60);
    full = [...full, ...now_hour];
    full.push(10); // :
    // 分计算
    minute = Math.floor(currentTime / 60);
    now_minute[1] = minute % 10;
    minute = Math.floor(minute / 10);
    now_minute[0] = minute % 10;
    currentTime %= 60;
    full = [...full, ...now_minute];
    full.push(10); // :
    // 秒计算
    second = currentTime;
    now_second[1] = second % 10;
    second = Math.floor(second / 10);
    now_second[0] = second % 10;
    full = [...full, ...now_second];
    // 完整时间序列调整
    for (let i = 0; i < 5; i++) {
        if (full[0] === 0) {
            if (i === 4) {
                full.shift();
            }
            full.shift();
        }
        else {
            break;
        }
    }

};

// 改变所有小球状态
let changeBall = () => {
    // 绘制普通小球
    for (let i = 0; i < full.length; i++) {
        drawNormalBall(contrastLeft(i), full[i]);
    }
    // 绘制彩色小球
    let all_length = now_day.length + 1 + now_hour.length + 1 + now_minute.length + 1 + now_second.length, // 总长度对比
        now_index = full_length - all_length;
    // 天对比
    if (full_length >= all_length && full[now_index] !== history_day[0]) {
        addColorBall(contrastLeft(now_index), now_day[0]);
        history_day[0] = now_day[0];
    }
    now_index += 1;
    if (full_length >= (all_length - 1) && full[now_index] !== history_day[1]) {
        addColorBall(contrastLeft(now_index), now_day[1]);
        history_day[1] = now_day[1];
    }
    now_index += 1;
    if (full_length >= (all_length - 2) && full[now_index] !== history_day[2]) {
        addColorBall(contrastLeft(now_index), now_day[2]);
        history_day[2] = now_day[2];
    }
    now_index += 1;
    if (full_length >= (all_length - 3) && full[now_index] !== history_day[3]) {
        addColorBall(contrastLeft(now_index), now_day[3]);
        history_day[3] = now_day[3];
    }
    now_index += 1;
    if (full_length >= (all_length - 4) && full[now_index] !== history_day[4]) {
        addColorBall(contrastLeft(now_index), now_day[4]);
        history_day[4] = now_day[4];
    }
    now_index += 2;
    // 时对比
    if (full[now_index] !== history_hour[0]) {
        addColorBall(contrastLeft(now_index), now_hour[0]);
        history_hour[0] = now_hour[0];
    }
    now_index += 1;
    if (full[now_index] !== history_hour[1]) {
        addColorBall(contrastLeft(now_index), now_hour[1]);
        history_hour[1] = now_hour[1];
    }
    now_index += 2;
    // 分对比
    if (full[now_index] !== history_minute[0]) {
        addColorBall(contrastLeft(now_index), now_minute[0]);
        history_minute[0] = now_minute[0];
    }
    now_index += 1;
    if (full[now_index] !== history_minute[1]) {
        addColorBall(contrastLeft(now_index), now_minute[1]);
        history_minute[1] = now_minute[1];
    }
    now_index += 2;
    // 秒对比
    if (full[now_index] !== history_second[0]) {
        addColorBall(contrastLeft(now_index), now_second[0]);
        history_second[0] = now_second[0];
    }
    now_index += 1;
    if (full[now_index] !== history_second[1]) {
        addColorBall(contrastLeft(now_index), now_second[1]);
        history_second[1] = now_second[1];
    }
};

// 左边距离计算
let contrastLeft = (index) => {
    if (full.length !== full_length) {
        full_length = full.length;
        full_left = [];
        let left = begin_left;
        for (let i = 0; i < full.length; i++) {
            if (i > 0) {
                if (full[i - 1] !== 10) {
                    left += 16 * (ballR + 1);
                }
                else {
                    left += 8 * (ballR + 1);
                }
            }
            full_left.push(left);
        }
    }
    return full_left[index];
};

// 给时间绘制默认颜色的球
let drawNormalBall = (left, num) => {
    for (let x = 0; x < model[num].length; x++) {
        for (let y = 0; y < model[num][x].length; y++) {
            if (model[num][x][y] === 1) {
                ctx.beginPath();
                ctx.arc(left + y * 2 * (ballR + 1) + (ballR + 1), begin_top + x * 2 * (ballR + 1) + (ballR + 1), ballR, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fillStyle = canvas_config.normalColor;
                ctx.fill();
            }
        }
    }
};

// 给时间改变了的添加彩色球
let addColorBall = (left, num) => {
    for (let x = 0; x < model[num].length; x++) {
        for (let y = 0; y < model[num][x].length; y++) {
            if (model[num][x][y] === 1) {
                let ball = {

                    x: left + y * 2 * (ballR + 1) + (ballR + 1),
                    y: begin_top + x * 2 * (ballR + 1) + (ballR + 1),
                    activeColor: activeColor[Math.floor(Math.random() * activeColor.length)],
                    g: 1.5 + Math.random(), // 加速度
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, // x轴速度
                    vy: -1, // y轴速度
                };
                ballList.push(ball);
            }
        }
    }
};

// 绘制彩色球的当前位置
let drawColorBall = () => {
    for (let i = 0; i < ballList.length; i++) {
        ctx.beginPath();
        ctx.arc(ballList[i].x, ballList[i].y, ballR, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = ballList[i].activeColor;
        ctx.fill();
    }
};

// 计算每一帧小球位置
let moveColorBall = () => {
    for (let i = 0; i < ballList.length; i++) {
        ballList[i].x += ballList[i].vx;
        ballList[i].y += ballList[i].vy;
        ballList[i].vy += ballList[i].g;
        if (ballList[i].y > (c.height - ballR)) { // 小球向下移动超过边界时
            ballList[i].y = c.height - ballR;
            ballList[i].vy = -ballList[i].vy * ballRebound; // 向上反弹
        }
    }
    // 删除画板外的小球
    for (let i = 0; i < ballList.length; i++) {
        if (ballList[i].x < -(ballR * 2) || ballList[i].x > (c.width + ballR * 2)) {
            ballList.splice(i, 1);
            i -= 1;
        }
    }

};

$(window).on('orientationchange', function () { // 移动端屏幕旋转
    ctx.clearRect(0, 0, c.width, c.height);
    status = false;
    setTimeout(function () {
        init(config);
    }, 100);
}).on('resize', function () { // 页面重置
    if (!resize) {
        ctx.clearRect(0, 0, c.width, c.height);
        resize = true;
        status = false;
        setTimeout(function () {
            init(config);
        }, 200);
    }
});
