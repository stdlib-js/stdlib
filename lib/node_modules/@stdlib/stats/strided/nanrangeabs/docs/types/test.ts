/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import nanrangeabs = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanrangeabs( x.length, x, 1 ); // $ExpectType number
	nanrangeabs( x.length, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeabs( '10', x, 1 ); // $ExpectError
	nanrangeabs( true, x, 1 ); // $ExpectError
	nanrangeabs( false, x, 1 ); // $ExpectError
	nanrangeabs( null, x, 1 ); // $ExpectError
	nanrangeabs( undefined, x, 1 ); // $ExpectError
	nanrangeabs( [], x, 1 ); // $ExpectError
	nanrangeabs( {}, x, 1 ); // $ExpectError
	nanrangeabs( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanrangeabs( x.length, 10, 1 ); // $ExpectError
	nanrangeabs( x.length, '10', 1 ); // $ExpectError
	nanrangeabs( x.length, true, 1 ); // $ExpectError
	nanrangeabs( x.length, false, 1 ); // $ExpectError
	nanrangeabs( x.length, null, 1 ); // $ExpectError
	nanrangeabs( x.length, undefined, 1 ); // $ExpectError
	nanrangeabs( x.length, {}, 1 ); // $ExpectError
	nanrangeabs( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeabs( x.length, x, '10' ); // $ExpectError
	nanrangeabs( x.length, x, true ); // $ExpectError
	nanrangeabs( x.length, x, false ); // $ExpectError
	nanrangeabs( x.length, x, null ); // $ExpectError
	nanrangeabs( x.length, x, undefined ); // $ExpectError
	nanrangeabs( x.length, x, [] ); // $ExpectError
	nanrangeabs( x.length, x, {} ); // $ExpectError
	nanrangeabs( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanrangeabs(); // $ExpectError
	nanrangeabs( x.length ); // $ExpectError
	nanrangeabs( x.length, x ); // $ExpectError
	nanrangeabs( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	nanrangeabs.ndarray( x.length, x, 1, 0 ); // $ExpectType number
	nanrangeabs.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeabs.ndarray( '10', x, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( true, x, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( false, x, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( null, x, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( undefined, x, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( [], x, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( {}, x, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanrangeabs.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, true, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, false, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, null, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeabs.ndarray( x.length, x, '10', 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, true, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, false, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, null, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, [], 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, {}, 0 ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeabs.ndarray( x.length, x, 1, '10' ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1, true ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1, false ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1, null ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1, undefined ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1, [] ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1, {} ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanrangeabs.ndarray(); // $ExpectError
	nanrangeabs.ndarray( x.length ); // $ExpectError
	nanrangeabs.ndarray( x.length, x ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1 ); // $ExpectError
	nanrangeabs.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
