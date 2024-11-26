# 网页二维码生成器 Chrome 插件

## 功能介绍
这是一个简单实用的 Chrome 插件，可以帮助用户快速获取当前网页的二维码。主要功能包括：

- 在网页右下角显示当前网站的 logo（favicon）
- 点击 logo 显示当前页面的二维码
- 二维码下方显示网站域名和页面标题
- 优雅的动画过渡效果

## 安装说明

### 方法一：开发者模式安装
1. 下载本项目所有文件并解压到本地文件夹
2. 打开 Chrome 浏览器，在地址栏输入：`chrome://extensions/`
3. 在右上角开启"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择第1步解压的文件夹
6. 安装完成

### 方法二：Chrome 商店安装
*暂未上架 Chrome 商店*

## 使用说明
1. 安装插件后，访问任意网页
2. 在网页右下角可以看到网站的 logo 图标
3. 点击 logo 图标，会弹出包含当前页面二维码的浮窗
4. 再次点击 logo 或页面其他区域，二维码浮窗会自动隐藏

## 文件说明
- `manifest.json`: 插件配置文件
- `content.js`: 主要功能实现代码
- `styles.css`: 样式表文件
- `qrcode.min.js`: 二维码生成库

## 技术特性
- 使用 Chrome Extension Manifest V3
- 按需加载：仅在首次点击时才生成二维码
- CSS 动画过渡效果
- 自适应网站 favicon
- 支持所有网页

## 注意事项
- 插件需要获取当前标签页的访问权限
- 部分网站可能无法正确获取 favicon
- 二维码大小固定为 256x256 像素
- 页面标题最多显示前10个字符

## 隐私说明
- 本插件不会收集任何用户数据
- 不会向任何服务器发送信息
- 所有功能均在本地完成

## 更新日志
### v1.0
- 首次发布
- 实现基础二维码生成功能
- 添加动画过渡效果

## 问题反馈
如果您在使用过程中遇到任何问题，或有任何建议，请通过以下方式反馈：
1. 在 GitHub 上提交 Issue
2. 发送邮件至：[您的邮箱]

## 开源协议
MIT License

## 致谢
- [https://mp.weixin.qq.com/s/l9ErpDw5rPmZkxKXCjVqVA](https://mp.weixin.qq.com/s/l9ErpDw5rPmZkxKXCjVqVA)
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - 提供二维码生成功能 