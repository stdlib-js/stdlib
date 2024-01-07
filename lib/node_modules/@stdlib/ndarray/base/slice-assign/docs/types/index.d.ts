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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ndarray, typedndarray, genericndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray } from '@stdlib/types/ndarray';
import { MultiSlice } from '@stdlib/types/slice';

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ], [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: float64ndarray, s: MultiSlice, strict: boolean ): float64ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ], 'float32' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'float32', buffer, shape, strides, offset, 'row-major' );
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ], [ [ 6.0, 5.0 ], [ 4.0, 3.0 ], [ 2.0, 1.0 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: float32ndarray, s: MultiSlice, strict: boolean ): float32ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1, 2, 3, 4, 5, 6 ], 'int32' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'int32', buffer, shape, strides, offset, 'row-major' );
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: int32ndarray, s: MultiSlice, strict: boolean ): int32ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1, 2, 3, 4, 5, 6 ], 'int16' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'int16', buffer, shape, strides, offset, 'row-major' );
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: int16ndarray, s: MultiSlice, strict: boolean ): int16ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1, 2, 3, 4, 5, 6 ], 'int8' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'int8', buffer, shape, strides, offset, 'row-major' );
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: int8ndarray, s: MultiSlice, strict: boolean ): int8ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1, 2, 3, 4, 5, 6 ], 'uint32' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint32', buffer, shape, strides, offset, 'row-major' );
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: uint32ndarray, s: MultiSlice, strict: boolean ): uint32ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1, 2, 3, 4, 5, 6 ], 'uint16' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint16', buffer, shape, strides, offset, 'row-major' );
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: uint16ndarray, s: MultiSlice, strict: boolean ): uint16ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1, 2, 3, 4, 5, 6 ], 'uint8' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint8', buffer, shape, strides, offset, 'row-major' );
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: uint8ndarray, s: MultiSlice, strict: boolean ): uint8ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1, 2, 3, 4, 5, 6 ], 'uint8c' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'uint8c', buffer, shape, strides, offset, 'row-major' );
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign( x: ndarray, y: uint8cndarray, s: MultiSlice, strict: boolean ): uint8cndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ], 'complex128' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'complex128', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: ndarray, y: complex128ndarray, s: MultiSlice, strict: boolean ): complex128ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ], 'complex64' );
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'complex64', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>
*
* var sh = x.shape;
* // returns [ 3, 2 ]
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*/
declare function sliceAssign( x: ndarray, y: complex64ndarray, s: MultiSlice, strict: boolean ): complex64ndarray;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign<T = unknown>( x: ndarray, y: genericndarray<T>, s: MultiSlice, strict: boolean ): genericndarray<T>;

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
* @param strict - boolean indicating whether to enforce strict bounds checking
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
* var out = sliceAssign( x, y, s, false );
* // returns <ndarray>
*
* var bool = ( out === y );
* // returns true
*
* arr = ndarray2array( y );
* // returns [ [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ], [ [ 6, 5 ], [ 4, 3 ], [ 2, 1 ] ] ]
*/
declare function sliceAssign<T = unknown>( x: ndarray, y: typedndarray<T>, s: MultiSlice, strict: boolean ): typedndarray<T>;


// EXPORTS //

export = sliceAssign;
