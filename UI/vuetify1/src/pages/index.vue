<template>
  <div class="index">
    <div class="top-tool">
      <div class="w1130">
        <h5 class="font-icon">AZHEN论坛</h5>
        <ul class="nav-list">
          <li class="font-icon">问答</li>
          <li class="font-icon">专栏</li>
          <li class="font-icon">课程</li>
          <li>招聘</li>
          <li class="font-icon">活动</li>
          <li>发现</li>
        </ul>
        <div class="search-box">
          <input type="text" placeholder="搜索关键字" />
          <router-link to="/regsiter">
            <button class="search-btn font-icon">注册登录</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="@/assets/index/banner.png" alt="" />
      <div class="banner-text">
        <h4>我们是一个开放的技术社区</h4>
        <p>
          每一位开发者都在贡献和更新技术内容，共同参与社区建设，维护社区秩序。
          如果你和我们一样有技术理想，并愿意贡献自己的力量，欢迎加入我们。
        </p>
        <button><router-link to="/regsiter">登录注册</router-link></button>
      </div>
      <div class="w1130">
        <ul class="banner-fixed-bottom">
          <li>
            <img src="@/assets/index/banner-icon1.png" alt="" />
            <div>
              <h5>问答</h5>
              <p>提出问题并向他人学习</p>
            </div>
          </li>
          <li>
            <img src="@/assets/index/banner-icon2.png" alt="" />
            <div>
              <h5>专栏</h5>
              <p>提出问题并向他人学习</p>
            </div>
          </li>
          <li>
            <img src="@/assets/index/banner-icon3.png" alt="" />
            <div>
              <h5>课程</h5>
              <p>提出问题并向他人学习</p>
            </div>
          </li>
          <li>
            <img src="@/assets/index/banner-icon4.png" alt="" />
            <div>
              <h5>活动</h5>
              <p>提出问题并向他人学习</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="ex-content">
      <div class="w1130">
        <h3 class="cont-title">
          <span>精彩内容</span>
          <a href="#"> > </a>
          <p>中国开源码力榜启动，寻找开源世界的超级玛丽</p>
        </h3>
      </div>
      <div class="w1130">
        <ul class="ex-list">
          <li class="el-board">1</li>
          <li class="el-c1">
            <div class="el-c1-item">
              <img src="@/assets/index/ex-img1.png" alt="" />
              <p>微软公布 VS Code Java 2022年路线图</p>
              <span><strong>MissD</strong> <strong>·</strong> 1月24日</span>
            </div>
            <div class="el-c1-item">
              <img src="@/assets/index/ex-img2.png" alt="" />
              <p>什么样的问题应该使用动态规划？</p>
              <span><strong>MissD</strong> <strong>·</strong> 1月24日</span>
            </div>
            <div class="el-c1-item">
              <img src="@/assets/index/ex-img4.png" alt="" />
              <p>前后端分离，是谁在限制跨域？</p>
              <span><strong>MissD</strong> <strong>·</strong> 1月24日</span>
            </div>
            <div class="el-c1-item">
              <img src="@/assets/index/ex-img3.png" alt="" />
              <p>这种小三角如何实现呢</p>
              <span><strong>MissD</strong> <strong>·</strong> 1月24日</span>
            </div>
          </li>
          <li class="el-c1">
            <div class="el-c1-item">
              <img src="@/assets/index/ex-img5.png" alt="" />
              <p>如何学习RxJava3？有这个项目就够了！</p>
              <span><strong>MissD</strong> <strong>·</strong> 1月24日</span>
            </div>
            <div class="el-c1-item">
              <img src="@/assets/index/ex-img3.png" alt="" />
              <p>绝对是讲的最清楚的-NodeJS模块系统</p>
              <span><strong>MissD</strong> <strong>·</strong> 1月24日</span>
            </div>
            <div class="el-c1-item">
              <img src="@/assets/index/ex-img1.png" alt="" />
              <p>关于mysql的sql语句中，1=1的用法？</p>
              <span><strong>MissD</strong> <strong>·</strong> 1月24日</span>
            </div>
            <div class="el-c1-item">
              <img src="@/assets/index/ex-img2.png" alt="" />
              <p>正则匹配-后面的字符串</p>
              <span><strong>MissD</strong> <strong>·</strong> 1月24日</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="recommend-zone">
      <div class="w1130">
        <h3 class="cont-title">
          <span>推荐专区</span>
          <a href="#"> > </a>
          <p>商务合作区</p>
        </h3>
      </div>
      <div class="w1130">
        <ul class="rz-ul">
          <li>
            <img src="@/assets/index/rz-img2.png" alt="" />
            <p>2021 腾讯Light . 公益 创新挑战赛</p>
            <span>诚挚邀请你来用 AI 给世界 带来一丝改变！</span>
          </li>
          <li>
            <img src="@/assets/index/rz-img1.png" alt="" />
            <p>人工智能 | Arm 大计算</p>
            <span>交流人工智能、Arm硬件 相关内容</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="community-contry">
      <div class="w1130">
        <h3 class="cont-title">
          <span>社区贡献者</span>
          <a href="#"> > </a>
        </h3>
      </div>
      <div class="w1130">
        <ul class="cc-ul">
          <li>
            <h5>问答贡献</h5>
            <div class="li-rate-item">
              <span>1</span>
              <img src="@/assets/index/avatar1.png" alt="" />
              <p>
                <span>然后去远方</span><br />
                <span class="ellipsis">一个全职伪全栈。只擅灌溉</span>
              </p>
            </div>

            <div class="li-rate-item">
              <span>1</span>
              <img src="@/assets/index/avatar1.png" alt="" />
              <p>
                <span>然后去远方</span><br />
                <span class="ellipsis">一个全职伪全栈。只擅灌溉</span>
              </p>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="footer-info"></div>
  </div>
</template>

<script>
  
</script>

<style scoped lang="scss">
.index {
  background: rgb(233, 236, 239);
  height: 100%;
}

.w1130 {
  width: 1130px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.top-tool {
  background: #fff;
  height: 54px;

  h5 {
    font-size: 20px;
    line-height: 54px;
    color: #119138;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 20px;
    font-weight: bold;
    position: relative;
  }

  .nav-list {
    display: flex;
    list-style: none;
    align-items: center;
    position: relative;

    li {
      margin-right: 42px;
      font-size: 16px;
      font-weight: bold;
      color: #6c6c6c;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .search-box {
    margin-top: 8px;
    input {
      border: 1px solid #ccc;
      width: 460px;
      padding: 10px;
      border-radius: 4px;
      transition: all 0.3s linear;
    }

    .search-btn {
      margin-left: 10px;
      padding: 10px 15px;
      color: #fff;
      text-align: center;
      border-radius: 4px;
      background: #119138;
    }
  }
}

.banner {
  width: 100%;
  height: 400px;
  position: relative;

  > img {
    width: 100%;
    object-fit: cover;
    height: 400px;
  }
}

.banner-text {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  text-align: center;
  font-size: 24px;
  color: #fff;

  h4 {
    font-size: 30px;
    font-weight: bold;
    opacity: 0.55;
    margin-bottom: 30px;
  }

  p {
    font-size: 22px;
    color: #ccc;
    opacity: 0.5;
    line-height: 36px;
  }

  button {
    width: 190px;
    line-height: 42px;
    font-size: 16px;
    margin-top: 30px;
    border-radius: 5px;
    background: #119138;
    opacity: 0.89;
    a {
      opacity: 0.89;
      color: #fff;
    }
  }
}

.banner-fixed-bottom {
  width: 100%;
  display: flex;
  margin-top: -54px;
  justify-content: space-between;
  li {
    border-radius: 5px;
    width: 23.5%;
    background: #fff;
    padding: 22px 25px 19px 28px;
    // box-shadow: 2px 2px 2px #a5a4a4;
    display: flex;
    align-items: center;
    img {
      width: 42px;
      margin-right: 10px;
    }
    h5 {
      font-size: 22px;
      margin-bottom: 5px;
      color: #484848;
    }
    p {
      font-size: 15px;
      color: #6c6c6c;
    }
  }
}

.ex-content {
  margin-top: 70px;
  padding-bottom: 46px;
  .ex-list {
    display: flex;
    margin-top: 10px;
    width: 100%;
    li {
      width: 32%;
      margin-right: 25px;
      position: relative;
      img {
        width: 100%;
        border-radius: 5px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .el-board {
      border: 1px dashed #ccc;
      height: 360px;
    }
    .el-c1 {
      .el-c1-item {
        position: relative;
        margin-bottom: 28px;
        img {
          width: 90px;
          margin-right: 5px;
          vertical-align: middle;
        }
        p {
          position: absolute;
          left: 100px;
          top: 2px;
          font-size: 16px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          width: 260px;
        }
        span {
          position: absolute;
          left: 100px;
          top: 45px;
          font-size: 14px;
          strong:nth-child(1) {
            color: #0d6920;
          }
        }
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
}

.cont-title {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: #4a4a4a;
  vertical-align: bottom;
  span {
    float: left;
  }
  a {
    padding: 3px 8px;
    font-weight: 100;
    color: #088239;
    float: left;
  }
  p {
    margin-top: 6px;
    float: right;
    color: #07842f;
    font-size: 14px;
  }
}

.recommend-zone {
  width: 100%;
  background: #ffffff;
  padding: 26px 0 38px 0;
  .rz-ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    li {
      width: 200px;
      margin-right: 23px;
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
        border-radius: 5px;
      }
      p {
        margin-top: 8px;
        font-size: 16px;
        color: #1d1d1d;
      }
      span {
        margin-top: 5px;
        font-size: 14px;
        color: #5f5f5f;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.community-contry {
  width: 100%;
  margin-top: 46px;
  .cc-ul { 
    margin-top: 10px;
    width: 100%;
    li {
      width: calc(50% - 20px);
      background: #fff;
      padding: 0px 20px 16px;
      > h5 {
        font-size: 16px;
        color: #171717;
        line-height: 44px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
      }
    }
    .li-rate-item {
      display: flex;
      align-items: center; 
      margin-bottom: 15px;
      > img {
        width: 46px;
        border-radius: 50%;
        margin-right: 15px;
      }
      > span {
        margin-right: 12px;
        color: #656565;
      }
      > p {
        span:nth-child(1) {
          font-size: 14px;
          color: #121212;
        }
        span:last-child {
          display: block;
          margin-top: 5px;
          color: #515151;
        }
      }
    }
  }
}

.font-icon {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    right: 1.5px;
    top: 13px;
    background: url("@/assets/index/icon1.png") no-repeat;
    background-size: 10px 10px;
  }
}

@media screen and (max-width: 1080px) {
  .search-box {
    input {
      width: 120px !important;
    }
  }
}
@media screen and (max-width: 740px) {
  .banner-text {
    button {
      display: none;
    }
  }
}
</style>
