#!/usr/bin/env node

/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable node/shebang */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var resolveEnum = require( '@stdlib/strided/base/dtype-resolve-enum' );
var dtypes = require( './../lib/dtypes.js' );


// VARIABLES //

var OPTS = {
	'encoding': 'utf8'
};


// MAIN //

/**
* Main execution sequence.
*
* @private
* @throws {Error} unexpected error
*/
function main() {
	var fpath;
	var list;
	var err;
	var out;
	var tmp;
	var i;
	var j;

	fpath = resolve( __dirname, '..', 'lib', 'dtypes.json' );
	err = writeFile( fpath, JSON.stringify( dtypes, null, '  ' )+'\n', OPTS );
	if ( err ) {
		throw err;
	}
	out = [];
	for ( i = 0; i < dtypes.length; i++ ) {
		list = dtypes[ i ];
		tmp = [];
		for ( j = 0; j < list.length; j++ ) {
			tmp.push( resolveEnum( list[ j ] ) );
		}
		out.push( tmp );
	}
	fpath = resolve( __dirname, '..', 'lib', 'dtypes.enum.json' );
	err = writeFile( fpath, JSON.stringify( out )+'\n', OPTS );
	if ( err ) {
		throw err;
	}
}

main();
