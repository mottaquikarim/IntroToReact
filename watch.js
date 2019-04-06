#!/usr/bin/env node

const sane = require('sane')
const {reBuild, reloadSummary, SRC} = require('./utils')


const watcher = sane(SRC, {glob: ['**/*.md']});


watcher.on('ready', function () { console.log('ready') });
watcher.on('change', function (filepath, root, stat) { 
	console.log('file changed', filepath, filepath.indexOf('SUMM')); 
	if (filepath.indexOf('SUMM') === -1) {
		console.log('here')
		reloadSummary()
	}
});
watcher.on('add', function (filepath, root, stat) { 
	console.log('file added', filepath); 
	reloadSummary()
});
watcher.on('delete', function (filepath, root) { 
	console.log('file deleted', filepath);
	reloadSummary()
});
