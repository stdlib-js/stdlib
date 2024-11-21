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

import flattenBy = require( './index' );

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
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flattenBy<number, number>( x, [ 2, 2 ], false, identity ); // $ExpectType number[]
	flattenBy<number, number>( x, [ 2, 2 ], true, identity ); // $ExpectType number[]

	flattenBy<number, number>( x, [ 2, 2 ], false, identity, {} ); // $ExpectType number[]
	flattenBy<number, number>( x, [ 2, 2 ], true, identity, {} ); // $ExpectType number[]

	flattenBy<string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], false, identity ); // $ExpectType string[]
	flattenBy<string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], true, identity ); // $ExpectType string[]

	flattenBy<string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], false, identity, {} ); // $ExpectType string[]
	flattenBy<string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], true, identity, {} ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	flattenBy( 1, [ 2, 2 ], false, identity ); // $ExpectError
	flattenBy( true, [ 2, 2 ], false, identity ); // $ExpectError
	flattenBy( false, [ 2, 2 ], false, identity ); // $ExpectError
	flattenBy( null, [ 2, 2 ], false, identity ); // $ExpectError
	flattenBy( void 0, [ 2, 2 ], false, identity ); // $ExpectError
	flattenBy( {}, [ 2, 2 ], false, identity ); // $ExpectError

	flattenBy( 1, [ 2, 2 ], false, identity, {} ); // $ExpectError
	flattenBy( true, [ 2, 2 ], false, identity, {} ); // $ExpectError
	flattenBy( false, [ 2, 2 ], false, identity, {} ); // $ExpectError
	flattenBy( null, [ 2, 2 ], false, identity, {} ); // $ExpectError
	flattenBy( void 0, [ 2, 2 ], false, identity, {} ); // $ExpectError
	flattenBy( {}, [ 2, 2 ], false, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flattenBy( x, '', false, identity ); // $ExpectError
	flattenBy( x, 1, false, identity ); // $ExpectError
	flattenBy( x, true, false, identity ); // $ExpectError
	flattenBy( x, false, false, identity ); // $ExpectError
	flattenBy( x, null, false, identity ); // $ExpectError
	flattenBy( x, void 0, false, identity ); // $ExpectError
	flattenBy( x, {}, false, identity ); // $ExpectError
	flattenBy( x, [ 1, '2', 3 ], false, identity ); // $ExpectError
	flattenBy( x, ( x: number ): number => x, false, identity ); // $ExpectError

	flattenBy( x, '', false, identity, {} ); // $ExpectError
	flattenBy( x, 1, false, identity, {} ); // $ExpectError
	flattenBy( x, true, false, identity, {} ); // $ExpectError
	flattenBy( x, false, false, identity, {} ); // $ExpectError
	flattenBy( x, null, false, identity, {} ); // $ExpectError
	flattenBy( x, void 0, false, identity, {} ); // $ExpectError
	flattenBy( x, {}, false, identity, {} ); // $ExpectError
	flattenBy( x, [ 1, '2', 3 ], false, identity, {} ); // $ExpectError
	flattenBy( x, ( x: number ): number => x, false, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flattenBy( x, [ 2, 2 ], '', identity ); // $ExpectError
	flattenBy( x, [ 2, 2 ], 1, identity ); // $ExpectError
	flattenBy( x, [ 2, 2 ], null, identity ); // $ExpectError
	flattenBy( x, [ 2, 2 ], void 0, identity ); // $ExpectError
	flattenBy( x, [ 2, 2 ], {}, identity ); // $ExpectError
	flattenBy( x, [ 2, 2 ], [], identity ); // $ExpectError
	flattenBy( x, [ 2, 2 ], ( x: number ): number => x, identity ); // $ExpectError

	flattenBy( x, [ 2, 2 ], '', identity, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], 1, identity, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], null, identity, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], void 0, identity, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], {}, identity, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], [], identity, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flattenBy( x, [ 2, 2 ], false, '' ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, 1 ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, true ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, false ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, null ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, void 0 ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, [] ); // $ExpectError

	flattenBy( x, [ 2, 2 ], false, '', {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, 1, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, true, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, false, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, null, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, void 0, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, {}, {} ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flattenBy(); // $ExpectError
	flattenBy( x ); // $ExpectError
	flattenBy( x, [ 2, 2 ] ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false ); // $ExpectError
	flattenBy( x, [ 2, 2 ], false, identity, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	const out1 = [ 0, 0, 0, 0 ];

	flattenBy.assign<number, number, number>( x, [ 2, 2 ], false, out1, 1, 0, identity ); // $ExpectType Collection<number>
	flattenBy.assign<number, number, number>( x, [ 2, 2 ], true, out1, 1, 0, identity ); // $ExpectType Collection<number>

	flattenBy.assign<number, number, number>( x, [ 2, 2 ], false, out1, 1, 0, identity, {} ); // $ExpectType Collection<number>
	flattenBy.assign<number, number, number>( x, [ 2, 2 ], true, out1, 1, 0, identity, {} ); // $ExpectType Collection<number>

	const out2 = [ '', '', '', '' ];

	flattenBy.assign<string, string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], false, out2, 1, 0, identity ); // $ExpectType Collection<string>
	flattenBy.assign<string, string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], true, out2, 1, 0, identity ); // $ExpectType Collection<string>

	flattenBy.assign<string, string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], false, out2, 1, 0, identity, {} ); // $ExpectType Collection<string>
	flattenBy.assign<string, string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], true, out2, 1, 0, identity, {} ); // $ExpectType Collection<string>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const out = [ 0, 0, 0, 0 ];

	flattenBy.assign( 1, [ 2, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( true, [ 2, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( false, [ 2, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( null, [ 2, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( void 0, [ 2, 2 ], false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( {}, [ 2, 2 ], false, out, 1, 0, identity ); // $ExpectError

	flattenBy.assign( 1, [ 2, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( true, [ 2, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( false, [ 2, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( null, [ 2, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( void 0, [ 2, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( {}, [ 2, 2 ], false, out, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flattenBy.assign( x, '', false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, 1, false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, true, false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, false, false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, null, false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, void 0, false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, {}, false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 1, '2', 3 ], false, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, ( x: number ): number => x, false, out, 1, 0, identity ); // $ExpectError

	flattenBy.assign( x, '', false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, 1, false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, true, false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, false, false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, null, false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, void 0, false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, {}, false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 1, '2', 3 ], false, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, ( x: number ): number => x, false, out, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a boolean...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flattenBy.assign( x, [ 2, 2 ], '', out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], 1, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], null, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], void 0, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], {}, out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], [], out, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], ( x: number ): number => x, out, 1, 0, identity ); // $ExpectError

	flattenBy.assign( x, [ 2, 2 ], '', out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], 1, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], null, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], void 0, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], {}, out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], [], out, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], ( x: number ): number => x, out, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flattenBy.assign( x, [ 2, 2 ], false, 1, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, true, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, false, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, null, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, void 0, 1, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, {}, 1, 0, identity ); // $ExpectError

	flattenBy.assign( x, [ 2, 2 ], false, 1, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, true, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, false, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, null, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, void 0, 1, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, {}, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flattenBy.assign( x, [ 2, 2 ], false, out, '1', 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, true, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, false, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, null, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, void 0, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, {}, 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, [], 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, ( x: number ): number => x, 0, identity ); // $ExpectError

	flattenBy.assign( x, [ 2, 2 ], false, out, '1', 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, true, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, false, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, null, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, void 0, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, {}, 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, [], 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, ( x: number ): number => x, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flattenBy.assign( x, [ 2, 2 ], false, out, 1, '1', identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, true, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, false, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, null, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, void 0, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, {}, identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, [], identity ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, ( x: number ): number => x, identity ); // $ExpectError

	flattenBy.assign( x, [ 2, 2 ], false, out, 1, '1', identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, true, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, false, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, null, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, void 0, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, {}, identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, [], identity, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a seventh argument which is not a function...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, '1' ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, 1 ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, true ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, false ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, null ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, void 0 ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, [] ); // $ExpectError

	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, '1', {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, 1, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, true, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, false, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, null, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, void 0, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, {}, {} ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flattenBy.assign(); // $ExpectError
	flattenBy.assign( x ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ] ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1 ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0 ); // $ExpectError
	flattenBy.assign( x, [ 2, 2 ], false, out, 1, 0, identity, {}, {} ); // $ExpectError
}
