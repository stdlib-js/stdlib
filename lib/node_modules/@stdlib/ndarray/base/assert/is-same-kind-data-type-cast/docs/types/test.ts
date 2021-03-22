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

import isSameKindCast = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSameKindCast( 'float32', 'float64' ); // $ExpectType boolean
	isSameKindCast( 'float64', 'int32' ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not a string...
{
	isSameKindCast( true, 'int32' ); // $ExpectError
	isSameKindCast( false, 'int32' ); // $ExpectError
	isSameKindCast( null, 'int32' ); // $ExpectError
	isSameKindCast( undefined, 'int32' ); // $ExpectError
	isSameKindCast( 123, 'int32' ); // $ExpectError
	isSameKindCast( [], 'int32' ); // $ExpectError
	isSameKindCast( {}, 'int32' ); // $ExpectError
	isSameKindCast( ( x: number ): number => x, 'int32' ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a string...
{
	isSameKindCast( 'float64', true ); // $ExpectError
	isSameKindCast( 'float64', false ); // $ExpectError
	isSameKindCast( 'float64', null ); // $ExpectError
	isSameKindCast( 'float64', undefined ); // $ExpectError
	isSameKindCast( 'float64', 123 ); // $ExpectError
	isSameKindCast( 'float64', [] ); // $ExpectError
	isSameKindCast( 'float64', {} ); // $ExpectError
	isSameKindCast( 'float64', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isSameKindCast(); // $ExpectError
	isSameKindCast( 'float64' ); // $ExpectError
}
