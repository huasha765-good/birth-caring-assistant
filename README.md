# 准爸爸剖腹产护理助手

这是一个专为准爸爸设计的剖腹产护理指南应用，帮助准爸爸更好地照顾产妇和新生儿。

## 🚀 部署到Vercel

### 方法一：命令行部署（推荐）

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   npm run build
   vercel --prod
   ```

### 方法二：GitHub集成部署

1. **将代码推送到GitHub仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **登录Vercel官网**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录

3. **导入项目**
   - 点击 "New Project"
   - 选择你的GitHub仓库
   - Vercel会自动识别React项目并配置构建设置

4. **环境变量（可选）**
   如果需要，可以在Vercel项目设置中添加环境变量：
   ```
   NODE_ENV=production
   ```

### 方法三：一键部署

点击下方按钮一键部署到Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fyour-username%2Fyour-repo-name)

## 📱 分享给家人

部署成功后，你可以：

1. **直接分享链接**：将Vercel生成的域名发给家人
2. **添加到手机主屏幕**：
   - iOS：点击分享 → 添加到主屏幕
   - Android：点击菜单 → 添加到主屏幕
3. **离线使用**：支持PWA，可以在离线状态下使用

## 🛠 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 🎨 技术栈

- React 18
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide React

## 📝 注意事项

- 这是一个私人项目，适合家庭内部使用
- 所有数据都存储在本地浏览器中，不会上传到服务器
- 建议在WiFi环境下首次访问，以便缓存资源
- 支持离线使用，方便在医院等网络环境不佳的地方使用

## 🤝 贡献

如果你有任何建议或改进意见，欢迎提出Issue或Pull Request。
