# ����Ionic+React+Capacitor�Ļ��Ӧ��

Powered by [Ionic React](https://ionicframework.com/docs/react) (web app) and [Capacitor](https://capacitor.ionicframework.com) (native app runtime).

## Node.js�汾

* 20.11.1 (Currently using 64-bit executable)

## Android Studio�汾

2023.3.1

## ����������

> �ҽ������˰�׿

0) �����Ҫ��װionic: `npm install -g @ionic/cli`��
1) ��¡�˲ֿ⡣
2) �ڿ���̨�е�������Ŀ�ļ���: `cd fungame-web`��
3) ��װ���еİ�: `npm install`��
4) ����web����������: `ionic serve`��
5) ������׿: 
1. `ionic capacitor sync android`��
2. `ionic capacitor build android`��
6) �ڴ򿪵�Android Studio�У���App�ļ��е�AndroidManifest.xml������״����Ȩ��������`<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />`��