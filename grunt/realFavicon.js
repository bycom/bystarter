'use strict';

module.exports = {
	favicons: {
		src: '<%= cfg.root %><%= cfg.src.images %>favicon/',
		dest: '<%= cfg.root %><%= cfg.dest.images %>favicon/',
		options: {
			iconsPath: '<%= cfg.dest.images %>favicon/',
			//html: [{
			//	expand: true,
			//	cwd: '<%= cfg.root %><%= cfg.dest.html %>',
			//	src: ['*.html'],
			//	dest: '<%= cfg.root %><%= cfg.dest.html %>'
			//}],
			//html: [ '<%= cfg.root %><%= cfg.dest.html %>.html' ],
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
						name: 'Project Name', // Project Name
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
