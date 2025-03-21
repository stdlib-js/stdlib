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

/*
* Script to generate a data export file.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var FILE_LIST = require( './../data/file_list.json' );


// VARIABLES //

var RE_EXT = /\.txt$/;


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var opts;
	var len;
	var str;
	var f;
	var i;

	len = FILE_LIST.length;

	str = '';
	str += '// This file is generated using `scripts/build.js`.\n';
	str += '\'use strict\';\n\n';
	str += 'var data = new Array( '+len+' );\n';
	for ( i = 0; i < len; i++ ) {
		f = replace( FILE_LIST[ i ], RE_EXT, '.json' );
		str += 'data[ '+i+' ] = require( \'./'+f+'\' );\n';
	}
	str += '\n\n// EXPORTS //\n\n';
	str += 'module.exports = data;\n';

	opts = {
		'encoding': 'utf8'
	};
	fpath = resolve( __dirname, '..', 'data', 'data.js' );
	writeFileSync( fpath, str, opts );
}

main();
