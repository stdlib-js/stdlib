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

import Complex128Array = require( '@stdlib/array/complex128' );
import hc2c = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const hc = new Float64Array( 4 );
	const out = new Complex128Array( 3 );

	hc2c( 4, hc, 1, 0, out, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const hc = new Float64Array( 4 );
	const out = new Complex128Array( 3 );

	hc2c( '4', hc, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( true, hc, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( false, hc, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( null, hc, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( void 0, hc, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( [], hc, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( {}, hc, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( ( x: number ): number => x, hc, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const out = new Complex128Array( 3 );

	hc2c( 4, '4', 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, 4, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, true, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, false, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, null, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, void 0, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, [], 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, {}, 1, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const hc = new Float64Array( 4 );
	const out = new Complex128Array( 3 );

	hc2c( 4, hc, '1', 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, true, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, false, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, null, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, void 0, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, [], 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, {}, 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const hc = new Float64Array( 4 );
	const out = new Complex128Array( 3 );

	hc2c( 4, hc, 1, '0', out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, true, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, false, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, null, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, void 0, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, [], out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, {}, out, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex128Array...
{
	const hc = new Float64Array( 4 );

	hc2c( 4, hc, 1, 0, '42', 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, 42, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, true, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, false, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, null, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, void 0, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, [], 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, {}, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const hc = new Float64Array( 4 );
	const out = new Complex128Array( 3 );

	hc2c( 4, hc, 1, 0, out, '1', 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, true, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, false, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, null, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, void 0, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, [], 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, {}, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const hc = new Float64Array( 4 );
	const out = new Complex128Array( 3 );

	hc2c( 4, hc, 1, 0, out, 1, '0' ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1, true ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1, false ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1, null ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1, void 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1, [] ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1, {} ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const hc = new Float64Array( 4 );
	const out = new Complex128Array( 3 );

	hc2c(); // $ExpectError
	hc2c( 4 ); // $ExpectError
	hc2c( 4, hc ); // $ExpectError
	hc2c( 4, hc, 1 ); // $ExpectError
	hc2c( 4, hc, 1, 0 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1 ); // $ExpectError
	hc2c( 4, hc, 1, 0, out, 1, 0, 123 ); // $ExpectError
}
