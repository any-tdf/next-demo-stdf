import type { ThemeProps } from '../../lib/theme/types.js';

const Nintendo: ThemeProps = {
	name: 'Nintendo',
	color: {
		primary: {
			50: 'oklch(0.98 0.01 25.073)', // #FFF6F5 hsl(6, 100%, 98%)
			100: 'oklch(0.953 0.023 24.126)', // #FFEAE8 hsl(5, 100%, 96%)
			200: 'oklch(0.845 0.076 21.796)', // #FAB9B6 hsl(3, 87%, 85%)
			300: 'oklch(0.745 0.133 21.872)', // #F58886 hsl(1, 85%, 74%)
			400: 'oklch(0.662 0.188 22.749)', // #F0575A hsl(359, 84%, 64%)
			500: 'oklch(0.609 0.224 25.256)', // #EB2B34 hsl(357, 83%, 55%)
			default: 'oklch(0.581 0.238 27.862)', // #E60012 hsl(355, 100%, 45%)
			700: 'oklch(0.508 0.207 26.549)', // #C00016 hsl(353, 100%, 38%)
			800: 'oklch(0.43 0.174 24.608)', // #990017 hsl(351, 100%, 30%)
			900: 'oklch(0.351 0.141 21.971)', // #730015 hsl(349, 100%, 23%)
			950: 'oklch(0.266 0.107 17.45)' // #4D0011 hsl(347, 100%, 15%)
		},
		dark: {
			50: 'oklch(0.992 0.011 189.833)', // #F5FFFE hsl(174, 100%, 98%)
			100: 'oklch(0.983 0.024 193.6)', // #E8FFFE hsl(177, 100%, 96%)
			200: 'oklch(0.938 0.067 196.074)', // #B6F9F9 hsl(180, 85%, 85%)
			300: 'oklch(0.893 0.099 198.69)', // #85F0F4 hsl(182, 84%, 74%)
			400: 'oklch(0.847 0.12 201.806)', // #57E4EE hsl(184, 82%, 64%)
			500: 'oklch(0.803 0.131 206.757)', // #2AD6E9 hsl(186, 81%, 54%)
			default: 'oklch(0.752 0.133 215.123)', // #00C3E3 hsl(189, 100%, 45%)
			700: 'oklch(0.646 0.116 218.359)', // #009EBD hsl(190, 100%, 37%)
			800: 'oklch(0.535 0.1 223.819)', // #007998 hsl(192, 100%, 30%)
			900: 'oklch(0.426 0.083 227.589)', // #005772 hsl(194, 100%, 22%)
			950: 'oklch(0.319 0.064 230.58)' // #00384D hsl(196, 100%, 15%)
		},
		primaryBlack: 'oklch(0.139 0.05 18.003)', // #190103 hsl(355, 95%, 5%)
		primaryWhite: 'oklch(0.962 0.001 17.178)', // #F3F2F2 hsl(355, 5%, 95%)
		darkBlack: 'oklch(0.184 0.03 206.812)', // #011619 hsl(188, 95%, 5%)
		darkWhite: 'oklch(0.963 0.001 197.138)', // #F2F3F3 hsl(188, 5%, 95%)
		functional: {
			success: 'oklch(0.669 0.214 144.385)', // #00b42a hsl(134, 100%, 35%)
			warning: 'oklch(0.865 0.176 95.103)', // #f7d00c hsl(50, 94%, 51%)
			error: 'oklch(0.642 0.218 25.88)', // #f53f3f hsl(0, 90%, 60%)
			info: 'oklch(0.549 0.249 263.048)' // #165dff hsl(222, 100%, 54%)
		},
		extend: [
			{
				color: 'oklch(0.492 0.217 261.351)', // #0052d9 hsl(217, 100%, 43%)
				alias: 'Tencent'
			},
			{
				color: 'oklch(0.651 0.212 142.608)', // #1aad19 hsl(120, 75%, 39%)
				alias: 'WeChat'
			},
			{
				color: 'oklch(0.692 0.181 46.213)', // #f37021 hsl(23, 90%, 54%)
				alias: 'Hermès'
			}
		]
	}
};

export default Nintendo;
