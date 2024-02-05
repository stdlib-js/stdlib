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

import { typedndarray, genericndarray, float64ndarray, float32ndarray, int32ndarray, int16ndarray, int8ndarray, uint32ndarray, uint16ndarray, uint8ndarray, uint8cndarray, complex128ndarray, complex64ndarray } from '@stdlib/types/ndarray';
import { ArrayLike } from '@stdlib/types/array';

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/
declare function sliceDimensionTo( x: float64ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): float64ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/
declare function sliceDimensionTo( x: float32ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): float32ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo( x: int32ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): int32ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo( x: int16ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): int16ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo( x: int8ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): int8ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo( x: uint32ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): uint32ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo( x: uint16ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): uint16ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo( x: uint8ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): uint8ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo( x: uint8cndarray, dim: number, stop: number, strict: boolean, writable: boolean ): uint8cndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*/
declare function sliceDimensionTo( x: complex128ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): complex128ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*/
declare function sliceDimensionTo( x: complex64ndarray, dim: number, stop: number, strict: boolean, writable: boolean ): complex64ndarray;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param dim - index of dimension to slice
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo<T = unknown>( x: genericndarray<T>, dim: number, stop: number, strict: boolean, writable: boolean ): genericndarray<T>;

/**
* Returns a truncated view of an input ndarray along a specified dimension.
*
* @param x - input array
* @param stop - ending index (exclusive)
* @param strict - boolean indicating whether to enforce strict bounds checking
* @param writable - boolean indicating whether a returned array should be writable
* @returns output array
*
* @example
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
* var y = sliceDimensionTo( x, 0, 2, false, false );
* // returns <ndarray>
*
* sh = y.shape;
* // returns [ 2, 2 ]
*
* arr = ndarray2array( y );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
declare function sliceDimensionTo<T = unknown>( x: typedndarray<T>, dim: number, stop: number, strict: boolean, writable: boolean ): typedndarray<T>;


// EXPORTS //

export = sliceDimensionTo;
