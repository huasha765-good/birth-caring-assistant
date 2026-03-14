#!/bin/bash
# GitHub仓库推送脚本

echo "🚀 开始推送代码到GitHub..."

# 检查是否在项目目录
if [ ! -d ".git" ]; then
  echo "📁 初始化Git仓库..."
  git init
fi

# 添加所有文件
echo "📝 添加文件到Git..."
git add .

# 提交代码
echo "💾 提交代码..."
git commit -m "更新准爸爸护理助手 - $(date '+%Y-%m-%d %H:%M:%S')"

# 检查远程仓库是否已设置
if ! git remote | grep -q "origin"; then
  echo "🔗 设置远程仓库..."
  read -p "请输入GitHub仓库URL: " repo_url
  git remote add origin "$repo_url"
fi

# 推送到GitHub
echo "📤 推送到GitHub..."
git push -u origin main

echo "✅ 代码推送完成！"
echo "现在可以登录Vercel进行部署了。"
