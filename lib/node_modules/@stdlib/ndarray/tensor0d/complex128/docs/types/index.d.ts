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

import { Order, complex128ndarray } from '@stdlib/types/ndarray';
import { ComplexLike } from '@stdlib/types/complex';
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
interface Complex128Tensor0D {
	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new Complex128Tensor0D();
	* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
	*/
	new ( options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
	*
	* ## Notes
	*
	* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
	*
	* @param value - scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new Complex128Tensor0D( 1.0 );
	* // returns <ndarray>[ <Complex128>[ 1.0, 0.0 ] ]
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var arr = new Complex128Tensor0D( new Complex128( 1.0, 2.0 ) );
	* // returns <ndarray>[ <Complex128>[ 1.0, 2.0 ] ]
	*/
	new ( value: number | ComplexLike, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
	*
	* @param re - real component
	* @param im - imaginary component
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new Complex128Tensor0D( 1.0, 2.0 );
	* // returns <ndarray>[ <Complex128>[ 1.0, 2.0 ] ]
	*/
	new ( re: number, im: number, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
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
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex128Tensor0D( buf );
	* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
	*/
	new ( buffer: ArrayBuffer, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
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
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex128Tensor0D( buf, 16 );
	* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
	*/
	new ( buffer: ArrayBuffer, byteOffset: number, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
	*
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new Complex128Tensor0D();
	* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
	*/
	( options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
	*
	* ## Notes
	*
	* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
	*
	* @param value - scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new Complex128Tensor0D( 1.0 );
	* // returns <ndarray>[ <Complex128>[ 1.0, 0.0 ] ]
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var arr = new Complex128Tensor0D( new Complex128( 1.0, 2.0 ) );
	* // returns <ndarray>[ <Complex128>[ 1.0, 2.0 ] ]
	*/
	( value: number | ComplexLike, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
	*
	* @param re - real component
	* @param im - imaginary component
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new Complex128Tensor0D( 1.0, 2.0 );
	* // returns <ndarray>[ <Complex128>[ 1.0, 2.0 ] ]
	*/
	( re: number, im: number, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
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
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex128Tensor0D( buf );
	* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
	*/
	( buffer: ArrayBuffer, options?: Options ): complex128ndarray;

	/**
	* Creates a double-precision complex floating-point zero-dimensional ndarray.
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
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex128Tensor0D( buf, 16 );
	* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
	*/
	( buffer: ArrayBuffer, byteOffset: number, options?: Options ): complex128ndarray;
}

/**
* Creates a double-precision complex floating-point zero-dimensional ndarray.
*
* ## Notes
*
* -   If provided a number, the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar value and whose imaginary component is zero.
*
* @param arg0 - scalar, real component, or buffer
* @param arg1 - byte offset or imaginary component
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only ndarray
* @param options.order - memory layout (either row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var arr = new Complex128Tensor0D();
* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
*
* @example
* var arr = new Complex128Tensor0D( 1.0 );
* // returns <ndarray>[ <Complex128>[ 1.0, 0.0 ] ]
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var arr = new Complex128Tensor0D( new Complex128( 1.0, 2.0 ) );
* // returns <ndarray>[ <Complex128>[ 1.0, 2.0 ] ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex128Tensor0D( buf, 16 );
* // returns <ndarray>[ <Complex128>[ 0.0, 0.0 ] ]
*/
declare var ctor: Complex128Tensor0D;


// EXPORTS //

export = ctor;
