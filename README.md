# ����Ionic+React+Capacitor�Ļ��Ӧ��

Powered by [Ionic React](https://ionicframework.com/docs/react) (web app) and [Capacitor](https://capacitor.ionicframework.com) (native app runtime).

## Node.js�汾

* 20.14.0 (Currently using 64-bit executable)

## Android Studio�汾

2023.3.1

## ����������

> �ҽ������˰�׿

1) ����Ҫʱ��װionic���ر��һ��ʹ��ʱ����`npm install -g @ionic/cli`��
2) ��¡�˲ֿ⡣
3) �ڿ���̨�е�������Ŀ�ļ��У�`cd fungame-web`��
4) ��װ���еİ���`npm install`��
5) ����web������������`ionic serve`��
6) ������׿��
1. `ionic capacitor sync android`��
2. `ionic capacitor build android`��
7) �ڴ򿪵�Android Studio�У���App�ļ��е�AndroidManifest.xml������״����Ȩ��������`<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />`��