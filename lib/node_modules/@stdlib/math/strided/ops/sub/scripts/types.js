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
var resolveStr = require( '@stdlib/strided/base/dtype-resolve-str' );
var resolveEnum = require( '@stdlib/strided/base/dtype-resolve-enum' );
var replace = require( '@stdlib/string/replace' );
var types = require( './../lib/types.js' );


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
	var sigs;
	var err;
	var str;
	var i;

	sigs = types.slice();
	for ( i = 0; i < sigs.length; i++ ) {
		sigs[ i ] = resolveStr( sigs[ i ] );
	}
	str = replace( JSON.stringify( sigs ), /("[^"]+","[^"]+","[^"]+"),/g, '$1,\n' );

	fpath = resolve( __dirname, '..', 'lib', 'types.json' );
	err = writeFile( fpath, str+'\n', OPTS );
	if ( err ) {
		throw err;
	}

	for ( i = 0; i < sigs.length; i++ ) {
		sigs[ i ] = resolveEnum( sigs[ i ] );
	}
	fpath = resolve( __dirname, '..', 'lib', 'types.enum.json' );
	err = writeFile( fpath, JSON.stringify( sigs )+'\n', OPTS );
	if ( err ) {
		throw err;
	}
}

main();
