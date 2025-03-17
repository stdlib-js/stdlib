/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import cadd = require( '@stdlib/complex/float64/base/add' );
import cmul = require( '@stdlib/complex/float64/base/mul' );

/**
* Interface describing the `ops` namespace.
*/
interface Namespace {
	/**
	* Adds two double-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var out = ns.cadd( z, z );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 10.0
	*
	* var im = imag( out );
	* // returns 6.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = new Float64Array( 2 );
	* var v = ns.cadd.assign( 5.0, 3.0, 5.0, 3.0, out, 1, 0 );
	* // returns <Float64Array>[ 10.0, 6.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var z1 = new Float64Array( [ 5.0, 3.0 ] );
	* var z2 = new Float64Array( [ 5.0, 3.0 ] );
	*
	* var out = ns.cadd.strided( z1, 1, 0, z2, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ 10.0, 6.0 ]
	*/
	cadd: typeof cadd;

	/**
	* Multiplies two double-precision complex floating-point numbers.
	*
	* @param z1 - complex number
	* @param z2 - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var z1 = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var z2 = new Complex128( -2.0, 1.0 );
	* // returns <Complex128>
	*
	* var out = ns.cmul( z1, z2 );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns -13.0
	*
	* var im = imag( out );
	* // returns -1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = new Float64Array( 2 );
	* var v = ns.cmul.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
	* // returns <Float64Array>[ -13.0, -1.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var z1 = new Float64Array( [ 5.0, 3.0 ] );
	* var z2 = new Float64Array( [ -2.0, 1.0 ] );
	*
	* var out = ns.cmul.strided( z1, 1, 0, z2, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ -13.0, -1.0 ]
	*/
	cmul: typeof cmul;
}

/**
* Base (i.e., lower-level) math operators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
