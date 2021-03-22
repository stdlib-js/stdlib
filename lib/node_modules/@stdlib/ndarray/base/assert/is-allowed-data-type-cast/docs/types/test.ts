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

import isAllowedCast = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isAllowedCast( 'float32', 'float64', 'safe' ); // $ExpectType boolean
	isAllowedCast( 'float64', 'int32', 'safe' ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not a string...
{
	isAllowedCast( true, 'int32', 'safe' ); // $ExpectError
	isAllowedCast( false, 'int32', 'safe' ); // $ExpectError
	isAllowedCast( null, 'int32', 'safe' ); // $ExpectError
	isAllowedCast( undefined, 'int32', 'safe' ); // $ExpectError
	isAllowedCast( 123, 'int32', 'safe' ); // $ExpectError
	isAllowedCast( [], 'int32', 'safe' ); // $ExpectError
	isAllowedCast( {}, 'int32', 'safe' ); // $ExpectError
	isAllowedCast( ( x: number ): number => x, 'int32', 'safe' ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a string...
{
	isAllowedCast( 'float64', true, 'safe' ); // $ExpectError
	isAllowedCast( 'float64', false, 'safe' ); // $ExpectError
	isAllowedCast( 'float64', null, 'safe' ); // $ExpectError
	isAllowedCast( 'float64', undefined, 'safe' ); // $ExpectError
	isAllowedCast( 'float64', 123, 'safe' ); // $ExpectError
	isAllowedCast( 'float64', [], 'safe' ); // $ExpectError
	isAllowedCast( 'float64', {}, 'safe' ); // $ExpectError
	isAllowedCast( 'float64', ( x: number ): number => x, 'safe' ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a string...
{
	isAllowedCast( 'float64', 'int32', true ); // $ExpectError
	isAllowedCast( 'float64', 'int32', false ); // $ExpectError
	isAllowedCast( 'float64', 'int32', null ); // $ExpectError
	isAllowedCast( 'float64', 'int32', undefined ); // $ExpectError
	isAllowedCast( 'float64', 'int32', 123 ); // $ExpectError
	isAllowedCast( 'float64', 'int32', [] ); // $ExpectError
	isAllowedCast( 'float64', 'int32', {} ); // $ExpectError
	isAllowedCast( 'float64', 'int32', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isAllowedCast(); // $ExpectError
	isAllowedCast( 'float64' ); // $ExpectError
	isAllowedCast( 'float64', 'int32' ); // $ExpectError
}
