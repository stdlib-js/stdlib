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

import isInteger = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isInteger( 1.2 ); // $ExpectType boolean
	isInteger( 2 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isInteger(); // $ExpectError
	isInteger( 2, 123 ); // $ExpectError
}

// Attached to main export is an isPrimitive method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isInteger.isPrimitive( new Number( 2 ) ); // $ExpectType boolean
	isInteger.isPrimitive( 2 ); // $ExpectType boolean
}

// The compiler throws an error if the isPrimitive method is provided an unsupported number of arguments...
{
	isInteger.isPrimitive(); // $ExpectError
	isInteger.isPrimitive( 2, 123 ); // $ExpectError
}


// Attached to main export is an isPrimitive method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isInteger.isObject( new Number( 2 ) ); // $ExpectType boolean
	isInteger.isObject( 2 ); // $ExpectType boolean
}

// The compiler throws an error if the isObject method is provided an unsupported number of arguments...
{
	isInteger.isObject(); // $ExpectError
	isInteger.isObject( 2, 123 ); // $ExpectError
}
