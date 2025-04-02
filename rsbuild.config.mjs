import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  optimizeDeps: {
    exclude: ['@ffmpeg/core'], // 禁止预构建[7](@ref)
    needsInterop: ['@ffmpeg/ffmpeg'], // 声明需要特殊处理的模块
  },
  server: {
    fs: {
      strict: false, // 允许访问 public 目录外的核心文件[5](@ref)
    },
  },
});
