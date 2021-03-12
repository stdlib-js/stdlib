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

import toWords = require( './index' );


// TESTS //

// The function returns an array...
{
	toWords( 3.14e201 ); // $ExpectType ArrayLike<number>
	const out = [ 0, 0 ];
	toWords( out, 3.14e201 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a last argument that is not a number...
{
	toWords( '5' ); // $ExpectError
	toWords( true ); // $ExpectError
	toWords( false ); // $ExpectError
	toWords( null ); // $ExpectError
	toWords( {} ); // $ExpectError
	toWords( ( x: number ): number => x ); // $ExpectError

	const out = [ 0, 0 ];
	toWords( out, '5' ); // $ExpectError
	toWords( out, true ); // $ExpectError
	toWords( out, false ); // $ExpectError
	toWords( out, null ); // $ExpectError
	toWords( out, {} ); // $ExpectError
	toWords( out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array that is not an array-like object of numbers...
{
	toWords( '5', 3.14e201 ); // $ExpectError
	toWords( true, 3.14e201 ); // $ExpectError
	toWords( false, 3.14e201 ); // $ExpectError
	toWords( null, 3.14e201 ); // $ExpectError
	toWords( {}, 3.14e201 ); // $ExpectError
	toWords( ( x: number ): number => x, 3.14e201 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	toWords(); // $ExpectError
}
