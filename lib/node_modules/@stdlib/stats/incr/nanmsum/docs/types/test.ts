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

import incrnanmsum = require( './index' );

// TESTS //

// The function returns an accumulator function...
{
	incrnanmsum( 3 ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided arguments...
{
	incrnanmsum( '5' ); // $ExpectError
	incrnanmsum( true ); // $ExpectError
	incrnanmsum( false ); // $ExpectError
	incrnanmsum( null ); // $ExpectError
	incrnanmsum( undefined ); // $ExpectError
	incrnanmsum( [] ); // $ExpectError
	incrnanmsum( {} ); // $ExpectError
	incrnanmsum( ( x: number ): number => x ); // $ExpectError
}


// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrnanmsum(); // $ExpectError
	incrnanmsum( 3, 2 ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrnanmsum( 3 );

	acc(); // $ExpectType number | null
	acc( 3.14 ); // $ExpectType number | null
	acc( NaN ); // $ExpectType number | null
}
