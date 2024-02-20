/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import isSameValueZerof = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSameValueZerof( 3.14, 3.14 ); // $ExpectType boolean
}

// The compiler throws an error if the function is not provided a first argument which is a number...
{
	isSameValueZerof( '5', 3.14 ); // $ExpectError
	isSameValueZerof( true, 3.14 ); // $ExpectError
	isSameValueZerof( false, 3.14 ); // $ExpectError
	isSameValueZerof( null, 3.14 ); // $ExpectError
	isSameValueZerof( void 0, 3.14 ); // $ExpectError
	isSameValueZerof( [], 3.14 ); // $ExpectError
	isSameValueZerof( {}, 3.14 ); // $ExpectError
	isSameValueZerof( ( x: number ): number => x, 3.14 ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is a number...
{
	isSameValueZerof( 3.14, '5' ); // $ExpectError
	isSameValueZerof( 3.14, true ); // $ExpectError
	isSameValueZerof( 3.14, false ); // $ExpectError
	isSameValueZerof( 3.14, null ); // $ExpectError
	isSameValueZerof( 3.14, void 0 ); // $ExpectError
	isSameValueZerof( 3.14, [] ); // $ExpectError
	isSameValueZerof( 3.14, {} ); // $ExpectError
	isSameValueZerof( 3.14, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSameValueZerof(); // $ExpectError
	isSameValueZerof( 3.14 ); // $ExpectError
	isSameValueZerof( 3.14, 3.14, 3.14 ); // $ExpectError
}
