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

/// <reference types="@stdlib/types"/>

import { Order, genericndarray } from '@stdlib/types/ndarray';

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
interface GenericTensor0D {
	/**
	* Creates a "generic" zero-dimensional ndarray.
	*
	* @param value - scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new GenericTensor0D( 1.0 );
	* // returns <ndarray>[ 1.0 ]
	*/
	new <T = unknown>( value: T, options?: Options ): genericndarray<T>;

	/**
	* Creates a "generic" zero-dimensional ndarray.
	*
	* @param value - scalar value
	* @param options - function options
	* @param options.readonly - boolean indicating whether to return a read-only ndarray
	* @param options.order - memory layout (either row-major or column-major)
	* @returns zero-dimensional ndarray
	*
	* @example
	* var arr = new GenericTensor0D( 1.0 );
	* // returns <ndarray>[ 1.0 ]
	*/
	<T = unknown>( value: T, options?: Options ): genericndarray<T>;
}

/**
* Creates a "generic" zero-dimensional ndarray.
*
* @param value - scalar value
* @param options - function options
* @param options.readonly - boolean indicating whether to return a read-only ndarray
* @param options.order - memory layout (either row-major or column-major)
* @returns zero-dimensional ndarray
*
* @example
* var arr = new GenericTensor0D( 1.0 );
* // returns <ndarray>[ 1.0 ]
*/
declare var ctor: GenericTensor0D;


// EXPORTS //

export = ctor;
