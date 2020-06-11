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

/**
* Simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using heapsort.
*
* @module @stdlib/blas/ext/base/ssort2hp
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ssort2hp = require( '@stdlib/blas/ext/base/ssort2hp' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* ssort2hp( x.length, 1.0, x, 1, y, 1 );
*
* console.log( x );
* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var ssort2hp = require( '@stdlib/blas/ext/base/ssort2hp' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* ssort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var ssort2hp = require( './main.js' );


// MAIN //

var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( !(tmp instanceof Error) ) {
	ssort2hp = tmp;
}


// EXPORTS //

module.exports = ssort2hp;
