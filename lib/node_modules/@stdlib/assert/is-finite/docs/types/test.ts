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

import isFinite = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isFinite( 3 ); // $ExpectType boolean
	isFinite( 1 / 0 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isFinite(); // $ExpectError
	isFinite( 4, 123 ); // $ExpectError
}

// Attached to main export is an isPrimitive method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isFinite.isPrimitive( new Number( 4 ) ); // $ExpectType boolean
	isFinite.isPrimitive( 4 ); // $ExpectType boolean
}

// The compiler throws an error if the isPrimitive method is provided an unsupported number of arguments...
{
	isFinite.isPrimitive(); // $ExpectError
	isFinite.isPrimitive( 4, 123 ); // $ExpectError
}


// Attached to main export is an isPrimitive method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isFinite.isObject( new Number( 4 ) ); // $ExpectType boolean
	isFinite.isObject( 4 ); // $ExpectType boolean
}

// The compiler throws an error if the isObject method is provided an unsupported number of arguments...
{
	isFinite.isObject(); // $ExpectError
	isFinite.isObject( 4, 123 ); // $ExpectError
}
