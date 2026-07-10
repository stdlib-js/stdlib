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

import dfirstIndexEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual( x.length, x, 1, y, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual( '1', x, 1, y, 1 ); // $ExpectError
	dfirstIndexEqual( true, x, 1, y, 1 ); // $ExpectError
	dfirstIndexEqual( false, x, 1, y, 1 ); // $ExpectError
	dfirstIndexEqual( null, x, 1, y, 1 ); // $ExpectError
	dfirstIndexEqual( {}, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual( 3, '1', 1, y, 1 ); // $ExpectError
	dfirstIndexEqual( 3, true, 1, y, 1 ); // $ExpectError
	dfirstIndexEqual( 3, false, 1, y, 1 ); // $ExpectError
	dfirstIndexEqual( 3, null, 1, y, 1 ); // $ExpectError
	dfirstIndexEqual( 3, {}, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual( x.length, x, '1', y, 1 ); // $ExpectError
	dfirstIndexEqual( x.length, x, true, y, 1 ); // $ExpectError
	dfirstIndexEqual( x.length, x, false, y, 1 ); // $ExpectError
	dfirstIndexEqual( x.length, x, null, y, 1 ); // $ExpectError
	dfirstIndexEqual( x.length, x, {}, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexEqual( x.length, x, 1, '1', 1 ); // $ExpectError
	dfirstIndexEqual( x.length, x, 1, true, 1 ); // $ExpectError
	dfirstIndexEqual( x.length, x, 1, false, 1 ); // $ExpectError
	dfirstIndexEqual( x.length, x, 1, null, 1 ); // $ExpectError
	dfirstIndexEqual( x.length, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual( x.length, x, 1, y, '1' ); // $ExpectError
	dfirstIndexEqual( x.length, x, 1, y, true ); // $ExpectError
	dfirstIndexEqual( x.length, x, 1, y, false ); // $ExpectError
	dfirstIndexEqual( x.length, x, 1, y, null ); // $ExpectError
	dfirstIndexEqual( x.length, x, 1, y, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual(); // $ExpectError
	dfirstIndexEqual( 3 ); // $ExpectError
	dfirstIndexEqual( 3, x ); // $ExpectError
	dfirstIndexEqual( 3, x, 1 ); // $ExpectError
	dfirstIndexEqual( 3, x, 1, y ); // $ExpectError
	dfirstIndexEqual( 3, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual.ndarray( '1', x, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual.ndarray( 3, '1', 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, true, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, false, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, null, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, {}, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual.ndarray( x.length, x, '1', 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual.ndarray( x.length, x, 1, '1', y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float64Array...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexEqual.ndarray( x.length, x, 1, 0, '1', 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, '1', 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, 1, '1' ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	dfirstIndexEqual.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 0.0, 2.0, 0.0 ] );

	dfirstIndexEqual.ndarray(); // $ExpectError
	dfirstIndexEqual.ndarray( 3 ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, x ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, x, 1 ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, x, 1, 0 ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, x, 1, 0, y ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, x, 1, 0, y, 1 ); // $ExpectError
	dfirstIndexEqual.ndarray( 3, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}
