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
/// <reference types="node"/>

import { Buffer } from 'buffer';
import { ArrayLike, TypedArray } from '@stdlib/types/array';
import { DataType, ndarray, Mode, Order } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Underlying storage data type (if the input data is not of the same type, this option specifies the data type to which to cast the input data) (default: 'float64').
	*/
	dtype?: DataType;

	/**
	* Specifies the memory layout of the array as either row-major (C-style) or column-major (Fortran-style) (default: 'row-major').
	*/
	order?: Order;

	/**
	* Array shape.
	*/
	shape?: ArrayLike<number>;

	/**
	* Specifies how to handle indices which exceed array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* Specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: ['throw']).
	*/
	submode?: Array<string>;

	/**
	* Boolean indicating whether to copy source data to a new data buffer (default: false).
	*/
	copy?: boolean;

	/**
	* Boolean indicating whether to automatically flatten generic array data sources (default: true).
	*/
	flatten?: boolean;

	/**
	* Minimum number of dimensions (default: 0).
	*/
	ndmin?: number;

	/**
	* Casting rule used to determine what constitutes an acceptable cast (default: 'safe').
	*/
	casting?: string;
}

/**
* Array or typed array.
*/
type ArrayOrBufferOrTypedArray = Array<any> | TypedArray | Buffer | null;

/**
* Returns a multidimensional array.
*
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
* var opts = {
*     'buffer': [ [ 1, 2 ], [ 3, 4 ] ],
*     'dtype': 'generic',
*     'flatten': false
* };
*
* var arr = array( opts );
* // returns <ndarray>
*
* var v = arr.get( 0 );
* // returns [ 1, 2 ]
*/
declare function array( options: Options ): ndarray;

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
* var arr = array( [ [ 1, 2 ], [ 3, 4 ] ] );
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
* var arr = array( [ [ 1, 2 ], [ 3, 4 ] ], opts );
* // returns <ndarray>
*
* var v = arr.get( 0 );
* // returns [ 1, 2 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var opts = {
*     'shape': [ 2, 2 ]
* };
*
* var arr = array( new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), opts );
* // returns <ndarray>
*
* var v = arr.get( 0, 0 );
* // returns 1.0
*/
declare function array( buffer: ArrayOrBufferOrTypedArray, options?: Options ): ndarray; // tslint-disable-line max-line-length


// EXPORTS //

export = array;
