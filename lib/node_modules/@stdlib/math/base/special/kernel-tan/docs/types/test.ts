/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import kernelTan = require( './index' );


// TESTS //

// The function returns a number...
{
	kernelTan( 3.141592653589793 / 4.0, 0.0, 1 ); // $ExpectType number
	kernelTan( 3.141592653589793 / 4.0, 0.0, -1 ); // $ExpectType number
}

// The function does not compile if provided values other than numbers for the first two arguments...
{
	kernelTan( true, 3, 1 ); // $ExpectError
	kernelTan( false, 2, 1 ); // $ExpectError
	kernelTan( '5', 1, 1 ); // $ExpectError
	kernelTan( [], 1, 1 ); // $ExpectError
	kernelTan( {}, 2, 1 ); // $ExpectError
	kernelTan( ( x: number ): number => x, 2, 1 ); // $ExpectError

	kernelTan( 9, true, -1 ); // $ExpectError
	kernelTan( 9, false, -1 ); // $ExpectError
	kernelTan( 5, '5', -1 ); // $ExpectError
	kernelTan( 8, [], -1 ); // $ExpectError
	kernelTan( 9, {}, -1 ); // $ExpectError
	kernelTan( 8, ( x: number ): number => x, -1 ); // $ExpectError
}

// The function does not compile if provided a value other than `-1` or `1` as its last argument...
{
	kernelTan( 0.664, 5.288e-17, 10 ); // $ExpectError
	kernelTan( 0.664, 5.288e-17, 'abc' ); // $ExpectError
	kernelTan( 0.664, 5.288e-17, true ); // $ExpectError
	kernelTan( 0.664, 5.288e-17, false ); // $ExpectError
	kernelTan( 0.664, 5.288e-17, [] ); // $ExpectError
	kernelTan( 0.664, 5.288e-17, {} ); // $ExpectError
	kernelTan( 0.664, 5.288e-17, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	kernelTan(); // $ExpectError
	kernelTan( 3 ); // $ExpectError
	kernelTan( 2.131, 3 ); // $ExpectError
}
