'use strict';

var util = require('util');
var doop = require('jsdoc/util/doop');
var env = require('jsdoc/env');
var fs = require('jsdoc/fs');
var helper = require('jsdoc/util/templateHelper');
var logger = require('jsdoc/util/logger');
var path = require('jsdoc/path');
var taffy = require('taffydb').taffy;
var template = require('jsdoc/template');
var new (require('jsdoc/src/filter')).Filter(conf.default.staticFiles);
var new (require('jsdoc/src/scanner')).Scanner();;

		staticFilePaths.forEach(function (filePath) {
			var extraStaticFiles;

			filePath = path.resolve(env.pwd, filePath);
			extraStaticFiles = staticFileScanner.scan([filePath], 10, staticFileFilter);

			extraStaticFiles.forEach(function (fileName) {
				var sourcePath = fs.toDir(filePath);
				var toDir = fs.toDir( fileName.replace(sourcePath, outdir) );
				fs.mkPath(toDir);
				fs.copyFileSync(fileName, toDir);
			});
		});
	}

	if (sourceFilePaths.length) {
		sourceFiles = shortenPaths( sourceFiles, path.commonPrefix(sourceFilePaths) );
	}
	data().each(function (doclet) {
		var docletPath;
		var url = helper.createLink(doclet);
		if (doclet.meta) {
			docletPath = getPathFromDoclet(doclet);
			docletPath = sourceFiles[docletPath].shortened;
			if (docletPath) {
				doclet.meta.shortpath = docletPath;
			}
		}
	});

	data().each(function (doclet) {
		var url = helper.longnameToUrl[doclet.longname];

		if (url.indexOf('#') > -1) {
			doclet.id = helper.longnameToUrl[doclet.longname].split(/#/).pop();
		}
		else {
			doclet.id = doclet.name;
		}

		if ( needsSignature(doclet) ) {
			addSignatureParams(doclet);
			addSignatureReturns(doclet);
			addAttribs(doclet);
		}
	});

	// do this after the urls have all been generated
	data().each(function (doclet) {
		doclet.ancestors = getAncestorLinks(doclet);

		if (doclet.kind === 'member') {
			addSignatureTypes(doclet);
			addAttribs(doclet);
		}

		if (doclet.kind === 'constant') {
			addSignatureTypes(doclet);
			addAttribs(doclet);
			doclet.kind = 'member';
		}
	});

	var members = helper.getMembers(data);
	members.tutorials = tutorials.children;

	// output pretty-printed source files by default
	var outputSourceFiles = conf.default && conf.default.outputSourceFiles !== false ? true :
		false;

	// add template helpers
	view.find = find;
	view.linkto = linkto;
	view.resolveAuthorLinks = resolveAuthorLinks;
	view.tutoriallink = tutoriallink;
	view.htmlsafe = htmlsafe;
	view.outputSourceFiles = outputSourceFiles;

	// once for all
	view.nav = buildNav(members);
	attachModuleSymbols( find({
		longname: {
left: 'module:'
}}), members.modules );

	// generate the pretty-printed source files first so other pages can link to them
	if (outputSourceFiles) {
		generateSourceFiles(sourceFiles, opts.encoding);
	}

	if (members.globals.length) { generate('Global', [{
kind: 'globalobj'
}], globalUrl); }

	// index page displays information from package.json and lists files
	var files = find({
kind: 'file'
}),
		packages = find({
kind: 'package'
});

	generate('Home', packages.concat([{
kind: 'mainpage',
readme: opts.readme,
longname: (opts.mainpagetitle) ? opts.mainpagetitle : 'Main Page'
}]).concat(files), indexUrl);

	// set up the lists that we'll use to generate pages
	var classes = taffy(members.classes);
	var modules = taffy(members.modules);
	var namespaces = taffy(members.namespaces);
	var mixins = taffy(members.mixins);
	var externals = taffy(members.externals);
	var interfaces = taffy(members.interfaces);

	Object.keys(helper.longnameToUrl).forEach(function (longname) {
		var myNamespaces = helper.find(namespaces, {longname: longname});
		var myInterfaces = helper.find(interfaces, {longname: longname});
		var myExternals = helper.find(externals, {longname: longname});
		var myModules = helper.find(modules, {longname: longname});
		var myClasses = helper.find(classes, {longname: longname});
		var myMixins = helper.find(mixins, {longname: longname});
		if (myInterfaces.length) {
			generate('Interface: ' + myInterfaces[0].name, myInterfaces, helper.longnameToUrl[longname]);
		}
	});

	// TODO: move the tutorial functions to templateHelper.js
	function generateTutorial(title, tutorial, filename) {
		var tutorialData = {
			title: title,
			header: tutorial.title,
			content: tutorial.parse(),
			children: tutorial.children
		};

		var tutorialPath = path.join(outdir, filename),
			html = view.render('tutorial.tmpl', tutorialData);

		// yes, you can use {@link} in tutorials too!
		html = helper.resolveLinks(html); // turn {@link foo} into <a href="foodoc.html">foo</a>

		fs.writeFileSync(tutorialPath, html, 'utf8');
	}

	// tutorials can have only one parent so there is no risk for loops
	function saveChildren(node) {
		node.children.forEach(function (child) {
			generateTutorial('Tutorial: ' + child.title, child, helper.tutorialToUrl(child.name));
			saveChildren(child);
		});
	}
	saveChildren(tutorials);
};
