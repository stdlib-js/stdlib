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

import Complex64Array = require( '@stdlib/array/complex64' );
import claswp = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp( 5, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( true, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( false, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( null, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( void 0, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( [], 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( {}, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( ( x: number ): number => x, 3, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp( 'column-major', '5', A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', true, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', false, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', null, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', void 0, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', [], A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', {}, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', ( x: number ): number => x, A, 2, 0, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const IPIV = new Int32Array( 3 );

	claswp( 'column-major', 3, '5', 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, 5, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, true, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, false, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, null, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, void 0, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, [], 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, {}, 2, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, ( x: number ): number => x, 2, 0, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp( 'column-major', 3, A, '5', 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, true, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, false, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, null, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, void 0, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, [], 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, {}, 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, ( x: number ): number => x, 0, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp( 'column-major', 3, A, 2, '5', 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, true, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, false, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, null, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, void 0, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, [], 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, {}, 2, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, ( x: number ): number => x, 2, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp( 'column-major', 3, A, 2, 0, '5', IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, true, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, false, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, null, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, void 0, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, [], IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, {}, IPIV, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, ( x: number ): number => x, IPIV, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not an Int32Array...
{
	const A = new Complex64Array( 6 );

	claswp( 'column-major', 3, A, 2, 0, 2, '5', 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, 5, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, true, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, false, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, null, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, void 0, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, [], 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, {}, 1 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, '5' ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, true ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, false ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, null ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, void 0 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, [] ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, {} ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp(); // $ExpectError
	claswp( 'column-major' ); // $ExpectError
	claswp( 'column-major', 3 ); // $ExpectError
	claswp( 'column-major', 3, A ); // $ExpectError
	claswp( 'column-major', 3, A, 2 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2 ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV ); // $ExpectError
	claswp( 'column-major', 3, A, 2, 0, 2, IPIV, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( '5', A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( true, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( false, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( null, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( void 0, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( [], A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( {}, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( ( x: number ): number => x, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const IPIV = new Int32Array( 3 );

	claswp.ndarray( 2, '5', 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, 5, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, true, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, false, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, null, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, void 0, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, [], 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, {}, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, ( x: number ): number => x, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, '5', 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, true, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, false, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, null, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, void 0, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, [], 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, {}, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, ( x: number ): number => x, 1, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, '5', 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, true, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, false, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, null, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, void 0, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, [], 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, {}, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, ( x: number ): number => x, 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, 1, '5', 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, true, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, false, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, null, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, void 0, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, [], 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, {}, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, ( x: number ): number => x, 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, 1, 0, '5', 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, true, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, false, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, null, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, void 0, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, [], 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, {}, 2, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, ( x: number ): number => x, 2, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, 1, 0, 0, '5', 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, true, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, false, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, null, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, void 0, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, [], 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, {}, 1, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, ( x: number ): number => x, 1, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, '5', IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, true, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, false, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, null, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, void 0, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, [], IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, {}, IPIV, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, ( x: number ): number => x, IPIV, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not an Int32Array...
{
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, '5', 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, 5, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, true, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, false, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, null, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, void 0, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, [], 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, {}, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, '5', 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, true, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, false, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, null, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, void 0, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, [], 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, {}, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, '5' ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, true ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, false ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, null ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, void 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, [] ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, {} ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const IPIV = new Int32Array( 3 );
	const A = new Complex64Array( 6 );

	claswp.ndarray(); // $ExpectError
	claswp.ndarray( 2 ); // $ExpectError
	claswp.ndarray( 2, A ); // $ExpectError
	claswp.ndarray( 2, A, 2 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1 ); // $ExpectError
	claswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0, 10 ); // $ExpectError
}
