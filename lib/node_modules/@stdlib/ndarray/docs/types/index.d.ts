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

import array = require( '@stdlib/ndarray/array' );
import base = require( '@stdlib/ndarray/base' );
import ndarrayCastingModes = require( '@stdlib/ndarray/casting-modes' );
import ndarray = require( '@stdlib/ndarray/ctor' );
import ndarrayDataTypes = require( '@stdlib/ndarray/dtypes' );
import ind2sub = require( '@stdlib/ndarray/ind2sub' );
import ndarrayIndexModes = require( '@stdlib/ndarray/index-modes' );
import ndarrayMinDataType = require( '@stdlib/ndarray/min-dtype' );
import ndarrayNextDataType = require( '@stdlib/ndarray/next-dtype' );
import ndarrayOrders = require( '@stdlib/ndarray/orders' );
import ndarrayPromotionRules = require( '@stdlib/ndarray/promotion-rules' );
import ndarraySafeCasts = require( '@stdlib/ndarray/safe-casts' );
import ndarraySameKindCasts = require( '@stdlib/ndarray/same-kind-casts' );
import sub2ind = require( '@stdlib/ndarray/sub2ind' );

/**
* Interface describing the `ndarray` namespace.
*/
interface Namespace {
	/**
	* Returns a multidimensional array.
	*
	* @param buffer - data source
	* @param options - function options
	* @param options.buffer - data source
	* @param options.dtype - underlying storage data type (if the input data is not of the same type, this option specifies the data type to which to cast the input data) (default: 'float64')
	* @param options.order - specifies the memory layout of the array as either row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
	* @param options.shape - array shape
	* @param options.mode - specifies how to handle indices which exceed array dimensions (default: 'throw')
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw'])
	* @param options.copy - boolean indicating whether to copy source data to a new data buffer (default: false)
	* @param options.flatten - boolean indicating whether to automatically flatten generic array data sources (default: true)
	* @param options.ndmin - minimum number of dimensions (default: 0)
	* @param options.casting - casting rule used to determine what constitutes an acceptable cast (default: 'safe')
	* @throws must provide valid options
	* @throws must provide either an array shape, data source, or both
	* @throws invalid cast
	* @throws data source must be compatible with specified meta data
	* @returns ndarray instance
	*
	* @example
	* var arr = ns.array( [ [ 1, 2 ], [ 3, 4 ] ] );
	* // returns <ndarray>
	*
	* var v = arr.get( 0, 0 );
	* // returns 1
	*
	* @example
	* var opts = {
	*     'dtype': 'generic',
	*     'flatten': false
	* };
	*
	* var arr = ns.array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
	* // returns <ndarray>
	*
	* var v = arr.get( 0 );
	* // returns [ 1, 2 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/ns.array/float64' );
	*
	* var opts = {
	*     'shape': [ 2, 2 ]
	* };
	*
	* var arr = ns.array( new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), opts );
	* // returns <ndarray>
	*
	* var v = arr.get( 0, 0 );
	* // returns 1.0
	*/
	array: typeof array;

	/**
	* Base ndarray.
	*/
	base: typeof base;

	/**
	* Returns a list of ndarray casting modes.
	*
	* ## Notes
	*
	* -   The output array contains the following modes:
	*
	*     -   'none': only allow casting between identical types
	*     -   'equiv': allow casting between identical and byte swapped types
	*     -   'safe': only allow "safe" casts
	*     -   'same-kind': allow "safe" casts and casts within the same kind (e.g.,
	*    between signed integers or between floats)
	*     -   'unsafe': allow casting between all types (including between integers and
	*    floats)
	*
	* @returns list of ndarray casting modes
	*
	* @example
	* var list = ns.ndarrayCastingModes();
	* // returns [ 'none', 'equiv', 'safe', 'same-kind', 'unsafe' ]
	*/
	ndarrayCastingModes: typeof ndarrayCastingModes;

	/**
	* ndarray constructor.
	*
	* @param dtype - data type
	* @param buffer - data buffer
	* @param shape - array shape
	* @param strides - array strides
	* @param offset - index offset
	* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
	* @param options - function options
	* @param options.mode - specifies how to handle indices which exceed array dimensions (default: 'throw')
	* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw'])
	* @throws `buffer` argument `get` and `set` properties must be functions
	* @throws `shape` argument must be an array-like object containing nonnegative integers
	* @throws `shape` argument length must equal the number of dimensions
	* @throws `strides` argument must be an array-like object containing integers
	* @throws `strides` argument length must equal the number of dimensions (except for zero-dimensional arrays; in which case, the `strides` argument length must be equal to `1`)
	* @throws for zero-dimensional ndarrays, the `strides` argument must contain a single element equal to `0`
	* @throws `offset` argument must be a nonnegative integer
	* @throws `buffer` argument must be compatible with specified meta data
	* @throws must provide valid options
	* @throws too many dimensions
	* @returns ndarray instance
	*
	* @example
	* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var shape = [ 3, 2 ];
	* var strides = [ 2, 1 ];
	* var offset = 0;
	*
	* var out = ns.ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
	*/
	ndarray: typeof ndarray;

	/**
	* Returns a list of ndarray data types.
	*
	* ## Notes
	*
	* -   The output array contains the following data types:
	*
	*     -   `binary`: binary.
	*     -   `complex64`: single-precision complex floating-point numbers.
	*     -   `complex128`: double-precision complex floating-point numbers.
	*     -   `float32`: single-precision floating-point numbers.
	*     -   `float64`: double-precision floating-point numbers.
	*     -   `generic`: values of any type.
	*     -   `int16`: signed 16-bit integers.
	*     -   `int32`: signed 32-bit integers.
	*     -   `int8`: signed 8-bit integers.
	*     -   `uint16`: unsigned 16-bit integers.
	*     -   `uint32`: unsigned 32-bit integers.
	*     -   `uint8`: unsigned 8-bit integers.
	*     -   `uint8c`: unsigned clamped 8-bit integers.
	*
	* @returns list of ndarray data types
	*
	* @example
	* var list = ns.ndarrayDataTypes();
	* // returns [...]
	*/
	ndarrayDataTypes: typeof ndarrayDataTypes;

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
	*
	* @param shape - array shape
	* @param idx - linear index
	* @param options - function options
	* @param options.mode - specifies how to handle a linear index which exceeds array dimensions (default: 'throw')
	* @param options.order - specifies whether an array is row-major (C-style) or column-major (Fortran-style) (default: 'row-major')
	* @throws shape argument must be an array-like object containing nonnegative integers
	* @throws must provide valid options
	* @throws must provide a linear index which does not exceed array dimensions
	* @returns subscripts
	*
	* @example
	* var s = ns.ind2sub( [ 3, 3, 3 ], 17 );
	* // returns [ 1, 2, 2 ]
	*
	* @example
	* var shape = [ 3, 3, 3 ];
	* var out = [ 0, 0, 0 ];
	*
	* var s = ns.ind2sub.assign( shape, 17, out );
	* // returns [ 1, 2, 2 ]
	*
	* var bool = ( s === out );
	* // returns true
	*/
	ind2sub: typeof ind2sub;

	/**
	* Returns a list of ndarray index modes.
	*
	* ## Notes
	*
	* -   The output array contains the following modes:
	*
	*     -   throw: specifies that a function should throw an error when an index is
	*     outside a restricted interval.
	*     -   wrap: specifies that a function should wrap around an index using modulo
	*     arithmetic.
	*     -   clamp: specifies that a function should set an index less than zero to
	*     zero (minimum index) and set an index greater than a maximum index value to
	*     the maximum possible index.
	*
	* @returns list of ndarray index modes
	*
	* @example
	* var list = ns.ndarrayIndexModes();
	* // returns [ 'throw', 'clamp', 'wrap' ]
	*/
	ndarrayIndexModes: typeof ndarrayIndexModes;

	/**
	* Returns the minimum ndarray data type of the closest "kind" necessary for storing a provided scalar value.
	*
	* @param value - scalar value
	* @returns ndarray data type
	*
	* @example
	* var dt = ns.ndarrayMinDataType( 3.141592653589793 );
	* // returns 'float32'
	*
	* @example
	* var dt = ns.ndarrayMinDataType( 3 );
	* // returns 'uint8'
	*/
	ndarrayMinDataType: typeof ndarrayMinDataType;

	/**
	* Returns the next larger ndarray data type of the same kind.
	*
	* ## Notes
	*
	* -   If not provided a data type, the function returns a table.
	* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
	* -   If provided an unrecognized data type, the function returns `null`.
	*
	* @param dtype - ndarray data type
	* @returns next larger data type(s) or null
	*
	* @example
	* var dt = ns.ndarrayNextDataType( 'float32' );
	* // returns 'float64'
	*/
	ndarrayNextDataType: typeof ndarrayNextDataType;

	/**
	* Returns a list of ndarray orders.
	*
	* ## Notes
	*
	* -   The output array contains the following orders:
	*
	*     -   row-major: row-major (C-style) order.
	*     -   column-major: column-major (Fortran-style) order.
	*
	* @returns list of ndarray orders
	*
	* @example
	* var list = ns.ndarrayOrders();
	* // returns [ 'row-major', 'column-major' ]
	*/
	ndarrayOrders: typeof ndarrayOrders;

	/**
	* Returns a type promotion table displaying the ndarray data types with the smallest size and closest "kind" to which ndarray data types can be safely cast.
	*
	* @returns promotion rule table
	*
	* @example
	* var table = ns.ndarrayPromotionRules();
	* // returns {...}
	*/
	ndarrayPromotionRules: typeof ndarrayPromotionRules;

	/**
	* Returns a list of ndarray data types to which a provided ndarray data type can be safely cast.
	*
	* ## Notes
	*
	* -   If not provided an ndarray data type, the function returns a casting table.
	* -   If provided an unrecognized ndarray data type, the function returns `null`.
	*
	* @param dtype - ndarray data type
	* @returns list of ndarray data types or null
	*
	* @example
	* var list = ns.ndarraySafeCasts( 'float32' );
	* // returns [...]
	*/
	ndarraySafeCasts: typeof ndarraySafeCasts;

	/**
	* Returns a list of ndarray data types to which a provided ndarray data type can be safely cast or cast within the same "kind".
	*
	* ## Notes
	*
	* -   If not provided an ndarray data type, the function returns a casting table.
	* -   If provided an unrecognized ndarray data type, the function returns `null`.
	*
	* @param dtype - ndarray data type
	* @returns list of ndarray data types or null
	*
	* @example
	* var list = ns.ndarraySameKindCasts( 'float32' );
	* // returns [...]
	*/
	ndarraySameKindCasts: typeof ndarraySameKindCasts;

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
	* -   If provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
	*
	*
	* @param shape - array shape
	* @param args - subscripts followed by an optional options object
	* @throws first argument must be an array-like object containing nonnegative integers
	* @throws subscripts must be integer valued
	* @throws must provide valid options
	* @throws must provide subscripts which do not exceed array dimensions
	* @throws number of subscripts much match the number of dimensions
	* @returns linear index
	*
	* @example
	* var i = ns.sub2ind( [ 3, 3, 3 ], 1, 2, 2 );
	* // returns 17
	*/
	sub2ind: typeof sub2ind;
}

/**
* Multidimensional arrays.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
