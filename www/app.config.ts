export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'shadcn-docs',
      description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
      ogImage: '/hero.png',
      ogImageComponent: 'ShadcnDocs',
      ogImageColor: 'light',
      umami: {
        enable: true,
        src: 'https://cloud.umami.is/script.js',
        dataWebsiteId: 'd793fbf3-461e-4e26-9ec9-4e9141df96ee',
      },
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    banner: {
      enable: false,
      showClose: true,
      content: 'Welcome to **shadcn-docs-nuxt**',
      to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
      target: '_blank',
      border: true,
    },
    header: {
      title: 'shadcn-docs',
      showTitle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      border: false,
      darkModeToggle: true,
      languageSwitcher: {
        enable: true,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      nav: [
        {
          title: 'Accounting',
          to: '/comfortaccounting',
          target: '_self',
          showLinkIcon: false,
        },
        {
          title: 'Events',
          to: '/comfortevents',
          target: '_self',
          showLinkIcon: false,
        },
        /** {
          title: 'Docs',
          links: [
            {
              title: 'Getting Started',
              to: '/getting-started',
              description: 'Start building your document with shadcn-docs-nuxt',
              icon: 'lucide:rocket',
            },
            {
              title: 'Components',
              to: '/components/prose',
              description: 'Explore available UI components and usage examples.',
              icon: 'lucide:box',
            },
            {
              title: 'API',
              to: '/api/configuration/shadcn-docs',
              description: 'Discover the configurations and exposed APIs.',
              target: '_self',
              icon: 'lucide:code',
            },
          ],
        }, */
        /** {
          title: 'Credits',
          links: [{
            title: 'shadcn-ui',
            to: 'https://ui.shadcn.com/',
            description: 'For the beautiful component design & docs design',
            target: '_blank',
          }, {
            title: 'shadcn-vue',
            to: 'https://www.shadcn-vue.com/',
            description: 'For the vue port of shadcn-ui & some docs component source',
            target: '_blank',
          }, {
            title: 'Docus',
            to: 'https://docus.dev/',
            description: 'For inspiration & some docs component source',
            target: '_blank',
          }, {
            title: 'Nuxt Content',
            to: 'https://content.nuxt.com/',
            description: 'Content made easy for Vue Developers',
            target: '_blank',
          }],
        }, */
        /** {
          title: 'Blog',
          to: '/blog',
          target: '_self',
          showLinkIcon: false,
        }, */
      ],
      links: [
        {
          icon: 'lucide:coffee',
          to: 'https://ko-fi.com/ztl_uwu',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },
      ],
    },
    aside: {
      useLevel: true,
      levelStyle: 'aside',
      collapse: false,
      collapseLevel: 1,
      folderStyle: 'default',
    },
    // Add sidebar configuration directly here
    sidebar: {
      '/comfortaccounting': [
        {
          text: 'Comfort Accounting',
          collapsible: false,
          items: [
            {
              text: 'Overview',
              link: '/comfortaccounting',
            },
          ],
        },
        {
          text: 'Getting Started',
          collapsible: true,
          items: [
            {
              text: 'How to install',
              link: '/comfortaccounting/how-to-install',
            },
            {
              text: 'How to Translate',
              link: '/comfortaccounting/how-to-translate',
            },
            {
              text: 'Template Override',
              link: '/comfortaccounting/template-override',
            },
            {
              text: 'Hooks and Filters',
              link: '/comfortaccounting/hooks-and-filters',
            },
            {
              text: 'Code Samples',
              link: '/comfortaccounting/code-samples',
            },
          ],
        },
        {
          text: 'User Guide',
          collapsible: true,
          items: [
            {
              text: 'General',
              link: '/comfortaccounting/user-guide/general',
            },
            {
              text: 'Dashboard',
              link: '/comfortaccounting/user-guide/dashboard',
            },
            {
              text: 'Agency Manager',
              link: '/comfortaccounting/user-guide/agency-manager',
            },
            {
              text: 'Account Manager',
              link: '/comfortaccounting/user-guide/account-manager',
            },
            {
              text: 'Category Manager',
              link: '/comfortaccounting/user-guide/category-manager',
            },
            {
              text: 'VC Manager',
              link: '/comfortaccounting/user-guide/vc-manager',
            },
            {
              text: 'Log Manager',
              link: '/comfortaccounting/user-guide/log-manager',
            },
            {
              text: 'Reports Manager (Pro)',
              link: '/comfortaccounting/user-guide/reports-manager',
            },
            {
              text: 'Settings Manager',
              link: '/comfortaccounting/user-guide/settings-manager',
            },
            {
              text: 'Tools Manager',
              link: '/comfortaccounting/user-guide/tools-manager',
            },
            {
              text: 'Emails Manager',
              link: '/comfortaccounting/user-guide/emails-manager',
            },
            {
              text: 'Helps & Updates',
              link: '/comfortaccounting/user-guide/helps-updates',
            },
            {
              text: 'Integrations',
              link: '/comfortaccounting/user-guide/integrations',
            },
          ],
        },
        {
          text: 'Shortcode',
          collapsible: true,
          items: [
            {
              text: '7 Shortcodes',
              link: '/comfortaccounting/shortcodes',
            },
          ],
        },
        {
          text: 'Widgets',
          collapsible: true,
          items: [
            {
              text: 'Classic Widgets',
              link: '/comfortaccounting/classic-widgets',
            },
            {
              text: 'Elementor Widget',
              link: '/comfortaccounting/elementor-widgets',
            },
            {
              text: 'Gutenberg Blocks',
              link: '/comfortaccounting/gutenberg-blocks',
            },
          ],
        },
      ],
    },
    main: {
      padded: true,
      breadCrumb: true,
      showTitle: false, // true to show title, description from page
      codeCopyToast: false,
      codeCopyIcon: 'lucide:clipboard',
      editLink: {
        enable: true,
        pattern: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/edit/main/www/content/:path',
        text: 'Edit this page',
        icon: 'lucide:square-pen',
        placement: ['docsFooter'],
      },
      backToTop: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'css': 'vscode-icons:file-type-css',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-light-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
    },
    footer: {
      border: true,
      credits: 'FOOTER_CREDIT',
      links: [
        {
          icon: 'lucide:heart',
          title: 'Sponsor Me',
          to: 'https://ko-fi.com/ztl_uwu',
          target: '_blank',
        },
        {
          icon: 'lucide:twitter',
          to: 'https://x.com/ZTL_UwU',
          target: '_blank',
        },
        {
          icon: 'lucide-lab:butterfly',
          to: 'https://bsky.app/profile/ztl-uwu.bsky.social',
          target: '_blank',
        },
        {
          icon: 'simple-icons:discord',
          to: 'https://discord.gg/9P5HzAz8DT',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      enableInMobile: true,
      enableInHomepage: false,
      title: 'On this page',
      links: [
        {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
          showLinkIcon: true,
        },
        {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
          target: '_blank',
          showLinkIcon: true,
        },
      ],
      iconLinks: [
        {
          icon: 'lucide:coffee',
          to: 'https://ko-fi.com/ztl_uwu',
          target: '_blank',
        },
        {
          icon: 'lucide:twitter',
          to: 'https://x.com/ZTL_UwU',
          target: '_blank',
        },
        {
          icon: 'lucide-lab:butterfly',
          to: 'https://bsky.app/profile/ztl-uwu.bsky.social',
          target: '_blank',
        },
        {
          icon: 'simple-icons:discord',
          to: 'https://discord.gg/9P5HzAz8DT',
          target: '_blank',
        },
      ],
      carbonAds: {
        enable: true,
        disableInDev: true,
        disableInMobile: false,
        fallback: false,
        fallbackMessage: 'Please support us by disabling your ad blocker.',
        code: 'CW7ITKJN',
        placement: 'shadcn-docs-nuxtvercelapp',
        format: 'cover',
      },
    },
    search: {
      enable: true,
      inAside: false,
      style: 'input',
    },
    data: {},
  },
});
