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

import flatten4dBy = require( './index' );

/**
* Identity function.
*
* @param value - input value
* @returns input value
*/
function identity<T>( value: T ): T {
	return value;
}


// TESTS //

// The function returns an array...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];

	flatten4dBy<number, number>( x, [ 2, 1, 1, 2 ], false, identity ); // $ExpectType number[]
	flatten4dBy<number, number>( x, [ 2, 1, 1, 2 ], true, identity ); // $ExpectType number[]

	flatten4dBy<number, number>( x, [ 2, 1, 1, 2 ], false, identity, {} ); // $ExpectType number[]
	flatten4dBy<number, number>( x, [ 2, 1, 1, 2 ], true, identity, {} ); // $ExpectType number[]

	flatten4dBy<string, string>( [ [ [ [ '1', '2' ] ] ], [ [ [ '3', '4' ] ] ] ], [ 2, 1, 1, 2 ], false, identity ); // $ExpectType string[]
	flatten4dBy<string, string>( [ [ [ [ '1', '2' ] ] ], [ [ [ '3', '4' ] ] ] ], [ 2, 1, 1, 2 ], true, identity ); // $ExpectType string[]

	flatten4dBy<string, string>( [ [ [ [ '1', '2' ] ] ], [ [ [ '3', '4' ] ] ] ], [ 2, 1, 1, 2 ], false, identity, {} ); // $ExpectType string[]
	flatten4dBy<string, string>( [ [ [ [ '1', '2' ] ] ], [ [ [ '3', '4' ] ] ] ], [ 2, 1, 1, 2 ], true, identity, {} ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	flatten4dBy( 1, [ 2, 1, 1, 2 ], false, identity ); // $ExpectError
	flatten4dBy( true, [ 2, 1, 1, 2 ], false, identity ); // $ExpectError
	flatten4dBy( false, [ 2, 1, 1, 2 ], false, identity ); // $ExpectError
	flatten4dBy( null, [ 2, 1, 1, 2 ], false, identity ); // $ExpectError
	flatten4dBy( void 0, [ 2, 1, 1, 2 ], false, identity ); // $ExpectError
	flatten4dBy( {}, [ 2, 1, 1, 2 ], false, identity ); // $ExpectError

	flatten4dBy( 1, [ 2, 1, 1, 2 ], false, identity, {} ); // $ExpectError
	flatten4dBy( true, [ 2, 1, 1, 2 ], false, identity, {} ); // $ExpectError
	flatten4dBy( false, [ 2, 1, 1, 2 ], false, identity, {} ); // $ExpectError
	flatten4dBy( null, [ 2, 1, 1, 2 ], false, identity, {} ); // $ExpectError
	flatten4dBy( void 0, [ 2, 1, 1, 2 ], false, identity, {} ); // $ExpectError
	flatten4dBy( {}, [ 2, 1, 1, 2 ], false, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];

	flatten4dBy( x, '', false, identity ); // $ExpectError
	flatten4dBy( x, 1, false, identity ); // $ExpectError
	flatten4dBy( x, true, false, identity ); // $ExpectError
	flatten4dBy( x, false, false, identity ); // $ExpectError
	flatten4dBy( x, null, false, identity ); // $ExpectError
	flatten4dBy( x, void 0, false, identity ); // $ExpectError
	flatten4dBy( x, {}, false, identity ); // $ExpectError
	flatten4dBy( x, [ 1, '2', 3 ], false, identity ); // $ExpectError
	flatten4dBy( x, ( x: number ): number => x, false, identity ); // $ExpectError

	flatten4dBy( x, '', false, identity, {} ); // $ExpectError
	flatten4dBy( x, 1, false, identity, {} ); // $ExpectError
	flatten4dBy( x, true, false, identity, {} ); // $ExpectError
	flatten4dBy( x, false, false, identity, {} ); // $ExpectError
	flatten4dBy( x, null, false, identity, {} ); // $ExpectError
	flatten4dBy( x, void 0, false, identity, {} ); // $ExpectError
	flatten4dBy( x, {}, false, identity, {} ); // $ExpectError
	flatten4dBy( x, [ 1, '2', 3 ], false, identity, {} ); // $ExpectError
	flatten4dBy( x, ( x: number ): number => x, false, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];

	flatten4dBy( x, [ 2, 1, 1, 2 ], '', identity ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], 1, identity ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], null, identity ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], void 0, identity ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], {}, identity ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], [], identity ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], ( x: number ): number => x, identity ); // $ExpectError

	flatten4dBy( x, [ 2, 1, 1, 2 ], '', identity, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], 1, identity, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], null, identity, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], void 0, identity, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], {}, identity, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], [], identity, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];

	flatten4dBy( x, [ 2, 1, 1, 2 ], false, '' ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, 1 ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, true ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, false ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, null ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, void 0 ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, [] ); // $ExpectError

	flatten4dBy( x, [ 2, 1, 1, 2 ], false, '', {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, 1, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, true, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, false, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, null, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, void 0, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, {}, {} ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];

	flatten4dBy(); // $ExpectError
	flatten4dBy( x ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ] ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false ); // $ExpectError
	flatten4dBy( x, [ 2, 1, 1, 2 ], false, identity, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];

	const out1 = [ 0, 0, 0, 0 ];

	flatten4dBy.assign<number, number, number>( x, [ 2, 1, 1, 2 ], false, out1, 1, 0, identity ); // $ExpectType Collection<number>
	flatten4dBy.assign<number, number, number>( x, [ 2, 1, 1, 2 ], true, out1, 1, 0, identity ); // $ExpectType Collection<number>

	flatten4dBy.assign<number, number, number>( x, [ 2, 1, 1, 2 ], false, out1, 1, 0, identity, {} ); // $ExpectType Collection<number>
	flatten4dBy.assign<number, number, number>( x, [ 2, 1, 1, 2 ], true, out1, 1, 0, identity, {} ); // $ExpectType Collection<number>

	const out2 = [ '', '', '', '' ];

	flatten4dBy.assign<string, string, string>( [ [ [ [ '1', '2' ] ] ], [ [ [ '3', '4' ] ] ] ], [ 2, 1, 1, 2 ], false, out2, 1, 0, identity ); // $ExpectType Collection<string>
	flatten4dBy.assign<string, string, string>( [ [ [ [ '1', '2' ] ] ], [ [ [ '3', '4' ] ] ] ], [ 2, 1, 1, 2 ], true, out2, 1, 0, identity ); // $ExpectType Collection<string>

	flatten4dBy.assign<string, string, string>( [ [ [ [ '1', '2' ] ] ], [ [ [ '3', '4' ] ] ] ], [ 2, 1, 1, 2 ], false, out2, 1, 0, identity, {} ); // $ExpectType Collection<string>
	flatten4dBy.assign<string, string, string>( [ [ [ [ '1', '2' ] ] ], [ [ [ '3', '4' ] ] ] ], [ 2, 1, 1, 2 ], true, out2, 1, 0, identity, {} ); // $ExpectType Collection<string>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const out = [ 0, 0, 0, 0 ];

	flatten4dBy.assign( 1, [ 2, 1, 1, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( true, [ 2, 1, 1, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( false, [ 2, 1, 1, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( null, [ 2, 1, 1, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( void 0, [ 2, 1, 1, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( {}, [ 2, 1, 1, 2 ], false, out, 1, 0, identity ); // $ExpectError

	flatten4dBy.assign( 1, [ 2, 1, 1, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( true, [ 2, 1, 1, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( false, [ 2, 1, 1, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( null, [ 2, 1, 1, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( void 0, [ 2, 1, 1, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( {}, [ 2, 1, 1, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten4dBy.assign( x, '', false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, 1, false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, true, false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, false, false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, null, false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, void 0, false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, {}, false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 1, '2', 3 ], false, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, ( x: number ): number => x, false, out, 1, 0, identity ); // $ExpectError

	flatten4dBy.assign( x, '', false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, 1, false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, true, false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, false, false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, null, false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, void 0, false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, {}, false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 1, '2', 3 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, ( x: number ): number => x, false, out, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a boolean...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], '', out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], 1, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], null, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], void 0, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], {}, out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], [], out, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], ( x: number ): number => x, out, 1, 0, identity ); // $ExpectError

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], '', out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], 1, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], null, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], void 0, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], {}, out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], [], out, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], ( x: number ): number => x, out, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, 1, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, true, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, false, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, null, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, void 0, 1, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, {}, 1, 0, identity ); // $ExpectError

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, 1, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, true, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, false, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, null, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, void 0, 1, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, {}, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, '1', 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, true, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, false, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, null, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, void 0, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, {}, 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, [], 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, ( x: number ): number => x, 0, identity ); // $ExpectError

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, '1', 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, true, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, false, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, null, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, void 0, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, {}, 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, [], 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, ( x: number ): number => x, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, '1', identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, true, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, false, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, null, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, void 0, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, {}, identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, [], identity ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, ( x: number ): number => x, identity ); // $ExpectError

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, '1', identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, true, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, false, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, null, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, void 0, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, {}, identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, [], identity, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a seventh argument which is not a function...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, '1' ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, 1 ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, true ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, false ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, null ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, void 0 ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, [] ); // $ExpectError

	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, '1', {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, 1, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, true, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, false, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, null, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, void 0, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, {}, {} ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten4dBy.assign(); // $ExpectError
	flatten4dBy.assign( x ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ] ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1 ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0 ); // $ExpectError
	flatten4dBy.assign( x, [ 2, 1, 1, 2 ], false, out, 1, 0, identity, {}, {} ); // $ExpectError
}
