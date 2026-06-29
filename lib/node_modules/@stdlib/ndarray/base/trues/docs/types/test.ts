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

import trues = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	trues( 'bool', [ 2, 2 ], 'row-major' ); // $ExpectType boolndarray
	trues( 'bool', [ 2, 2 ], 'column-major' ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is an unrecognized/unsupported data type...
{
	trues( '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	trues( 10, [ 2, 2 ], 'row-major' ); // $ExpectError
	trues( false, [ 2, 2 ], 'row-major' ); // $ExpectError
	trues( true, [ 2, 2 ], 'row-major' ); // $ExpectError
	trues( null, [ 2, 2 ], 'row-major' ); // $ExpectError
	trues( [], [ 2, 2 ], 'row-major' ); // $ExpectError
	trues( {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	trues( ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the second argument...
{
	trues( 'bool', '10', 'row-major' ); // $ExpectError
	trues( 'bool', 10, 'row-major' ); // $ExpectError
	trues( 'bool', false, 'row-major' ); // $ExpectError
	trues( 'bool', true, 'row-major' ); // $ExpectError
	trues( 'bool', null, 'row-major' ); // $ExpectError
	trues( 'bool', undefined, 'row-major' ); // $ExpectError
	trues( 'bool', [ '5' ], 'row-major' ); // $ExpectError
	trues( 'bool', {}, 'row-major' ); // $ExpectError
	trues( 'bool', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the third argument...
{
	trues( 'bool', [ 2, 2 ], '10' ); // $ExpectError
	trues( 'bool', [ 2, 2 ], 10 ); // $ExpectError
	trues( 'bool', [ 2, 2 ], false ); // $ExpectError
	trues( 'bool', [ 2, 2 ], true ); // $ExpectError
	trues( 'bool', [ 2, 2 ], null ); // $ExpectError
	trues( 'bool', [ 2, 2 ], undefined ); // $ExpectError
	trues( 'bool', [ 2, 2 ], [ '5' ] ); // $ExpectError
	trues( 'bool', [ 2, 2 ], {} ); // $ExpectError
	trues( 'bool', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	trues( 'bool' ); // $ExpectError
	trues( 'bool', [ 2, 2 ] ); // $ExpectError
	trues( 'bool', [ 2, 2 ], 'row-major', 1 ); // $ExpectError
}
