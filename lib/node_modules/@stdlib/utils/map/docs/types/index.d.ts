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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Callback invoked for each array element.
*
* @returns result
*/
type Nullary = () => any;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @returns result
*/
type Unary = ( value: any ) => any;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @returns result
*/
type Binary = ( value: any, index: number ) => any;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type Ternary = ( value: any, index: number, arr: ndarray ) => any;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type ArrayTernary = ( value: any, index: number, arr: Collection ) => any;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type Callback = Nullary | Unary | Binary | Ternary;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type ArrayCallback = Nullary | Unary | Binary | ArrayTernary;

/**
* Interface describing the main export.
*/
interface Routine {
	// NOTE: signature order matters here, as an ndarray is an array-like object...

	/**
	* Applies a function to each element in an array and assigns the result to an element in a new array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **index**: element index.
	*     -   **arr**: input array.
	*
	* @param arr - input array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var opts = {
	*     'dtype': 'generic'
	* };
	* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
	*
	* var out = map( arr, naryFunction( abs, 1 ) );
	* // returns <ndarray>
	*
	* var data = out.data;
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*/
	( arr: ndarray, fcn: Callback, thisArg?: any ): ndarray;

	/**
	* Applies a function to each element in an array and assigns the result to an element in a new array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **index**: element index.
	*     -   **arr**: input array.
	*
	* @param arr - input array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* var arr = [ -1, -2, -3, -4, -5, -6 ];
	*
	* var out = map( arr, naryFunction( abs, 1 ) );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*/
	( arr: Collection, fcn: ArrayCallback, thisArg?: any ): Collection;

	/**
	* Applies a function to each element in an array and assigns the result to an element in an output array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **index**: element index.
	*     -   **arr**: input array.
	*
	* @param arr - input array
	* @param out - output array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var opts = {
	*     'dtype': 'generic',
	*     'shape': [ 2, 3 ]
	* };
	* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
	* var out = array( opts );
	*
	* map.assign( arr, out, naryFunction( abs, 1 ) );
	*
	* var data = out.data;
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( arr: ndarray, out: ndarray, fcn: Callback, thisArg?: any ): ndarray;

	/**
	* Applies a function to each element in an array and assigns the result to an element in an output array.
	*
	* ## Notes
	*
	* -   The applied function is provided the following arguments:
	*
	*     -   **value**: array element.
	*     -   **index**: element index.
	*     -   **arr**: input array.
	*
	* @param arr - input array
	* @param out - output array
	* @param fcn - function to apply
	* @param thisArg - input function context
	* @returns output array
	*
	* @example
	* var naryFunction = require( `@stdlib/utils/nary-function` );
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* var arr = [ -1, -2, -3, -4, -5, -6 ];
	* var out = [ 0, 0, 0, 0, 0, 0 ];
	*
	* map.assign( arr, out, naryFunction( abs, 1 ) );
	*
	* console.log( out );
	* // => [ 1, 2, 3, 4, 5, 6 ]
	*/
	assign( arr: Collection, out: Collection, fcn: ArrayCallback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length
}

/**
* Applies a function to each element in an array and assigns the result to an element in a new array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **value**: array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* @param arr - input array
* @param fcn - function to apply
* @param thisArg - input function context
* @returns output array
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
*
* var arr = [ -1, -2, -3, -4, -5, -6 ];
*
* var out = map( arr, naryFunction( abs, 1 ) );
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
* var array = require( `@stdlib/ndarray/array` );
*
* var opts = {
*     'dtype': 'generic'
* };
* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
*
* var out = map( arr, naryFunction( abs, 1 ) );
* // returns <ndarray>
*
* var data = out.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
*
* var arr = [ -1, -2, -3, -4, -5, -6 ];
* var out = [ 0, 0, 0, 0, 0, 0 ];
*
* map.assign( arr, out, naryFunction( abs, 1 ) );
*
* console.log( out );
* // => [ 1, 2, 3, 4, 5, 6 ]
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
* var array = require( `@stdlib/ndarray/array` );
*
* var opts = {
*     'dtype': 'generic',
*     'shape': [ 2, 3 ]
* };
* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
* var out = array( opts );
*
* map.assign( arr, out, naryFunction( abs, 1 ) );
*
* var data = out.data;
* // returns [ 1, 2, 3, 4, 5, 6 ]
*/
declare var map: Routine;


// EXPORTS //

export = map;
