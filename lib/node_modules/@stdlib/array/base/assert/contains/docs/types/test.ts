/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import contains = require( './index' );


// TESTS //

// The function returns a boolean...
{
	contains( [ 1, 2, 3 ], 2 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	contains( 5, 2 ); // $ExpectError
	contains( true, 2 ); // $ExpectError
	contains( false, 2 ); // $ExpectError
	contains( null, 2 ); // $ExpectError
	contains( {}, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	contains(); // $ExpectError
	contains( [ 1, 2, 3 ] ); // $ExpectError
	contains( [ 1, 2, 3 ], 2, 3 ); // $ExpectError
}

// Attached to the function is a `factory` method which returns a function...
{
	contains.factory( [ 1, 2, 3 ] ); // $ExpectType Unary
}

// The function returned by the `factory` method returns a boolean...
{
	const fcn = contains.factory( [ 1, 2, 3 ] );
	fcn( 2 ); // $ExpectType boolean
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	const fcn = contains.factory( [ 1, 2, 3 ] );

	fcn(); // $ExpectError
	fcn( 1, 2 ); // $ExpectError
}
