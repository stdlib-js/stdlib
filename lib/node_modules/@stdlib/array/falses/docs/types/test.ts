/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import falses = require( './index' );


// TESTS //

// The function returns an array...
{
	falses( 10 ); // $ExpectType BooleanArray
	falses( 10, 'generic' ); // $ExpectType false[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	falses( '5' ); // $ExpectError
	falses( false ); // $ExpectError
	falses( true ); // $ExpectError
	falses( null ); // $ExpectError
	falses( undefined ); // $ExpectError
	falses( [] ); // $ExpectError
	falses( {} ); // $ExpectError
	falses( ( x: number ): number => x ); // $ExpectError

	falses( '5', 'generic' ); // $ExpectError
	falses( false, 'generic' ); // $ExpectError
	falses( true, 'generic' ); // $ExpectError
	falses( null, 'generic' ); // $ExpectError
	falses( undefined, 'generic' ); // $ExpectError
	falses( [], 'generic' ); // $ExpectError
	falses( {}, 'generic' ); // $ExpectError
	falses( ( x: number ): number => x, 'generic' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	falses( 10, '10' ); // $ExpectError
	falses( 10, 10 ); // $ExpectError
	falses( 10, false ); // $ExpectError
	falses( 10, true ); // $ExpectError
	falses( 10, null ); // $ExpectError
	falses( 10, [] ); // $ExpectError
	falses( 10, {} ); // $ExpectError
	falses( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	falses(); // $ExpectError
	falses( 10, 'generic', 1 ); // $ExpectError
}
