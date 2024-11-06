<template>
  <div class="index">
    <div class="top-tool">
      <div class="w1130">
        <h5 class="font-icon">摹客论坛</h5>
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
          <button class="search-btn font-icon">注册登录</button>
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
      </div>
    </div>
    <div class="ex-content"></div>
    <div class="recommend-zone"></div>
    <div class="community-contry"></div>
    <div class="footer-info"></div>
  </div>
</template>

<style scoped lang="scss">
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
  img {
    width: 100%;
    object-fit: cover;
  }
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  text-align: center;
  font-size: 24px;
  color: #fff;
  h4 {
    font-size: 30px;
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
</style>
