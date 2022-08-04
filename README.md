# bi-front
## 介绍
本项目为BI系统的前端仓库，技术上使用 [Vue2.x](https://cn.vuejs.org/v2/guide/) + [Element-UI](https://element.eleme.cn/#/zh-CN) 遇到问题可查询官方文档。

## 开发的同学
来自二舅的队伍前端小分队
* qcj
* cyb
* wjh
* hm

## 项目启动指南
1. 注册github账号，fork到自己的仓库，然后克隆到本地。
2. 安装 [node.js](https://nodejs.org/en/) 环境，选择LTS即可。
3. 配置淘宝镜像【可选】

```bash
# 查看npm配置
npm config list

# 更换源配置
npm config set registry https://registry.npm.taobao.org
# 检查是否替换成功
npm config list / npm config get registery
```
4. 安装依赖
```bash
# 切换到项目目录
cd bi-front
# 安装依赖
npm install
```
5. 运行
```bash
npm run serve
```
6. 打包(部署阶段)
```bash
npm run build
```
