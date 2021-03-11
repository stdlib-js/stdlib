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

import normalize = require( './index' );


// TESTS //

// The function returns an array...
{
	normalize( 3.14e-319 ); // $ExpectType ArrayLike<number>
	const out = [ 0.0, 0 ];
	normalize( out, 3.14e-319 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a last argument that is not a number...
{
	normalize( '5' ); // $ExpectError
	normalize( true ); // $ExpectError
	normalize( false ); // $ExpectError
	normalize( null ); // $ExpectError
	normalize( {} ); // $ExpectError
	normalize( ( x: number ): number => x ); // $ExpectError

	const out = [ 0.0, 0 ];
	normalize( out, '5' ); // $ExpectError
	normalize( out, true ); // $ExpectError
	normalize( out, false ); // $ExpectError
	normalize( out, null ); // $ExpectError
	normalize( out, {} ); // $ExpectError
	normalize( out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array that is not an array-like object of numbers...
{
	normalize( '5', 3.14e-319 ); // $ExpectError
	normalize( true, 3.14e-319 ); // $ExpectError
	normalize( false, 3.14e-319 ); // $ExpectError
	normalize( null, 3.14e-319 ); // $ExpectError
	normalize( {}, 3.14e-319 ); // $ExpectError
	normalize( ( x: number ): number => x, 3.14e-319 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	normalize(); // $ExpectError
}
