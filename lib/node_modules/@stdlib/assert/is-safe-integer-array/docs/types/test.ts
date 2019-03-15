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

import isSafeIntegerArray = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSafeIntegerArray( [ 4 ] ); // $ExpectType boolean
	isSafeIntegerArray( [ 2.8 ] ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSafeIntegerArray(); // $ExpectError
	isSafeIntegerArray( [ -3 ], 123 ); // $ExpectError
}

// Attached to main export is a `primitives` method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isSafeIntegerArray.primitives( [ new Number( 3 ) ] ); // $ExpectType boolean
	isSafeIntegerArray.primitives( [ 3 ] ); // $ExpectType boolean
}

// The compiler throws an error if the `primitives` method is provided an unsupported number of arguments...
{
	isSafeIntegerArray.primitives(); // $ExpectError
	isSafeIntegerArray.primitives( [ 2 ], 123 ); // $ExpectError
}

// Attached to main export is an `objects` method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isSafeIntegerArray.objects( [ new Number( -2 ) ] ); // $ExpectType boolean
	isSafeIntegerArray.objects( [ -2 ] ); // $ExpectType boolean
}

// The compiler throws an error if the `objects` method is provided an unsupported number of arguments...
{
	isSafeIntegerArray.objects(); // $ExpectError
	isSafeIntegerArray.objects( [ 2 ], 123 ); // $ExpectError
}
