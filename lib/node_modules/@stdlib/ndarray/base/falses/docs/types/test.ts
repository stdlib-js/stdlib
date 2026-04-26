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

// The function returns an ndarray...
{
	falses( 'bool', [ 2, 2 ], 'row-major' ); // $ExpectType boolndarray
	falses( 'bool', [ 2, 2 ], 'column-major' ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is an unrecognized/unsupported data type...
{
	falses( '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	falses( 10, [ 2, 2 ], 'row-major' ); // $ExpectError
	falses( false, [ 2, 2 ], 'row-major' ); // $ExpectError
	falses( true, [ 2, 2 ], 'row-major' ); // $ExpectError
	falses( null, [ 2, 2 ], 'row-major' ); // $ExpectError
	falses( [], [ 2, 2 ], 'row-major' ); // $ExpectError
	falses( {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	falses( ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the second argument...
{
	falses( 'bool', '10', 'row-major' ); // $ExpectError
	falses( 'bool', 10, 'row-major' ); // $ExpectError
	falses( 'bool', false, 'row-major' ); // $ExpectError
	falses( 'bool', true, 'row-major' ); // $ExpectError
	falses( 'bool', null, 'row-major' ); // $ExpectError
	falses( 'bool', undefined, 'row-major' ); // $ExpectError
	falses( 'bool', [ '5' ], 'row-major' ); // $ExpectError
	falses( 'bool', {}, 'row-major' ); // $ExpectError
	falses( 'bool', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the third argument...
{
	falses( 'bool', [ 2, 2 ], '10' ); // $ExpectError
	falses( 'bool', [ 2, 2 ], 10 ); // $ExpectError
	falses( 'bool', [ 2, 2 ], false ); // $ExpectError
	falses( 'bool', [ 2, 2 ], true ); // $ExpectError
	falses( 'bool', [ 2, 2 ], null ); // $ExpectError
	falses( 'bool', [ 2, 2 ], undefined ); // $ExpectError
	falses( 'bool', [ 2, 2 ], [ '5' ] ); // $ExpectError
	falses( 'bool', [ 2, 2 ], {} ); // $ExpectError
	falses( 'bool', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	falses( 'bool' ); // $ExpectError
	falses( 'bool', [ 2, 2 ] ); // $ExpectError
	falses( 'bool', [ 2, 2 ], 'row-major', 1 ); // $ExpectError
}
