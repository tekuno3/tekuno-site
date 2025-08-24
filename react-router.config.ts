import type { Config } from '@react-router/dev/config';
import fs from 'node:fs/promises';
import path from 'node:path';

export default {
  appDirectory: 'src',
  basename: '/tekuno-site',
  buildDirectory: 'dist',
  async buildEnd(args) {
    if (!args.viteConfig.isProduction) { return; }

    const buildPath = args.viteConfig.build.outDir;
    const distPath = path.dirname(buildPath);
    const files = await fs.readdir(buildPath);

    // `dist/client`の形式で出力されるので、`dist`に移動させる
    await Promise.all(files.map((file) => {
      const p = fs.rename(
        path.join(buildPath, file),
        path.join(distPath, file),
      );

      return p;
    }));
    await fs.rmdir(buildPath);

    // gitgub pages 用に 404.html をコピー
    await fs.copyFile(
      path.join(distPath, 'index.html'),
      path.join(distPath, '404.html')
    );

    // .nojekyll ファイルを作成
    await fs.writeFile(path.join(distPath, '.nojekyll'), '');
  },
  ssr: false,
} satisfies Config;
