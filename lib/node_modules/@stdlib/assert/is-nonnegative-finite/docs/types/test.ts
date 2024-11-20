/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import isNonNegativeFinite = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isNonNegativeFinite( 1.2 ); // $ExpectType boolean
	isNonNegativeFinite( -1.2 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isNonNegativeFinite(); // $ExpectError
	isNonNegativeFinite( 2, 123 ); // $ExpectError
}

// Attached to main export is an `isPrimitive` method which returns a boolean...
{
	// eslint-disable-next-line no-new-wrappers
	isNonNegativeFinite.isPrimitive( new Number( 2 ) ); // $ExpectType boolean
	isNonNegativeFinite.isPrimitive( 2 ); // $ExpectType boolean
}

// The compiler throws an error if the `isPrimitive` method is provided an unsupported number of arguments...
{
	isNonNegativeFinite.isPrimitive(); // $ExpectError
	isNonNegativeFinite.isPrimitive( 2, 123 ); // $ExpectError
}

// Attached to main export is an `isObject` method which returns a boolean...
{
	// eslint-disable-next-line no-new-wrappers
	isNonNegativeFinite.isObject( new Number( 2 ) ); // $ExpectType boolean
	isNonNegativeFinite.isObject( 2 ); // $ExpectType boolean
}

// The compiler throws an error if the `isObject` method is provided an unsupported number of arguments...
{
	isNonNegativeFinite.isObject(); // $ExpectError
	isNonNegativeFinite.isObject( 2, 123 ); // $ExpectError
}
