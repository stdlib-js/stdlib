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

import dfirstIndexLessThan = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan( x.length, x, 1, y, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan( '1', x, 1, y, 1 ); // $ExpectError
	dfirstIndexLessThan( true, x, 1, y, 1 ); // $ExpectError
	dfirstIndexLessThan( false, x, 1, y, 1 ); // $ExpectError
	dfirstIndexLessThan( null, x, 1, y, 1 ); // $ExpectError
	dfirstIndexLessThan( {}, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan( x.length, '1', 1, y, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, true, 1, y, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, false, 1, y, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, null, 1, y, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, {}, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan( x.length, x, '1', y, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, x, true, y, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, x, false, y, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, x, null, y, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, x, {}, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan( x.length, x, 1, '1', 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, x, 1, true, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, x, 1, false, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, x, 1, null, 1 ); // $ExpectError
	dfirstIndexLessThan( x.length, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan( x.length, x, 1, y, '1' ); // $ExpectError
	dfirstIndexLessThan( x.length, x, 1, y, true ); // $ExpectError
	dfirstIndexLessThan( x.length, x, 1, y, false ); // $ExpectError
	dfirstIndexLessThan( x.length, x, 1, y, null ); // $ExpectError
	dfirstIndexLessThan( x.length, x, 1, y, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan(); // $ExpectError
	dfirstIndexLessThan( 3, x ); // $ExpectError
	dfirstIndexLessThan( 3, x, 1 ); // $ExpectError
	dfirstIndexLessThan( 3, x, 1, y ); // $ExpectError
	dfirstIndexLessThan( 3, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray( '1', x, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray( x.length, '1', 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, true, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, false, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, null, 1, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, {}, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray( x.length, x, '1', 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray( x.length, x, 1, '1', y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float64Array...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, '1', 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, '1', 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, '1' ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
}


// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfirstIndexLessThan.ndarray(); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	dfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}
