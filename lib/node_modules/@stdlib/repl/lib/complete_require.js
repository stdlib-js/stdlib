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
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var startsWith = require( '@stdlib/string/starts-with' );
var extname = require( '@stdlib/utils/extname' );
var cwd = require( '@stdlib/process/cwd' );
var indexRegExp = require( './regexp_index.js' ); // eslint-disable-line stdlib/no-require-index
var relativePathRegExp = require( './regexp_relative_require_path.js' );
var pathRegExp = require( './regexp_path.js' );
var contains = require( './contains.js' );


// VARIABLES //

var debug = logger( 'repl:completer:require' );
var RE_RELATIVE = relativePathRegExp();


// MAIN //

/**
* Completes a `require` expression.
*
* @private
* @param {Array} out - output array for storing completions
* @param {string} path - path to complete
* @param {Array} paths - module search paths
* @param {Array} exts - supported `require` extensions
* @returns {string} path filter
*/
function complete( out, path, paths, exts ) {
	var filter;
	var sfiles;
	var subdir;
	var files;
	var stats;
	var dir;
	var ext;
	var re;
	var f;
	var i;
	var j;
	var k;

	if ( path === '.' ) {
		out.push( './', '../' );
		return '.';
	}
	if ( path === '..' ) {
		out.push( '../' );
		return '..';
	}
	debug( 'Searching for completion candidates...' );
	if ( RE_RELATIVE.test( path ) ) {
		debug( 'Detected a relative require path. Resolving from current working directory...' );
		paths = [ cwd() ];
	} else {
		debug( 'Detected a package name. Resolving from known module paths...' );
	}
	// Split the path to complete into two components: subdirectory path and filter...
	subdir = path.match( pathRegExp() );
	filter = subdir[ 2 ];
	subdir = subdir[ 1 ] || '';

	// Compile a regular expression for matching an `index` file:
	re = indexRegExp( exts );

	// For each search path, attempt to resolve a matching package and/or file...
	debug( 'Searching paths: %s', paths.join( ', ' ) );
	for ( i = 0; i < paths.length; i++ ) {
		// Resolve the subdirectory path to a file system path:
		dir = resolve( paths[ i ], subdir );
		debug( 'Resolved directory: %s', dir );

		debug( 'Reading directory contents...' );
		files = readDir( dir );
		if ( files instanceof Error ) {
			debug( 'Unable to read directory: %s. Error: %s', dir, files.message );
			continue;
		}
		for ( j = 0; j < files.length; j++ ) {
			f = files[ j ];
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
					out.push( files[ j ] + '/' );
					debug( 'Found a completion: %s', out[ out.length-1 ] );

					debug( 'Reading subdirectory contents...' );
					sfiles = readDir( f );
					if ( sfiles instanceof Error ) {
						debug( 'Unable to read subdirectory: %s. Error: %s', f, sfiles.message );
						continue;
					}
					for ( k = 0; k < sfiles.length; k++ ) {
						if ( re.test( sfiles[ k ] ) ) { // eslint-disable-line max-depth
							// Since the subdirectory contains an `index` file, one can simply "require" the subdirectory, thus eliding the full file path:
							debug( 'Subdirectory contains an `index` file.' );

							out.push( files[ j ] );
							debug( 'Found a completion: %s', out[ out.length-1 ] );
						} else if ( sfiles[ k ] === 'package.json' ) {
							// Since the subdirectory contains a `package.json` file, we **ASSUME** one can simply "require" the subdirectory, thus eliding the full file path (WARNING: we do NOT explicitly check that the main entry point actually exists!):
							debug( 'Subdirectory contains a `package.json` file.' );

							out.push( files[ j ] );
							debug( 'Found a completion: %s', out[ out.length-1 ] );
						}
					}
				} else if ( stats.isFile() ) {
					debug( 'Path resolves to a file.' );
					ext = extname( files[ j ] );
					if ( contains( exts.length, exts, 1, 0, ext ) ) {
						debug( 'File has supported extension: %s', ext );

						out.push( files[ j ] );
						debug( 'Found a completion: %s', out[ out.length-1 ] );
					}
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
	}
	return filter;
}


// EXPORTS //

module.exports = complete;
