/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import dmeanstdevpn = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn( x.length, 1, x, 1, out, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn( '10', 1, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( true, 1, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( false, 1, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( null, 1, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( undefined, 1, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( [], 1, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( {}, 1, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( ( x: number ): number => x, 1, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn( x.length, '10', x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, true, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, false, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, null, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, undefined, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, [], x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, {}, x, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, ( x: number ): number => x, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn( x.length, 1, 10, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, '10', 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, true, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, false, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, null, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, undefined, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, [ '1' ], 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, {}, 1, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn( x.length, 1, x, '10', out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, true, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, false, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, null, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, undefined, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, [], out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, {}, out, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dmeanstdevpn( x.length, 1, x, 1, 10, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, '10', 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, true, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, false, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, null, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, undefined, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, [ '1' ], 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, {}, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn( x.length, 1, x, 1, out, '10' ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out, true ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out, false ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out, null ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out, undefined ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out, [] ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out, {} ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn(); // $ExpectError
	dmeanstdevpn( x.length ); // $ExpectError
	dmeanstdevpn( x.length, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1 ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out ); // $ExpectError
	dmeanstdevpn( x.length, 1, x, 1, out, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray( '10', 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( true, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( false, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( null, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( undefined, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( [], 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( {}, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( ( x: number ): number => x, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray( x.length, '10', x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, true, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, false, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, null, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, undefined, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, [], x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, {}, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, ( x: number ): number => x, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray( x.length, 1, 10, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, '10', 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, true, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, false, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, null, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, [ '1' ], 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, {}, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray( x.length, 1, x, '10', 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, true, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, false, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, null, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, undefined, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, [], 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, {}, 0, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray( x.length, 1, x, 1, '10', out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, true, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, false, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, null, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, undefined, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, [], out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, {}, out, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, true, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, false, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, null, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, '10', 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, true, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, false, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, null, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, undefined, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, [], 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, {}, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, '10' ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, true ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, false ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, null ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, undefined ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, [] ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, {} ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanstdevpn.ndarray(); // $ExpectError
	dmeanstdevpn.ndarray( x.length ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1 ); // $ExpectError
	dmeanstdevpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0, 10 ); // $ExpectError
}
