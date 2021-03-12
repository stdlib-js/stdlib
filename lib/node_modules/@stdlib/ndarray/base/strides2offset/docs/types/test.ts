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

import strides2offset = require( './index' );


// TESTS //

// The function returns a number...
{
	strides2offset( [ 2, 3, 10 ], [ 30, -10, 1 ] ); // $ExpectType number
}

// The function does not compile if provided values other than two array-like objects of numbers...
{
	const shape = [ 2, 3, 10 ];
	const strides = [ 30, -10, 1 ];
	strides2offset( true, strides ); // $ExpectError
	strides2offset( false, strides ); // $ExpectError
	strides2offset( '5', strides ); // $ExpectError
	strides2offset( 123, strides ); // $ExpectError
	strides2offset( {}, strides ); // $ExpectError
	strides2offset( ( x: number ): number => x, strides ); // $ExpectError

	strides2offset( shape, true ); // $ExpectError
	strides2offset( shape, false ); // $ExpectError
	strides2offset( shape, '5' ); // $ExpectError
	strides2offset( shape, 123 ); // $ExpectError
	strides2offset( shape, {} ); // $ExpectError
	strides2offset( shape, ( x: number ): number => x ); // $ExpectError

	strides2offset( [], true ); // $ExpectError
	strides2offset( {}, false ); // $ExpectError
	strides2offset( false, '5' ); // $ExpectError
	strides2offset( {}, 123 ); // $ExpectError
	strides2offset( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	strides2offset(); // $ExpectError
	strides2offset( 3 ); // $ExpectError
}
