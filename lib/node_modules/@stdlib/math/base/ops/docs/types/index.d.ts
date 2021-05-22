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

import cadd = require( '@stdlib/math/base/ops/cadd' );
import cdiv = require( '@stdlib/math/base/ops/cdiv' );
import cmul = require( '@stdlib/math/base/ops/cmul' );
import cneg = require( '@stdlib/math/base/ops/cneg' );
import csub = require( '@stdlib/math/base/ops/csub' );

/**
* Interface describing the `ops` namespace.
*/
interface Namespace {
	/**
	* Adds two complex numbers.
	*
	* @param re1 - real component
	* @param im1 - imaginary component
	* @param re2 - real component
	* @param im2 - imaginary component
	* @returns real and imaginary components
	*
	* @example
	var v = ns.cadd( 5.0, 3.0, -2.0, 1.0 );
	// returns [ 3.0, 4.0 ]
	*/
	cadd: typeof cadd;

	/**
	* Divides two complex numbers.
	*
	* @param re1 - real component
	* @param im1 - imaginary component
	* @param re2 - real component
	* @param im2 - imaginary component
	* @returns real and imaginary components
	*
	* @example
	var v = ns.cdiv( -13.0, -1.0, -2.0, 1.0 );
	// returns [ 5.0, 3.0 ]
	*/
	cdiv: typeof cdiv;

	/**
	* Multiplies two complex numbers.
	*
	* @param re1 - real component
	* @param im1 - imaginary component
	* @param re2 - real component
	* @param im2 - imaginary component
	* @returns real and imaginary components
	*
	* @example
	var v = ns.cmul( 5.0, 3.0, -2.0, 1.0 );
	// returns [ -13.0, -1.0 ]
	*/
	cmul: typeof cmul;

	/**
	* Negates a complex number.
	*
	* @param re - real component
	* @param im - imaginary component
	* @returns real and imaginary components
	*
	* @example
	* var v = ns.cneg( -4.2, 5.5 );
	* // returns [ 4.2, -5.5 ]
	*
	* @example
	* var v = ns.cneg( 0.0, 0.0 );
	* // returns [ -0.0, -0.0 ]
	*
	* @example
	* var v = ns.cneg( NaN, NaN );
	* // returns [ NaN, NaN ]
	*/
	cneg: typeof cneg;

	/**
	* Subtracts two complex numbers.
	*
	* @param re1 - real component
	* @param im1 - imaginary component
	* @param re2 - real component
	* @param im2 - imaginary component
	* @returns real and imaginary components
	*
	* @example
	var v = ns.csub( 5.0, 3.0, -2.0, 1.0 );
	// returns [ 7.0, 2.0 ]
	*/
	csub: typeof csub;
}

/**
* Standard library base math operators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
