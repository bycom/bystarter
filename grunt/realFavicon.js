'use strict';

module.exports = {
	favicons: {
		src: '<%= cfg.root %><%= cfg.src.images %>favicon.png',
		dest: '<%= cfg.root %><%= cfg.dest.html %>',
		options: {
			iconsPath: '/',
			html: [ '<%= cfg.root %><%= cfg.src.utils %>globals/head.html' ],
			design: {
				ios: {
					pictureAspect: 'noChange'
				},
				desktopBrowser: {},
				windows: {
					pictureAspect: 'noChange',
					backgroundColor: '#da532c',
					onConflict: 'override'
				},
				androidChrome: {
					pictureAspect: 'noChange',
					themeColor: '#ffffff',
					manifest: {
						name: 'Project name', // Project name
						display: 'browser',
						orientation: 'notSet',
						onConflict: 'override'
					}
				},
				safariPinnedTab: {
					pictureAspect: 'silhouette',
					themeColor: '#5bbad5'
				}
			},
			settings: {
				scalingAlgorithm: 'Mitchell',
				errorOnImageTooSmall: false
			}
		}
	}
};
