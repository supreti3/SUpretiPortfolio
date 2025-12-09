# Deploying Your Portfolio to GitHub

Your portfolio is ready to be pushed to GitHub! Here are the steps:

## Option 1: Using GitHub CLI (Recommended)

If you have GitHub CLI installed:
```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

## Option 2: Create Repository on GitHub First

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Make it **Public** (so GitHub Pages can host it)
4. **Don't** initialize with README, .gitignore, or license
5. Click "Create repository"

Then run:
```bash
git remote add origin https://github.com/supreti3/portfolio.git
git push -u origin main
```

You'll be prompted for your GitHub username and password (use a Personal Access Token instead of password).

## Option 3: Using SSH (If you have SSH keys set up)

```bash
git remote set-url origin git@github.com:supreti3/portfolio.git
git push -u origin main
```

## After Pushing to GitHub

### Enable GitHub Pages:

1. Go to your repository: https://github.com/supreti3/portfolio
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Click **Save**

Your portfolio will be live at: **https://supreti3.github.io/portfolio/**

## Future Updates

To update your portfolio:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Changes will automatically update on GitHub Pages within a few minutes!

