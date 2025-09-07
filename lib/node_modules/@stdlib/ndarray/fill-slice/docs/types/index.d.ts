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

/* eslint-disable max-lines */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { typedndarray, genericndarray, complexndarray } from '@stdlib/types/ndarray';
import { MultiSlice, Slice } from '@stdlib/types/slice';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Boolean indicating whether to enforce strict bounds checking (default: true).
	*/
	strict?: boolean;
}

/**
* Slice argument.
*/
type SliceArgument = Slice | number | null | undefined;

/**
* Typed ndarray element.
*/
type Element<U> = U extends typedndarray<infer T> ? T : never;

/**
* Fills an input ndarray view with a specified value.
*
* @param x - input ndarray
* @param value - fill value
* @param s - slice argument
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'complex128'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
* var s = new MultiSlice( s0, s1 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, s );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'complex128'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, [ s0, s1 ] );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*/
declare function fillSlice<T extends complexndarray>( x: T, value: number | ComplexLike, s: MultiSlice | ArrayLike<SliceArgument>, options?: Options ): T;

/**
* Fills an input ndarray view with a specified value.
*
* @param x - input ndarray
* @param value - fill value
* @param args - slice and option arguments
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'complex128'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, s0, s1 );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*/
declare function fillSlice<T extends complexndarray>( x: T, value: number | ComplexLike, ...args: Array<SliceArgument | Options> ): T;

/**
* Fills an input ndarray view with a specified value.
*
* @param x - input ndarray
* @param value - fill value
* @param s - slice argument
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'float64'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
* var s = new MultiSlice( s0, s1 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, s );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* var arr = ndarray2array( x );
* // returns [ [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 5, 5 ], [ 0, 0, 0, 0, 0, 0, 5, 5 ] ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'float64'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, [ s0, s1 ] );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* var arr = ndarray2array( x );
* // returns [ [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 5, 5 ], [ 0, 0, 0, 0, 0, 0, 5, 5 ] ]
*/
declare function fillSlice<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, value: Element<U>, s: MultiSlice | ArrayLike<SliceArgument>, options?: Options ): U;

/**
* Fills an input ndarray view with a specified value.
*
* @param x - input ndarray
* @param value - fill value
* @param args - slice and option arguments
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'float64'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, s0, s1 );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* var arr = ndarray2array( x );
* // returns [ [ 0, 0, 0, 0 ], [ 0, 0, 5, 5 ], [ 0, 0, 5, 5 ] ]
*/
declare function fillSlice<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, value: Element<U>, ...args: Array<SliceArgument | Options> ): U;

/**
* Fills an input ndarray view with a specified value.
*
* @param x - input ndarray
* @param value - fill value
* @param s - slice argument
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'generic'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
* var s = new MultiSlice( s0, s1 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, s );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* var arr = ndarray2array( x );
* // returns [ [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 5, 5 ], [ 0, 0, 0, 0, 0, 0, 5, 5 ] ]
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'generic'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, [ s0, s1 ] );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* var arr = ndarray2array( x );
* // returns [ [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 5, 5 ], [ 0, 0, 0, 0, 0, 0, 5, 5 ] ]
*/
declare function fillSlice<T = unknown, U = unknown>( x: genericndarray<T>, value: U, s: MultiSlice | ArrayLike<SliceArgument>, options?: Options ): genericndarray<T | U>;

/**
* Fills an input ndarray view with a specified value.
*
* @param x - input ndarray
* @param value - fill value
* @param args - slice and option arguments
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var Slice = require( '@stdlib/slice/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var x = zeros( [ 3, 4 ], {
*     'dtype': 'generic'
* });
*
* // Specify the fill region:
* var s0 = new Slice( 1, 3 );
* var s1 = new Slice( 2, 4 );
*
* // Fill the slice:
* var y = fillSlice( x, 5.0, s0, s1 );
* // returns <ndarray>
*
* var bool = ( y === x );
* // returns true
*
* var arr = ndarray2array( x );
* // returns [ [ 0, 0, 0, 0 ], [ 0, 0, 5, 5 ], [ 0, 0, 5, 5 ] ]
*/
declare function fillSlice<T = unknown, U = unknown>( x: genericndarray<T>, value: U, ...args: Array<SliceArgument | Options> ): genericndarray<T | U>;


// EXPORTS //

export = fillSlice;
