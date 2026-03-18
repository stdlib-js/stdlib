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

import { Order, ndarray, DataType, Mode } from '@stdlib/types/ndarray';

/**
* Interface describing "base" function options.
*/
interface BaseOptions {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype?: DataType;

	/**
	* Array order (either 'row-major' (C-style) or 'column-major' (Fortran-style)).
	*
	* ## Notes
	*
	* -   If provided, this option overrides the input array's inferred order.
	*/
	order?: Order;

	/**
	* Specifies how to handle a linear index which exceeds array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* Specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw']).
	*/
	submode?: Array<Mode>;
}

/**
* Interface describing function options.
*/
interface Options extends BaseOptions {
	/**
	* Underlying data type.
	*
	* ## Notes
	*
	* -   This option overrides the input array's inferred data type.
	*/
	dtype: DataType;
}

/**
* Copies an input ndarray to a new ndarray having the same shape and data type.
*
* ## Notes
*
* -   The function performs a full copy in which an ndarray's underlying data is copied to a new underlying data buffer.
*
* @param x - input array
* @param options - options
* @param options.dtype - output array data type
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var y = copy( x, {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*/
declare function copy<T extends ndarray = ndarray>( x: T, options: Options ): ndarray; // FIXME: we lose type specificity here. We should leverage the ndarray type map to ensure we resolve the correct output array type.

/**
* Copies an input ndarray to a new ndarray having the same shape and data type.
*
* ## Notes
*
* -   The function performs a full copy in which an ndarray's underlying data is copied to a new underlying data buffer.
*
* @param x - input array
* @param options - options
* @param options.order - specifies whether the output array is 'row-major' (C-style) or 'column-major' (Fortran-style)
* @param options.mode - specifies how to handle a linear index which exceeds array dimensions
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @returns output array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var sh = getShape( x );
* // returns [ 2, 2 ]
*
* var y = copy( x );
* // returns <ndarray>
*
* sh = getShape( y );
* // returns [ 2, 2 ]
*/
declare function copy<T extends ndarray = ndarray>( x: T, options?: BaseOptions ): T;


// EXPORTS //

export = copy;
