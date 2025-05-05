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

import Complex128Array = require( '@stdlib/array/complex128' );
import zlaswp = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp( 5, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( true, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( false, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( null, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( void 0, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( [], 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( {}, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( ( x: number ): number => x, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp( 'column-major', '5', A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', true, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', false, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', null, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', void 0, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', [], A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', {}, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', ( x: number ): number => x, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const IPIV = new Int32Array( 3 );

	zlaswp( 'column-major', 3, '5', 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, 5, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, true, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, false, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, null, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, void 0, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, [], 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, {}, 2, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, ( x: number ): number => x, 2, 0, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp( 'column-major', 3, A, '5', 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, true, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, false, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, null, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, void 0, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, [], 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, {}, 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, ( x: number ): number => x, 0, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp( 'column-major', 3, A, 2, '5', 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, true, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, false, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, null, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, void 0, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, [], 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, {}, 2, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, ( x: number ): number => x, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp( 'column-major', 3, A, 2, 0, '5', IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, true, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, false, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, null, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, void 0, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, [], IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, {}, IPIV, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, ( x: number ): number => x, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not an Int32Array...
{
	const A = new Complex128Array( 6 );

	zlaswp( 'column-major', 3, A, 2, 0, 2, '5', 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, 5, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, true, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, false, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, null, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, void 0, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, [], 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, {}, 1 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, '5' ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, true ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, false ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, null ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, void 0 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, [] ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, {} ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp(); // $ExpectError
	zlaswp( 'column-major' ); // $ExpectError
	zlaswp( 'column-major', 3 ); // $ExpectError
	zlaswp( 'column-major', 3, A ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2 ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV ); // $ExpectError
	zlaswp( 'column-major', 3, A, 2, 0, 2, IPIV, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( '5', A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( true, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( false, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( null, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( void 0, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( [], A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( {}, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( ( x: number ): number => x, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const IPIV = new Int32Array( 3 );

	zlaswp.ndarray( 2, '5', 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, 5, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, true, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, false, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, null, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, void 0, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, [], 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, {}, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, ( x: number ): number => x, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, '5', 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, true, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, false, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, null, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, void 0, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, [], 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, {}, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, ( x: number ): number => x, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, '5', 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, true, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, false, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, null, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, void 0, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, [], 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, {}, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, ( x: number ): number => x, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, 1, '5', 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, true, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, false, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, null, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, void 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, [], 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, {}, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, ( x: number ): number => x, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, 1, 0, '5', 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, true, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, false, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, null, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, void 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, [], 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, {}, 2, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, ( x: number ): number => x, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, 1, 0, 0, '5', 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, true, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, false, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, null, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, void 0, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, [], 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, {}, 1, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, ( x: number ): number => x, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, '5', IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, true, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, false, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, null, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, void 0, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, [], IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, {}, IPIV, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, ( x: number ): number => x, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not an Int32Array...
{
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, '5', 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, 5, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, true, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, false, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, null, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, void 0, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, [], 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, {}, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, '5', 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, true, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, false, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, null, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, void 0, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, [], 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, {}, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, '5' ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, true ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, false ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, null ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, void 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, [] ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, {} ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex128Array( 6 );

	zlaswp.ndarray(); // $ExpectError
	zlaswp.ndarray( 2 ); // $ExpectError
	zlaswp.ndarray( 2, A ); // $ExpectError
	zlaswp.ndarray( 2, A, 2 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1 ); // $ExpectError
	zlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0, 10 ); // $ExpectError
}
