# Portfolio

<!--toc:start-->

- [Portfolio](#portfolio)
  - [Introduction](#introduction)
  - [Deployment](#deployment)
  <!--toc:end-->

## Introduction

Welcome to the source code of my portfolio website. This should give you a very brief (and not quite updated) detail about what I do.

As with most of my documentation, **I don't** do a good job at keeping it updated.

## Deployment

This website is publicly available at [https://hafijul.dev](https://hafijul.dev) and is built from gh-pages branch using [Github Pages](https://pages.github.com).

## Engineering studio preview

The `feat/redesign` branch contains the engineering studio portfolio. It reuses
existing project data and contact links, and adds category filters and responsive
navigation. Start the local preview with:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 8090 --strictPort
```

Open http://localhost:8090/. Vite reloads the page as source files change.
Run `npm run build` and `npm run lint` before publishing.

The contact form needs the existing `VITE_EMAILJS_SERVICE_ID` and
`VITE_EMAILJS_USER_ID` configuration. Without them, the form displays an email
fallback instead of attempting an unconfigured send. No credentials belong in Git.
