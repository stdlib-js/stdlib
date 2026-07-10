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

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { Complex64, Complex128, ComplexLike } from '@stdlib/types/complex';

/**
* Default callback.
*
* @param x - input value
* @param y - input value
* @returns result
*/
type DefaultCallback = ( x: number, y: number ) => number;

/**
* Callback for single-precision complex floating-point numbers.
*
* @param x - input value
* @param y - input value
* @returns result
*/
type Complex64Callback = ( x: Complex64, y: Complex64 ) => Complex64;

/**
* Callback for double-precision complex floating-point numbers.
*
* @param x - input value
* @param y - input value
* @returns result
*/
type Complex128Callback = ( x: Complex128, y: Complex128 ) => Complex128;

/**
* Real or complex number.
*/
type RealOrComplex = number | ComplexLike;

/**
* Callback.
*/
type Callback = ( x: RealOrComplex, y: RealOrComplex ) => RealOrComplex;

/**
* Interface describing a callback table.
*/
interface Table {
	/**
	* Default callback.
	*/
	default: DefaultCallback;

	/**
	* Callback for single-precision complex floating-point numbers.
	*/
	complex64: Complex64Callback;

	/**
	* Callback for double-precision complex floating-point numbers.
	*/
	complex128: Complex128Callback;
}

/**
* Assigns callbacks to binary interfaces according to type promotion rules.
*
* ## Notes
*
* -   The function assumes that the provided signature array has the following properties:
*
*     -   a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
*     -   for each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
*     -   all signatures follow type promotion rules.
*
* @param table - callback table
* @param table.default - default callback
* @param table.complex64 - callback for single-precision complex floating-point numbers
* @param table.complex128 - callback for double-precision complex floating-point numbers
* @param signatures - strided array containing binary interface signatures
* @returns list of callbacks
*
* @example
* var signatures = require( '@stdlib/strided/base/binary-dtype-signatures' );
* var add = require( '@stdlib/number/float64/base/add' );
* var cadd = require( '@stdlib/complex/float64/base/add' );
* var caddf = require( '@stdlib/complex/float32/base/add' );
*
* var dtypes = [
*     'float64',
*     'float32',
*     'int32',
*     'uint8'
* ];
*
* var sigs = signatures( dtypes, dtypes, dtypes );
* // returns [...]
*
* var table = {
*     'default': add,
*     'complex64': caddf,
*     'complex128': cadd
* };
*
* var list = callbacks( table, sigs );
* // returns [...]
*/
declare function callbacks( table: Table, signatures: ArrayLike<any> ): ArrayLike<Callback>;


// EXPORTS //

export = callbacks;
