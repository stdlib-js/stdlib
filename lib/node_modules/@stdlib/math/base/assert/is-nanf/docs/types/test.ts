/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import isnanf = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isnanf( NaN ); // $ExpectType boolean
	isnanf( 2 ); // $ExpectType boolean
	isnanf( 3 ); // $ExpectType boolean
}

// The function does not compile if provided a value other than a number...
{
	isnanf( true ); // $ExpectError
	isnanf( false ); // $ExpectError
	isnanf( null ); // $ExpectError
	isnanf( undefined ); // $ExpectError
	isnanf( [] ); // $ExpectError
	isnanf( {} ); // $ExpectError
	isnanf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isnanf(); // $ExpectError
	isnanf( undefined, 123 ); // $ExpectError
}
