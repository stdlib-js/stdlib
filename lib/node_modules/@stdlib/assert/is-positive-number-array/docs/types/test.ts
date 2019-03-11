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

import isPositiveNumberArray = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isPositiveNumberArray( [ 3.9 ] ); // $ExpectType boolean
	isPositiveNumberArray( [ -2 ] ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isPositiveNumberArray(); // $ExpectError
	isPositiveNumberArray( [ 2.8 ], 123 ); // $ExpectError
}

// Attached to main export is a `primitives` method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isPositiveNumberArray.primitives( [ new Number( 2.8 ) ] ); // $ExpectType boolean
	isPositiveNumberArray.primitives( [ 2.8 ] ); // $ExpectType boolean
}

// The compiler throws an error if the `primitives` method is provided an unsupported number of arguments...
{
	isPositiveNumberArray.primitives(); // $ExpectError
	isPositiveNumberArray.primitives( [ 2 ], 123 ); // $ExpectError
}


// Attached to main export is an `objects` method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isPositiveNumberArray.objects( [ new Number( 2 ) ] ); // $ExpectType boolean
	isPositiveNumberArray.objects( [ 2 ] ); // $ExpectType boolean
}

// The compiler throws an error if the `objects` method is provided an unsupported number of arguments...
{
	isPositiveNumberArray.objects(); // $ExpectError
	isPositiveNumberArray.objects( [ 2 ], 123 ); // $ExpectError
}
