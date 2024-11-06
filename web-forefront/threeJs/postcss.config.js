export default {
  plugins: {
    // 自动转换vw的postcss插件
    // 'postcss-px-to-viewport': {
    //   unitToConvert: "px",
    //   viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
    //   unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
    //   viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
    //   fontViewportUnit: 'vw', // 字体转换后使用的单位
    //   propList: ['*', '!min-width', '!font*', '!border*'], // 要进行转换的属性列表，*表示匹配所有，！表示不转换
    //   selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
    //   minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    //   mediaQuery: false, // 允许在媒体查询中转换`px`
    //   exclude: [/^(?!.*node_modules\/vant)/], // 第三方依赖不转换
    //   landscape: false, // 是否自动加入 @media (orientation: landscape)，其中的属性值是通过横屏宽度来转换的
    //   landscapeUnit: 'vw', // 横屏单位
    //   landscapeWidth: 1334 // 横屏宽度
    // },
    'postcss-px-to-viewport': {
      viewportUnit: 'vw',  
      fontViewportUnit: 'vw',
      viewportWidth: 1200 // 设计稿的视口宽度
      // 其余使用默认值即可 参考链接：https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
    }
  }
}
