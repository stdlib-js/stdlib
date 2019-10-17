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

import kernelCos = require( './index' );


// TESTS //

// The function returns a number...
{
	kernelCos( 0.5, 0.2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	kernelCos( true, 3 ); // $ExpectError
	kernelCos( false, 2 ); // $ExpectError
	kernelCos( '5', 1 ); // $ExpectError
	kernelCos( [], 1 ); // $ExpectError
	kernelCos( {}, 2 ); // $ExpectError
	kernelCos( ( x: number ): number => x, 2 ); // $ExpectError

	kernelCos( 9, true ); // $ExpectError
	kernelCos( 9, false ); // $ExpectError
	kernelCos( 5, '5' ); // $ExpectError
	kernelCos( 8, [] ); // $ExpectError
	kernelCos( 9, {} ); // $ExpectError
	kernelCos( 8, ( x: number ): number => x ); // $ExpectError

	kernelCos( [], true ); // $ExpectError
	kernelCos( {}, false ); // $ExpectError
	kernelCos( false, '5' ); // $ExpectError
	kernelCos( {}, [] ); // $ExpectError
	kernelCos( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	kernelCos(); // $ExpectError
	kernelCos( 0 ); // $ExpectError
}
