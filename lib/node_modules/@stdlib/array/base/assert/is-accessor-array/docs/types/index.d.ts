/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import { Collection } from '@stdlib/types/array';

/**
* Interface defining an array-like object supporting the accessor (get/set) protocol.
*/
interface AccessorArray {
	/**
	* Number of elements.
	*/
	length: number;

	/**
	* Returns an array element.
	*
	* @param i - element index
	* @returns array element
	*/
	get( i: number ): any;

	/**
	* Sets an array element.
	*
	* @param value - value(s)
	* @param i - element index at which to start writing values (default: 0)
	*/
	set( value: any, i?: number ): void;
}

/**
* Tests if an array-like object supports the accessor (get/set) protocol.
*
* @param value - value to test
* @returns boolean indicating whether a value is an accessor array
*
* @example
* var Complex128Array = require( `@stdlib/array/complex128` );
*
* var arr = new Complex128Array( 10 );
* var bool = isAccessorArray( arr );
* // returns true
*
* @example
* var bool = isAccessorArray( [] );
* // returns false
*/
declare function isAccessorArray( value: Collection | AccessorArray ): value is AccessorArray;


// EXPORTS //

export = isAccessorArray;
