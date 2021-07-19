# 🗃️ FluidTrack Auto Report

<a href="http://fluidtrack.site:8055"><img src="https://github.com/FluidTrack/Report/blob/main/WebSrc/IMG/metaImage.png?raw=true" width="200px"></a>

(**If you click above picture,** you can move to FluidTrack auto report web site)

FluidTrack report tamplate auto generator based on web server

<img src="https://github.com/FluidTrack/Report/blob/main/DocumentImage/DocImage_01.gif?raw=true">

<a href="https://github.com/FluidTrack/FluidTrackApplication/blob/master/LICENSE"><img src="https://img.shields.io/github/license/FluidTrack/FluidTrackApplication"></a>

<a href="mailto:dclab2011@gmail.com"><img src="https://img.shields.io/badge/Contact-dclab2011@gamil.com-blue?logo=gmail&logoColor=white"></a>

<a href="http://dclab.yonsei.ac.kr/"><img src="https://img.shields.io/badge/Contact-Yonsei Univ. Dependable Computing Lab.-red?logo=safari&logoColor=white"></a>

## 1. function

- ✔️ Auto tamplate creating
- ✔️ PDF converting
- ✔️ Auto graph drawing

## 2. Development Environment

| Environment          | Version                                                                         |
| -------------------- | ------------------------------------------------------------------------------- |
| OS                   | <img src="https://img.shields.io/badge/Ubuntu-18.04.5 LTS-orange?logo=ubuntu&logoColor=white" align="left"> |
| NodeJS               | <img src="https://img.shields.io/badge/Version-12.18.0-orange" align="left">    |
| NPM                  | <img src="https://img.shields.io/badge/Version-6.14.8-orange" align="left">     |
| NPM                  | <img src="https://img.shields.io/badge/Version-6.14.8-orange" align="left">     |

## 3. Environment setting & Server install

Install nodejs with npm. (windows : [https://nodejs.org/ko/download/](https://nodejs.org/ko/download/))

```
sudo apt-get update
sudo apt-get install nodejs
node --version
npm --version
```

clone this repo

```
sudo git clone git@github.com:FluidTrack/Report
cd Report
```

and install node pakgke

```
sudo npm install
```

To keep the server online at all times, install the [PM2](https://pm2.keymetrics.io/) package.

```
sudo npm install pm2 -g
```

Turn on the server using pm2.

```
cd WebSrc
sudo pm2 start server.js
```

> 　
> **📌 Note** : PM2 command could be learned from [this site](https://owldev.netlify.app/js/pm2-cmd/) (Korean)
> 　


## 4. Access Link

This server is using port ```8055```.

So you can visit this web ite through [http://fluidtrack.site:8055/](http://fluidtrack.site:8055/)

## 5. ScreenShot

<img src="https://github.com/FluidTrack/Report/blob/main/DocumentImage/DocImage_02.png?raw=true" width=:100%>
