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

import complex = require( './index' );


// TESTS //

// The function returns a complex number...
{
	complex( 5.0, 3.0 ); // $ExpectType Complex
	complex( 5.0, 3.0, 'float64' ); // $ExpectType Complex
	complex( 5.0, 3.0, 'float32' ); // $ExpectType Complex
}

// The function does not compile if provided a first argument that is not a number...
{
	complex( true, 3.0 ); // $ExpectError
	complex( false, 3.0 ); // $ExpectError
	complex( '5', 3.0 ); // $ExpectError
	complex( [], 3.0 ); // $ExpectError
	complex( {}, 3.0 ); // $ExpectError
	complex( ( x: number ): number => x, 3.0 ); // $ExpectError
}

// The function does not compile if provided a second argument that is not a number...
{
	complex( 5.0, true ); // $ExpectError
	complex( 5.0, false ); // $ExpectError
	complex( 5.0, '5' ); // $ExpectError
	complex( 5.0, [] ); // $ExpectError
	complex( 5.0, {} ); // $ExpectError
	complex( 5.0, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a third argument that is not a recognized data type...
{
	complex( 5.0, 3.0, 'abc' ); // $ExpectError
	complex( 5.0, 3.0, 123 ); // $ExpectError
	complex( 5.0, 3.0, true ); // $ExpectError
	complex( 5.0, 3.0, false ); // $ExpectError
	complex( 5.0, 3.0, [] ); // $ExpectError
	complex( 5.0, 3.0, {} ); // $ExpectError
	complex( 5.0, 3.0, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	complex(); // $ExpectError
	complex( 3 ); // $ExpectError
}
