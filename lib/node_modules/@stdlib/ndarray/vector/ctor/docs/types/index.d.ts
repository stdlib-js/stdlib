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

// TypeScript Version: 4.1

/* eslint-disable @typescript-eslint/unified-signatures */

/// <reference types="@stdlib/types"/>

import { TypedDataTypeMap, Order, Mode } from '@stdlib/types/ndarray';
import { Collection, AccessorArrayLike } from '@stdlib/types/array';
import { Iterator } from '@stdlib/types/iter';
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
	* Specifies how to handle a linear index which exceeds array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* Boolean indicating whether an array should be read-only (default: false).
	*/
	readonly?: boolean;
}

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param dtype - data type (default: 'float64')
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector();
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 0
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( 'float32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 0
*
* var dt = getDType( arr );
* // returns 'float32'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( 'float32', {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 0
*
* var dt = getDType( arr );
* // returns 'float32'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( dtype?: T, options?: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 0
*
* var dt = getDType( arr );
* // returns 'float64'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( options: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param length - vector length
* @param dtype - data type (default: 'float64')
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( 2, 'float32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float32'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( 2, 'float32', {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float32'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( length: number, dtype?: T, options?: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param length - vector length
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( 2, {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( length: number, options: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param obj - array-like object or iterable from which to generate a typed array
* @param dtype - data type (default: 'float64')
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( [ 1.0, 2.0 ] );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( [ 1, 2 ], 'int32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'int32'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( [ 1, 2 ], 'int32', {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'int32'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( obj: Collection<unknown> | AccessorArrayLike<unknown> | Iterator, dtype?: T, options?: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param obj - array-like object or iterable from which to generate a typed array
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
*
* var arr = vector( [ 1.0, 2.0 ], {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( obj: Collection<unknown> | AccessorArrayLike<unknown> | Iterator, options: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param buffer - underlying ArrayBuffer
* @param dtype - data type (default: 'float64')
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf, 'float32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 4
*
* var dt = getDType( arr );
* // returns 'float32'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf, 'float32', {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 4
*
* var dt = getDType( arr );
* // returns 'float32'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, dtype?: T, options?: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param buffer - underlying ArrayBuffer
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf, {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, options: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param buffer - underlying ArrayBuffer
* @param byteOffset - integer byte offset specifying the location of the first typed array element (default: 0)
* @param dtype - data type (default: 'float64')
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf, 8 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 1
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf, 8, 'float32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float32'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf, 8, 'float32', {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float32'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, byteOffset?: number, dtype?: T, options?: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param buffer - underlying ArrayBuffer
* @param byteOffset - integer byte offset specifying the location of the first typed array element
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf, 8 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 1
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = vector( buf, 8, {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float32'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, byteOffset: number, options: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param buffer - underlying ArrayBuffer
* @param byteOffset - integer byte offset specifying the location of the first typed array element (default: 0)
* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
* @param dtype - data type (default: 'float64')
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = vector( buf, 8, 2 );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = vector( buf, 8, 2, 'int32' );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'int32'
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = vector( buf, 8, 2, 'int32', {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'int32'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, byteOffset?: number, length?: number, dtype?: T, options?: Options ): TypedDataTypeMap[T];

/**
* Creates a vector (i.e., a one-dimensional ndarray).
*
* @param buffer - underlying ArrayBuffer
* @param byteOffset - integer byte offset specifying the location of the first typed array element
* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only vector
* @param options.mode - specifies how to handle indices which exceed vector dimensions
* @param options.order - memory layout (either row-major or column-major)
* @returns one-dimensional ndarray
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var getDType = require( '@stdlib/ndarray/dtype' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = vector( buf, 8, 2, {} );
* // returns <ndarray>
*
* var len = numel( arr );
* // returns 2
*
* var dt = getDType( arr );
* // returns 'float64'
*/
declare function vector<T extends keyof TypedDataTypeMap = 'float64'>( buffer: ArrayBuffer, byteOffset: number, length: number, options: Options ): TypedDataTypeMap[T];


// EXPORTS //

export = vector;
