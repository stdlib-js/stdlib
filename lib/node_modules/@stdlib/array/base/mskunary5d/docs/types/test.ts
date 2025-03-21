/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import mskunary5d = require( './index' );

/**
* Unary function.
*
* @param value - input value
* @returns result
*/
function fcn( value: number ): number {
	return value;
}


// TESTS //

// The function returns undefined...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const m = [ [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ] ];
	const y = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	mskunary5d( 'abc', [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskunary5d( 3.14, [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskunary5d( true, [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskunary5d( false, [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskunary5d( null, [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskunary5d( [ '1' ], [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskunary5d( {}, [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectError
	mskunary5d( ( x: number ): number => x, [ 1, 1, 1, 2, 2 ], fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const m = [ [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ] ];
	const y = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	mskunary5d( [ x, m, y ], 'abc', fcn ); // $ExpectError
	mskunary5d( [ x, m, y ], 3.14, fcn ); // $ExpectError
	mskunary5d( [ x, m, y ], true, fcn ); // $ExpectError
	mskunary5d( [ x, m, y ], false, fcn ); // $ExpectError
	mskunary5d( [ x, m, y ], null, fcn ); // $ExpectError
	mskunary5d( [ x, m, y ], [ '1' ], fcn ); // $ExpectError
	mskunary5d( [ x, m, y ], {}, fcn ); // $ExpectError
	mskunary5d( [ x, m, y ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const m = [ [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ] ];
	const y = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], 'abc' ); // $ExpectError
	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], 3.14 ); // $ExpectError
	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], true ); // $ExpectError
	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], false ); // $ExpectError
	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], null ); // $ExpectError
	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], [ '1' ] ); // $ExpectError
	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
	const m = [ [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ] ];
	const y = [ [ [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ] ] ];

	mskunary5d(); // $ExpectError
	mskunary5d( [ x, m, y ] ); // $ExpectError
	mskunary5d( [ x, m, y ], [ 1, 1, 1, 2, 2 ], fcn, {} ); // $ExpectError
}
