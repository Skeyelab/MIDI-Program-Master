#!/bin/zsh
npm run build --prod && git subtree push --prefix docs origin gh-pages
