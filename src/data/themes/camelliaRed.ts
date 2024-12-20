import type { ThemeProps } from '../../lib/theme/types.js';

const CamelliaRed: ThemeProps = {
	name: 'CamelliaRed',
	color: {
		primary: {
			50: '255, 246, 245', // #FFF6F5
			100: '255, 234, 232', // #FFEAE8
			200: '252, 199, 196', // #FCC7C4
			300: '248, 163, 162', // #F8A3A2
			400: '245, 128, 130', // #F58082
			500: '241, 95, 102', // #F15F66
			default: '238, 63, 77', // #EE3F4D
			700: '198, 39, 58', // #C6273A
			800: '157, 21, 41', // #9D1529
			900: '117, 8, 28', // #75081C
			950: '77, 0, 17' // #4D0011
		},
		dark: {
			50: '254, 250, 255', // #FEFAFF
			100: '251, 232, 255', // #FBE8FF
			200: '246, 214, 255', // #F6D6FF
			300: '240, 196, 255', // #F0C4FF
			400: '233, 179, 255', // #E9B3FF
			500: '225, 161, 255', // #E1A1FF
			default: '216, 143, 255', // #D88FFF
			700: '164, 88, 210', // #A458D2
			800: '116, 46, 166', // #742EA6
			900: '74, 17, 121', // #4A1179
			950: '40, 0, 77' // #28004D
		},
		primaryBlack: '25, 1, 3', // #190103
		primaryWhite: '243, 242, 242', // #F3F2F2
		darkBlack: '16, 1, 25', // #100119
		darkWhite: '242, 242, 243', // #F2F2F3
		functional: {
			success: '82, 196, 26', // #52c41a
			warning: '250, 173, 20', // #faad14
			error: '255, 77, 79', // #ff4d4f
			info: '22, 119, 255' // #1677ff
		},
		extend: [
			{ color: '59, 89, 152', alias: 'Facebook' }, // #3b5998
			{ color: '237, 28, 22', alias: 'CocaCola' }, // #ed1c16
			{ color: '0, 104, 181', alias: 'Intel' } // #0068b5
		]
	}
};

export default CamelliaRed;
