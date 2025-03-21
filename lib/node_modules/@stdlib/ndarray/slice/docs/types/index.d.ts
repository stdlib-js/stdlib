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

import { typedndarray, genericndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray } from '@stdlib/types/ndarray';
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
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6.0, 5.0 ], [ 2.0, 1.0 ] ]
*/
declare function slice( x: float64ndarray, s: MultiSlice, options?: Options ): float64ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6.0, 5.0 ], [ 2.0, 1.0 ] ]
*/
declare function slice( x: float64ndarray, s: ArrayLike<SliceArgument>, options?: Options ): float64ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6.0, 5.0 ], [ 2.0, 1.0 ] ]
*/
declare function slice( x: float64ndarray, ...slices: Array<SliceArgument | Options> ): float64ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6.0, 5.0 ], [ 2.0, 1.0 ] ]
*/
declare function slice( x: float32ndarray, s: MultiSlice, options?: Options ): float32ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6.0, 5.0 ], [ 2.0, 1.0 ] ]
*/
declare function slice( x: float32ndarray, s: ArrayLike<SliceArgument>, options?: Options ): float32ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6.0, 5.0 ], [ 2.0, 1.0 ] ]
*/
declare function slice( x: float32ndarray, ...slices: Array<SliceArgument | Options> ): float32ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int32ndarray, s: MultiSlice, options?: Options ): int32ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int32ndarray, s: ArrayLike<SliceArgument>, options?: Options ): int32ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - slice argument
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int32ndarray, ...slices: Array<SliceArgument | Options> ): int32ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int16ndarray, s: MultiSlice, options?: Options ): int16ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int16ndarray, s: ArrayLike<SliceArgument>, options?: Options ): int16ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - slice argument
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int16ndarray, ...slices: Array<SliceArgument | Options> ): int16ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int8ndarray, s: MultiSlice, options?: Options ): int8ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int8ndarray, s: ArrayLike<SliceArgument>, options?: Options ): int8ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - slice argument
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: int8ndarray, ...slices: Array<SliceArgument | Options> ): int8ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint32ndarray, s: MultiSlice, options?: Options ): uint32ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint32ndarray, s: ArrayLike<SliceArgument>, options?: Options ): uint32ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - slice argument
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint32ndarray, ...slices: Array<SliceArgument | Options> ): uint32ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint16ndarray, s: MultiSlice, options?: Options ): uint16ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint16ndarray, s: ArrayLike<SliceArgument>, options?: Options ): uint16ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - slice argument
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint16ndarray, ...slices: Array<SliceArgument | Options> ): uint16ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint8ndarray, s: MultiSlice, options?: Options ): uint8ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint8ndarray, s: ArrayLike<SliceArgument>, options?: Options ): uint8ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - slice argument
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint8ndarray, ...slices: Array<SliceArgument | Options> ): uint8ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint8cndarray, s: MultiSlice, options?: Options ): uint8cndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint8cndarray, s: ArrayLike<SliceArgument>, options?: Options ): uint8cndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - slice argument
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice( x: uint8cndarray, ...slices: Array<SliceArgument | Options> ): uint8cndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*/
declare function slice( x: complex128ndarray, s: MultiSlice, options?: Options ): complex128ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*/
declare function slice( x: complex128ndarray, s: ArrayLike<SliceArgument>, options?: Options ): complex128ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*/
declare function slice( x: complex128ndarray, ...slices: Array<SliceArgument | Options> ): complex128ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
* var buffer = typedarray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ], 'complex128' );
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*/
declare function slice( x: complex64ndarray, s: MultiSlice, options?: Options ): complex64ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
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
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*/
declare function slice( x: complex64ndarray, s: ArrayLike<SliceArgument>, options?: Options ): complex64ndarray; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var typedarray = require( '@stdlib/array/typed' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*/
declare function slice( x: complex64ndarray, ...slices: Array<SliceArgument | Options> ): complex64ndarray;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice<T = unknown>( x: genericndarray<T>, s: MultiSlice, options?: Options ): genericndarray<T>;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - array of slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice<T = unknown>( x: genericndarray<T>, s: ArrayLike<SliceArgument>, options?: Options ): genericndarray<T>; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice<T = unknown>( x: genericndarray<T>, ...slices: Array<SliceArgument | Options> ): genericndarray<T>;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - multi-slice object
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
* var s = new MultiSlice( s0, s1 );
* // returns <MultiSlice>
*
* var y = slice( x, s );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice<T = unknown>( x: typedndarray<T>, s: MultiSlice, options?: Options ): typedndarray<T>;

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param s - array of slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, [ s0, s1 ] );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice<T = unknown>( x: typedndarray<T>, s: ArrayLike<SliceArgument>, options?: Options ): typedndarray<T>; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Returns a read-only view of an input ndarray.
*
* @param x - input array
* @param slices - slice arguments
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var MultiSlice = require( '@stdlib/slice/multi' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
*
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
* var s0 = new Slice( null, null, -2 );
* var s1 = new Slice( null, null, -1 );
*
* var y = slice( x, s0, s1 );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 6, 5 ], [ 2, 1 ] ]
*/
declare function slice<T = unknown>( x: typedndarray<T>, ...slices: Array<SliceArgument | Options> ): typedndarray<T>;


// EXPORTS //

export = slice;
