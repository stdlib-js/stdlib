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

import isBigInt = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isBigInt( 1 ); // $ExpectType boolean
	isBigInt( 'abc' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isBigInt(); // $ExpectError
	isBigInt( 1, 123 ); // $ExpectError
}

// Attached to main export is an `isPrimitive` method which returns a boolean...
{
	isBigInt.isPrimitive( 1 ); // $ExpectType boolean
	isBigInt.isPrimitive( Object( 1 ) ); // $ExpectType boolean
}

// The compiler throws an error if the `isPrimitive` method is provided an unsupported number of arguments...
{
	isBigInt.isPrimitive(); // $ExpectError
	isBigInt.isPrimitive( 1, 123 ); // $ExpectError
}

// Attached to main export is an `isObject` method which returns a boolean...
{
	isBigInt.isObject( 1 ); // $ExpectType boolean
	isBigInt.isObject( Object( 1 ) ); // $ExpectType boolean
}

// The compiler throws an error if the `isObject` method is provided an unsupported number of arguments...
{
	isBigInt.isObject(); // $ExpectError
	isBigInt.isObject( 1, 123 ); // $ExpectError
}
