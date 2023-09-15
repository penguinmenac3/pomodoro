# Pomodoro

> Hosted on: https://penguinmenac3.github.io/pomodoro/

## Start APP Development Server

Simply start the lightning dev server using:
```bash
npm run dev
```

## Build the app for release

Run the build command, add and commit the dist folder and then push this folger to gh-pages.
```bash
npm run build
rm dist/favicon.kra
git add -f dist
git commit -m "Build gh-pages."
git push
git subtree push --prefix dist origin gh-pages
```