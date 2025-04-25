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

var resolve = require( 'path' ).resolve;
var statSync = require( 'fs' ).statSync; // TODO: replace with stdlib equivalent
var logger = require( 'debug' );
var parse = require( 'acorn-loose' ).parse;
var isRelativePath = require( '@stdlib/assert/is-relative-path' );
var cwd = require( '@stdlib/process/cwd' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var startsWith = require( '@stdlib/string/starts-with' );
var pathRegExp = require( './regexp_path.js' );
var fsAliasArgs = require( './fs_alias_args.js' );


// VARIABLES //

var debug = logger( 'repl:completer:fs' );
var AOPTS = {
	'ecmaVersion': 'latest'
};


// MAIN //

/**
* Completes a file system API expression.
*
* @private
* @param {Array} out - output array for storing completions
* @param {string} expression - expression to complete
* @param {string} alias - file system API alias
* @param {string} path - path to complete
* @returns {string} path filter
*/
function complete( out, expression, alias, path ) {
	var filter;
	var subdir;
	var files;
	var stats;
	var args;
	var ast;
	var arg;
	var dir;
	var f;
	var i;

	// Get the list of argument types for the desired file system API:
	debug( 'File system API: %s', alias );
	args = fsAliasArgs( alias );

	// Parse the expression into an AST:
	debug( 'Expression: %s', expression );
	ast = parse( expression, AOPTS );

	// Check whether the argument which triggered TAB completion has a corresponding argument type which is completable:
	debug( 'Checking if argument is completable...' );
	arg = args[ ast.body[ 0 ].expression.arguments.length-1 ];
	if ( !arg ) {
		debug( 'Argument which triggered TAB completion is not completable.' );
		return '';
	}
	debug( 'Argument is completable.' );

	// Split the path to complete into two components: subdirectory path and filter...
	subdir = path.match( pathRegExp() );
	filter = subdir[ 2 ];
	subdir = subdir[ 1 ] || '';

	debug( 'Searching for completion candidates...' );
	if ( isRelativePath( path ) ) {
		debug( 'Detected a relative path. Resolving from the current working directory...' );
		dir = resolve( cwd(), subdir );
		debug( 'Resolved directory: %s', dir );
	} else {
		dir = subdir;
	}
	debug( 'Reading directory contents...' );
	files = readDir( dir );
	if ( files instanceof Error ) {
		debug( 'Unable to read directory: %s. Error: %s', dir, files.message );
		return '';
	}
	for ( i = 0; i < files.length; i++ ) {
		f = files[ i ];
		if ( !startsWith( f, filter ) ) {
			debug( '%s does not match filter %s. Skipping...', f, filter );
			continue;
		}
		f = resolve( dir, f );
		debug( 'Examining path: %s', f );
		try {
			stats = statSync( f );
			if ( stats.isDirectory() ) {
				debug( 'Path resolves to a subdirectory.' );
				out.push( files[ i ] + '/' );
				debug( 'Found a completion: %s', out[ out.length-1 ] );
			} else if ( stats.isFile() ) {
				debug( 'Path resolves to a file.' );
				out.push( files[ i ] );
				debug( 'Found a completion: %s', out[ out.length-1 ] );
			} else {
				debug( 'Path resolves to neither a directory nor a file. Skipping path...' );
				continue;
			}
		} catch ( err ) {
			debug( 'Error: %s', err.message );
			debug( 'Skipping path...' );
			continue;
		}
	}
	return filter;
}


// EXPORTS //

module.exports = complete;
