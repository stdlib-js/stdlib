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

import incrmminmaxabs = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrmminmaxabs( 3 ); // $ExpectType accumulator
	const out = [ 0.0, 0.0 ];
	incrmminmaxabs( out, 3 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a last argument that is not a number...
{
	incrmminmaxabs( '5' ); // $ExpectError
	incrmminmaxabs( true ); // $ExpectError
	incrmminmaxabs( false ); // $ExpectError
	incrmminmaxabs( null ); // $ExpectError
	incrmminmaxabs( {} ); // $ExpectError
	incrmminmaxabs( ( x: number ): number => x ); // $ExpectError

	const out = [ 0.0, 0.0 ];
	incrmminmaxabs( out, '5' ); // $ExpectError
	incrmminmaxabs( out, true ); // $ExpectError
	incrmminmaxabs( out, false ); // $ExpectError
	incrmminmaxabs( out, null ); // $ExpectError
	incrmminmaxabs( out, {} ); // $ExpectError
	incrmminmaxabs( out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array that is not an array-like object of numbers...
{
	incrmminmaxabs( '5', 3 ); // $ExpectError
	incrmminmaxabs( true, 3 ); // $ExpectError
	incrmminmaxabs( false, 3 ); // $ExpectError
	incrmminmaxabs( null, 3 ); // $ExpectError
	incrmminmaxabs( {}, 3 ); // $ExpectError
	incrmminmaxabs( ( x: number ): number => x, 3 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrmminmaxabs( 3 );

	acc(); // $ExpectType ArrayLike<number> | null
	acc( 3.14 ); // $ExpectType ArrayLike<number> | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrmminmaxabs( 3 );

	acc( '5' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
