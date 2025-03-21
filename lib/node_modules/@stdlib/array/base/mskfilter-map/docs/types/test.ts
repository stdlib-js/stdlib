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

import mskfilterMap = require( './index' );

/**
* Callback function.
*
* @param value - input value
* @returns result
*/
function clbk( value: number ): number {
	return value;
}

// TESTS //

// The function returns an array...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	mskfilterMap( x, [ 1, 1, 1, 1 ], clbk ); // $ExpectType number[]
	mskfilterMap( x, [ 1, 1, 1, 1 ], clbk, {} ); //  $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	mskfilterMap( 1, [ 0, 0 ], clbk ); // $ExpectError
	mskfilterMap( true, [ 0, 0 ], clbk ); // $ExpectError
	mskfilterMap( false, [ 0, 0 ], clbk ); // $ExpectError
	mskfilterMap( null, [ 0, 0 ], clbk ); // $ExpectError
	mskfilterMap( void 0, [ 0, 0 ], clbk ); // $ExpectError
	mskfilterMap( {}, [ 0, 0 ], clbk ); // $ExpectError

	mskfilterMap( 1, [ 0, 0 ], clbk, {} ); // $ExpectError
	mskfilterMap( true, [ 0, 0 ], clbk, {} ); // $ExpectError
	mskfilterMap( false, [ 0, 0 ], clbk, {} ); // $ExpectError
	mskfilterMap( null, [ 0, 0 ], clbk, {} ); // $ExpectError
	mskfilterMap( void 0, [ 0, 0 ], clbk, {} ); // $ExpectError
	mskfilterMap( {}, [ 0, 0 ], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	mskfilterMap( [], 1, clbk ); // $ExpectError
	mskfilterMap( [], true, clbk ); // $ExpectError
	mskfilterMap( [], false, clbk ); // $ExpectError
	mskfilterMap( [], null, clbk ); // $ExpectError
	mskfilterMap( [], void 0, clbk ); // $ExpectError
	mskfilterMap( [], {}, clbk ); // $ExpectError

	mskfilterMap( [], 1, clbk, {} ); // $ExpectError
	mskfilterMap( [], true, clbk, {} ); // $ExpectError
	mskfilterMap( [], false, clbk, {} ); // $ExpectError
	mskfilterMap( [], null, clbk, {} ); // $ExpectError
	mskfilterMap( [], void 0, clbk, {} ); // $ExpectError
	mskfilterMap( [], {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [1, 2];

	mskfilterMap( x, [ 1, 1 ], 'abc' ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], 3.14 ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], true ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], false ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], null ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], [ '1' ] ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], {} ); // $ExpectError

	mskfilterMap( x, [ 1, 1 ], 'abc', {} ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], 3.14, {} ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], true, {} ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], false, {} ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], null, {} ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], [ '1' ], {} ); // $ExpectError
	mskfilterMap( x, [ 1, 1 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0 ];

	mskfilterMap(); // $ExpectError
	mskfilterMap( x ); // $ExpectError
	mskfilterMap( x, [ 0, 1 ] ); // $ExpectError
	mskfilterMap( x, [ 0, 1 ], clbk, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];
	const out = [ 0, 0, 0, 0 ];

	mskfilterMap.assign( x, [ 1, 0, 1, 0 ], out, 1, 0, clbk ); // $ExpectType Collection<number>
	mskfilterMap.assign( x, [ 1, 0, 1, 0 ], out, 1, 0, clbk, {} ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const mask = [ 0, 0, 0, 0 ];

	mskfilterMap.assign( 'abc', mask, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( 3.14, mask, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( true, mask, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( false, mask, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( null, mask, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( [ '1' ], mask, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( {}, mask, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( ( x: number ): number => x, mask, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError

	mskfilterMap.assign( 'abc', mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( 3.14, mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( true, mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( false, mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( null, mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( [ '1' ], mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( {}, mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( ( x: number ): number => x, mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	mskfilterMap.assign( x, 3.14, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, true, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, false, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, null, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, {}, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, ( x: number ): number => x, [ 0, 0, 0, 0 ], 1, 0, clbk ); // $ExpectError

	mskfilterMap.assign( x, 3.14, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, true, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, false, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, null, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, {}, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, ( x: number ): number => x, [ 0, 0, 0, 0 ], 1, 0, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];
	const mask = [ 0.0, 0.0, 0.0, 0.0 ];

	mskfilterMap.assign( x, mask, 3.14, 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, true, 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, false, 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, null, 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, {}, 1, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, ( x: number ): number => x, 1, 0, clbk ); // $ExpectError

	mskfilterMap.assign( x, mask, 3.14, 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, true, 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, false, 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, null, 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, {}, 1, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, ( x: number ): number => x, 1, 0, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];
	const mask = [ 0.0, 0.0, 0.0, 0.0 ];

	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 'abc', 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], [ 1 ], 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], true, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], false, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], null, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], [ '1' ], 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], {}, 0, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], ( x: number ): number => x, 0, clbk ); // $ExpectError

	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 'abc', 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], [ 1 ], 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], true, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], false, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], null, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], [ '1' ], 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], {}, 0, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], ( x: number ): number => x, 0, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];
	const mask = [ 0.0, 0.0, 0.0, 0.0 ];

	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 'abc', clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, [ 1 ], clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, true, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, false, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, null, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, [ '1' ], clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, {}, clbk ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, ( x: number ): number => x, clbk ); // $ExpectError

	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 'abc', clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, [ 1 ], clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, true, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, false, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, null, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, [ '1' ], clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, {}, clbk, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a valid callback...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];
	const mask = [ 0.0, 0.0, 0.0, 0.0 ];

	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, 'abc' ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, 3.14 ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, true ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, false ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, null ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, [ '1' ] ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, {} ); // $ExpectError

	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, 'abc', {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, 3.14, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, true, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, false, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, null, {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, [ '1' ], {} ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];
	const mask = [ 0.0, 0.0, 0.0, 0.0 ];

	mskfilterMap.assign(); // $ExpectError
	mskfilterMap.assign( x ); // $ExpectError
	mskfilterMap.assign( x, mask ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ] ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1 ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0 ); // $ExpectError
	mskfilterMap.assign( x, mask, [ 0, 0, 0, 0 ], 1, 0, clbk, {}, {} ); // $ExpectError
}

