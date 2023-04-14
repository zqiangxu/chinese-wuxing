# chinese-wuxing
NodeJS 版本获取汉字以及名字的五行属性。

## 使用方法

安装依赖

```bash
npm install --save chinese-wuxing
```

## 获取名字的五行
```javascript
const { getChineseWuxing } = require('chinese-wuxing');
const wuxing = getChineseWuxing('易天行'); // => [ '火', '火', '水' ]
```

注意：有些没有收录或者并没有五行意义的汉字，返回的五行信息为：**`未`**。如：口、噬、囱....
