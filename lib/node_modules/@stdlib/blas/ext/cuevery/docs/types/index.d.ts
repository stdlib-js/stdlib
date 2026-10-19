/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
import { BooleanAndGenericDataType as DataType, typedndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray<T> = typedndarray<T>;

/**
* Output array.
*/
type OutputArray<U> = typedndarray<U>;

/**
* Interface defining "base" options.
*/
interface BaseOptions {
	/**
	* List of dimensions over which to perform operation.
	*/
	dims?: ArrayLike<number>;
}

/**
* Interface defining options.
*/
interface Options extends BaseOptions {
	/**
	* Output array data type.
	*/
	dtype?: DataType;
}

/**
* Interface for performing an operation on an ndarray.
*/
interface Unary {
	/**
	* Cumulatively tests whether every element along one or more ndarray dimensions is truthy.
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 1.0, 1.0, 0.0, 1.0 ] );
	*
	* var y = cuevery( x );
	* // returns <ndarray>[ true, true, false, false ]
	*/
	( x: InputArray<unknown>, options?: Options ): OutputArray<boolean>; // NOTE: we lose type specificity here, but retaining specificity would likely be difficult and/or tedious to completely enumerate, as the output ndarray data type is dependent on how `x` interacts with output data type policy and whether that policy has been overridden by `options.dtype`.

	/**
	* Cumulatively tests whether every element along one or more ndarray dimensions is truthy and assigns results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param out - output ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var trues = require( '@stdlib/ndarray/trues' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 1.0, 1.0, 0.0, 1.0 ] );
	* var y = trues( [ 4 ] );
	*
	* var out = cuevery.assign( x, y );
	* // returns <ndarray>[ true, true, false, false ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T extends OutputArray<boolean> = OutputArray<boolean>>( x: InputArray<unknown>, out: T, options?: BaseOptions ): T;
}

/**
* Cumulatively tests whether every element along one or more ndarray dimensions is truthy.
*
* @param x - input ndarray
* @param options - function options
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 1.0, 0.0, 1.0 ] );
*
* var y = cuevery( x );
* // returns <ndarray>[ true, true, false, false ]
*
* @example
* var trues = require( '@stdlib/ndarray/trues' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 1.0, 0.0, 1.0 ] );
* var y = trues( [ 4 ] );
*
* var out = cuevery.assign( x, y );
* // returns <ndarray>[ true, true, false, false ]
*
* var bool = ( out === y );
* // returns true
*/
declare const cuevery: Unary;


// EXPORTS //

export = cuevery;
