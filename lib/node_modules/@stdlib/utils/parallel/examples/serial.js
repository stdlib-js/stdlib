/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/* eslint-disable node/no-sync */

'use strict';

var fs = require( 'fs' );
var path = require( 'path' );
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var unlinkSync = require( '@stdlib/fs/unlink' ).sync;

var nFiles = 100;
var files;
var dir;
var i;

/**
* Returns a generated script.
*
* @private
* @param {string} id - script id
* @returns {string} script content
*/
function template( id ) {
	var file = '';

	file += '\'use strict\';';

	file += 'var id;';
	file += 'var N;';
	file += 'var i;';

	file += 'id = '+id+';';
	file += 'N = 1e1;';
	file += 'console.log( \'File: %s. id: %s. N: %d.\', __filename, id, N );';

	file += 'for ( i = 0; i < N; i++ ) {';
	file += 'console.log( \'id: %s. v: %d.\', id, i );';
	file += '}';

	return file;
}

/**
* Creates a temporary directory.
*
* @private
* @returns {string} directory path
*/
function createDir() {
	var dir = path.join( __dirname, 'tmp' );
	fs.mkdirSync( dir );
	return dir;
}

/**
* Creates temporary scripts.
*
* @private
* @param {string} dir - destination directory
* @param {NonNegativeInteger} nFiles - number of scripts to create
* @returns {StringArray} array of script file paths
*/
function createScripts( dir, nFiles ) {
	var content;
	var fpath;
	var files;
	var i;

	files = new Array( nFiles );
	for ( i = 0; i < nFiles; i++ ) {
		content = template( i.toString() );
		fpath = path.join( dir, i+'.js' );
		writeFileSync( fpath, content, {
			'encoding': 'utf8'
		});
		files[ i ] = fpath;
	}
	return files;
}

/**
* Performs clean-up tasks once all scripts have run.
*
* @private
*/
function cleanup() {
	var i;

	// Delete the temporary files...
	for ( i = 0; i < files.length; i++ ) {
		unlinkSync( files[ i ] );
	}
	// Remove temporary directory:
	fs.rmdirSync( dir );
}

// Make a temporary directory to store files...
dir = createDir();

// Create temporary files...
files = createScripts( dir, nFiles );

// Run all scripts sequentially...
for ( i = 0; i < nFiles; i++ ) {
	require( files[ i ] ); // eslint-disable-line stdlib/no-dynamic-require, stdlib/no-unassigned-require
}

cleanup();
console.log( 'Done!' );
