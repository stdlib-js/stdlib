/*
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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray, DataType, Order } from '@stdlib/types/ndarray';

/**
* Interface describing options.
*/
interface Options {
	/**
	* Output array order (either 'row-major' (C-style) or 'column-major' (Fortran-style)).
	*
	* ## Notes
	*
	* -   By default, the output array order is inferred from the input array.
	*/
	order?: Order;

	/**
	* Output array data type.
	*
	* ## Notes
	*
	* -   By default, the output array data type is inferred from the input array.
	*/
	dtype?: DataType;
}

/**
* Interface describing a unary element-wise function.
*/
interface UnaryFunction {
	/**
	* Computes the absolute value.
	*
	* @param x - input value
	* @returns result
	*
	* @example
	* var y = abs( -1.0 );
	* // returns 1.0
	*/
	( x: number ): number;

	/**
	* Computes the absolute value.
	*
	* @param x - input array
	* @param options - options
	* @returns result
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
	*
	* var y = abs( x );
	* // returns <ndarray>
	*
	* var v = y.get( 0, 1 );
	* // returns 2.0
	*/
	( x: ndarray, options?: Options ): ndarray;

	/**
	* Computes the absolute value.
	*
	* @param x - input array
	* @returns result
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ -1.0, -2.0 ] );
	*
	* var y = abs( x );
	* // returns <Float64Array>[ 1.0, 2.0 ]
	*
	* @example
	* var x = [ -1.0, -2.0 ];
	*
	* var y = abs( x );
	* // returns [ 1.0, 2.0 ]
	*/
	( x: ArrayLike<number> ): ArrayLike<number>;

	/**
	* Computes the absolute value and assigns results to a provided output array.
	*
	* @param x - input array
	* @param y - output array
	* @returns output array
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
	* var y = array( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] );
	*
	* var z = abs.assign( x, y );
	* // returns <ndarray>
	*
	* var bool = ( z === y );
	* // returns true
	*
	* var v = y.get( 0, 1 );
	* // returns 2.0
	*/
	assign( x: ndarray, y: ndarray ): ndarray;

	/**
	* Computes the absolute value and assigns results to a provided output array.
	*
	* @param x - input array
	* @param y - output array
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ -1.0, -2.0 ] );
	* var y = new Float64Array( x.length );
	*
	* var z = abs.assign( x, y );
	* // returns <Float64Array>[ 1.0, 2.0 ]
	*
	* var bool = ( z === y );
	* // returns true
	*/
	assign( x: ArrayLike<number>, y: ArrayLike<number> ): ArrayLike<number>;
}

/**
* Computes the absolute value.
*
* @param x - input value
* @param options - options
* @returns result
*
* @example
* var y = abs( -1.0 );
* // returns 1.0
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
*
* var y = abs( x );
* // returns <ndarray>
*
* var v = y.get( 0, 1 );
* // returns 2.0
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ -1.0, -2.0 ] );
*
* var y = abs( x );
* // returns <Float64Array>[ 1.0, 2.0 ]
*
* @example
* var x = [ -1.0, -2.0 ];
*
* var y = abs( x );
* // returns [ 1.0, 2.0 ]
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
* var y = array( [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] );
*
* var z = abs.assign( x, y );
* // returns <ndarray>
*
* var bool = ( z === y );
* // returns true
*
* var v = y.get( 0, 1 );
* // returns 2.0
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ -1.0, -2.0 ] );
* var y = new Float64Array( x.length );
*
* var z = abs.assign( x, y );
* // returns <Float64Array>[ 1.0, 2.0 ]
*
* var bool = ( z === y );
* // returns true
*/
declare var abs: UnaryFunction;


// EXPORTS //

export = abs;
