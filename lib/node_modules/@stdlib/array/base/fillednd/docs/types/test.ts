/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import fillednd = require( './index' );


// TESTS //

// The function returns a nested array...
{
	fillednd( 0.0, [ 3 ] ); // $ExpectType Array1D<number>
	fillednd( 0.0, [ 1, 3 ] ); // $ExpectType Array2D<number>
	fillednd( 0.0, [ 1, 1, 3 ] ); // $ExpectType Array3D<number>
	fillednd( 0.0, [ 1, 1, 1, 3 ] ); // $ExpectType Array4D<number>
	fillednd( 0.0, [ 1, 1, 1, 1, 3 ] ); // $ExpectType Array5D<number>
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	fillednd( 0.0, 'abc' ); // $ExpectError
	fillednd( 0.0, true ); // $ExpectError
	fillednd( 0.0, false ); // $ExpectError
	fillednd( 0.0, null ); // $ExpectError
	fillednd( 0.0, [ '1' ] ); // $ExpectError
	fillednd( 0.0, {} ); // $ExpectError
	fillednd( 0.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	fillednd(); // $ExpectError
	fillednd( 0.0 ); // $ExpectError
	fillednd( 0.0, [ 1, 3 ], 2 ); // $ExpectError
}
