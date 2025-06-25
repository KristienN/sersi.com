---
title: Docs
description: Welcome to the official SERSI documentation.
layout: docs
---

# SERSI — Skip the Setup, Start Building

![SERSI Demo](/sersi-demo.gif){style="width: 70%; height: auto; display: block; margin: 0 auto; margin-bottom: 2rem; border-radius: 1rem; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);"}

![Issues](https://img.shields.io/github/issues/sersi-project/sersi)

**SERSI** is a powerful CLI tool that helps you launch your apps with zero hassle. Choose your tech stack, scaffold instantly, and get straight to shipping.

Whether you're freelancing, prototyping, or building the next big thing — **SERSI gets you started in seconds**.

## Features

- Scaffold modern frontend apps with **React**, **Vue**, or **Vanilla JS**
- Choose from **Tailwind**, **Bootstrap**, **Sass**, or plain CSS
- Pick **TypeScript** or **JavaScript**
- Zero-config project structure, ready to go
- YAML-powered customization (with `sersi.yaml`)
- Take more control by scaffolding a backend to go with your frontend!
- Select Express, Gin or Chi for your backend
- Our Backend Packages support **Docker** and **CI/CD**
- **Pro mode** Scaffold store, Custom Hooks & More!

## Installation

Sersi is available on homebrew, scoop and npm.

::docs-code-block

```bash
brew tap sersi-project/sersi
brew install sersi

# or

scoop bucket add sersi https://github.com/sersi-project/scoop-sersi
scoop install sersi

# or

npx sersi@lateset <command>
```

::

Check the full guide here → [Installation](./docs/installation.md)

## Usage

::docs-code-block

```bash
sersi create
# Interactive prompts guide your setup.
```

::

Want to scaffold from a config file?

::docs-code-block

```bash
sersi build -f /path/to/sersi.yaml
```

::

Full docs → [Usage](./docs/usage.md)

## Contributing

We welcome PRs and feature suggestions!
Start here → [Contributing Guide](https://github.com/sersi-project/sersi/blob/main/docs/CONTRIBUTING.md)

## SERSI Pro & Teams

Take things further with SERSI Pro:

- Scaffold store
- Advanced YAML options like Custom Hooks
- CI/CD, Docker
- Shared private templates

Learn more → [Pro Features](./docs/pro.md)

## License

SERSI is free under the MIT License.
Pro mode is made available under Commercial License.
See LICENSE & LICENSE-COMMERCIAL for full details.
