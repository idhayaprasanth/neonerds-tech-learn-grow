# 🚀 Deploy to GitHub Pages

This guide will help you deploy your NeoNerds website to GitHub Pages for free using GitHub Actions.

## 📋 Prerequisites

1. A GitHub account
2. Your project pushed to a GitHub repository
3. Node.js and npm installed locally

## 🛠️ Setup Steps

### 1. Update Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

### 2. Update Configuration

**IMPORTANT**: Before deploying, update the `homepage` field in `package.json`:

```json
"homepage": "https://[YOUR_USERNAME].github.io/neonerds-tech-learn-grow"
```

Replace `[YOUR_USERNAME]` with your actual GitHub username.

### 3. Install Dependencies

```bash
npm install
```

### 4. Deploy

#### Automatic Deployment (Recommended)
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Check the **Actions** tab in your repository for deployment status

## 🔧 How It Works

- **GitHub Actions**: Automatically builds and deploys on every push to main branch
- **Official GitHub Actions**: Uses `actions/deploy-pages@v4` for reliable deployment
- **Base Path**: Configured for repository name `/neonerds-tech-learn-grow/`
- **SPA Support**: 404.html handles client-side routing
- **Build Output**: Deploys from the `dist` folder

## 📁 Files Added/Modified

- `package.json` - Added homepage field for correct base path
- `vite.config.ts` - Added base path configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow using official actions
- `public/404.html` - SPA routing support

## 🌐 Access Your Site

After deployment, your site will be available at:
```
https://[YOUR_USERNAME].github.io/neonerds-tech-learn-grow
```

## 🔄 Updating Your Site

Simply push changes to the `main` branch - GitHub Actions will automatically redeploy!

## 🐛 Troubleshooting

1. **Build fails**: Check the Actions tab for error details
2. **Site not loading**: Verify the homepage URL in package.json
3. **Routing issues**: Ensure 404.html is in the public folder
4. **Permission errors**: Make sure Pages source is set to "GitHub Actions" in repository settings

## 📚 Additional Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
