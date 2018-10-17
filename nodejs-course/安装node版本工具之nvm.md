## 安装node版本管理工具之NVM

> nvm是个啥？nvm是一个可以让你在同一台机器上安装和切换不同版本node的工具

## 1. 开始安装(Linux系统下)

可以通过curl或者wget进行安装，命令如下

curl方式

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

wget方式

```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

**如果你系统没有安装git的话，请先安装git,安装命令请参考下面**
ubuntu系统

```
sudo apt-get install git

```

centos

```
sudo yum install git

```

## 2. 可能遇到的问题

**安装完后，如果是用xshell连远程主机的话，先重连一次，不然会发现提示找不到nvm命令**

可能出现依旧提示找不到nvm命令，那么请使用source命令，如下

```
source ~/.bashrc

```

如果是zsh的话，请用

```
source ~/.zshrc
```

## 3. 开始开车

**常用命令一览**

终端输入nvm，会看到帮助信息

```
nvm

```

我们会看到提示一堆信息，如下图

![](https://upload-images.jianshu.io/upload_images/103577-b486db8b9eff3e58.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/654/format/webp)

nvm命令

### 3.1 nvm ls-remote

列出全部可以安装的版本号

```
nvm ls-remote

```

运行命令后，稍等一会，就会列出全部可以安装的版本号，如图

![](https://upload-images.jianshu.io/upload_images/103577-72ceb4dc915c39e8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/645/format/webp)

可以看出全部可用版本号，和当前安装了v7.8.0版本

### 3.2 nvm install 版本号

安装指定版本

```
nvm install v7.9.0  #命令后加版本号就可以进行安装，字母v可以不写，如下图

```

![](https://upload-images.jianshu.io/upload_images/103577-0201041de3499ba9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/634/format/webp)

安装后默认使用该版

### 3.3 nvm use 版本号

切换指定版本，切换效果是全局的

```
nvm use v7.8.0

```

![](https://upload-images.jianshu.io/upload_images/103577-db2d513a89d5a588.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/580/format/webp)

切换到7.8.0

### 3.4 nvm current

查看当前使用的版本

```
nvm current

```

![](https://upload-images.jianshu.io/upload_images/103577-e5401e06f45a9396.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/514/format/webp)

查看当前使用的版本

### 3.5 nvm ls

查看该系统已经安装的版本，这个命令也能看到当前使用的是哪个版本

![](https://upload-images.jianshu.io/upload_images/103577-c4f3f5d3a4f8a542.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/544/format/webp)

查看已经安装的版本

