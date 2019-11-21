/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var fs = require( 'fs' );
var path = require( 'path' );
var mkdir = require( 'fs' ).mkdirSync;
var exists = require( '@stdlib/fs/exists' ).sync;
var pkgTree = require( '@stdlib/_tools/pkgs/tree' );
var build = require( '@stdlib/_tools/docs/www/readme-fragment-file-tree' );
var buildTests = require( '@stdlib/_tools/docs/www/test-bundles' );
var buildBenchmarks = require( '@stdlib/_tools/docs/www/benchmark-bundles' );
var version = require( './../../../../package.json' ).version;


// MAIN //

// Create tree of packages of `stdlib`:
var tree = pkgTree.sync({
	'ignore': [
		'_tools/**'
	]
});

// Index one level into the tree:
tree = tree[ '@stdlib' ];

// Create and save HTML fragments:
var assetPath = path.resolve( __dirname, '..', 'public', 'assets' );
var docsPath = path.resolve( assetPath, 'v'+version );

var dir = path.resolve( __dirname,  './../../../../lib/node_modules' );
var opts = {
	'dir': dir,
	'ignore': [
		'benchmark/**',
		'bin/**',
		'build/**',
		'docs/**',
		'etc/**',
		'examples/**',
		'reports/**',
		'scripts/**',
		'test/**'
	]
};

if ( !exists( docsPath ) ) {
	mkdir( docsPath );
}
build( docsPath, opts, onHTML );

function onHTML( err ) {
	if ( err ) {
		return console.log( err );
	}
	console.log( 'Successfully finished generating HTML fragments...' );
	buildTests( docsPath, {
		'dir': dir,
		'mount': '/assets/v0.0.87/',
		'ignore': [
			'benchmark/**',
			'bin/**',
			'build/**',
			'docs/**',
			'etc/**',
			'examples/**',
			'reports/**',
			'scripts/**',
			'test/**',
			'**/_tools/**'
		]
	}, onTests );
}

function onTests( err ) {
	if ( err ) {
		return console.log( err );
	}
	console.log( 'Successfully finished generating test pages...' );
	buildBenchmarks( docsPath, {
		'dir': dir,
		'mount': '/assets/v0.0.87/',
		'ignore': [
			'benchmark/**',
			'bin/**',
			'build/**',
			'docs/**',
			'etc/**',
			'examples/**',
			'reports/**',
			'scripts/**',
			'test/**',
			'**/_tools/**'
		]
	}, onBenchmarks );
}

function onBenchmarks( err ) {
	if ( err ) {
		return console.log( err );
	}
	console.log( 'Successfully finished generating benchmark pages...' );
}

// Save JSON file to source directory to populate sidebar menu:
fs.writeFileSync( path.join( docsPath, 'package_tree.json' ), JSON.stringify( tree ) );
