/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import kernelTanf = require( './index' );


// TESTS //

// The function returns a number...
{
	kernelTanf( 3.141592653589793 / 4.0, 0.0, 1 ); // $ExpectType number
	kernelTanf( 3.141592653589793 / 4.0, 0.0, -1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than a number for the first argument...
{
	kernelTanf( true, 1 ); // $ExpectError
	kernelTanf( false, 1 ); // $ExpectError
	kernelTanf( '5', 1 ); // $ExpectError
	kernelTanf( [], 1 ); // $ExpectError
	kernelTanf( {}, 1 ); // $ExpectError
	kernelTanf( ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a value other than `-1` or `1` as its second argument...
{
	kernelTanf( 0.664, 10 ); // $ExpectError
	kernelTanf( 0.664, 'abc' ); // $ExpectError
	kernelTanf( 0.664, true ); // $ExpectError
	kernelTanf( 0.664, false ); // $ExpectError
	kernelTanf( 0.664, [] ); // $ExpectError
	kernelTanf( 0.664, {} ); // $ExpectError
	kernelTanf( 0.664, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	kernelTanf(); // $ExpectError
	kernelTanf( 3 ); // $ExpectError
}
