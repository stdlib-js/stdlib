
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

// MODULES //

var fs = require( 'fs' );
var path = require( 'path' );
var mkdir = require( 'fs' ).mkdirSync;
var exists = require( '@stdlib/fs/exists' ).sync;
var pkgTree = require( '@stdlib/_tools/pkgs/tree' );
var build = require( '@stdlib/_tools/docs/www/readme-fragment-file-tree' );
var version = require( './../../../../package.json' ).version;


// MAIN //

// Create tree of packages of `stdlib`:
var tree = pkgTree.sync();

// Index one level into the tree:
tree = tree[ '@stdlib' ];

// Create and save HTML fragments:

var docsPath = path.resolve( __dirname, '..', 'src', 'assets', 'v'+version );

var opts = {
	'dir': path.resolve( __dirname,  './../../../../lib/node_modules' ),
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
build( docsPath, opts, console.log );

// Save JSON file to source directory to populate sidebar menu:
fs.writeFileSync( path.join( docsPath, 'package_tree.json' ), JSON.stringify( tree, null, 2 ) );
