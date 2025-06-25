---
title: Pro
description: Learn how to install Sersi Pro CLI.
layout: docs
---

# Sersi Pro

**Sersi Pro** extends the open-source CLI with premium features to help teams scale and ship faster.

## What's Included

- Scaffold Store
- Custom Pre & Post Hooks
- Shared private templates (Teams)

## Get Access

1. Subscribe to Pro or Teams at [sersi.dev/pro](https://sersi.dev/pro)
2. Authenticate via:

::docs-code-block

```bash
sersi auth login
```

::

4. Check status

::docs-code-block

```bash
sersi auth status
```

::

## Installation

See [Installation Docs](installation.md)

## License Terms

Sersi Pro feaures are under commercial software license per user.
See full - LICENSE-COMMERCIAL.

# Usage

## Commands

1. scaffold

To do an action eg. `save` a scaffold file to the scaffold store

eg.

::docs-code-block

```bash
sersi scaffold --action=<action> --file-path <path> or --name=<name>

# example
sersi scaffold --action=save --file-path path/to/sersi.yaml
```

::

## Actions:

- save -> saves a file to the scaffold store [use with --file-path]
- update -> update a file in the scaffold store with a file [use with --file-path]
- list -> list scaffolds in store (and select to generate)
- delete -> delete a scaffold from store [use with --name]
- use -> use a scaffold from store to generate scaffold [use with --name]
