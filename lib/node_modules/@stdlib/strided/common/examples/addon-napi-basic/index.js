/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var Float64Array = require( '@stdlib/array/float64' );

// Try loading the add-on:
var add = tryRequire( join( __dirname, 'addon.node' ) );

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	z = new Float64Array( x.length );

	add( 5, x, 1, y, 1, z, 1 );

	console.log( z );
}

if ( add instanceof Error ) {
	// Example compile command: /path/to/stdlib/node_modules/.bin/node-gyp rebuild
	console.error( 'Error: please make sure you have compiled the add-on before attempting to run this file. To compile the add-on, resolve the location of the `node-gyp` executable (e.g., `$PWD/.bin/node-gyp` from the root stdlib project directory), navigate to `%s`, and run `%s`.\n\nError: %s\n', __dirname, '/path/to/node-gyp rebuild', add.message );
} else {
	main();
}
