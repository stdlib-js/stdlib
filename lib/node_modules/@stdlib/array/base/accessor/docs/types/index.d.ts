/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { ArrayLike, AccessorArrayLike } from '@stdlib/types/array';

/**
* Class for creating a minimal array-like object supporting the accessor protocol from another array-like object.
*/
declare class AccessorArray<T> implements AccessorArrayLike<T> {
	/**
	* Accessor array constructor.
	*
	* @param arr - input array
	* @returns accessor array
	*
	* @example
	* var arr = new AccessorArray( [ 1, 2, 3 ] );
	* // returns <AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*/
	constructor( arr: ArrayLike<T> );

	/**
	* Number of array elements.
	*
	* @example
	* var arr = new AccessorArray( [ 1, 2, 3 ] );
	* // returns <AccessorArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	length: number;

	/**
	* Returns an array element.
	*
	* @param i - element index
	* @returns array element
	*
	* @example
	* var arr = new AccessorArray( [ 1, 2, 3 ] );
	* // returns <AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*/
	get( i: number ): T;

	/**
	* Sets an array element.
	*
	* @param value - value
	* @param i - element index at which to start writing values (default: 0)
	*
	* @example
	* var arr = new AccessorArray( [ 1, 2, 3 ] );
	* // returns <AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*
	* arr.set( 5, 0 );
	*
	* v = arr.get( 0 );
	* // returns 5
	*/
	set( value: T, i?: number ): void;
}

/**
* Interface defining an accessor array constructor which is both "newable" and "callable".
*/
interface AccessorArrayConstructor {
	/**
	* Accessor array constructor.
	*
	* @param arr - input array
	* @returns accessor array
	*
	* @example
	* var arr = new AccessorArray( [ 1, 2, 3 ] );
	* // returns <AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*/
	new <T>( arr: ArrayLike<T> ): AccessorArray<T>;

	/**
	* Accessor array constructor.
	*
	* @param arr - input array
	* @returns accessor array
	*
	* @example
	* var arr = new AccessorArray( [ 1, 2, 3 ] );
	* // returns <AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*/
	<T>( arr: ArrayLike<T> ): AccessorArray<T>;
}

/**
* Accessor array constructor.
*
* @param arr - input array
* @returns accessor array
*
* @example
* var arr = new AccessorArray( [ 1, 2, 3 ] );
* // returns <AccessorArray>
*
* var v = arr.get( 0 );
* // returns 1
*/
declare var ctor: AccessorArrayConstructor;


// EXPORTS //

export = ctor;
