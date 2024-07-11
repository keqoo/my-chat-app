#!/bin/bash

# 输出构建开始信息
echo "Starting build process..."

# 安装依赖
npm install

# 构建项目
npm run build

# 输出构建完成信息
echo "Build process completed."
