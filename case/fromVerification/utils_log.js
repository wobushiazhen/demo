var u_log = {
  // 通过身份证获取生日和sex
  getBirthdayByID(id) {
    if (!id) return false;
    let birthYear = id.substring(6, 10);
    let birthMonth = id.substring(10, 12);
    let birthDay = id.substring(12, 14);

    let info = {
      birthday: birthYear + "/" + birthMonth + "/" + birthDay,
      sex: parseInt(id.substring(16, 17)) % 2 == 1 ? "男" : "女",
    };
    return info;
  },

  // 通过身份证获取所在省份
  getProvinceById(id) {
    const provinces = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江 ",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北 ",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏 ",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外",
    };
    if (!id) return false;
    let province = id.substring(0, 2);
    if (Object.keys(provinces).includes(province)) {
      return provinces[province];
    }
  },
};
