/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// 開発時のみstorybookでのダークモード切り替えのためにselectorを使用する
  // darkMode: process.env.NODE_ENV === 'production' ? undefined : ['selector', '[data-mode="dark"]'],
  // 仮：上記対応はstorybookのダークモード切り替えが効かなくなるため一旦保留
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Noto Sans Mono'],
      },
    },
  },
	plugins: [
		require('@digital-go-jp/tailwind-theme-plugin'),
    require('tailwindcss-animate'),
	],
}
