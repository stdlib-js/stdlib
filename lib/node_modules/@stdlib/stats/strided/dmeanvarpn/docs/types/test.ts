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

import dmeanvarpn = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn( x.length, 1, x, 1, out, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn( '10', 1, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( true, 1, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( false, 1, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( null, 1, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( undefined, 1, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( [], 1, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( {}, 1, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( ( x: number ): number => x, 1, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn( x.length, '10', x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, true, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, false, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, null, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, undefined, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, [], x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, {}, x, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, ( x: number ): number => x, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn( x.length, 1, 10, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, '10', 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, true, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, false, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, null, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, undefined, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, [ '1' ], 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, {}, 1, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn( x.length, 1, x, '10', out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, true, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, false, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, null, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, undefined, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, [], out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, {}, out, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dmeanvarpn( x.length, 1, x, 1, 10, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, '10', 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, true, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, false, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, null, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, undefined, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, [ '1' ], 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, {}, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn( x.length, 1, x, 1, out, '10' ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out, true ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out, false ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out, null ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out, undefined ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out, [] ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out, {} ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn(); // $ExpectError
	dmeanvarpn( x.length ); // $ExpectError
	dmeanvarpn( x.length, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1 ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out ); // $ExpectError
	dmeanvarpn( x.length, 1, x, 1, out, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray( '10', 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( true, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( false, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( null, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( undefined, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( [], 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( {}, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( ( x: number ): number => x, 1, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray( x.length, '10', x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, true, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, false, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, null, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, undefined, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, [], x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, {}, x, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, ( x: number ): number => x, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray( x.length, 1, 10, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, '10', 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, true, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, false, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, null, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, [ '1' ], 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, {}, 1, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray( x.length, 1, x, '10', 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, true, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, false, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, null, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, undefined, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, [], 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, {}, 0, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray( x.length, 1, x, 1, '10', out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, true, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, false, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, null, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, undefined, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, [], out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, {}, out, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, true, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, false, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, null, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, '10', 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, true, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, false, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, null, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, undefined, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, [], 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, {}, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, '10' ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, true ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, false ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, null ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, undefined ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, [] ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, {} ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dmeanvarpn.ndarray(); // $ExpectError
	dmeanvarpn.ndarray( x.length ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1 ); // $ExpectError
	dmeanvarpn.ndarray( x.length, 1, x, 1, 0, out, 1, 0, 10 ); // $ExpectError
}
