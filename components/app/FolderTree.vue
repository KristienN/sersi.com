<template>
  <UTree :items="treeData" size="lg" />
</template>

<script lang="ts" setup>
const treeData = ref([
  {
    label: 'my-fullstack-app/',
    defaultExpanded: true,
    children: [
      {
        label: 'frontend/',
        defaultExpanded: true,
        children: [
          {
            label: '.github/',
            children: [
              {
                label: 'workflows/',
                children: [
                  {
                    label: 'ci.yml',
                    icon: 'i-vscode-icons-file-type-yaml',
                  },
                  {
                    label: 'release.yml',
                    icon: 'i-vscode-icons-file-type-yaml',
                  },
                ],
              },
            ],
          },
          {
            label: 'public/',
            children: [
              { label: 'vite.svg', icon: 'i-vscode-icons-file-type-svg' },
            ],
          },
          {
            label: 'src/',
            children: [
              {
                label: 'assets/',
                children: [
                  { label: 'logo.svg', icon: 'i-vscode-icons-file-type-svg' },
                ],
              },
              {
                label: 'components/',
                children: [
                  { label: 'Hero.vue', icon: 'i-vscode-icons-file-type-vue' },
                  { label: 'NavBar.vue', icon: 'i-vscode-icons-file-type-vue' },
                  { label: 'Footer.vue', icon: 'i-vscode-icons-file-type-vue' },
                ],
              },

              { label: 'main.ts', icon: 'i-vscode-icons-file-type-typescript' },
              { label: 'styles.css', icon: 'i-vscode-icons-file-type-css' },
              { label: 'App.vue', icon: 'i-vscode-icons-file-type-vue' },
              { label: 'index.html', icon: 'i-vscode-icons-file-type-html' },
            ],
          },
          { label: 'Dockerfile', icon: 'i-vscode-icons-file-type-docker' },
          { label: 'package.json', icon: 'i-vscode-icons-file-type-json' },
          { label: 'README.md', icon: 'i-vscode-icons-file-type-markdown' },
          { label: 'sersi.yaml', icon: 'i-vscode-icons-file-type-yaml' },
          {
            label: 'vite.config.ts',
            icon: 'i-vscode-icons-file-type-typescript',
          },
          { label: 'tsconfig.json', icon: 'i-vscode-icons-file-type-json' },
          {
            label: 'tsconfig.node.json',
            icon: 'i-vscode-icons-file-type-json',
          },
          { label: 'tsconfig.app.json', icon: 'i-vscode-icons-file-type-json' },
          { label: 'index.html', icon: 'i-vscode-icons-file-type-html' },
        ],
      },
      {
        label: 'backend/',
        children: [
          {
            label: '.github/',
            children: [
              {
                label: 'workflows/',
                children: [
                  {
                    label: 'ci.yml',
                    icon: 'i-vscode-icons-file-type-yaml',
                  },
                  {
                    label: 'release.yml',
                    icon: 'i-vscode-icons-file-type-yaml',
                  },
                ],
              },
            ],
          },
          {
            label: 'src/',
            children: [
              { label: 'app.ts', icon: 'i-vscode-icons-file-type-typescript' },
              {
                label: 'server.ts',
                icon: 'i-vscode-icons-file-type-typescript',
              },
              {
                label: 'config/',
                children: [
                  {
                    label: 'mongodb.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'controllers/',
                children: [
                  {
                    label: 'user.controller.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'routes/',
                children: [
                  {
                    label: 'user.route.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'middlewares/',
                children: [
                  {
                    label: 'error.middleware.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'models/',
                children: [
                  {
                    label: 'user.model.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'services/',
                children: [
                  {
                    label: 'user.service.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
              {
                label: 'utils/',
                children: [
                  {
                    label: 'logger.ts',
                    icon: 'i-vscode-icons-file-type-typescript',
                  },
                ],
              },
            ],
          },
          { label: 'Dockerfile', icon: 'i-vscode-icons-file-type-docker' },
          { label: 'package.json', icon: 'i-vscode-icons-file-type-json' },
          { label: 'README.md', icon: 'i-vscode-icons-file-type-markdown' },
          { label: 'tsconfig.json', icon: 'i-vscode-icons-file-type-json' },
        ],
      },
    ],
  },
]);
</script>
