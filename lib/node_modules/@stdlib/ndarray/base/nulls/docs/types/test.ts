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

import nulls = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	nulls( 'generic', [ 2, 2 ], 'row-major' ); // $ExpectType genericndarray<null>
	nulls( 'generic', [ 2, 2 ], 'column-major' ); // $ExpectType genericndarray<null>
}

// The compiler throws an error if the function is provided a first argument which is an unrecognized/unsupported data type...
{
	nulls( '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	nulls( 10, [ 2, 2 ], 'row-major' ); // $ExpectError
	nulls( false, [ 2, 2 ], 'row-major' ); // $ExpectError
	nulls( true, [ 2, 2 ], 'row-major' ); // $ExpectError
	nulls( null, [ 2, 2 ], 'row-major' ); // $ExpectError
	nulls( [], [ 2, 2 ], 'row-major' ); // $ExpectError
	nulls( {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	nulls( ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the second argument...
{
	nulls( 'generic', '10', 'row-major' ); // $ExpectError
	nulls( 'generic', 10, 'row-major' ); // $ExpectError
	nulls( 'generic', false, 'row-major' ); // $ExpectError
	nulls( 'generic', true, 'row-major' ); // $ExpectError
	nulls( 'generic', null, 'row-major' ); // $ExpectError
	nulls( 'generic', undefined, 'row-major' ); // $ExpectError
	nulls( 'generic', [ '5' ], 'row-major' ); // $ExpectError
	nulls( 'generic', {}, 'row-major' ); // $ExpectError
	nulls( 'generic', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the third argument...
{
	nulls( 'generic', [ 2, 2 ], '10' ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], 10 ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], false ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], true ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], null ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], undefined ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], [ '5' ] ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], {} ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nulls( 'generic' ); // $ExpectError
	nulls( 'generic', [ 2, 2 ] ); // $ExpectError
	nulls( 'generic', [ 2, 2 ], 'row-major', 1 ); // $ExpectError
}
