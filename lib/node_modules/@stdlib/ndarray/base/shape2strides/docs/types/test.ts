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

import shape2strides = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	shape2strides( [ 3, 2, 1 ], 'row-major' ); // $ExpectType number[]
}

// The function does not compile if provided a first argument that is not an array-like object containing numbers...
{
	shape2strides( true, 'row-major' ); // $ExpectError
	shape2strides( false, 'row-major' ); // $ExpectError
	shape2strides( null, 'row-major' ); // $ExpectError
	shape2strides( undefined, 'row-major' ); // $ExpectError
	shape2strides( '5', 'row-major' ); // $ExpectError
	shape2strides( [ '1', '2' ], 'row-major' ); // $ExpectError
	shape2strides( {}, 'row-major' ); // $ExpectError
	shape2strides( ( x: number ): number => x, 'row-major' ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a recognized order...
{
	shape2strides( [ 2, 3 ], true ); // $ExpectError
	shape2strides( [ 2, 3 ], false ); // $ExpectError
	shape2strides( [ 2, 3 ], null ); // $ExpectError
	shape2strides( [ 2, 3 ], undefined ); // $ExpectError
	shape2strides( [ 2, 3 ], '5' ); // $ExpectError
	shape2strides( [ 2, 3 ], [ '1', '2' ] ); // $ExpectError
	shape2strides( [ 2, 3 ], {} ); // $ExpectError
	shape2strides( [ 2, 3 ], ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	shape2strides(); // $ExpectError
	shape2strides( [ 3, 2 ] ); // $ExpectError
}
