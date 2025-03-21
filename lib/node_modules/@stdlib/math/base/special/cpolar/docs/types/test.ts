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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import cpolar = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	cpolar( new Complex128( 5.0, 3.0 ) ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a complex number...
{
	cpolar( true ); // $ExpectError
	cpolar( false ); // $ExpectError
	cpolar( null ); // $ExpectError
	cpolar( undefined ); // $ExpectError
	cpolar( '5' ); // $ExpectError
	cpolar( [] ); // $ExpectError
	cpolar( {} ); // $ExpectError
	cpolar( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cpolar(); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0.0, 0.0 ];

	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, 0 ); // $ExpectType Collection<number>
	cpolar.assign<number>( new Complex128( 5.0, 3.0 ), out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	cpolar.assign( true, out, 1, 0 ); // $ExpectError
	cpolar.assign( false, out, 1, 0 ); // $ExpectError
	cpolar.assign( '5', out, 1, 0 ); // $ExpectError
	cpolar.assign( null, out, 1, 0 ); // $ExpectError
	cpolar.assign( [], out, 1, 0 ); // $ExpectError
	cpolar.assign( {}, out, 1, 0 ); // $ExpectError
	cpolar.assign( ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	cpolar.assign( new Complex128( 5.0, 3.0 ), 1, 1, 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), true, 1, 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), false, 1, 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), null, 1, 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = [ 0.0, 0 ];

	cpolar.assign( new Complex128( 5.0, 3.0 ), out, '5', 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, true, 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, false, 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, null, 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, [], 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, {}, 0 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = [ 0.0, 0 ];

	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, '5' ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, true ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, false ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, null ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, [] ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, {} ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0 ];

	cpolar.assign(); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ) ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1 ); // $ExpectError
	cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, 0, 1 ); // $ExpectError
}
