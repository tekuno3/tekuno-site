import type { Config } from '@react-router/dev/config';
import { copyFile } from 'node:fs/promises';
import path from 'node:path';

export default {
  appDirectory: 'src',
  basename: '/tekuno-site',
  async buildEnd(args) {
    if (!args.viteConfig.isProduction) { return; }
    const buildPath = args.viteConfig.build.outDir;
    await copyFile(path.join(buildPath, 'index.html'), path.join(buildPath, '404.html'));
  },
  ssr: false,
} satisfies Config;
