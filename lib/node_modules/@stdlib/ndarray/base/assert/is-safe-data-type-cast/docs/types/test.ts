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

import isSafeCast = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSafeCast( 'float32', 'float64' ); // $ExpectType boolean
	isSafeCast( 'float64', 'int32' ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not a string...
{
	isSafeCast( true, 'int32' ); // $ExpectError
	isSafeCast( false, 'int32' ); // $ExpectError
	isSafeCast( null, 'int32' ); // $ExpectError
	isSafeCast( undefined, 'int32' ); // $ExpectError
	isSafeCast( 123, 'int32' ); // $ExpectError
	isSafeCast( [], 'int32' ); // $ExpectError
	isSafeCast( {}, 'int32' ); // $ExpectError
	isSafeCast( ( x: number ): number => x, 'int32' ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a string...
{
	isSafeCast( 'float64', true ); // $ExpectError
	isSafeCast( 'float64', false ); // $ExpectError
	isSafeCast( 'float64', null ); // $ExpectError
	isSafeCast( 'float64', undefined ); // $ExpectError
	isSafeCast( 'float64', 123 ); // $ExpectError
	isSafeCast( 'float64', [] ); // $ExpectError
	isSafeCast( 'float64', {} ); // $ExpectError
	isSafeCast( 'float64', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSafeCast(); // $ExpectError
	isSafeCast( 'float64' ); // $ExpectError
}
