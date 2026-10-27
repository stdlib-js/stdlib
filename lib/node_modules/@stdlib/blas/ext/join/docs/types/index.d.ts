/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import { genericndarray, typedndarray } from '@stdlib/types/ndarray';

/**
* Input array.
*/
type InputArray<T> = typedndarray<T>;

/**
* Output array.
*/
type OutputArray<T> = genericndarray<T>;

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
interface Options<T> extends BaseOptions {
	/**
	* Separator. Default: `,`.
	*/
	sep?: T | genericndarray<T>;

	/**
	* Boolean indicating whether the reduced dimensions should be included in the returned array as singleton dimensions. Default: `false`.
	*/
	keepdims?: boolean;
}


/**
* Interface describing `join`.
*/
interface Join {
	/**
	* Returns an ndarray created by joining elements using a separator along one or more ndarray dimensions.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param options.sep - separator
	* @param options.dims - list of dimensions over which to perform operation
	* @param options.keepdims - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 1.0, 2.0, 3.0 ] );
	*
	* var y = join( x );
	* // returns <ndarray>[ '1,2,3' ]
	*/
	<T = unknown, U = unknown>( x: InputArray<T>, options?: Options<U> ): OutputArray<string>;

	/**
	* Joins elements of an input ndarray using a separator along one or more ndarray dimensions and assigns results to a provided output ndarray.
	*
	* @param x - input ndarray
	* @param separator - separator
	* @param out - output ndarray
	* @param options - function options
	* @param options.sep - separator
	* @param options.dims - list of dimensions over which to perform operation
	* @returns output ndarray
	*
	* @example
	* var empty = require( '@stdlib/ndarray/empty' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ 1.0, 2.0, 3.0 ], {
	*     'dtype': 'generic'
	* });
	* var y = empty( [], {
	*     'dtype': 'generic'
	* });
	*
	* var out = join.assign( x, y );
	* // returns <ndarray>[ '1,2,3' ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V extends typedndarray<string> = typedndarray<string>>( x: InputArray<T>, out: V, options?: Options<U> ): V;
}

/**
* Returns an ndarray created by joining elements using a separator along one or more ndarray dimensions.
*
* @param x - input ndarray
* @param options - function options
* @returns output ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 2.0, 3.0 ] );
*
* var y = join( x );
* // returns <ndarray>[ '1,2,3' ]
*
* @example
* var empty = require( '@stdlib/ndarray/empty' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ 1.0, 2.0, 3.0 ], {
*     'dtype': 'generic'
* });
* var y = empty( [], {
*     'dtype': 'generic'
* });
*
* var out = join.assign( x, y );
* // returns <ndarray>[ '1,2,3' ]
*
* var bool = ( out === y );
* // returns true
*/
declare const join: Join;


// EXPORTS //

export = join;
