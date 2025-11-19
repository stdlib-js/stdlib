/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { ndarray, typedndarray, genericndarray } from '@stdlib/types/ndarray';
import { ArrayLike } from '@stdlib/types/array';
import { MultiSlice, Slice } from '@stdlib/types/slice';

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
* Assigns element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array view to which elements will be assigned.
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - multi-slice object for the output array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* // Define an input array:
* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 'float64' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* // Define an output array:
* var y = ndzeros( [ 2, 3, 2 ], {
*     'dtype': x.dtype
* });
*
* // Create a slice:
* var s0 = null;
* var s1 = new Slice( null, null, -1 );
* var s2 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1, s2 );
* // returns <MultiSlice>
*
* // Perform assignment:
* var out = sliceAssign( x, y, s );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ], [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ] ]
*/
declare function sliceAssign<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: ndarray, y: U, s: MultiSlice, options?: Options ): U;

/**
* Assigns element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array view to which elements will be assigned.
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - array of slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* // Define an input array:
* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 'float64' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* // Define an output array:
* var y = ndzeros( [ 2, 3, 2 ], {
*     'dtype': x.dtype
* });
*
* // Create a slice:
* var s0 = null;
* var s1 = new Slice( null, null, -1 );
* var s2 = new Slice( null, null, -1 );
*
* // Perform assignment:
* var out = sliceAssign( x, y, [ s0, s1, s2 ] );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ], [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ] ]
*/
declare function sliceAssign<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: ndarray, y: U, s: ArrayLike<SliceArgument>, options?: Options ): U; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Assigns element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array view to which elements will be assigned.
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param args - slice and option arguments
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* // Define an input array:
* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 'float64' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* // Define an output array:
* var y = ndzeros( [ 2, 3, 2 ], {
*     'dtype': x.dtype
* });
*
* // Create a slice:
* var s0 = null;
* var s1 = new Slice( null, null, -1 );
* var s2 = new Slice( null, null, -1 );
*
* // Perform assignment:
* var out = sliceAssign( x, y, s0, s1, s2 );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ], [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ] ]
*/
declare function sliceAssign<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: ndarray, y: U, ...args: Array<SliceArgument | Options> ): U;

/**
* Assigns element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array view to which elements will be assigned.
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - multi-slice object for the output array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* // Define an input array:
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
*
* // Define an output array:
* var y = ndzeros( [ 2, 3, 2 ], {
*     'dtype': x.dtype
* });
*
* // Create a slice:
* var s0 = null;
* var s1 = new Slice( null, null, -1 );
* var s2 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1, s2 );
* // returns <MultiSlice>
*
* // Perform assignment:
* var out = sliceAssign( x, y, s );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign<T = unknown, U = unknown>( x: typedndarray<T>, y: genericndarray<U>, s: MultiSlice, options?: Options ): genericndarray<T | U>;

/**
* Assigns element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array view to which elements will be assigned.
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param s - array of slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* // Define an input array:
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
*
* // Define an output array:
* var y = ndzeros( [ 2, 3, 2 ], {
*     'dtype': x.dtype
* });
*
* // Create a slice:
* var s0 = null;
* var s1 = new Slice( null, null, -1 );
* var s2 = new Slice( null, null, -1 );
* // returns <MultiSlice>
*
* // Perform assignment:
* var out = sliceAssign( x, y, [ s0, s1, s2 ] );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign<T = unknown, U = unknown>( x: typedndarray<T>, y: genericndarray<U>, s: ArrayLike<SliceArgument>, options?: Options ): genericndarray<T | U>; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Assigns element values from a broadcasted input ndarray to corresponding elements in an output ndarray view.
*
* ## Notes
*
* -   The input array must be broadcast compatible with the output array view to which elements will be assigned.
* -   The input array must have a data type which can be safely cast to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the same kind (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).
*
* @param x - input array
* @param y - output array
* @param args - slice and option arguments
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndzeros = require( '@stdlib/ndarray/zeros' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* // Define an input array:
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
*
* var arr = ndarray2array( x );
* // returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
*
* // Define an output array:
* var y = ndzeros( [ 2, 3, 2 ], {
*     'dtype': x.dtype
* });
*
* // Create a slice:
* var s0 = null;
* var s1 = new Slice( null, null, -1 );
* var s2 = new Slice( null, null, -1 );
* // returns <MultiSlice>
*
* // Perform assignment:
* var out = sliceAssign( x, y, s0, s1, s2 );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign<T = unknown, U = unknown>( x: typedndarray<T>, y: genericndarray<U>, ...args: Array<SliceArgument | Options> ): genericndarray<T | U>;


// EXPORTS //

export = sliceAssign;
