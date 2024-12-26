# 文本转颜色演示

这是一个演示项目，展示了如何将任意文本转换为固定的颜色值。主要特点：

1. 相同的文本总是会得到相同的颜色
2. 不同的文本（即使差异很小）会得到不同的颜色
3. 使用 HSL 颜色空间，产生柔和但区分度高的颜色

## 演示内容

当前演示包含以下示例：

- 相同文本产生相同颜色（如 "Hello World"）
- 大小写差异（"UPPERCASE TEXT" vs "lowercase text"）
- 标点符号差异（"Hello World" vs "Hello, World!"）
- 数字文本（"12345"）
- 中英文文本（"Hello World" vs "你好，世界"）
- 表情符号（"🌈 Rainbow"）
- 不同长度文本（"Short text" vs "This is a longer piece of text to show variation"）
- 技术相关文本（"React is awesome", "TypeScript & React"）

## 实现原理

- 使用简单的字符串哈希算法将文本转换为数字
- 通过质数（179）增加散列效果，使得相似文本产生差异较大的颜色
- 使用 HSL 颜色空间，固定饱和度和亮度，仅改变色相，确保所有颜色都美观可用

## 运行演示

```bash
npm install
npm run start
```

浏览器会自动打开演示页面，展示各种文本及其对应的颜色效果。

