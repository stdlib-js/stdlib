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

import isMostlySafeCast = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isMostlySafeCast( 'float32', 'float64' ); // $ExpectType boolean
	isMostlySafeCast( 'float64', 'int32' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	isMostlySafeCast( true, 'int32' ); // $ExpectError
	isMostlySafeCast( false, 'int32' ); // $ExpectError
	isMostlySafeCast( null, 'int32' ); // $ExpectError
	isMostlySafeCast( undefined, 'int32' ); // $ExpectError
	isMostlySafeCast( 123, 'int32' ); // $ExpectError
	isMostlySafeCast( [], 'int32' ); // $ExpectError
	isMostlySafeCast( {}, 'int32' ); // $ExpectError
	isMostlySafeCast( ( x: number ): number => x, 'int32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	isMostlySafeCast( 'float64', true ); // $ExpectError
	isMostlySafeCast( 'float64', false ); // $ExpectError
	isMostlySafeCast( 'float64', null ); // $ExpectError
	isMostlySafeCast( 'float64', undefined ); // $ExpectError
	isMostlySafeCast( 'float64', 123 ); // $ExpectError
	isMostlySafeCast( 'float64', [] ); // $ExpectError
	isMostlySafeCast( 'float64', {} ); // $ExpectError
	isMostlySafeCast( 'float64', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isMostlySafeCast(); // $ExpectError
	isMostlySafeCast( 'float64' ); // $ExpectError
}
