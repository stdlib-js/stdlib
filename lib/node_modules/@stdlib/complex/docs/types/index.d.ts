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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import complex = require( '@stdlib/complex/cmplx' );
import conj = require( '@stdlib/complex/conj' );
import Complex64 = require( '@stdlib/complex/float32' );
import Complex128 = require( '@stdlib/complex/float64' );
import imag = require( '@stdlib/complex/imag' );
import real = require( '@stdlib/complex/real' );
import reim = require( '@stdlib/complex/reim' );
import reviveComplex = require( '@stdlib/complex/reviver' );
import reviveComplex64 = require( '@stdlib/complex/reviver-float32' );
import reviveComplex128 = require( '@stdlib/complex/reviver-float64' );

/**
* Interface describing the `complex` namespace.
*/
interface Namespace {
	/**
	* Creates a complex number.
	*
	* @param real - real component
	* @param imag - imaginary component
	* @param dtype - data type (default: 'float64')
	* @returns complex number
	*
	* @example
	* var z = ns.complex( 5.0, 3.0, 'float64' );
	* // returns <Complex128>
	*/
	complex: typeof complex;

	/**
	* Returns the complex conjugate of a complex number.
	*
	* @param z - complex number
	* @returns complex conjugate
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var v = ns.conj( z );
	* // returns <Complex128>
	*/
	conj: typeof conj;

	/**
	* 64-bit complex number.
	*/
	Complex64: typeof Complex64;

	/**
	* 128-bit complex number.
	*/
	Complex128: typeof Complex128;

	/**
	* Returns the imaginary component of a complex number.
	*
	* @param z - complex number
	* @returns imaginary component
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var im = ns.imag( z );
	* // returns 3.0
	*/
	imag: typeof imag;

	/**
	* Returns the real component of a complex number.
	*
	* @param z - complex number
	* @returns real component
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var re = ns.real( z );
	* // returns 5.0
	*/
	real: typeof real;

	/**
	* Returns the real and imaginary components of a complex number.
	*
	* @param z - complex number
	* @returns real and imaginary components
	*
	* @example
	* var Complex128 = require( `@stdlib/complex/float64` );
	*
	* var z = new Complex128( 5.0, 3.0 );
	*
	* var out = ns.reim( z );
	* // returns <Float64Array>[ 5.0, 3.0 ]
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var z = new Complex64( 5.0, 3.0 );
	*
	* var out = ns.reim( z );
	* // returns <Float32Array>[ 5.0, 3.0 ]
	*/
	reim: typeof reim;

	/**
	* Revives a JSON-serialized complex number.
	*
	* @param key - key
	* @param value - value
	* @returns value or complex number
	*
	* @example
	* var parseJSON = require( `@stdlib/utils/parse-json` );
	*
	* var str = '{"type":"Complex128","re":5,"im":3}';
	*
	* var z = parseJSON( str, ns.reviveComplex );
	* // returns <Complex128>
	*/
	reviveComplex: typeof reviveComplex;

	/**
	* Revives a JSON-serialized 64-bit complex number.
	*
	* @param key - key
	* @param  value - value
	* @returns value or 64-bit complex number
	*
	* @example
	* var parseJSON = require( `@stdlib/utils/parse-json` );
	*
	* var str = '{"type":"Complex64","re":5,"im":3}';
	*
	* var z = parseJSON( str, ns.reviveComplex64 );
	* // returns <Complex64>
	*/
	reviveComplex64: typeof reviveComplex64;

	/**
	* Revives a JSON-serialized 128-bit complex number.
	*
	* @param key - key
	* @param value - value
	* @returns value or 128-bit complex number
	*
	* @example
	* var parseJSON = require( `@stdlib/utils/parse-json` );
	*
	* var str = '{"type":"Complex128","re":5,"im":3}';
	*
	* var z = parseJSON( str, ns.reviveComplex128 );
	* // returns <Complex128>
	*/
	reviveComplex128: typeof reviveComplex128;
}

/**
* Complex numbers.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
