#!/usr/bin/env node

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

'use strict';

// MODULES //

var fs = require( 'fs' );
var join = require( 'path' ).join;
var logger = require( 'debug' );
var readDir = require( '@stdlib/fs/read-dir' );
var readFile = require( '@stdlib/fs/read-file' );
var writeFileFcn = require( '@stdlib/fs/write-file' );
var extname = require( '@stdlib/utils/extname' );
var replace = require( '@stdlib/string/replace' );
var licenseHeader = require( '@stdlib/_tools/licenses/header' );
var dataDir = require( './../lib/data_dir.js' );
var unsnakecase = require( './../lib/unsnakecase.js' );
var PARTY = require( './../lib/party.json' );
var RE = require( './../lib/re_filename.js' );


// VARIABLES //

var debug = logger( 'sotu:build' );
var RE_TRAILING_NEWLINE = /\r?\n$/;
var RAW_EXTNAME = '.txt';
var NUM_FILES = 0;
var COUNT = 0;
var OPTS = {
	'encoding': 'utf8'
};
var SPDX = 'Apache-2.0';
var YEAR = (new Date()).getFullYear();
var COPYRIGHT = 'The Stdlib Authors';


// FUNCTIONS //

/**
* Callback invoked upon reading a directory.
*
* @private
* @param {(Error|null)} error - error object
* @param {StringArray} files - file list
*/
function onDir( error, files ) {
	var fpath;
	var f;
	var i;
	if ( error ) {
		debug( 'Encountered an error when attempting to read directory contents: %s', error.message );
		throw error;
	}
	debug( 'Successfully read directory contents: %s', files.join( ' ' ) );
	NUM_FILES = files.length;
	for ( i = 0; i < files.length; i++ ) {
		f = files[ i ];
		if ( extname( f ) === RAW_EXTNAME && RE.test( f ) ) {
			fpath = join( dataDir, f );
			debug( 'Possible raw data file: %s', fpath );
			fs.stat( fpath, onStatClbk( files[ i ] ) );
		} else {
			NUM_FILES -= 1;
		}
	}
}

/**
* Returns a callback to be invoked upon reading file stats.
*
* @private
* @param {string} file - file name
* @returns {Callback} callback
*/
function onStatClbk( file ) {
	return onStat;

	/**
	* Callback invoked upon reading file stats.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} stats object
	*/
	function onStat( error, stats ) {
		var fpath;
		if ( error ) {
			debug( 'Encountered an error when attempting to read file stats: %s', error.message );
			throw error;
		}
		if ( stats.isFile() ) {
			fpath = join( dataDir, file );
			debug( 'Found a raw data file: %s', file );
			readFile( fpath, OPTS, onFileClbk( file ) );
		} else {
			NUM_FILES -= 1;
		}
	}
}

/**
* Returns a callback to be invoked upon reading a file.
*
* @private
* @param {string} file - file name
* @returns {Callback} callback
*/
function onFileClbk( file ) {
	return onFile;

	/**
	* Callback invoked upon reading a file.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(Buffer|string)} data - file data
	*/
	function onFile( error, data ) {
		if ( error ) {
			debug( 'Encountered an error when attempting to read file contents: %s', error.message );
			throw error;
		}
		debug( 'Successfully read file: %s', file );
		data = data.toString();

		debug( 'Converting file data to JSON.' );
		data = toJSON( file, data );

		writeFile( file, data+'\n' );
	}
}

/**
* Converts file data to JSON.
*
* @private
* @param {string} file - file name
* @param {string} data - file data
* @returns {string} data as JSON
*/
function toJSON( file, data ) {
	var parts;
	var out;
	var v;

	parts = file.match( RE );
	out = {};

	v = parseInt( parts[ 1 ], 10 );
	debug( 'Year: %d', v );
	out.year = v;

	v = unsnakecase( parts[ 2 ] );
	debug( 'Name: %s', v );
	out.name = v;

	v = PARTY[ parts[ 3 ] ];
	debug( 'Party: %s', v );
	out.party = v;

	out.text = data;

	// Remove newline characters inserted by text editors at the end of each file:
	out.text = replace( out.text, RE_TRAILING_NEWLINE, '' );

	return JSON.stringify( out );
}

/**
* Writes JSON data to file.
*
* @private
* @param {string} file - file name
* @param {string} data - JSON data to write
*/
function writeFile( file, data ) {
	var fpath;
	var ext;
	var f;

	ext = extname( file );
	f = file.substring( 0, file.length-ext.length );
	f += '.json';
	fpath = join( dataDir, f );

	debug( 'Writing data to file: %s', f );
	writeFileFcn( fpath, data, OPTS, onWriteClbk( f ) );
}

/**
* Returns a callback to be invoked after writing data to file.
*
* @private
* @param {string} file - file name
* @returns {Callback} callback
*/
function onWriteClbk( file ) {
	return onWrite;

	/**
	* Callback invoked after writing data to file.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onWrite( error ) {
		if ( error ) {
			debug( 'Encountered an error when attempting to write data to file: %s', error.message );
			throw error;
		}
		debug( 'Successfully wrote data to file: %s', file );
		COUNT += 1;
		if ( COUNT === NUM_FILES ) {
			debug( 'Successfully converted all data files.' );
			debug( 'Reading directory contents: %s', dataDir );
			readDir( dataDir, onDir2 );
		}
	}
}

/**
* Callback invoked upon reading the contents of a directory.
*
* @private
* @param {(Error|null)} error - error object
* @param {StringArray} files - directory contents
*/
function onDir2( error, files ) {
	if ( error ) {
		debug( 'Encountered an error when attempting to read directory contents: %s', error.message );
		throw error;
	}
	debug( 'Successfully read directory contents: %s', files.join( ' ' ) );
	findJSON( files );
	findData( files );
}

/**
* Finds JSON files.
*
* @private
* @param {StringArray} files - file names
*/
function findJSON( files ) {
	var total;
	var count;
	var fpath;
	var out;
	var f;
	var i;

	total = files.length;
	count = 0;
	out = [];
	for ( i = 0; i < files.length; i++ ) {
		f = files[ i ];
		if ( extname( f ) === '.json' && RE.test( f ) ) {
			fpath = join( dataDir, f );
			debug( 'Possible JSON data file: %s', f );
			fs.stat( fpath, onStatsClbk( f ) );
		} else {
			total -= 1;
		}
	}
	/**
	* Returns a callback to be invoked upon reading file stats.
	*
	* @private
	* @param {string} file - file name
	* @returns {Callback} callback
	*/
	function onStatsClbk( file ) {
		return onStats;

		/**
		* Callback invoked upon reading file stats.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {Object} stats - file stats
		*/
		function onStats( error, stats ) {
			if ( error ) {
				debug( 'Encountered an error when attempting to read file stats: %s', error.message );
				throw error;
			}
			if ( stats.isFile() ) {
				count += 1;
				debug( 'Found JSON data file: %s', file );
				out.push( file );
			} else {
				total -= 1;
			}
			if ( count === total ) {
				debug( 'Finished analyzing directory contents.' );
				browserScript( out.sort() );
			}
		}
	}
}

/**
* Generates a browser script.
*
* @private
* @param {StringArray} files - data files
*/
function browserScript( files ) {
	var opath;
	var fpath;
	var tmp1;
	var tmp2;
	var str;
	var i;

	debug( 'Generating browser script...' );
	str = '';
	str += licenseHeader( SPDX, 'js', {
		'year': YEAR,
		'copyright': COPYRIGHT
	});
	str += '\n';

	str += '// This file is generated using `scripts/build.js`.\n\n';
	str += '\'use strict\';\n';
	str += '\n';
	str += '// MODULES //\n';
	str += '\n';
	tmp1 = [];
	tmp2 = [];
	for ( i = 0; i < files.length; i++ ) {
		fpath = './../data/'+files[ i ]; // relative path
		tmp1.push( 'var db'+i+' = require( \''+fpath+'\' );' );
		tmp2.push( 'db'+i );
	}
	str += tmp1.join( '\n' );
	str += '\n';
	str += '\n';
	str += '\n';
	str += '// MAIN //\n';
	str += '\n';
	str += 'var db = [\n\t';
	str += tmp2.join( ',\n\t' ) + '\n';
	str += '];\n';
	str += '\n';
	str += '\n';
	str += '// EXPORTS //\n';
	str += '\n';
	str += 'module.exports = db;\n';

	opath = join( __dirname, '..', 'lib', 'browser_db.js' );
	debug( 'Writing script to file: %s', opath );
	writeFileFcn( opath, str, OPTS, onWriteScript );

	debug( 'Generating browser file list...' );
	str = '';
	str += licenseHeader( SPDX, 'js', {
		'year': YEAR,
		'copyright': COPYRIGHT
	});
	str += '\n';

	str += '// This file is generated using `scripts/build.js`.\n\n';
	str += '\'use strict\';\n';
	str += '\n';
	str += '// MAIN //\n';
	str += '\n';
	tmp1 = JSON.stringify( files, null, 2 );
	tmp1 = tmp1.replace( /"/g, '\'' );
	tmp1 = tmp1.replace( / {2}/g, '\t' );
	str += 'var files = ' + tmp1 + ';\n';
	str += '\n';
	str += '\n';
	str += '// EXPORTS //\n';
	str += '\n';
	str += 'module.exports = files;\n';
	opath = join( __dirname, '..', 'lib', 'browser_file_list.js' );
	debug( 'Writing file list to file: %s' );
	writeFileFcn( opath, str, OPTS, onWriteList );
}

/**
* Callback invoked upon writing a script to file.
*
* @private
* @param {(Error|null)} error - error object
*/
function onWriteScript( error ) {
	if ( error ) {
		debug( 'Encountered an error when attempting to write browser script to file: %s', error.message );
		throw error;
	}
	debug( 'Successfully wrote browser script to file.' );
}

/**
* Callback invoked upon writing a file list to file.
*
* @private
* @param {(Error|null)} error - error object
*/
function onWriteList( error ) {
	if ( error ) {
		debug( 'Encountered an error when attempting to write browser file list to file: %s', error.message );
		throw error;
	}
	debug( 'Successfully wrote browser file list to file.' );
}

/**
* Finds data files.
*
* @private
* @param {StringArray} files - file names
*/
function findData( files ) {
	var total;
	var count;
	var fpath;
	var out;
	var ext;
	var f;
	var i;

	total = files.length;
	count = 0;
	out = [];
	for ( i = 0; i < files.length; i++ ) {
		f = files[ i ];
		ext = extname( f );
		if (
			(
				ext === '.json' ||
				ext === '.txt'
			) &&
			RE.test( f )
		) {
			fpath = join( dataDir, f );
			debug( 'Possible data file: %s', f );
			fs.stat( fpath, onStatsClbk( f ) );
		} else {
			total -= 1;
		}
	}
	/**
	* Returns a callback to be invoked upon reading file stats.
	*
	* @private
	* @param {string} file - file name
	* @returns {Callback} callback
	*/
	function onStatsClbk( file ) {
		return onStats;

		/**
		* Callback invoked upon reading file stats.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {Object} stats - file stats
		*/
		function onStats( error, stats ) {
			if ( error ) {
				debug( 'Encountered an error when attempting to read file stats: %s', error.message );
				throw error;
			}
			if ( stats.isFile() ) {
				count += 1;
				debug( 'Found data file: %s', file );
				out.push( file );
			} else {
				total -= 1;
			}
			if ( count === total ) {
				debug( 'Finished analyzing directory contents.' );
				datapackage( out.sort() );
			}
		}
	}
}

/**
* Updates a `datapackage.json` file.
*
* @private
* @param {StringArray} files - file names
*/
function datapackage( files ) {
	var fpath;
	var parts;
	var name;
	var obj;
	var pkg;
	var arr;
	var ext;
	var re;
	var yr;
	var i;

	fpath = join( __dirname, '..', 'datapackage.json' );
	pkg = require( fpath ); // eslint-disable-line stdlib/no-dynamic-require

	re = /[_.]/g;

	arr = new Array( files.length );
	for ( i = 0; i < files.length; i++ ) {
		ext = extname( files[ i ] );
		parts = files[ i ].match( RE );
		yr = parseInt( parts[ 1 ], 10 );
		name = unsnakecase( parts[ 2 ] );
		obj = {
			'name': replace( files[ i ], re, '-' ),
			'title': 'State of the Union Address',
			'description': 'State of the Union address given by '+name+' in '+yr+'.',
			'format': '',
			'mediatype': '',
			'encoding': 'UTF-8',
			'hash': '',
			'path': './data/'+files[ i ]
		};
		if ( ext === '.txt' ) {
			obj.format = 'text';
			obj.mediatype = 'plain/text';
		} else if ( ext === '.json' ) {
			obj.format = 'json';
			obj.mediatype = 'application/json';
		}
		arr[ i ] = obj;
	}
	pkg.resources = arr;
	pkg = JSON.stringify( pkg, null, '  ' );

	debug( 'Writing data package to file: %s', fpath );
	writeFileFcn( fpath, pkg+'\n', OPTS, onWritePkg );
}

/**
* Callback invoked upon writing a data package to file.
*
* @private
* @param {(Error|null)} error - error object
*/
function onWritePkg( error ) {
	if ( error ) {
		debug( 'Encountered an error when attempting to write data package to file: %s', error.message );
		throw error;
	}
	debug( 'Successfully wrote data package to file.' );
}

/**
* Main execution sequence.
*
* @private
*/
function main() {
	debug( 'Reading directory contents: %s', dataDir );
	readDir( dataDir, onDir );
}


// MAIN //

main();
