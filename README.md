# 基于Ionic+React+Capacitor的混合应用

Powered by [Ionic React](https://ionicframework.com/docs/react) (web app) and [Capacitor](https://capacitor.ionicframework.com) (native app runtime).

## Node.js版本

* 20.11.1 (Currently using 64-bit executable)

## Android Studio版本

2023.3.1

## 构建并运行

> 我仅测试了安卓

0) 如果需要安装ionic: `npm install -g @ionic/cli`。
1) 克隆此仓库。
2) 在控制台中导航到项目文件夹: `cd fungame-web`。
3) 安装所有的包: `npm install`。
4) 启动web开发服务器: `ionic serve`。
5) 构建安卓: 
1. `ionic capacitor sync android`；
2. `ionic capacitor build android`。
6) 在打开的Android Studio中，打开App文件夹的AndroidManifest.xml，在最底处添加权限声明：`<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />`。