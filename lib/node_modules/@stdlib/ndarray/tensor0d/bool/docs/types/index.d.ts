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

import { Order, boolndarray } from '@stdlib/types/ndarray';
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
interface BooleanTensor0D {
	/**
	* Creates a boolean zero-dimensional ndarray.
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new BooleanTensor0D();
	* // returns <ndarray>[ false ]
	*/
	new ( options?: Options ): boolndarray;

	/**
	* Creates a boolean zero-dimensional ndarray.
	*
	* @param value - scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new BooleanTensor0D( true );
	* // returns <ndarray>[ true ]
	*/
	new ( value: boolean, options?: Options ): boolndarray;

	/**
	* Creates a boolean zero-dimensional ndarray.
	*
	* @param buffer - underlying ArrayBuffer
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 1 );
	* var arr = new BooleanTensor0D( buf );
	* // returns <ndarray>[ false ]
	*/
	new ( buffer: ArrayBuffer, options?: Options ): boolndarray;

	/**
	* Creates a boolean zero-dimensional ndarray.
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 9 );
	* var arr = new BooleanTensor0D( buf, 8 );
	* // returns <ndarray>[ false ]
	*/
	new ( buffer: ArrayBuffer, byteOffset: number, options?: Options ): boolndarray;

	/**
	* Creates a boolean zero-dimensional ndarray.
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new BooleanTensor0D();
	* // returns <ndarray>[ false ]
	*/
	( options?: Options ): boolndarray;

	/**
	* Creates a boolean zero-dimensional ndarray.
	*
	* @param value - scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new BooleanTensor0D( true );
	* // returns <ndarray>[ true ]
	*/
	( value: boolean, options?: Options ): boolndarray;

	/**
	* Creates a boolean zero-dimensional ndarray.
	*
	* @param buffer - underlying ArrayBuffer
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 1 );
	* var arr = new BooleanTensor0D( buf );
	* // returns <ndarray>[ false ]
	*/
	( buffer: ArrayBuffer, options?: Options ): boolndarray;

	/**
	* Creates a boolean zero-dimensional ndarray.
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	*
	* var buf = new ArrayBuffer( 9 );
	* var arr = new BooleanTensor0D( buf, 8 );
	* // returns <ndarray>[ false ]
	*/
	( buffer: ArrayBuffer, byteOffset: number, options?: Options ): boolndarray;
}

/**
* Creates a boolean zero-dimensional ndarray.
*
* @param arg - scalar or buffer
* @param byteOffset - integer byte offset specifying the location of the scalar value (default: 0)
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only ndarray
* @param options.order - memory layout (either row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var arr = new BooleanTensor0D();
* // returns <ndarray>[ false ]
*
* @example
* var arr = new BooleanTensor0D( true );
* // returns <ndarray>[ true ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 9 );
* var arr = new BooleanTensor0D( buf, 8 );
* // returns <ndarray>[ false ]
*/
declare var ctor: BooleanTensor0D;


// EXPORTS //

export = ctor;
