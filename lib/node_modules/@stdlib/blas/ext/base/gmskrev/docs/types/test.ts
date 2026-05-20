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

import gmskrev = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev( x.length, x, 1, mask, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev( '10', x, 1, mask, 1 ); // $ExpectError
	gmskrev( true, x, 1, mask, 1 ); // $ExpectError
	gmskrev( false, x, 1, mask, 1 ); // $ExpectError
	gmskrev( null, x, 1, mask, 1 ); // $ExpectError
	gmskrev( undefined, x, 1, mask, 1 ); // $ExpectError
	gmskrev( [], x, 1, mask, 1 ); // $ExpectError
	gmskrev( {}, x, 1, mask, 1 ); // $ExpectError
	gmskrev( ( x: number ): number => x, x, 1, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev( x.length, 10, 1, mask, 1 ); // $ExpectError
	gmskrev( x.length, true, 1, mask, 1 ); // $ExpectError
	gmskrev( x.length, false, 1, mask, 1 ); // $ExpectError
	gmskrev( x.length, null, 1, mask, 1 ); // $ExpectError
	gmskrev( x.length, undefined, 1, mask, 1 ); // $ExpectError
	gmskrev( x.length, {}, 1, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev( x.length, x, '10', mask, 1 ); // $ExpectError
	gmskrev( x.length, x, true, mask, 1 ); // $ExpectError
	gmskrev( x.length, x, false, mask, 1 ); // $ExpectError
	gmskrev( x.length, x, null, mask, 1 ); // $ExpectError
	gmskrev( x.length, x, undefined, mask, 1 ); // $ExpectError
	gmskrev( x.length, x, [], mask, 1 ); // $ExpectError
	gmskrev( x.length, x, {}, mask, 1 ); // $ExpectError
	gmskrev( x.length, x, ( x: number ): number => x, mask, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gmskrev( x.length, x, 1, 10, 1 ); // $ExpectError
	gmskrev( x.length, x, 1, true, 1 ); // $ExpectError
	gmskrev( x.length, x, 1, false, 1 ); // $ExpectError
	gmskrev( x.length, x, 1, null, 1 ); // $ExpectError
	gmskrev( x.length, x, 1, undefined, 1 ); // $ExpectError
	gmskrev( x.length, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev( x.length, x, 1, mask, '10' ); // $ExpectError
	gmskrev( x.length, x, 1, mask, true ); // $ExpectError
	gmskrev( x.length, x, 1, mask, false ); // $ExpectError
	gmskrev( x.length, x, 1, mask, null ); // $ExpectError
	gmskrev( x.length, x, 1, mask, undefined ); // $ExpectError
	gmskrev( x.length, x, 1, mask, [] ); // $ExpectError
	gmskrev( x.length, x, 1, mask, {} ); // $ExpectError
	gmskrev( x.length, x, 1, mask, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev(); // $ExpectError
	gmskrev( x.length ); // $ExpectError
	gmskrev( x.length, x ); // $ExpectError
	gmskrev( x.length, x, 1 ); // $ExpectError
	gmskrev( x.length, x, 1, mask ); // $ExpectError
	gmskrev( x.length, x, 1, mask, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev.ndarray( '10', x, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( true, x, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( false, x, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( null, x, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( undefined, x, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( [], x, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( {}, x, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( ( x: number ): number => x, x, 1, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev.ndarray( x.length, 10, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, true, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, false, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, null, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, undefined, 1, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, {}, 1, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev.ndarray( x.length, x, '10', 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, true, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, false, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, null, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, undefined, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, [], 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, {}, 0, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, ( x: number ): number => x, 0, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev.ndarray( x.length, x, 1, '10', mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, true, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, false, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, null, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, undefined, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, [], mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, {}, mask, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, ( x: number ): number => x, mask, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gmskrev.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev.ndarray( x.length, x, 1, 0, mask, '10', 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, true, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, false, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, null, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, undefined, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, [], 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, {}, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, '10' ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, true ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, false ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, null ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, undefined ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, [] ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, {} ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const mask = new Uint8Array( 10 );

	gmskrev.ndarray(); // $ExpectError
	gmskrev.ndarray( x.length ); // $ExpectError
	gmskrev.ndarray( x.length, x ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1 ); // $ExpectError
	gmskrev.ndarray( x.length, x, 1, 0, mask, 1, 0, 10 ); // $ExpectError
}
