# GitHub仓库创建和代码推送完整指南

## 第一步：GitHub账号准备

### 1.1 注册GitHub账号
1. 打开 [github.com](https://github.com)
2. 点击 "Sign up" 注册新账号
3. 填写用户名、邮箱和密码
4. 验证邮箱地址

### 1.2 配置Git（如果尚未配置）
```bash
# 设置用户名
git config --global user.name "你的名字"

# 设置邮箱
git config --global user.email "你的邮箱"

# 查看配置是否成功
git config --global user.name
git config --global user.email
```

## 第二步：创建新仓库

### 2.1 登录GitHub
- 打开 [github.com](https://github.com)
- 使用您的账号登录

### 2.2 创建新仓库
1. 点击右上角的 "+" 按钮
2. 选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `birth-caring-assistant`
   - **Description**: 准爸爸剖腹产护理助手
   - **Privacy**: 选择 "Private"（私人项目）
   - **Initialize this repository with**: 不要勾选任何选项
4. 点击 "Create repository"

## 第三步：推送代码到GitHub

### 3.1 打开终端/命令行
- **Windows**: 按 Win+R，输入 "cmd" 回车
- **Mac**: 打开 "终端" 应用
- **Linux**: 打开终端

### 3.2 导航到项目目录
```bash
# 进入您的项目文件夹
cd 你的项目路径

# 例如：
cd Documents/birth-caring-assistant
```

### 3.3 初始化Git仓库
```bash
# 初始化本地Git仓库
git init

# 添加所有文件到Git
git add .

# 提交代码
git commit -m "初始化准爸爸护理助手项目"
```

### 3.4 连接到GitHub仓库
```bash
# 将本地仓库连接到GitHub
git remote add origin https://github.com/你的用户名/birth-caring-assistant.git

# 例如：
git remote add origin https://github.com/zhangsan/birth-caring-assistant.git
```

### 3.5 推送代码
```bash
# 推送到GitHub
git push -u origin main
```

## 第四步：验证推送成功

1. 刷新GitHub仓库页面
2. 您应该能看到所有代码文件
3. 检查提交历史是否显示

## 第五步：后续更新

当您需要更新代码时：

```bash
# 添加修改的文件
git add .

# 提交更改
git commit -m "更新了护理指南内容"

# 推送到GitHub
git push
```

## 常见问题解决

### Q: 提示 "git is not recognized"
A: 需要先安装Git：
- Windows: 下载 [Git for Windows](https://git-scm.com/download/win)
- Mac: `brew install git`
- Linux: `sudo apt install git`

### Q: 推送时提示认证失败
A: 需要配置GitHub认证：
1. 在GitHub设置中生成Personal Access Token
2. 推送时用Token替换密码

### Q: 提示 "fatal: remote origin already exists"
A: 需要先删除已存在的远程仓库：
```bash
git remote remove origin
```
然后再重新添加。

### Q: 如何查看推送状态
A: 使用以下命令：
```bash
# 查看远程仓库信息
git remote -v

# 查看提交历史
git log --oneline

# 查看文件状态
git status
```

---

现在您的代码已经成功推送到GitHub，可以准备部署到Vercel了！
