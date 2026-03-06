/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import unary2dBy = require( './index' );

/**
* Unary function.
*
* @param value - input value
* @returns result
*/
function identity( value: number ): number {
	return value;
}


// TESTS //

// The function returns undefined...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	unary2dBy( [ x, y ], [ 2, 2 ], identity, identity ); // $ExpectType void
	unary2dBy( [ x, y ], [ 2, 2 ], identity, identity, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	unary2dBy( 'abc', [ 2, 2 ], identity, identity ); // $ExpectError
	unary2dBy( 3.14, [ 2, 2 ], identity, identity ); // $ExpectError
	unary2dBy( true, [ 2, 2 ], identity, identity ); // $ExpectError
	unary2dBy( false, [ 2, 2 ], identity, identity ); // $ExpectError
	unary2dBy( null, [ 2, 2 ], identity, identity ); // $ExpectError
	unary2dBy( [ '1' ], [ 2, 2 ], identity, identity ); // $ExpectError
	unary2dBy( {}, [ 2, 2 ], identity, identity ); // $ExpectError
	unary2dBy( ( x: number ): number => x, [ 2, 2 ], identity, identity ); // $ExpectError

	unary2dBy( 'abc', [ 2, 2 ], identity, identity, {} ); // $ExpectError
	unary2dBy( 3.14, [ 2, 2 ], identity, identity, {} ); // $ExpectError
	unary2dBy( true, [ 2, 2 ], identity, identity, {} ); // $ExpectError
	unary2dBy( false, [ 2, 2 ], identity, identity, {} ); // $ExpectError
	unary2dBy( null, [ 2, 2 ], identity, identity, {} ); // $ExpectError
	unary2dBy( [ '1' ], [ 2, 2 ], identity, identity, {} ); // $ExpectError
	unary2dBy( {}, [ 2, 2 ], identity, identity, {} ); // $ExpectError
	unary2dBy( ( x: number ): number => x, [ 2, 2 ], identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	unary2dBy( [ x, y ], 'abc', identity, identity ); // $ExpectError
	unary2dBy( [ x, y ], 3.14, identity, identity ); // $ExpectError
	unary2dBy( [ x, y ], true, identity, identity ); // $ExpectError
	unary2dBy( [ x, y ], false, identity, identity ); // $ExpectError
	unary2dBy( [ x, y ], null, identity, identity ); // $ExpectError
	unary2dBy( [ x, y ], [ '1' ], identity, identity ); // $ExpectError
	unary2dBy( [ x, y ], {}, identity, identity ); // $ExpectError
	unary2dBy( [ x, y ], ( x: number ): number => x, identity, identity ); // $ExpectError

	unary2dBy( [ x, y ], 'abc', identity, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], 3.14, identity, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], true, identity, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], false, identity, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], null, identity, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ '1' ], identity, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], {}, identity, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], ( x: number ): number => x, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid function...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	unary2dBy( [ x, y ], [ 2, 2 ], 'abc', identity ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], 3.14, identity ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], true, identity ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], false, identity ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], null, identity ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], [ '1' ], identity ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], {}, identity ); // $ExpectError

	unary2dBy( [ x, y ], [ 2, 2 ], 'abc', identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], 3.14, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], true, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], false, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], null, identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], [ '1' ], identity, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], {}, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid function...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	unary2dBy( [ x, y ], [ 2, 2 ], identity, 'abc' ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, 3.14 ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, true ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, false ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, null ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, [ '1' ] ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, {} ); // $ExpectError

	unary2dBy( [ x, y ], [ 2, 2 ], identity, 'abc', {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, 3.14, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, true, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, false, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, null, {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, [ '1' ], {} ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	unary2dBy(); // $ExpectError
	unary2dBy( [ x, y ] ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ] ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity ); // $ExpectError
	unary2dBy( [ x, y ], [ 2, 2 ], identity, identity, {}, {} ); // $ExpectError
}
