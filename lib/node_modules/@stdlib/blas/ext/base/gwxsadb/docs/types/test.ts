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
import gwxsadb = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb( x.length, 3.0, 2.0, x, 1, w, 1 ); // $ExpectType Float64Array
	gwxsadb( x.length, 3.0, 2.0, new AccessorArray( x ), 1, new AccessorArray( w ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb( '10', 3.0, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( true, 3.0, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( false, 3.0, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( null, 3.0, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( undefined, 3.0, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( [], 3.0, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( {}, 3.0, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( ( x: number ): number => x, 3.0, 2.0, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb( x.length, '10', 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, true, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, false, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, null, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, undefined, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, [], 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, {}, 2.0, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, ( x: number ): number => x, 2.0, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb( x.length, 3.0, '10', x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, true, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, false, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, null, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, undefined, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, [], x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, {}, x, 1, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, ( x: number ): number => x, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a numeric array...
{
	const w = new Float64Array( 10 );

	gwxsadb( 10, 3.0, 2.0, 10, 1, w, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, '10', 1, w, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, true, 1, w, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, false, 1, w, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, null, 1, w, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, undefined, 1, w, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, [ '1' ], 1, w, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, {}, 1, w, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb( x.length, 3.0, 2.0, x, '10', w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, true, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, false, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, null, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, undefined, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, [], w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, {}, w, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gwxsadb( 10, 3.0, 2.0, x, 1, 10, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, x, 1, '10', 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, x, 1, true, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, x, 1, false, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, x, 1, null, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, x, 1, undefined, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, x, 1, [ '1' ], 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, x, 1, {}, 1 ); // $ExpectError
	gwxsadb( 10, 3.0, 2.0, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb( x.length, 3.0, 2.0, x, 1, w, '10' ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w, true ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w, false ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w, null ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w, undefined ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w, [] ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w, {} ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb(); // $ExpectError
	gwxsadb( x.length ); // $ExpectError
	gwxsadb( x.length, 3.0 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1 ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w ); // $ExpectError
	gwxsadb( x.length, 3.0, 2.0, x, 1, w, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectType Float64Array
	gwxsadb.ndarray( x.length, 3.0, 2.0, new AccessorArray( x ), 1, 0, new AccessorArray( w ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( '10', 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( true, 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( false, 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( null, 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( undefined, 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( [], 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( {}, 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( ( x: number ): number => x, 3.0, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( x.length, '10', 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, true, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, false, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, null, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, undefined, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, [], 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, {}, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, ( x: number ): number => x, 2.0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( x.length, 3.0, '10', x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, true, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, false, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, null, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, undefined, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, [], x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, {}, x, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, ( x: number ): number => x, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a numeric array...
{
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( 10, 3.0, 2.0, 10, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, '10', 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, true, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, false, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, null, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, [ '1' ], 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, {}, 1, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( x.length, 3.0, 2.0, x, '10', 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, true, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, false, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, null, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, undefined, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, [], 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, {}, 0, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, '10', w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, true, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, false, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, null, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, undefined, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, [], w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, {}, w, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, '10', 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, true, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, false, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, null, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, {}, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( 10, 3.0, 2.0, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, '10', 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, true, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, false, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, null, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, undefined, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, [], 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, {}, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, '10' ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, true ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, false ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, null ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, undefined ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, [] ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, {} ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxsadb.ndarray(); // $ExpectError
	gwxsadb.ndarray( x.length ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1 ); // $ExpectError
	gwxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, w, 1, 0, 10 ); // $ExpectError
}
