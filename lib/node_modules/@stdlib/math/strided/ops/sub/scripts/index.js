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
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var SCRIPTS = [
	// Note: order matters!
	'dtypes.js',
	'types.js',
	'addon.js'
];


// MAIN //

/**
* Main execution sequence.
*
* @private
* @throws {Error} unexpected error
*/
function main() {
	var o;
	var i;

	for ( i = 0; i < SCRIPTS.length; i++ ) {
		o = tryRequire( resolve( __dirname, SCRIPTS[ i ] ) );
		if ( o instanceof Error ) {
			throw o;
		}
	}
}

main();
