/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/unified-signatures */

/// <reference types="@stdlib/types"/>

import { DataType, Order, ndarray } from '@stdlib/types/ndarray';
import ArrayBuffer = require( '@stdlib/array/buffer' );

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Array order (either 'row-major' (C-style) or 'column-major' (Fortran-style)).
	*/
	order?: Order;

	/**
	* Boolean indicating whether an array should be read-only (default: false).
	*/
	readonly?: boolean;
}

/**
* Interface defining an ndarray constructor which is both "newable" and "callable".
*/
interface Tensor0D {
	/**
	* Creates a zero-dimensional ndarray.
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	*
	* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
	*
	* var arr = new Float64Tensor0D();
	* // returns <ndarray>[ 0.0 ]
	*/
	new ( options?: Options ): ndarray;

	/**
	* Creates a zero-dimensional ndarray.
	*
	* @param value - scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	*
	* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
	*
	* var arr = new Float64Tensor0D( 1.0 );
	* // returns <ndarray>[ 1.0 ]
	*/
	new ( value: unknown, options?: Options ): ndarray;

	/**
	* Creates a zero-dimensional ndarray.
	*
	* @param buffer - underlying ArrayBuffer
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
	*
	* var buf = new ArrayBuffer( 8 );
	* var arr = new Float64Tensor0D( buf );
	* // returns <ndarray>[ 0.0 ]
	*/
	new ( buffer: ArrayBuffer, options?: Options ): ndarray;

	/**
	* Creates a zero-dimensional ndarray.
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Float64Tensor0D( buf, 8 );
	* // returns <ndarray>[ 0.0 ]
	*/
	new ( buffer: ArrayBuffer, byteOffset: number, options?: Options ): ndarray;

	/**
	* Creates a zero-dimensional ndarray.
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	*
	* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
	*
	* var arr = new Float64Tensor0D();
	* // returns <ndarray>[ 0.0 ]
	*/
	( options?: Options ): ndarray;

	/**
	* Creates a zero-dimensional ndarray.
	*
	* @param value - scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	*
	* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
	*
	* var arr = new Float64Tensor0D( 1.0 );
	* // returns <ndarray>[ 1.0 ]
	*/
	( value: unknown, options?: Options ): ndarray;

	/**
	* Creates a zero-dimensional ndarray.
	*
	* @param buffer - underlying ArrayBuffer
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
	*
	* var buf = new ArrayBuffer( 8 );
	* var arr = new Float64Tensor0D( buf );
	* // returns <ndarray>[ 0.0 ]
	*/
	( buffer: ArrayBuffer, options?: Options ): ndarray;

	/**
	* Creates a zero-dimensional ndarray.
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Float64Tensor0D( buf, 8 );
	* // returns <ndarray>[ 0.0 ]
	*/
	( buffer: ArrayBuffer, byteOffset: number, options?: Options ): ndarray;
}

/**
* Returns a function for creating zero-dimensional ndarrays.
*
* @param dtype - data type
* @param defaultValue - default scalar value
* @param isValidScalar - function for checking whether a value is a valid scalar value
* @returns function for creating zero-dimensional ndarrays
*
* @example
* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
*
* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
*
* var arr = new Float64Tensor0D();
* // returns <ndarray>[ 0.0 ]
*
* @example
* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
*
* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
*
* var arr = new Float64Tensor0D( 1.0 );
* // returns <ndarray>[ 1.0 ]
*
* @example
* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
*
* var buf = new ArrayBuffer( 8 );
* var arr = new Float64Tensor0D( buf );
* // returns <ndarray>[ 0.0 ]
*
* @example
* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var Float64Tensor0D = factory( 'float64', 0.0, isNumber );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Float64Tensor0D( buf, 8 );
* // returns <ndarray>[ 0.0 ]
*/
declare function factory( dtype: DataType, defaultValue: unknown, isValidScalar: Function ): Tensor0D;


// EXPORTS //

export = factory;
