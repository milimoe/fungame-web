# 基于Ionic+React+Capacitor的混合应用

Powered by [Ionic React](https://ionicframework.com/docs/react) (web app) and [Capacitor](https://capacitor.ionicframework.com) (native app runtime).

## Node.js版本

* 20.14.0 (Currently using 64-bit executable)

## Android Studio版本

2023.3.1

## 构建并运行

> 我仅测试了安卓

1) 在需要时安装ionic（特别第一次使用时）：`npm install -g @ionic/cli`。
2) 克隆此仓库。
3) 在控制台中导航到项目文件夹：`cd fungame-web`。
4) 安装所有的包：`npm install`。
5) 启动web开发服务器：`ionic serve`。
6) 构建安卓：
1. `ionic capacitor sync android`；
2. `ionic capacitor build android`。
7) 在打开的Android Studio中，打开App文件夹的AndroidManifest.xml，在最底处添加权限声明：`<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />`。