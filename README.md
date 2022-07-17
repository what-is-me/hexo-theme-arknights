# Theme arknights

一个《明日方舟》罗德岛阵营的 Hexo 主题。

A Hexo Theme for *RHODES ISLAND* in *Arknights*.

项目地址：<https://github.com/Yue-plus/hexo-theme-arknights>

<a title="License" target="_blank" href="https://github.com/Yue-plus/hexo-theme-arknights/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/Yue-plus/hexo-theme-arknights.svg?style=flat"></a>
<a title="GitHub Release" target="_blank" href="https://github.com/Yue-plus/hexo-theme-arknights/releases"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/Yue-plus/hexo-theme-arknights?style=flat"></a>
<a title="GitHub Commits" target="_blank" href="https://github.com/Yue-plus/hexo-theme-arknights/commits/master"><img alt="GitHub Commits" src="https://img.shields.io/github/commit-activity/m/Yue-plus/hexo-theme-arknights.svg?style=flat&color=brightgreen&label=commits"></a>

<a title="GitHub Watchers" target="_blank" href="https://github.com/Yue-plus/hexo-theme-arknights/watchers"><img alt="GitHub Watchers" src="https://img.shields.io/github/watchers/Yue-plus/hexo-theme-arknights.svg?label=Watchers&style=social"></a>  <a title="GitHub Stars" target="_blank" href="https://github.com/Yue-plus/hexo-theme-arknights/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/Yue-plus/hexo-theme-arknights.svg?label=Stars&style=social"></a>  <a title="GitHub Forks" target="_blank" href="https://github.com/Yue-plus/hexo-theme-arknights/network/members"><img alt="GitHub Forks" src="https://img.shields.io/github/forks/Yue-plus/hexo-theme-arknights.svg?label=Forks&style=social"></a>

![ScreenShot](./demo.jpg)

<p>zh-CN 简体中文  |  <a title="Traditional Chinese" href="README.tc.md">zh-HK 繁體中文</a>  |  <a title="English" href="README.en.md">en-US English</a>  |  <a title="Japanese" href="README.jp.md">jp-JP 日本語</a></p>

<span>文档：</span>
  <a href="https://github.com/Yue-plus/hexo-theme-arknights/wiki">主题配置</a> | 
  <a href="https://hexo.io/zh-cn/docs/front-matter">文章配置</a>

## 预览

- **Dr.Yue_plus: <http://ark.theme.yueplus.ink/>**
- [其他使用者的友链](https://github.com/Yue-plus/hexo-theme-arknights/wiki/%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5)

## 快速使用

### 系统环境

- [Node.js `16.13.x` 以上](https://nodejs.org/zh-cn/)
- [最新版 Hexo](https://hexo.io/zh-cn/)
  > Hexo `6.0.0` 以上；
  > hexo-cli `4.3.0` 以上；
- 中国大陆用户推荐使用 `cnpm` 安装依赖包，参考 [中国 NPM 镜像](https://npmmirror.com/)。

### 1. 搭建 Hexo 博客

如果你还没有 Hexo 博客，请按照[Hexo 官方文档](https://hexo.io/zh-cn/docs/)进行安装、建站。

### 2. 获取主题最新版本

下载最新 release 版本解压到 `themes` 目录，并将解压出的文件夹重命名为 `arknights`。

``` shell script
git clone https://github.com/Yue-plus/hexo-theme-arknights.git themes/arknights
```

然后在博客目录下创建 `_config.arknights.yml` 即主题的配置文件，将主题的 `_config.yml` 内容复制进去。

主题的配置文件可参照中文注释修改。

> 建议参考：
  > - [Hexo 官方文档 - 使用代替主题配置文件](https://hexo.io/zh-cn/docs/configuration#%E4%BD%BF%E7%94%A8%E4%BB%A3%E6%9B%BF%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
  > - [hexo 分支的 `_config.arknights.yml`](https://github.com/Yue-plus/hexo-theme-arknights/blob/hexo/_config.arknights.yml)

### 3. 指定主题

对 Hexo 博客目录中的 `_config.yml` 进行如下修改：

``` yaml
theme: arknights  # 指定主题

highlight:  # 开启代码高亮
    hljs: true
```

> 建议参考：
  > - [Hexo 官方文档 - 配置](https://hexo.io/zh-cn/docs/configuration) 

### 4. 安装依赖

npm 用户：
``` shell script 
npm install hexo-server hexo-browsersync hexo-renderer-pug --save
```

yarn 用户：
``` shell script
yarn add hexo-server hexo-browsersync hexo-renderer-pug
```

## 高级使用方法

参考本项目 Wiki [高级使用方法](https://github.com/Yue-plus/hexo-theme-arknights/wiki/%E9%AB%98%E7%BA%A7%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)。

## 更新主题

参考本项目 Wiki [更新主题](https://github.com/Yue-plus/hexo-theme-arknights/wiki/%E6%9B%B4%E6%96%B0%E4%B8%BB%E9%A2%98)。

## 功能特性

- [x] 无比详实的[用户文档](https://github.com/Yue-plus/hexo-theme-arknights/wiki)
- [x] 内置多款评论插件
- [x] 支持 LaTeX 数学公式
- [x] 支持 mermaid 流程图

## 贡献

所有的贡献者请查看[光荣榜](https://github.com/Yue-plus/hexo-theme-arknights/wiki/%E5%85%89%E8%8D%A3%E6%A6%9C)页面，衷心感谢他们对 arknights 主题的付出。

欢迎您对 arknights 主题做出贡献。若您有希望加入的功能，可以给我们提出 Issue ，或者自己动手实现，然后发起 Pull Request。

有关于如何做出贡献的更详细内容，请查看[如何做出贡献](https://github.com/Yue-plus/hexo-theme-arknights/wiki/%E5%A6%82%E4%BD%95%E5%81%9A%E5%87%BA%E8%B4%A1%E7%8C%AE)。

## 支持我们

喜欢这个主题的话可以：

- 给颗小星星吧 `(/▽＼)`
  > - [x] `ヾ(✿ﾟ▽ﾟ)ノ` 100star 做个新主题哦~
  > - 新主题开发中 [Yue-plus/vuepress-theme-rhinelab](https://github.com/Yue-plus/vuepress-theme-rhinelab)
- 开发者的B服ID：`24444750`
- 加入 QQ 群：618221514
    > 群内开发为主，吹水晒卡，分享线索7也都欢迎哦~ `d=====(￣▽￣*)b`
- 打赏、赞助:

![收款二维码](./support.jpg)
