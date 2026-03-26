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

import nans = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	nans( 'float64', [ 2, 2 ], 'row-major' ); // $ExpectType float64ndarray
	nans( 'float32', [ 2, 2 ], 'row-major' ); // $ExpectType float32ndarray
	nans( 'complex128', [ 2, 2 ], 'row-major' ); // $ExpectType complex128ndarray
	nans( 'complex64', [ 2, 2 ], 'row-major' ); // $ExpectType complex64ndarray
	nans( 'generic', [ 2, 2 ], 'row-major' ); // $ExpectType genericndarray<number>

	nans( 'float64', [ 2, 2 ], 'column-major' ); // $ExpectType float64ndarray
	nans( 'float32', [ 2, 2 ], 'column-major' ); // $ExpectType float32ndarray
	nans( 'complex128', [ 2, 2 ], 'column-major' ); // $ExpectType complex128ndarray
	nans( 'complex64', [ 2, 2 ], 'column-major' ); // $ExpectType complex64ndarray
	nans( 'generic', [ 2, 2 ], 'column-major' ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is an unrecognized/unsupported data type...
{
	nans( '10', [ 2, 2 ], 'row-major' ); // $ExpectError
	nans( 10, [ 2, 2 ], 'row-major' ); // $ExpectError
	nans( false, [ 2, 2 ], 'row-major' ); // $ExpectError
	nans( true, [ 2, 2 ], 'row-major' ); // $ExpectError
	nans( null, [ 2, 2 ], 'row-major' ); // $ExpectError
	nans( [], [ 2, 2 ], 'row-major' ); // $ExpectError
	nans( {}, [ 2, 2 ], 'row-major' ); // $ExpectError
	nans( ( x: number ): number => x, [ 2, 2 ], 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid shape for the second argument...
{
	nans( 'float32', '10', 'row-major' ); // $ExpectError
	nans( 'float32', 10, 'row-major' ); // $ExpectError
	nans( 'float32', false, 'row-major' ); // $ExpectError
	nans( 'float32', true, 'row-major' ); // $ExpectError
	nans( 'float32', null, 'row-major' ); // $ExpectError
	nans( 'float32', undefined, 'row-major' ); // $ExpectError
	nans( 'float32', [ '5' ], 'row-major' ); // $ExpectError
	nans( 'float32', {}, 'row-major' ); // $ExpectError
	nans( 'float32', ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid order for the third argument...
{
	nans( 'float32', [ 2, 2 ], '10' ); // $ExpectError
	nans( 'float32', [ 2, 2 ], 10 ); // $ExpectError
	nans( 'float32', [ 2, 2 ], false ); // $ExpectError
	nans( 'float32', [ 2, 2 ], true ); // $ExpectError
	nans( 'float32', [ 2, 2 ], null ); // $ExpectError
	nans( 'float32', [ 2, 2 ], undefined ); // $ExpectError
	nans( 'float32', [ 2, 2 ], [ '5' ] ); // $ExpectError
	nans( 'float32', [ 2, 2 ], {} ); // $ExpectError
	nans( 'float32', [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nans( 'float64' ); // $ExpectError
	nans( 'float64', [ 2, 2 ] ); // $ExpectError
	nans( 'float64', [ 2, 2 ], 'row-major', 1 ); // $ExpectError
}
