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

import isBooleanArray = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isBooleanArray( [ 'beep' ] ); // $ExpectType boolean
	isBooleanArray( [ true, false, true ] ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isBooleanArray(); // $ExpectError
	isBooleanArray( [ true, false ], 123 ); // $ExpectError
}

// Attached to main export is a `primitives` method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isBooleanArray.primitives( [ new Boolean( true ) ] ); // $ExpectType boolean
	isBooleanArray.primitives( [ true ] ); // $ExpectType boolean
}

// The compiler throws an error if the `primitives` method is provided an unsupported number of arguments...
{
	isBooleanArray.primitives(); // $ExpectError
	isBooleanArray.primitives( [ true ], 123 ); // $ExpectError
}


// Attached to main export is an `objects` method which returns a boolean...
{
	// tslint:disable-next-line:no-construct
	isBooleanArray.objects( [ new Boolean( true ) ] ); // $ExpectType boolean
	isBooleanArray.objects( [ true ] ); // $ExpectType boolean
}

// The compiler throws an error if the `objects` method is provided an unsupported number of arguments...
{
	isBooleanArray.objects(); // $ExpectError
	isBooleanArray.objects( [ true ], 123 ); // $ExpectError
}
