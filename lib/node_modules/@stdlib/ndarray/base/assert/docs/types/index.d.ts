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

import isAllowedDataTypeCast = require( '@stdlib/ndarray/base/assert/is-allowed-data-type-cast' );
import isBufferLengthCompatible = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible' );
import isBufferLengthCompatibleShape = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape' );
import isCastingMode = require( '@stdlib/ndarray/base/assert/is-casting-mode' );
import isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major' );
import isColumnMajorContiguous = require( '@stdlib/ndarray/base/assert/is-column-major-contiguous' );
import isContiguous = require( '@stdlib/ndarray/base/assert/is-contiguous' );
import isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
import isIndexMode = require( '@stdlib/ndarray/base/assert/is-index-mode' );
import isOrder = require( '@stdlib/ndarray/base/assert/is-order' );
import isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
import isRowMajorContiguous = require( '@stdlib/ndarray/base/assert/is-row-major-contiguous' );
import isSafeDataTypeCast = require( '@stdlib/ndarray/base/assert/is-safe-data-type-cast' );
import isSameKindDataTypeCast = require( '@stdlib/ndarray/base/assert/is-same-kind-data-type-cast' );
import isSingleSegmentCompatible = require( '@stdlib/ndarray/base/assert/is-single-segment-compatible' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Returns a boolean indicating if a provided ndarray data type can be cast to another ndarray data type according to a specified casting mode.
	*
	* @param from - ndarray data type
	* @param to - ndarray data type
	* @param casting - ndarray casting mode
	* @returns boolean indicating if a data type can be cast to another data type
	*
	* @example
	* var bool = ns.isAllowedDataTypeCast( 'float32', 'float64', 'safe' );
	* // returns true
	*
	* bool = ns.isAllowedDataTypeCast( 'float64', 'int32', 'safe' );
	* // returns false
	*/
	isAllowedDataTypeCast: typeof isAllowedDataTypeCast;

	/**
	* Returns a boolean indicating if a buffer length is compatible with provided ndarray meta data.
	*
	* @param len - buffer length
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if a buffer length is compatible
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var bool = ns.isBufferLengthCompatible( 4, shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 2;
	*
	* var bool = ns.isBufferLengthCompatible( 4, shape, strides, offset );
	* // returns false
	*/
	isBufferLengthCompatible: typeof isBufferLengthCompatible;

	/**
	* Returns a boolean indicating if a buffer length is compatible with a provided shape array.
	*
	* @param len - buffer length
	* @param shape - array shape
	* @returns boolean indicating if a buffer length is compatible with a provided shape array
	*
	* @example
	* var shape = [ 2, 2 ];
	*
	* var bool = ns.isBufferLengthCompatibleShape( 4, shape );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	*
	* var bool = ns.isBufferLengthCompatibleShape( 3, shape );
	* // returns false
	*/
	isBufferLengthCompatibleShape: typeof isBufferLengthCompatibleShape;

	/**
	* Tests whether an input value is a supported ndarray casting mode.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray casting mode
	*
	* @example
	* var bool = ns.isCastingMode( 'none' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'equiv' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'safe' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'same-kind' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'unsafe' );
	* // returns true
	*
	* bool = ns.isCastingMode( 'foo' );
	* // returns false
	*/
	isCastingMode: typeof isCastingMode;

	/**
	* Returns a boolean indicating if an array is column-major based on a provided stride array.
	*
	* @param strides - integer stride array
	* @returns boolean indicating if an array is column-major
	*
	* @example
	* var bool = ns.isColumnMajor( [ 1, 2 ] );
	* // returns true
	*
	* bool = ns.isColumnMajor( [ 2, 1 ] );
	* // returns false
	*/
	isColumnMajor: typeof isColumnMajor;

	/**
	* Returns a boolean indicating if an array is column-major contiguous.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if an array is column-major contiguous
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 1, 2 ];
	* var offset = 0;
	*
	* var bool = ns.isColumnMajorContiguous( shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 1, -2 ];
	* var offset = 2;
	*
	* var bool = ns.isColumnMajorContiguous( shape, strides, offset );
	* // returns false
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 2 ];
	* var offset = 0;
	*
	* var bool = ns.isColumnMajorContiguous( shape, strides, offset );
	* // returns false
	*/
	isColumnMajorContiguous: typeof isColumnMajorContiguous;

	/**
	* Returns a boolean indicating if an array is contiguous.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if an array is contiguous
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var bool = ns.isContiguous( shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ -2, 1 ];
	* var offset = 2;
	*
	* var bool = ns.isContiguous( shape, strides, offset );
	* // returns false
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 2 ];
	* var offset = 0;
	*
	* var bool = ns.isContiguous( shape, strides, offset );
	* // returns false
	*/
	isContiguous: typeof isContiguous;

	/**
	* Tests whether an input value is a supported ndarray data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray data type
	*
	* @example
	* var bool = ns.isDataType( 'binary' );
	* // returns true
	*
	* bool = ns.isDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isDataType( 'generic' );
	* // returns true
	*
	* bool = ns.isDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isDataType( 'foo' );
	* // returns false
	*/
	isDataType: typeof isDataType;

	/**
	* Tests whether an input value is a supported ndarray index mode.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported ndarray index mode
	*
	* @example
	* var bool = ns.isIndexMode( 'wrap' );
	* // returns true
	*
	* bool = ns.isIndexMode( 'clamp' );
	* // returns true
	*
	* bool = ns.isIndexMode( 'throw' );
	* // returns true
	*
	* bool = ns.isIndexMode( 'foo' );
	* // returns false
	*/
	isIndexMode: typeof isIndexMode;

	/**
	* Tests whether an input value is an ndarray order.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is an ndarray order
	*
	* @example
	* var bool = ns.isOrder( 'row-major' );
	* // returns true
	*
	* bool = ns.isOrder( 'column-major' );
	* // returns true
	*
	* bool = ns.isOrder( 'foo' );
	* // returns false
	*/
	isOrder: typeof isOrder;

	/**
	* Returns a boolean indicating if an array is row-major based on a provided stride array.
	*
	* @param strides - integer stride array
	* @returns boolean indicating if an array is row-major
	*
	* @example
	* var bool = ns.isRowMajor( [ 2, 1 ] );
	* // returns true
	*
	* bool = ns.isRowMajor( [ 1, 2 ] );
	* // returns false
	*/
	isRowMajor: typeof isRowMajor;

	/**
	* Returns a boolean indicating if an array is row-major contiguous.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if an array is row-major contiguous
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var bool = ns.isRowMajorContiguous( shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ -2, 1 ];
	* var offset = 2;
	*
	* var bool = ns.isRowMajorContiguous( shape, strides, offset );
	* // returns false
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 2 ];
	* var offset = 0;
	*
	* var bool = ns.isRowMajorContiguous( shape, strides, offset );
	* // returns false
	*/
	isRowMajorContiguous: typeof isRowMajorContiguous;

	/**
	* Returns a boolean indicating if a provided ndarray data type can be safely cast to another ndarray data type.
	*
	* @param from - ndarray data type
	* @param to - ndarray data type
	* @returns boolean indicating if a data type can be safely cast to another data type
	*
	* @example
	* var bool = ns.isSafeDataTypeCast( 'float32', 'float64' );
	* // returns true
	*
	* bool = ns.isSafeDataTypeCast( 'float64', 'int32' );
	* // returns false
	*/
	isSafeDataTypeCast: typeof isSafeDataTypeCast;

	/**
	* Returns a boolean indicating if a provided ndarray data type can be safely cast to, or is of the same "kind" as, another ndarray data type.
	*
	* @param from - ndarray data type
	* @param to - ndarray data type
	* @returns boolean indicating if a data type can be cast to another data type
	*
	* @example
	* var bool = ns.isSameKindDataTypeCast( 'float32', 'float64' );
	* // returns true
	*
	* bool = ns.isSameKindDataTypeCast( 'uint16', 'int16' );
	* // returns false
	*/
	isSameKindDataTypeCast: typeof isSameKindDataTypeCast;

	/**
	* Returns a boolean indicating if an array is compatible with a single memory segment.
	*
	* @param shape - array shape
	* @param strides - stride array
	* @param offset - index offset
	* @returns boolean indicating if an array is compatible with a single memory segment
	*
	* @example
	* var shape = [ 2, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var bool = ns.isSingleSegmentCompatible( shape, strides, offset );
	* // returns true
	*
	* @example
	* var shape = [ 10 ];
	* var strides = [ 3 ];
	* var offset = 0;
	*
	* var bool = ns.isSingleSegmentCompatible( shape, strides, offset );
	* // returns false
	*/
	isSingleSegmentCompatible: typeof isSingleSegmentCompatible;
}

/**
* Base ndarray assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
