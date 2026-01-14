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

import onesnd = require( './index' );


// TESTS //

// The function returns a nested array...
{
	onesnd( [ 3 ] ); // $ExpectType Array1D<number>
	onesnd( [ 1, 3 ] ); // $ExpectType Array2D<number>
	onesnd( [ 1, 1, 3 ] ); // $ExpectType Array3D<number>
	onesnd( [ 1, 1, 1, 3 ] ); // $ExpectType Array4D<number>
	onesnd( [ 1, 1, 1, 1, 3 ] ); // $ExpectType Array5D<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	onesnd( 'abc' ); // $ExpectError
	onesnd( true ); // $ExpectError
	onesnd( false ); // $ExpectError
	onesnd( null ); // $ExpectError
	onesnd( [ '1' ] ); // $ExpectError
	onesnd( {} ); // $ExpectError
	onesnd( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	onesnd(); // $ExpectError
	onesnd( [ 1, 3 ], 2 ); // $ExpectError
}
