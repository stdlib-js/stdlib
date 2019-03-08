/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import isOdd = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isOdd( 3 ); // $ExpectType boolean
	isOdd( 4 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isOdd(); // $ExpectError
	isOdd( 3, 123 ); // $ExpectError
}

// Attached to main export is an isPrimitive method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isOdd.isPrimitive( new Number( 3 ) ); // $ExpectType boolean
	isOdd.isPrimitive( 3 ); // $ExpectType boolean
}

// The compiler throws an error if the isPrimitive method is provided an unsupported number of arguments...
{
	isOdd.isPrimitive(); // $ExpectError
	isOdd.isPrimitive( 3, 123 ); // $ExpectError
}


// Attached to main export is an isPrimitive method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isOdd.isObject( new Number( 3 ) ); // $ExpectType boolean
	isOdd.isObject( 3 ); // $ExpectType boolean
}

// The compiler throws an error if the isObject method is provided an unsupported number of arguments...
{
	isOdd.isObject(); // $ExpectError
	isOdd.isObject( 3, 123 ); // $ExpectError
}
