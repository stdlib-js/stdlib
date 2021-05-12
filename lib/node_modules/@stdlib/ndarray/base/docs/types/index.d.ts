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

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import assert = require( '@stdlib/ndarray/base/assert' );
import bind2vind = require( '@stdlib/ndarray/base/bind2vind' );
import broadcastShapes = require( '@stdlib/ndarray/base/broadcast-shapes' );
import buffer = require( '@stdlib/ndarray/base/buffer' );
import bufferCtors = require( '@stdlib/ndarray/base/buffer-ctors' );
import bufferDataType = require( '@stdlib/ndarray/base/buffer-dtype' );
import bufferDataTypeEnum = require( '@stdlib/ndarray/base/buffer-dtype-enum' );
import bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
import clampIndex = require( '@stdlib/ndarray/base/clamp-index' );
import ndarray = require( '@stdlib/ndarray/base/ctor' );
import dtypeChar = require( '@stdlib/ndarray/base/dtype-char' );
import dtypes2signatures = require( '@stdlib/ndarray/base/dtypes2signatures' );
import ind = require( '@stdlib/ndarray/base/ind' );
import ind2sub = require( '@stdlib/ndarray/base/ind2sub' );
import iterationOrder = require( '@stdlib/ndarray/base/iteration-order' );
import maxViewBufferIndex = require( '@stdlib/ndarray/base/max-view-buffer-index' );
import minViewBufferIndex = require( '@stdlib/ndarray/base/min-view-buffer-index' );
import minmaxViewBufferIndex = require( '@stdlib/ndarray/base/minmax-view-buffer-index' );
import nonsingletonDimensions = require( '@stdlib/ndarray/base/nonsingleton-dimensions' );
import numel = require( '@stdlib/ndarray/base/numel' );
import serializeMetaData = require( '@stdlib/ndarray/base/serialize-meta-data' );
import shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
import singletonDimensions = require( '@stdlib/ndarray/base/singleton-dimensions' );
import strides2offset = require( '@stdlib/ndarray/base/strides2offset' );
import strides2order = require( '@stdlib/ndarray/base/strides2order' );
import sub2ind = require( '@stdlib/ndarray/base/sub2ind' );
import ndarray2array = require( '@stdlib/ndarray/base/to-array' );
import vind2bind = require( '@stdlib/ndarray/base/vind2bind' );
import wrapIndex = require( '@stdlib/ndarray/base/wrap-index' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Base ndarray assertion utilities.
	*/
	assert: typeof assert;

	/**
	* Converts a linear index in an underlying data buffer to a linear index in an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index in an underlying data buffer
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns linear index in an array view
	*
	* @example
	* var shape = [ 3, 3 ];
	* var strides = [ -3, 1 ];
	* var offset = 6;
	* var order = 'row-major';
	* var mode = 'throw';
	*
	* var ind = ns.bind2vind( shape, strides, offset, order, 7, mode );
	* // returns 1
	*/
	bind2vind: typeof bind2vind;

	/**
	* Broadcasts array shapes to a single shape.
	*
	* ## Notes
	*
	* -   Two respective dimensions in two shape arrays are compatible if
	*
	*     1.  the dimensions are equal.
	*     2.  one dimension is `1`.
	*
	* -   The function returns `null` if provided incompatible shapes (i.e., shapes which cannot be broadcast one another).
	*
	* @param shapes - array shapes
	* @returns broadcast shape
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 6, 1 ],
	*     [ 7, 1, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 7, 6, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 5, 4 ],
	*     [ 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 5, 4 ]
	*
	* @example
	* var shapes = [
	*     [ 5, 4 ],
	*     [ 4 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 5, 4 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 15, 1, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 3, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 15, 3, 5 ],
	*     [ 3, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 15, 3, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 1, 7, 1, 5 ],
	*     [ 8, 4, 1, 6, 5 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 4, 7, 6, 5 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 0 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 1, 1, 6, 0 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 1, 1, 6, 1 ],
	*     [ 8, 0, 1, 6, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 8, 0, 1, 6, 1 ]
	*
	* @example
	* var shapes = [
	*     [ 8, 8, 1, 6, 1 ],
	*     [ 8, 0, 1, 6, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns null
	*
	* @example
	* var shapes = [
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [
	*     [],
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns []
	*
	* @example
	* var shapes = [
	*     [ 3, 2, 1 ],
	*     []
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 3, 2, 1 ]
	*
	* @example
	* var shapes = [
	*     [],
	*     [ 3, 2, 1 ]
	* ];
	*
	* var out = ns.broadcastShapes( shapes );
	* // returns [ 3, 2, 1 ]
	*/
	broadcastShapes: typeof broadcastShapes;

	/**
	* Returns a zero-filled contiguous linear ndarray data buffer.
	*
	* @param dtype - data type
	* @param size - buffer size
	* @returns data buffer
	*
	* @example
	* var buf = ns.buffer( 'float64', 3 );
	* // returns <Float64Array>[ 0.0, 0.0, 0.0 ]
	*/
	buffer: typeof buffer;

	/**
	* Returns an ndarray data buffer constructor.
	*
	* @param dtype - data type
	* @returns data buffer constructor or null
	*
	* @example
	* var ctor = ns.bufferCtors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.bufferCtors( 'float' );
	* // returns null
	*/
	bufferCtors: typeof bufferCtors;

	/**
	* Returns the data type of an ndarray data buffer.
	*
	* @param value - input value
	* @returns data type
	*
	* @example
	* var dt = ns.bufferDataType( [ 1, 2, 3 ] );
	* // returns 'generic'
	*
	* var dt = ns.bufferDataType( 'beep' );
	* // returns null
	*/
	bufferDataType: typeof bufferDataType;

	/**
	* Returns the data type enumeration constant for a provided ndarray data buffer.
	*
	* @param arr - strided array
	* @returns data type enumeration constant or null
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( 10 );
	*
	* var c = ns.bufferDataTypeEnum( x );
	* // returns <number>
	*/
	bufferDataTypeEnum: typeof bufferDataTypeEnum;

	/**
	* Returns the number of bytes per element provided an underlying array data type.
	*
	* @param dtype - data type
	* @returns number of bytes per element
	*
	* @example
	* var nbytes = ns.bytesPerElement( 'float64' );
	* // returns 8
	*
	* nbytes = ns.bytesPerElement( 'generic' );
	* // returns null
	*/
	bytesPerElement: typeof bytesPerElement;

	/**
	* Restricts an index to the interval `[0,max]`.
	*
	* @param idx - index
	* @param max - maximum index
	* @returns index
	*
	* @example
	* var idx = ns.clampIndex( -1, 10 );
	* // returns 0
	*
	* idx = ns.clampIndex( 15, 10 );
	* // returns 10
	*
	* idx = ns.clampIndex( 5, 10 );
	* // returns 5
	*/
	clampIndex: typeof clampIndex;

	/**
	* ndarray constructor.
	*
	* ## Notes
	*
	* -   To create a zero-dimensional array,
	*
	*     ```javascript
	*     var buffer = [ 1 ];
	*     var shape = [];
	*     var strides = [ 0 ];
	*     var offset = 0;
	*
	*     var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*     ```
	*
	* @param dtype - data type
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns ndarray instance
	*
	* @example
	* var buffer = [ 1, 2, 3, 4, 5, 6 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = ns.ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*/
	ndarray: typeof ndarray;

	/**
	* Returns the single letter character abbreviation for an underlying array data type.
	*
	* @param dtype - data type
	* @returns single letter character abbreviation
	*
	* @example
	* var ch = ns.dtypeChar( 'float64' );
	* // returns 'd'
	*
	* ch = ns.dtypeChar( 'generic' );
	* // returns 'o'
	*/
	dtypeChar: typeof dtypeChar;

	/**
	* Transforms a list of array argument data types into a list of signatures.
	*
	* @param dtypes - list of array argument data types
	* @param nin - number of input array arguments
	* @param nout - number of output array arguments
	* @throws first argument must be an array-like object containing strings
	* @throws second argument must be a nonnegative integer
	* @throws third argument must be a nonnegative integer
	* @throws first argument must have at least one element
	* @throws first argument must be compatible with second and third arguments
	* @returns list of signatures
	*
	* @example
	* var dtypes = [
	*     'float64', 'float64',
	*     'float32', 'float32'
	* ];
	*
	* var sigs = ns.dtypes2signatures( dtypes, 1, 1 );
	* // returns [ '(float64) => (float64)', '(float32) => (float32)' ]
	*/
	dtypes2signatures: typeof dtypes2signatures;

	/**
	* Returns an index given an index mode.
	*
	* @param idx - index
	* @param max - maximum index
	* @param mode - specifies how to handle an index outside the interval `[0,max]`
	* @throws index out-of-bounds
	* @returns index
	*
	* @example
	* var idx = ns.ind( 2, 9, 'clamp' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'clamp' );
	* // returns 9
	*
	* idx = ns.ind( -1, 9, 'clamp' );
	* // returns 0
	*
	* @example
	* var idx = ns.ind( 2, 9, 'wrap' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'wrap' );
	* // returns 0
	*
	* idx = ns.ind( -1, 9, 'wrap' );
	* // returns 9
	*
	* @example
	* var idx = ns.ind( 2, 9, 'throw' );
	* // returns 2
	*
	* idx = ns.ind( 10, 9, 'throw' );
	* // throws <RangeError>
	*
	* idx = ns.ind( -1, 9, 'throw' );
	* // throws <RangeError>
	*/
	ind: typeof ind;

	/**
	* Converts a linear index to an array of subscripts.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   `throw`: throws an error when a linear index exceeds array dimensions.
	*     -   `wrap`: wrap around a linear index exceeding array dimensions using modulo arithmetic.
	*     -   `clamp`: set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.
	*
	* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function interprets the linear index as an index into the underlying data buffer for the array, thus returning subscripts from the perspective of that buffer. If an `offset` is equal to `0`, the function treats the linear index as an index into an array view, thus returning subscripts from the perspective of that view.
	*
	*     ```text
	*     Dims: 2x2
	*     Buffer: [ 1, 2, 3, 4 ]
	*
	*     View = [ a00, a01,
	*              a10, a11 ]
	*
	*     Strides: 2,1
	*     Offset: 0
	*
	*     View = [ 1, 2,
	*              3, 4 ]
	*
	*     Strides: 2,-1
	*     Offset: 1
	*
	*     View = [ 2, 1,
	*              4, 3 ]
	*
	*     Strides: -2,1
	*     Offset: 2
	*
	*     View = [ 3, 4,
	*              1, 2 ]
	*
	*     Strides: -2,-1
	*     Offset: 3
	*
	*     View = [ 4, 3,
	*              2, 1 ]
	*     ```
	*
	*     ```javascript
	*     var shape = [ 2, 2 ];
	*     var order = 'row-major';
	*     var strides = [ -2, 1 ];
	*     var offset = 2;
	*     var mode = 'throw';
	*
	*     // From the perspective of a view...
	*     var s = ind2sub( shape, strides, 0, order, 0, mode );
	*     // returns [ 0, 0 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 1, mode );
	*     // returns [ 0, 1 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 2, mode );
	*     // returns [ 1, 0 ]
	*
	*     s = ind2sub( shape, strides, 0, order, 3, mode );
	*     // returns [ 1, 1 ]
	*
	*     // From the perspective of an underlying buffer...
	*     s = ind2sub( shape, strides, offset, order, 0, mode );
	*     // returns [ 1, 0 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 1, mode );
	*     // returns [ 1, 1 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 2, mode );
	*     // returns [ 0, 0 ]
	*
	*     s = ind2sub( shape, strides, offset, order, 3, mode );
	*     // returns [ 0, 1 ]
	*     ```
	*
	*     In short, from the perspective of a view, view data is always ordered.
	*
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns subscripts
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var strides = [ 9, 6, 1 ];
	* var offset = 0;
	* var order = 'row-major';
	*
	* var s = ns.ind2sub( shape, strides, offset, order, 17, 'throw' );
	* // returns [ 1, 2, 2 ]
	*/
	ind2sub: typeof ind2sub;

	/**
	* Returns array iteration order.
	*
	* ## Notes
	*
	* -   Return value key:
	*
	*     -   `0`: unordered (i.e., strides of mixed sign; e.g., `[ 9, -3, 1 ]`)
	*     -   `1`: ordered left-to-right (i.e., all nonnegative strides)
	*     -   `-1`: ordered right-to-left (i.e., all negative strides)
	*
	* @param strides - stride array
	* @returns iteration order
	*
	* @example
	* var o = ns.iterationOrder( [ 2, 1 ] );
	* // returns 1
	*
	* o = ns.iterationOrder( [ -2, 1 ] );
	* // returns 0
	*
	* o = ns.iterationOrder( [ -2, -1 ] );
	* // returns -1
	*/
	iterationOrder: typeof iterationOrder;

	/**
	* Computes the maximum linear index in an underlying data buffer accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear index
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 0;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 99;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 0;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 99;
	*
	* var idx = ns.maxViewBufferIndex( shape, strides, offset );
	* // returns 99
	*/
	maxViewBufferIndex: typeof maxViewBufferIndex;

	/**
	* Computes the minimum linear index in an underlying data buffer accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear index
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 10;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 109;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 10;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 109;
	*
	* var idx = ns.minViewBufferIndex( shape, strides, offset );
	* // returns 10
	*/
	minViewBufferIndex: typeof minViewBufferIndex;

	/**
	* Computes the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns linear indices
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 10, 1 ];
	* var offset = 10;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 10, 109 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -10, -1 ];
	* var offset = 99;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 0, 99 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ 1, 10 ];
	* var offset = 10;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 10, 109 ]
	*
	* @example
	* var shape = [ 10, 10 ];
	* var strides = [ -1, -10 ];
	* var offset = 99;
	*
	* var idx = ns.minmaxViewBufferIndex( shape, strides, offset );
	* // returns [ 0, 99 ]
	*/
	minmaxViewBufferIndex: typeof minmaxViewBufferIndex;

	/**
	* Returns the number of non-singleton dimensions.
	*
	* ## Notes
	*
	* -   A singleton dimension is a dimension whose size is equal to `1`.
	*
	* @param shape - array shape
	* @returns number of non-singleton dimensions
	*
	* @example
	* var n = ns.nonsingletonDimensions( [ 3, 3, 1, 2 ] );
	* // returns 3
	*
	* @example
	* var n = ns.nonsingletonDimensions( [ 1, 1 ] );
	* // returns 0
	*/
	nonsingletonDimensions: typeof nonsingletonDimensions;

	/**
	* Returns the number of elements in an array.
	*
	* @param shape - array shape
	* @returns number of elements
	*
	* @example
	* var n = ns.numel( [ 3, 3, 3 ] );
	* // returns 27
	*/
	numel: typeof numel;

	/**
	* Serializes ndarray meta data.
	*
	* ## Notes
	*
	* -   Serialization is performed according to host byte order (endianness).
	*
	* -   Meta data format:
	*
	*     ```text
	*     | <endianness> (1 byte) | <dtype> (2 bytes) | <ndims> (8 bytes) | <shape> (ndims*8 bytes) | <strides> (ndims*8 bytes) | <offset> (8 bytes) | <order> (1 byte) | <mode> (1 byte) | <nsubmodes> (8 bytes) | <submodes> (nsubmodes*1 bytes) |
	*     ```
	*
	*     which translates to the following `ArrayBuffer` layout:
	*
	*     ```text
	*     ArrayBuffer[
	*         <endianness>[int8],
	*         <dtype>[int16],
	*         <ndims>[int64],
	*         <shape>[ndims*int64],
	*         <strides>[ndims*int64],
	*         <offset>[int64],
	*         <order>[int8],
	*         <mode>[int8],
	*         <nsubmodes>[int64],
	*         <submodes>[nsubmodes*int8]
	*     ]
	*     ```
	*
	*     where `strides` and `offset` are in units of bytes.
	*
	* -   If the endianness is `1`, the byte order is little endian. If the endianness is `0`, the byte order is big endian.
	*
	* -   Buffer length:
	*
	*     ```text
	*     1 + 2 + 8 + (ndims*8) + (ndims*8) + 8 + 1 + 1 + 8 + (nsubmodes*1) = 29 + (ndims*16) + nsubmodes
	*     ```
	*
	*     For example, consider a three-dimensional ndarray with one subscript index mode (submode):
	*
	*     ```text
	*     29 + (3*16) + 1 = 78 bytes
	*     ```
	*
	* -   Views:
	*
	*     -   endianness: `Int8Array( buf, 0, 1 )`
	*     -   dtype: `Int16Array( buf, 1, 1 )`
	*     -   ndims: `Int64Array( buf, 3, 1 )`
	*     -   shape: `Int64Array( buf, 11, ndims )`
	*     -   strides: `Int64Array( buf, 11+(ndims*8), ndims )`
	*     -   offset: `Int64Array( buf, 11+(ndims*16), 1 )`
	*     -   order: `Int8Array( buf, 19+(ndims*16), 1 )`
	*     -   mode: `Int8Array( buf, 20+(ndims*16), 1 )`
	*     -   nsubmodes: `Int64Array( buf, 21+(ndims*16), 1 )`
	*     -   submodes: `Int8Array( buf, 29+(ndims*16), nsubmodes )`
	*
	* @param x - input ndarray
	* @returns serialized meta data
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
	*
	* var dv = ns.serializeMetaData( x );
	* // returns <DataView>
	*/
	serializeMetaData: typeof serializeMetaData;

	/**
	* Generates a stride array from an array shape.
	*
	* @param shape - array shape
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns array strides
	*
	* @example
	* var s = ns.shape2strides( [ 3, 2 ], 'row-major' );
	* // returns [ 2, 1 ]
	*
	* s = ns.shape2strides( [ 3, 2 ], 'column-major' );
	* // returns [ 1, 3 ]
	*/
	shape2strides: typeof shape2strides;

	/**
	* Returns the number of singleton dimensions.
	*
	* ## Notes
	*
	* -   A singleton dimension is a dimension whose size is equal to `1`.
	*
	* @param shape - array shape
	* @returns number of singleton dimensions
	*
	* @example
	* var n = ns.singletonDimensions( [ 3, 3, 1, 2 ] );
	* // returns 1
	*
	* @example
	* var n = ns.singletonDimensions( [ 2, 2 ] );
	* // returns 0
	*/
	singletonDimensions: typeof singletonDimensions;

	/**
	* Returns the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @returns offset
	*
	* @example
	* var shape = [ 2, 3, 10 ];
	* var strides = [ 30, -10, 1 ];
	*
	* var offset = ns.strides2offset( shape, strides );
	* // returns 20
	*/
	strides2offset: typeof strides2offset;

	/**
	* Determines the order of a multidimensional array based on a provided stride array.
	*
	* @param strides - stride array
	* @returns order
	*
	* @example
	* var order = ns.strides2order( [ 2, 1 ] );
	* // returns 1
	*
	* @example
	* var order = ns.strides2order( [ 1, 2 ] );
	* // returns 2
	*
	* @example
	* var order = ns.strides2order( [ 1, 1, 1 ] );
	* // returns 3
	*
	* @example
	* var order = ns.strides2order( [ 2, 3, 1 ] );
	* // returns 0
	*/
	strides2order: typeof strides2order;

	/**
	* Converts subscripts to a linear index.
	*
	* ## Notes
	*
	* -   The function accepts the following "modes":
	*
	*     -   `throw`: throws an error when a subscript exceeds array dimensions.
	*     -   `wrap`: wrap around subscripts exceeding array dimensions using modulo arithmetic.
	*     -   `clamp`: set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.
	*
	* -   When provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
	*
	* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function treats subscripts as mapping to a linear index in an underlying data buffer for the array, thus returning a linear index from the perspective of that buffer. If an `offset` is equal to `0`, the function treats subscripts as mapping to a linear index in an array view, thus returning a linear index from the perspective of that view.
	*
	*     ```text
	*     Dims: 2x2
	*     Buffer: [ 1, 2, 3, 4 ]
	*
	*     View = [ a00, a01,
	*              a10, a11 ]
	*
	*     Strides: 2,1
	*     Offset: 0
	*
	*     View = [ 1, 2,
	*              3, 4 ]
	*
	*     Strides: 2,-1
	*     Offset: 1
	*
	*     View = [ 2, 1,
	*              4, 3 ]
	*
	*     Strides: -2,1
	*     Offset: 2
	*
	*     View = [ 3, 4,
	*              1, 2 ]
	*
	*     Strides: -2,-1
	*     Offset: 3
	*
	*     View = [ 4, 3,
	*              2, 1 ]
	*     ```
	*
	*     ```javascript
	*     var shape = [ 2, 2 ];
	*     var strides = [ -2, 1 ];
	*     var offset = 2;
	*     var mode = [ 'throw' ];
	*
	*     // From the perspective of a view...
	*     var idx = sub2ind( shape, strides, 0, 0, 0, mode );
	*     // returns 0
	*
	*     idx = sub2ind( shape, strides, 0, 0, 1, mode );
	*     // returns 1
	*
	*     idx = sub2ind( shape, strides, 0, 1, 0, mode );
	*     // returns 2
	*
	*     idx = sub2ind( shape, strides, 0, 1, 1, mode );
	*     // returns 3
	*
	*     // From the perspective of an underlying buffer...
	*     idx = sub2ind( shape, strides, offset, 0, 0, mode );
	*     // returns 2
	*
	*     idx = sub2ind( shape, strides, offset, 0, 1, mode );
	*     // returns 3
	*
	*     idx = sub2ind( shape, strides, offset, 1, 0, mode );
	*     // returns 0
	*
	*     idx = sub2ind( shape, strides, offset, 1, 1, mode );
	*     // returns 1
	*     ```
	*
	*     In short, from the perspective of a view, view data is always ordered.
	*
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param args - subscripts followed by a `mode` specifying how to handle subscripts which exceed array dimensions
	* @param mode - specifies how to handle subscripts which exceed array dimensions
	* @throws must provide subscripts which do not exceed array dimensions
	* @returns linear index
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var strides = [ 9, 3, 1 ];
	* var offset = 0;
	* var mode = [ 'throw' ]
	*
	* var idx = ns.sub2ind( shape, strides, offset, 1, 2, 2, mode );
	* // returns 17
	*/
	sub2ind: typeof sub2ind;

	/**
	* Converts an ndarray buffer to a generic array (which may include nested arrays).
	*
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @returns array (which may include nested arrays)
	*
	* @example
	* var buffer = [ 1, 2, 3, 4 ];
	* var shape = [ 2, 2 ];
	* var order = 'row-major';
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = ns.ndarray2array( buffer, shape, strides, offset, order );
	* // returns [ [ 1, 2 ], [ 3, 4 ] ]
	*/
	ndarray2array: typeof ndarray2array;

	/**
	* Converts a linear index in an array view to a linear index in an underlying data buffer.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - location of the first indexed value **based** on the stride array
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param idx - linear index in an array view
	* @param mode - specifies how to handle a linear index which exceeds array dimensions
	* @throws linear index must not exceed array dimensions
	* @returns linear index in an underlying data buffer
	*
	* @example
	* var shape = [ 3, 3 ];
	* var strides = [ -3, 1 ];
	* var offset = 6;
	* var order = 'row-major';
	* var mode = 'throw';
	*
	* var ind = ns.vind2bind( shape, strides, offset, order, 1, mode );
	* // returns 7
	*/
	vind2bind: typeof vind2bind;

	/**
	* Wraps an index on the interval `[0,max]`.
	*
	* @param idx - index
	* @param max - maximum index
	* @returns index
	*
	* @example
	* var idx = ns.wrapIndex( -1, 10 );
	* // returns 10
	*
	* idx = ns.wrapIndex( 13, 10 );
	* // returns 2
	*
	* idx = ns.wrapIndex( 6, 10 );
	* // returns 6
	*/
	wrapIndex: typeof wrapIndex;
}

/**
* Base ndarray.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
