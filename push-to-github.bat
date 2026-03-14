@echo off
echo 🚀 开始推送代码到GitHub...

REM 检查是否在项目目录
if not exist ".git" (
  echo 📁 初始化Git仓库...
  git init
)

REM 添加所有文件
echo 📝 添加文件到Git...
git add .

REM 提交代码
echo 💾 提交代码...
git commit -m "更新准爸爸护理助手 - %date% %time%"

REM 检查远程仓库是否已设置
git remote | findstr "origin" > nul
if errorlevel 1 (
  echo 🔗 设置远程仓库...
  set /p repo_url=请输入GitHub仓库URL: 
  git remote add origin %repo_url%
)

REM 推送到GitHub
echo 📤 推送到GitHub...
git push -u origin main

echo ✅ 代码推送完成！
echo 现在可以登录Vercel进行部署了。
pause
