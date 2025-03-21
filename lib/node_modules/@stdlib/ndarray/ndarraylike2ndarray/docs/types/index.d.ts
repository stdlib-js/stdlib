/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
import { typedndarray, Mode } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Specifies how to handle a linear index which exceeds array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* Specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw']).
	*/
	submode?: ArrayLike<Mode>;

	/**
	* Boolean indicating whether an array should be read-only.
	*/
	readonly?: boolean;
}

/**
* Converts an ndarray-like object to an ndarray.
*
* ## Notes
*
* -   If provided a read-only ndarray, the function returns a read-only ndarray.
*
* @param x - input ndarray
* @param options - function options
* @param options.mode - specifies how to handle indices which exceed array dimensions (default: 'throw')
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw'])
* @param options.readonly - specifies whether an array should be read-only
* @returns ndarray
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
*
* var out = ndarraylike2ndarray( x );
* // returns <ndarray>
*/
declare function ndarraylike2ndarray<T = unknown>( x: typedndarray<T>, options?: Options ): typedndarray<T>;


// EXPORTS //

export = ndarraylike2ndarray;
