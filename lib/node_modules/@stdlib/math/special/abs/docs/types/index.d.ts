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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { typedndarray, realcomplexndarray, realndarray, genericndarray, RealAndGenericDataType as DataType, Order } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray = realcomplexndarray | genericndarray<number>;

/**
* Output array.
*/
type OutputArray = realndarray | genericndarray<number>;

/**
* Interface describing options.
*/
interface Options {
	/**
	* Output array order.
	*
	* ## Notes
	*
	* -   By default, the order of the output array is the same as the input array.
	*/
	order?: Order;

	/**
	* Output array data type.
	*/
	dtype?: DataType;
}

/**
* Interface describing a unary element-wise function.
*/
interface UnaryFunction {
	/**
	* Computes the absolute value for each element in an ndarray.
	*
	* @param x - input ndarray
	* @param options - options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ [ 1.0, -2.0 ], [ -3.0, 4.0 ] ] );
	* // returns <ndarray>
	*
	* var y = abs( x );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
	*/
	( x: InputArray, options?: Options ): typedndarray<number>; // FIXME: we lose type specificity here, as the output ndarray data type is determined according to the output data type policy in conjunction with the `dtype` option

	/**
	* Computes the absolute value for each element in an ndarray and assigns results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param y - output ndarray
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var array = require( '@stdlib/ndarray/array' );
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
	* var arr = ndarray2array( y );
	* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
	*/
	assign<T extends OutputArray = OutputArray>( x: InputArray, y: T ): T;
}

/**
* Computes the absolute value for each element in an ndarray.
*
* @param x - input ndarray
* @param options - options
* @returns output ndarray
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
*
* var y = abs( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
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
* var arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/
declare var abs: UnaryFunction;


// EXPORTS //

export = abs;
