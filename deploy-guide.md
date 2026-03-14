# Vercel部署详细指南

## 第一步：创建GitHub仓库

1. **登录GitHub账号**
   - 打开 [github.com](https://github.com)
   - 如果没有账号，先注册一个免费账号

2. **创建新仓库**
   - 点击右上角的 "+" 按钮
   - 选择 "New repository"
   - 填写仓库名称：`birth-caring-assistant`
   - 选择 "Private"（私人项目）
   - 点击 "Create repository"

## 第二步：将代码推送到GitHub

### 如果你已经在本地有代码：

```bash
# 在项目根目录执行以下命令
git init
git add .
git commit -m "初始化准爸爸护理助手"
git branch -M main
git remote add origin https://github.com/你的用户名/birth-caring-assistant.git
git push -u origin main
```

### 如果你是第一次使用Git：

1. **安装Git**
   - Windows: 下载 [Git for Windows](https://git-scm.com/download/win)
   - Mac: 使用 `brew install git`
   - Linux: 使用 `sudo apt install git`

2. **配置Git**
   ```bash
   git config --global user.name "你的名字"
   git config --global user.email "你的邮箱"
   ```

3. **推送代码**
   ```bash
   cd 你的项目目录
   git init
   git add .
   git commit -m "初始化准爸爸护理助手"
   git branch -M main
   git remote add origin https://github.com/你的用户名/birth-caring-assistant.git
   git push -u origin main
   ```

## 第三步：部署到Vercel

1. **登录Vercel**
   - 打开 [vercel.com](https://vercel.com)
   - 点击 "Sign Up" 注册（可以使用GitHub账号直接登录）
   - 选择免费计划（Hobby）

2. **导入项目**
   - 登录后点击 "Add New..." → "Project"
   - 选择 "Import Git Repository"
   - 搜索你的仓库 "birth-caring-assistant"
   - 点击 "Import"

3. **配置项目**
   - Vercel会自动识别这是一个React项目
   - 保持默认设置即可
   - 点击 "Deploy"

4. **等待部署**
   - Vercel会自动构建项目
   - 大约1-2分钟完成
   - 部署成功后你会看到一个域名：`your-project.vercel.app`

## 第四步：分享给家人

1. **获取分享链接**
   - 在Vercel项目页面，复制部署的URL
   - 例如：`https://birth-caring-assistant.vercel.app`

2. **发送给家人**
   - 通过微信、QQ或其他方式发送链接
   - 建议家人添加到手机主屏幕：
     - iPhone: 点击分享 → "添加到主屏幕"
     - Android: 点击菜单 → "添加到主屏幕"

## 第五步：后续更新

当需要更新内容时：

```bash
# 修改代码后
git add .
git commit -m "更新内容"
git push origin main

# Vercel会自动重新部署
```

## 注意事项

- **隐私保护**：选择Private仓库，只有你能看到代码
- **域名**：可以使用自定义域名（可选）
- **HTTPS**：Vercel自动提供SSL证书，链接是安全的
- **性能**：Vercel提供全球CDN，访问速度很快

## 常见问题

**Q: 需要付费吗？**
A: 不需要，Vercel的免费计划完全够用

**Q: 可以改域名吗？**
A: 可以，在Vercel项目设置中可以绑定自定义域名

**Q: 如何更新内容？**
A: 推送代码到GitHub后，Vercel会自动重新部署

**Q: 家人打不开怎么办？**
A: 确保链接正确，尝试刷新页面或清除浏览器缓存

---

现在你的准爸爸护理助手就可以让全家人使用了！
