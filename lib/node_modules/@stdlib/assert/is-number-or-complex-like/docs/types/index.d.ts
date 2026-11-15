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

import { ComplexLike } from '@stdlib/types/complex';

/**
* Interface defining `isNumberOrComplexLike` with methods for testing for primitives and objects, respectively.
*/
interface IsNumber {
	/**
	* Tests if a value is a number or complex number-like object.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a number or complex number-like object
	*
	* @example
	* var bool = isNumberOrComplexLike( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isNumberOrComplexLike( new Number( 3.14 ) );
	* // returns true
	*
	* @example
	* var bool = isNumberOrComplexLike( NaN );
	* // returns true
	*
	* @example
	* var bool = isNumberOrComplexLike( null );
	* // returns false
	*
	* @example
	* var bool = isNumberOrComplexLike({
	*     're': 3.0,
	*     'im': 5.0
	* });
	* // returns true
	*/
	( value: any ): value is number | Number | ComplexLike;

	/**
	* Tests if a value is a number primitive or complex number-like object.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive or complex number-like object
	*
	* @example
	* var bool = isNumberOrComplexLike.isPrimitive( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isNumberOrComplexLike.isPrimitive( NaN );
	* // returns true
	*
	* @example
	* var bool = isNumberOrComplexLike.isPrimitive( new Number( 3.14 ) );
	* // returns false
	*
	* @example
	* var bool = isNumberOrComplexLike.isPrimitive({
	*     're': 3.0,
	*     'im': 5.0
	* });
	* // returns true
	*/
	isPrimitive( value: any ): value is number | ComplexLike;

	/**
	* Tests if a value is a number object or complex number-like object.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object or complex number-like object
	*
	* @example
	* var bool = isNumberOrComplexLike.isObject( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isNumberOrComplexLike.isObject( new Number( 3.14 ) );
	* // returns true
	*
	* @example
	* var bool = isNumberOrComplexLike.isObject({
	*     're': 3.0,
	*     'im': 5.0
	* });
	* // returns true
	*/
	isObject( value: any ): value is Number | ComplexLike;
}

/**
* Tests if a value is a number or complex number-like object.
*
* @param value - value to test
* @returns boolean indicating whether value is a number or complex number-like object
*
* @example
* var bool = isNumberOrComplexLike( 3.14 );
* // returns true
*
* @example
* var bool = isNumberOrComplexLike( new Number( 3.14 ) );
* // returns true
*
* @example
* var bool = isNumberOrComplexLike({
*     're': 3.0,
*     'im': 5.0
* });
* // returns true
*
* @example
* var bool = isNumberOrComplexLike( NaN );
* // returns true
*
* @example
* var bool = isNumberOrComplexLike( null );
* // returns false
*
* @example
* var bool = isNumberOrComplexLike.isPrimitive( 3.14 );
* // returns true
*
* @example
* var bool = isNumberOrComplexLike.isObject( new Number( 3.14 ) );
* // returns true
*/
declare var isNumberOrComplexLike: IsNumber;


// EXPORTS //

export = isNumberOrComplexLike;
