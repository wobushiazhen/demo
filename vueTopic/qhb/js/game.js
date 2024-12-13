(function () {
  var Game = function (id) {
    this.canvas = document.querySelector(id);
    this.ctx = this.canvas.getContext("2d");
    this.phone = {
      w: document.documentElement.clientWidth || 375,
      h: document.documentElement.clientHeight || 600,
    };
    this.canvas.width = this.phone.w;
    this.canvas.height = this.phone.h;
    this.init();
  };

  function PxPerRem() {
    var dpr = 1;
    var width = document.documentElement.clientWidth * 0.8;
    var pxPerRem = (width * dpr) / 10;
    return pxPerRem;
  }
  function remToPx(remUnit) {
    const fontSize = PxPerRem();
    return remUnit * fontSize;
  }
  Game.prototype.init = function () {
    this.isEnd = false; //游戏结束
    this.touching = false; //是否触摸财神
    this.five_num_left = 0; //掉落起始位置
    this.cloud_num_left = 0;
    this.boom_num_left = 0;
    this.pig_num_left = 0;
    this.moneyList = []; //掉落集合
    this.cai = new Image(); //ai
    this.cai.src = "./images/ren.png";
    this.addScore = new Image();
    this.addScore.src = "./images/zhadan.png";
    this.subScore = new Image();
    this.subScore.src = "./images/zhadan.png";
    this.effects = null;
    this.rect = {
      x: this.phone.w / 2 - remToPx(2.402) / 2,
      y: this.phone.h - remToPx(2.542),
      w: remToPx(2.402),
      h: remToPx(2.542),
    };     
    this.score = 0; 
    this.time = 10; //游戏时间
    this.clock;

    document.addEventListener("touchstart", touch);
    document.addEventListener("touchmove", touch);
    document.addEventListener("touchend", touch);

    var that = this;

    function touch(event) {
      //点击
      var event = event || window.event;
      // event.preventDefault();
      switch (event.type) {
        case "touchmove":
          if (that.touching) {
            var x = 0;
            if (event.touches[0].clientX - that.rect.w / 2 <= 0) {
              that.rect.x = 0;
            } else if (
              event.touches[0].clientX >= that.rect.w / 2 &&
              event.touches[0].clientX <= that.phone.w - that.rect.w / 2
            ) {
              that.rect.x = event.touches[0].clientX - that.rect.w / 2;
            } else {
              that.rect.x = that.phone.w - that.rect.w;
            }
          }
          break;
        case "touchstart":
          if (
            event.touches[0].clientX > game.rect.x &&
            event.touches[0].clientX < game.rect.x + game.rect.w &&
            event.touches[0].clientY > game.rect.y
          ) {
            that.touching = true;
          }
          break;
        case "touchend":
          that.touching = false;
      }
    }

    this.start();
  };
  Game.prototype.start = function () {
    var that = this;
    var addInterval = setInterval(function () {
      if (!that.isEnd) {
        that.addMoney(Math.random() * (that.phone.w - 50));
      } else {
        clearInterval(addInterval);
      }
    }, 500);
    var animate = function (now) {
      that.clear();
      that.draw();
      if (!that.isEnd) {
        requestNextAnimationFrame(animate);
      }
    };
    var timedCount = function () {
      $(".time_out").html(that.time.toFixed(2) + "s"); // 显示剩余时间，保留两位小数
      if (that.time <= 0) {
        clearTimeout(that.clock);
        that.isEnd = true;
        that.end();
      } else {
        // 将时间减去0.01秒（即10毫秒）
        that.time = Math.max(that.time - 0.01, 0); // 确保时间不会小于0
        that.clock = setTimeout(timedCount, 10); // 每隔10毫秒更新一次计时器
      }
    };
    timedCount();
    window.requestNextAnimationFrame(animate);
  };
  Game.prototype.end = function () {
    if (this.score >= 150) {
      showDialog(0);  
    } else { 
      // showDialog(11);
    }     
    showDialog(3);  

    $(".game_result_score").text("您的成绩：" + this.score + "分");
  };

  Game.prototype.computedScore = function (value) {
    var addEffects = {
      type: "add",
      img: this.addScore,
      w: remToPx(1.38),
      h: remToPx(0.58),
      // y: game.rect.y - remToPx(0.58),
      y: game.rect.y - remToPx(0.58) - game.rect.h / 3,
      x: game.rect.x + game.rect.w / 2 - remToPx(1.38),
    };
    var subEffects = {
      type: "sub",
      img: this.subScore,
      w: remToPx(2.5),
      h: remToPx(1.65),
      y: game.rect.y - remToPx(1.65) - game.rect.h / 4,
      // y: game.rect.y - remToPx(1.65) ,
      x: game.rect.x + game.rect.w / 2 - remToPx(2.5),
    };
    if (value > 0) {
      game.effects = addEffects;
    } else {
      game.effects = subEffects;
    }
    setTimeout(function () {
      game.effects = null;
    }, 200);

    this.score += value;
  };

  Game.prototype.drawEffects = function () {
    if (this.effects) {
      var _effects = Object.assign({}, this.effects);
      var div = document.createElement("div");
      _effects.img.style.width = _effects.w;
      _effects.img.style.height = _effects.h;
      div.appendChild(_effects.img);

      div.style.position = "fixed";
      div.style.left = _effects.x + "px";
      div.style.top = _effects.y + "px";
      if (_effects.type == "sub") {
        div.style.transform = "translateY(-30%)";
      }
      div.style.opacity = 0;
      document.body.appendChild(div);

      setTimeout(() => {
        if (_effects.type == "add") {
          div.style.transform = "translateY(-90%)";
        }
        div.style.opacity = 1;
        div.style.transition = "all 0.1s";
      }, 20);

      setTimeout(() => {
        div.parentElement.removeChild(div);
      }, 200);

      // game.ctx.drawImage(this.effects.img, this.effects.x, this.effects.y, this.effects.w, this.effects.h);
    }
    // if(this.effects){
    //     console.log(_effects);
    //     var div = document.createElement('div')
    //     this.effects.img.style.width = this.effects.w;
    //     this.effects.img.style.height = this.effects.h;
    //     div.appendChild(this.effects.img)

    //     div.style.position = 'fixed';
    //     div.style.left = this.effects.x + 'px';
    //     div.style.top = this.effects.y + 'px';
    //     div.style.opacity = 0;
    //     if(this.effects.type == 'sub'){
    //         div.style.transform = 'translateY(-50%)'
    //     }
    //     document.body.appendChild(div);

    //     setTimeout(() => {
    //         if(this.effects.type == 'sub') {
    //             div.style.opacity = 1;
    //             div.style.transition = 'all 0.1s linear';
    //         }else{
    //             div.style.opacity = 1;
    //             div.style.transform = 'translateY(-50%)'
    //             div.style.transition = 'all 0.1s linear';
    //         }
    //     }, 20)

    //     setTimeout(() => {
    //         div.parentElement.removeChild(div);
    //     }, 200)

    //     // game.ctx.drawImage(this.effects.img, this.effects.x, this.effects.y, this.effects.w, this.effects.h);
    // }
  };

  Game.prototype.addMoney = function (x) {
    //掉钱
    var random = Math.floor(Math.random() * 7);
    console.log(random);
    if (random == 0 && game.five_num_left >= 0 && !game.isEnd) {
      this.moneyList.push(new money(x, "five"));
    } else if (random == 1 && game.pig_num_left >= 0 && !game.isEnd) {
      this.moneyList.push(new money(x, "pig"));
    } else if (random == 2 && game.boom_num_left >= 0 && !game.isEnd) {
      this.moneyList.push(new money(x, "p20"));
    } else if (random == 3 && game.boom_num_left >= 0 && !game.isEnd) {
      this.moneyList.push(new money(x, "p50"));
    } else if (random == 4 && game.boom_num_left >= 0 && !game.isEnd) {
      this.moneyList.push(new money(x, "p80"));
    } else if (random == 5 && game.boom_num_left >= 0 && !game.isEnd) {
      this.moneyList.push(new money(x, "boom"));
    } else if (random == 6 && game.cloud_num_left >= 0 && !game.isEnd) {
      this.moneyList.push(new money(x, "boom"));
    }
  };
  Game.prototype.draw = function () {
    this.clear();
    this.drawEffects();
    this.moneyList.forEach(function (item) {
      item.drop();
    });

    this.move();
    $(".score").html("得分:" + game.score);
  };

  Game.prototype.clear = function () {
    //清屏
    game.ctx.clearRect(0, 0, game.phone.w, game.phone.h);
  };
  Game.prototype.move = function () {
    game.ctx.drawImage(
      game.cai,
      game.rect.x || 0,
      game.phone.h - game.rect.h,
      game.rect.w,
      game.rect.h
    );
  };
  window.Game = Game;
})();

