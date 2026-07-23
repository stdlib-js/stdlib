/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { IterableIterator } from '@stdlib/types/iter';
import filledarrayBy = require( './index' );


/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator(): IterableIterator {
	const obj: IterableIterator = {
		[Symbol.iterator]: iterator,
		'next': next
	};
	return obj;
}

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next(): any {
	return {
		'value': 1.0,
		'done': false
	};
}

/**
* Callback function.
*
* @param i - current array index
* @returns return value
*/
function clbk( i: number ): number {
	return i;
}


// TESTS //

// The function returns an array or typed array...
{
	filledarrayBy(); // $ExpectType ArrayOrTypedArray
	filledarrayBy( 'float32' ); // $ExpectType ArrayOrTypedArray

	filledarrayBy( 10, clbk ); // $ExpectType ArrayOrTypedArray
	filledarrayBy( 10, clbk, {} ); // $ExpectType ArrayOrTypedArray

	filledarrayBy( 10, 'int32', clbk ); // $ExpectType ArrayOrTypedArray
	filledarrayBy( 10, 'int32', clbk, {} ); // $ExpectType ArrayOrTypedArray

	const x = new Float64Array( 10 );
	filledarrayBy( x, clbk ); // $ExpectType ArrayOrTypedArray
	filledarrayBy( x, clbk, {} ); // $ExpectType ArrayOrTypedArray

	filledarrayBy( x, 'uint8', clbk ); // $ExpectType ArrayOrTypedArray
	filledarrayBy( x, 'uint8', clbk, {} ); // $ExpectType ArrayOrTypedArray

	const y = [ 2.0, 2.0, 2.0 ];
	filledarrayBy( y, clbk ); // $ExpectType ArrayOrTypedArray
	filledarrayBy( y, clbk, {} ); // $ExpectType ArrayOrTypedArray

	filledarrayBy( y, 'float64', clbk ); // $ExpectType ArrayOrTypedArray
	filledarrayBy( y, 'float64', clbk, {} ); // $ExpectType ArrayOrTypedArray

	const it = iterator();
	filledarrayBy( it, clbk ); // $ExpectType ArrayOrTypedArray
	filledarrayBy( it, clbk, {} ); // $ExpectType ArrayOrTypedArray

	filledarrayBy( it, 'uint8c', clbk ); // $ExpectType ArrayOrTypedArray
	filledarrayBy( it, 'uint8c', clbk, {} ); // $ExpectType ArrayOrTypedArray

	const buf = new ArrayBuffer( 32 );
	filledarrayBy( buf, clbk ); // $ExpectType RealOrComplexTypedArray | BooleanArray
	filledarrayBy( buf, clbk, {} ); // $ExpectType RealOrComplexTypedArray | BooleanArray

	filledarrayBy( buf, 'uint32', clbk ); // $ExpectType RealOrComplexTypedArray | BooleanArray
	filledarrayBy( buf, 'uint32', clbk, {} ); // $ExpectType RealOrComplexTypedArray | BooleanArray

	filledarrayBy( buf, 8, clbk ); // $ExpectType RealOrComplexTypedArray | BooleanArray
	filledarrayBy( buf, 8, clbk, {} ); // $ExpectType RealOrComplexTypedArray | BooleanArray

	filledarrayBy( buf, 8, 'uint16', clbk ); // $ExpectType RealOrComplexTypedArray | BooleanArray
	filledarrayBy( buf, 8, 'uint16', clbk, {} ); // $ExpectType RealOrComplexTypedArray | BooleanArray

	filledarrayBy( buf, 8, 2, clbk ); // $ExpectType RealOrComplexTypedArray | BooleanArray
	filledarrayBy( buf, 8, 2, clbk, {} ); // $ExpectType RealOrComplexTypedArray | BooleanArray

	filledarrayBy( buf, 8, 2, 'int16', clbk ); // $ExpectType RealOrComplexTypedArray | BooleanArray
	filledarrayBy( buf, 8, 2, 'int16', clbk, {} ); // $ExpectType RealOrComplexTypedArray | BooleanArray
}

// The compiler throws an error if a callback function argument is not a function...
{
	filledarrayBy( 'float64', '5' ); // $ExpectError
	filledarrayBy( 'float64', 1.0 ); // $ExpectError
	filledarrayBy( 'float64', false ); // $ExpectError
	filledarrayBy( 'float64', true ); // $ExpectError
	filledarrayBy( 'float64', null ); // $ExpectError
	filledarrayBy( 'float64', undefined ); // $ExpectError
	filledarrayBy( 'float64', [] ); // $ExpectError
	filledarrayBy( 'float64', {} ); // $ExpectError

	filledarrayBy( 'float64', '5', {} ); // $ExpectError
	filledarrayBy( 'float64', 1.0, {} ); // $ExpectError
	filledarrayBy( 'float64', false, {} ); // $ExpectError
	filledarrayBy( 'float64', true, {} ); // $ExpectError
	filledarrayBy( 'float64', null, {} ); // $ExpectError
	filledarrayBy( 'float64', undefined, {} ); // $ExpectError
	filledarrayBy( 'float64', [], {} ); // $ExpectError
	filledarrayBy( 'float64', {}, {} ); // $ExpectError

	filledarrayBy( 10, '5' ); // $ExpectError
	filledarrayBy( 10, 1.0 ); // $ExpectError
	filledarrayBy( 10, false ); // $ExpectError
	filledarrayBy( 10, true ); // $ExpectError
	filledarrayBy( 10, null ); // $ExpectError
	filledarrayBy( 10, undefined ); // $ExpectError
	filledarrayBy( 10, [] ); // $ExpectError
	filledarrayBy( 10, {} ); // $ExpectError

	filledarrayBy( 10, '5', {} ); // $ExpectError
	filledarrayBy( 10, 1.0, {} ); // $ExpectError
	filledarrayBy( 10, false, {} ); // $ExpectError
	filledarrayBy( 10, true, {} ); // $ExpectError
	filledarrayBy( 10, null, {} ); // $ExpectError
	filledarrayBy( 10, undefined, {} ); // $ExpectError
	filledarrayBy( 10, [], {} ); // $ExpectError
	filledarrayBy( 10, {}, {} ); // $ExpectError

	filledarrayBy( 10, 'float64', '5' ); // $ExpectError
	filledarrayBy( 10, 'float64', 1.0 ); // $ExpectError
	filledarrayBy( 10, 'float64', false ); // $ExpectError
	filledarrayBy( 10, 'float64', true ); // $ExpectError
	filledarrayBy( 10, 'float64', null ); // $ExpectError
	filledarrayBy( 10, 'float64', undefined ); // $ExpectError
	filledarrayBy( 10, 'float64', [] ); // $ExpectError
	filledarrayBy( 10, 'float64', {} ); // $ExpectError

	filledarrayBy( 10, 'float64', '5', {} ); // $ExpectError
	filledarrayBy( 10, 'float64', 1.0, {} ); // $ExpectError
	filledarrayBy( 10, 'float64', false, {} ); // $ExpectError
	filledarrayBy( 10, 'float64', true, {} ); // $ExpectError
	filledarrayBy( 10, 'float64', null, {} ); // $ExpectError
	filledarrayBy( 10, 'float64', undefined, {} ); // $ExpectError
	filledarrayBy( 10, 'float64', [], {} ); // $ExpectError
	filledarrayBy( 10, 'float64', {}, {} ); // $ExpectError

	const x = new Float64Array( 10 );
	filledarrayBy( x, '5' ); // $ExpectError
	filledarrayBy( x, 1.0 ); // $ExpectError
	filledarrayBy( x, false ); // $ExpectError
	filledarrayBy( x, true ); // $ExpectError
	filledarrayBy( x, null ); // $ExpectError
	filledarrayBy( x, undefined ); // $ExpectError
	filledarrayBy( x, [] ); // $ExpectError
	filledarrayBy( x, {} ); // $ExpectError

	filledarrayBy( x, '5', {} ); // $ExpectError
	filledarrayBy( x, 1.0, {} ); // $ExpectError
	filledarrayBy( x, false, {} ); // $ExpectError
	filledarrayBy( x, true, {} ); // $ExpectError
	filledarrayBy( x, null, {} ); // $ExpectError
	filledarrayBy( x, undefined, {} ); // $ExpectError
	filledarrayBy( x, [], {} ); // $ExpectError
	filledarrayBy( x, {}, {} ); // $ExpectError

	filledarrayBy( x, 'float64', '5' ); // $ExpectError
	filledarrayBy( x, 'float64', 1.0 ); // $ExpectError
	filledarrayBy( x, 'float64', false ); // $ExpectError
	filledarrayBy( x, 'float64', true ); // $ExpectError
	filledarrayBy( x, 'float64', null ); // $ExpectError
	filledarrayBy( x, 'float64', undefined ); // $ExpectError
	filledarrayBy( x, 'float64', [] ); // $ExpectError
	filledarrayBy( x, 'float64', {} ); // $ExpectError

	filledarrayBy( x, 'float64', '5', {} ); // $ExpectError
	filledarrayBy( x, 'float64', 1.0, {} ); // $ExpectError
	filledarrayBy( x, 'float64', false, {} ); // $ExpectError
	filledarrayBy( x, 'float64', true, {} ); // $ExpectError
	filledarrayBy( x, 'float64', null, {} ); // $ExpectError
	filledarrayBy( x, 'float64', undefined, {} ); // $ExpectError
	filledarrayBy( x, 'float64', [], {} ); // $ExpectError
	filledarrayBy( x, 'float64', {}, {} ); // $ExpectError

	const y = [ 2.0, 2.0, 2.0 ];
	filledarrayBy( y, '5' ); // $ExpectError
	filledarrayBy( y, 1.0 ); // $ExpectError
	filledarrayBy( y, false ); // $ExpectError
	filledarrayBy( y, true ); // $ExpectError
	filledarrayBy( y, null ); // $ExpectError
	filledarrayBy( y, undefined ); // $ExpectError
	filledarrayBy( y, [] ); // $ExpectError
	filledarrayBy( y, {} ); // $ExpectError

	filledarrayBy( y, '5', {} ); // $ExpectError
	filledarrayBy( y, 1.0, {} ); // $ExpectError
	filledarrayBy( y, false, {} ); // $ExpectError
	filledarrayBy( y, true, {} ); // $ExpectError
	filledarrayBy( y, null, {} ); // $ExpectError
	filledarrayBy( y, undefined, {} ); // $ExpectError
	filledarrayBy( y, [], {} ); // $ExpectError
	filledarrayBy( y, {}, {} ); // $ExpectError

	filledarrayBy( y, 'float64', '5' ); // $ExpectError
	filledarrayBy( y, 'float64', 1.0 ); // $ExpectError
	filledarrayBy( y, 'float64', false ); // $ExpectError
	filledarrayBy( y, 'float64', true ); // $ExpectError
	filledarrayBy( y, 'float64', null ); // $ExpectError
	filledarrayBy( y, 'float64', undefined ); // $ExpectError
	filledarrayBy( y, 'float64', [] ); // $ExpectError
	filledarrayBy( y, 'float64', {} ); // $ExpectError

	filledarrayBy( y, 'float64', '5', {} ); // $ExpectError
	filledarrayBy( y, 'float64', 1.0, {} ); // $ExpectError
	filledarrayBy( y, 'float64', false, {} ); // $ExpectError
	filledarrayBy( y, 'float64', true, {} ); // $ExpectError
	filledarrayBy( y, 'float64', null, {} ); // $ExpectError
	filledarrayBy( y, 'float64', undefined, {} ); // $ExpectError
	filledarrayBy( y, 'float64', [], {} ); // $ExpectError
	filledarrayBy( y, 'float64', {}, {} ); // $ExpectError

	const it = iterator();
	filledarrayBy( it, '5' ); // $ExpectError
	filledarrayBy( it, 1.0 ); // $ExpectError
	filledarrayBy( it, false ); // $ExpectError
	filledarrayBy( it, true ); // $ExpectError
	filledarrayBy( it, null ); // $ExpectError
	filledarrayBy( it, undefined ); // $ExpectError
	filledarrayBy( it, [] ); // $ExpectError
	filledarrayBy( it, {} ); // $ExpectError

	filledarrayBy( it, '5', {} ); // $ExpectError
	filledarrayBy( it, 1.0, {} ); // $ExpectError
	filledarrayBy( it, false, {} ); // $ExpectError
	filledarrayBy( it, true, {} ); // $ExpectError
	filledarrayBy( it, null, {} ); // $ExpectError
	filledarrayBy( it, undefined, {} ); // $ExpectError
	filledarrayBy( it, [], {} ); // $ExpectError
	filledarrayBy( it, {}, {} ); // $ExpectError

	filledarrayBy( it, 'float64', '5' ); // $ExpectError
	filledarrayBy( it, 'float64', 1.0 ); // $ExpectError
	filledarrayBy( it, 'float64', false ); // $ExpectError
	filledarrayBy( it, 'float64', true ); // $ExpectError
	filledarrayBy( it, 'float64', null ); // $ExpectError
	filledarrayBy( it, 'float64', undefined ); // $ExpectError
	filledarrayBy( it, 'float64', [] ); // $ExpectError
	filledarrayBy( it, 'float64', {} ); // $ExpectError

	filledarrayBy( it, 'float64', '5', {} ); // $ExpectError
	filledarrayBy( it, 'float64', 1.0, {} ); // $ExpectError
	filledarrayBy( it, 'float64', false, {} ); // $ExpectError
	filledarrayBy( it, 'float64', true, {} ); // $ExpectError
	filledarrayBy( it, 'float64', null, {} ); // $ExpectError
	filledarrayBy( it, 'float64', undefined, {} ); // $ExpectError
	filledarrayBy( it, 'float64', [], {} ); // $ExpectError
	filledarrayBy( it, 'float64', {}, {} ); // $ExpectError

	const buf = new ArrayBuffer( 32 );
	filledarrayBy( buf, '5' ); // $ExpectError
	filledarrayBy( buf, 1.0 ); // $ExpectError
	filledarrayBy( buf, false ); // $ExpectError
	filledarrayBy( buf, true ); // $ExpectError
	filledarrayBy( buf, null ); // $ExpectError
	filledarrayBy( buf, undefined ); // $ExpectError
	filledarrayBy( buf, [] ); // $ExpectError
	filledarrayBy( buf, {} ); // $ExpectError

	filledarrayBy( buf, '5', {} ); // $ExpectError
	filledarrayBy( buf, 1.0, {} ); // $ExpectError
	filledarrayBy( buf, false, {} ); // $ExpectError
	filledarrayBy( buf, true, {} ); // $ExpectError
	filledarrayBy( buf, null, {} ); // $ExpectError
	filledarrayBy( buf, undefined, {} ); // $ExpectError
	filledarrayBy( buf, [], {} ); // $ExpectError
	filledarrayBy( buf, {}, {} ); // $ExpectError

	filledarrayBy( buf, 'float64', '5' ); // $ExpectError
	filledarrayBy( buf, 'float64', 1.0 ); // $ExpectError
	filledarrayBy( buf, 'float64', false ); // $ExpectError
	filledarrayBy( buf, 'float64', true ); // $ExpectError
	filledarrayBy( buf, 'float64', null ); // $ExpectError
	filledarrayBy( buf, 'float64', undefined ); // $ExpectError
	filledarrayBy( buf, 'float64', [] ); // $ExpectError
	filledarrayBy( buf, 'float64', {} ); // $ExpectError

	filledarrayBy( buf, 'float64', '5', {} ); // $ExpectError
	filledarrayBy( buf, 'float64', 1.0, {} ); // $ExpectError
	filledarrayBy( buf, 'float64', false, {} ); // $ExpectError
	filledarrayBy( buf, 'float64', true, {} ); // $ExpectError
	filledarrayBy( buf, 'float64', null, {} ); // $ExpectError
	filledarrayBy( buf, 'float64', undefined, {} ); // $ExpectError
	filledarrayBy( buf, 'float64', [], {} ); // $ExpectError
	filledarrayBy( buf, 'float64', {}, {} ); // $ExpectError

	filledarrayBy( buf, 8, '5' ); // $ExpectError
	filledarrayBy( buf, 8, 1.0 ); // $ExpectError
	filledarrayBy( buf, 8, false ); // $ExpectError
	filledarrayBy( buf, 8, true ); // $ExpectError
	filledarrayBy( buf, 8, null ); // $ExpectError
	filledarrayBy( buf, 8, undefined ); // $ExpectError
	filledarrayBy( buf, 8, [] ); // $ExpectError
	filledarrayBy( buf, 8, {} ); // $ExpectError

	filledarrayBy( buf, 8, '5', {} ); // $ExpectError
	filledarrayBy( buf, 8, 1.0, {} ); // $ExpectError
	filledarrayBy( buf, 8, false, {} ); // $ExpectError
	filledarrayBy( buf, 8, true, {} ); // $ExpectError
	filledarrayBy( buf, 8, null, {} ); // $ExpectError
	filledarrayBy( buf, 8, undefined, {} ); // $ExpectError
	filledarrayBy( buf, 8, [], {} ); // $ExpectError
	filledarrayBy( buf, 8, {}, {} ); // $ExpectError

	filledarrayBy( buf, 8, 'float64', '5' ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', 1.0 ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', false ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', true ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', null ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', undefined ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', [] ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', {} ); // $ExpectError

	filledarrayBy( buf, 8, 'float64', '5', {} ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', 1.0, {} ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', false, {} ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', true, {} ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', null, {} ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', undefined, {} ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', [], {} ); // $ExpectError
	filledarrayBy( buf, 8, 'float64', {}, {} ); // $ExpectError

	filledarrayBy( buf, 8, 2, '5' ); // $ExpectError
	filledarrayBy( buf, 8, 2, 1.0 ); // $ExpectError
	filledarrayBy( buf, 8, 2, false ); // $ExpectError
	filledarrayBy( buf, 8, 2, true ); // $ExpectError
	filledarrayBy( buf, 8, 2, null ); // $ExpectError
	filledarrayBy( buf, 8, 2, undefined ); // $ExpectError
	filledarrayBy( buf, 8, 2, [] ); // $ExpectError
	filledarrayBy( buf, 8, 2, {} ); // $ExpectError

	filledarrayBy( buf, 8, 2, '5', {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, 1.0, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, false, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, true, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, null, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, undefined, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, [], {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, {}, {} ); // $ExpectError

	filledarrayBy( buf, 8, 2, 'float64', '5' ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', 1.0 ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', false ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', true ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', null ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', undefined ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', [] ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', {} ); // $ExpectError

	filledarrayBy( buf, 8, 2, 'float64', '5', {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', 1.0, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', false, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', true, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', null, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', undefined, {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', [], {} ); // $ExpectError
	filledarrayBy( buf, 8, 2, 'float64', {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is not provided a valid length, typed array, array-like object, `ArrayBuffer`, or iterable argument...
{
	filledarrayBy( false, clbk ); // $ExpectError
	filledarrayBy( true, clbk ); // $ExpectError
	filledarrayBy( null, clbk ); // $ExpectError
	filledarrayBy( {}, clbk ); // $ExpectError

	filledarrayBy( false, clbk, {} ); // $ExpectError
	filledarrayBy( true, clbk, {} ); // $ExpectError
	filledarrayBy( null, clbk, {} ); // $ExpectError
	filledarrayBy( {}, clbk, {} ); // $ExpectError

	filledarrayBy( false, 'float64', clbk ); // $ExpectError
	filledarrayBy( true, 'float64', clbk ); // $ExpectError
	filledarrayBy( null, 'float64', clbk ); // $ExpectError
	filledarrayBy( undefined, 'float64', clbk ); // $ExpectError
	filledarrayBy( {}, 'float64', clbk ); // $ExpectError

	filledarrayBy( false, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( true, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( null, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( undefined, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( {}, 'float64', clbk, {} ); // $ExpectError

	filledarrayBy( '5', 8, clbk ); // $ExpectError
	filledarrayBy( 1.0, 8, clbk ); // $ExpectError
	filledarrayBy( false, 8, clbk ); // $ExpectError
	filledarrayBy( true, 8, clbk ); // $ExpectError
	filledarrayBy( null, 8, clbk ); // $ExpectError
	filledarrayBy( undefined, 8, clbk ); // $ExpectError
	filledarrayBy( [], 8, clbk ); // $ExpectError
	filledarrayBy( {}, 8, clbk ); // $ExpectError
	filledarrayBy( ( x: number ): number => x, 8, clbk ); // $ExpectError

	filledarrayBy( '5', 8, clbk, {} ); // $ExpectError
	filledarrayBy( 1.0, 8, clbk, {} ); // $ExpectError
	filledarrayBy( false, 8, clbk, {} ); // $ExpectError
	filledarrayBy( true, 8, clbk, {} ); // $ExpectError
	filledarrayBy( null, 8, clbk, {} ); // $ExpectError
	filledarrayBy( undefined, 8, clbk, {} ); // $ExpectError
	filledarrayBy( [], 8, clbk, {} ); // $ExpectError
	filledarrayBy( {}, 8, clbk, {} ); // $ExpectError
	filledarrayBy( ( x: number ): number => x, 8, clbk, {} ); // $ExpectError

	filledarrayBy( '5', 8, 'float64', clbk ); // $ExpectError
	filledarrayBy( 1.0, 8, 'float64', clbk ); // $ExpectError
	filledarrayBy( false, 8, 'float64', clbk ); // $ExpectError
	filledarrayBy( true, 8, 'float64', clbk ); // $ExpectError
	filledarrayBy( null, 8, 'float64', clbk ); // $ExpectError
	filledarrayBy( undefined, 8, 'float64', clbk ); // $ExpectError
	filledarrayBy( [], 8, 'float64', clbk ); // $ExpectError
	filledarrayBy( {}, 8, 'float64', clbk ); // $ExpectError
	filledarrayBy( ( x: number ): number => x, 8, 'float64', clbk ); // $ExpectError

	filledarrayBy( '5', 8, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( 1.0, 8, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( false, 8, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( true, 8, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( null, 8, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( undefined, 8, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( [], 8, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( {}, 8, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( ( x: number ): number => x, 8, 'float64', clbk, {} ); // $ExpectError

	filledarrayBy( '5', 8, 2, clbk ); // $ExpectError
	filledarrayBy( 1.0, 8, 2, clbk ); // $ExpectError
	filledarrayBy( false, 8, 2, clbk ); // $ExpectError
	filledarrayBy( true, 8, 2, clbk ); // $ExpectError
	filledarrayBy( null, 8, 2, clbk ); // $ExpectError
	filledarrayBy( undefined, 8, 2, clbk ); // $ExpectError
	filledarrayBy( [], 8, 2, clbk ); // $ExpectError
	filledarrayBy( {}, 8, 2, clbk ); // $ExpectError
	filledarrayBy( ( x: number ): number => x, 8, 2, clbk ); // $ExpectError

	filledarrayBy( '5', 8, 2, clbk, {} ); // $ExpectError
	filledarrayBy( 1.0, 8, 2, clbk, {} ); // $ExpectError
	filledarrayBy( false, 8, 2, clbk, {} ); // $ExpectError
	filledarrayBy( true, 8, 2, clbk, {} ); // $ExpectError
	filledarrayBy( null, 8, 2, clbk, {} ); // $ExpectError
	filledarrayBy( undefined, 8, 2, clbk, {} ); // $ExpectError
	filledarrayBy( [], 8, 2, clbk, {} ); // $ExpectError
	filledarrayBy( {}, 8, 2, clbk, {} ); // $ExpectError
	filledarrayBy( ( x: number ): number => x, 8, 2, clbk, {} ); // $ExpectError

	filledarrayBy( '5', 8, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( 1.0, 8, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( false, 8, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( true, 8, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( null, 8, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( undefined, 8, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( [], 8, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( {}, 8, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( ( x: number ): number => x, 8, 2, 'float64', clbk ); // $ExpectError

	filledarrayBy( '5', 8, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( 1.0, 8, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( false, 8, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( true, 8, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( null, 8, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( undefined, 8, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( [], 8, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( {}, 8, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( ( x: number ): number => x, 8, 2, 'float64', clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a byte offset argument which is not a number...
{
	const buf = new ArrayBuffer( 32 );

	filledarrayBy( buf, false, clbk ); // $ExpectError
	filledarrayBy( buf, true, clbk ); // $ExpectError
	filledarrayBy( buf, null, clbk ); // $ExpectError
	filledarrayBy( buf, [], clbk ); // $ExpectError
	filledarrayBy( buf, {}, clbk ); // $ExpectError

	filledarrayBy( buf, false, clbk, {} ); // $ExpectError
	filledarrayBy( buf, true, clbk, {} ); // $ExpectError
	filledarrayBy( buf, null, clbk, {} ); // $ExpectError
	filledarrayBy( buf, [], clbk, {} ); // $ExpectError
	filledarrayBy( buf, {}, clbk, {} ); // $ExpectError
	filledarrayBy( buf, ( x: number ): number => x, clbk, {} ); // $ExpectError

	filledarrayBy( buf, '5', 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, false, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, true, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, null, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, undefined, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, [], 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, {}, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, ( x: number ): number => x, 'float64', clbk ); // $ExpectError

	filledarrayBy( buf, '5', 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, false, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, true, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, null, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, undefined, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, [], 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, {}, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, ( x: number ): number => x, 'float64', clbk, {} ); // $ExpectError

	filledarrayBy( buf, false, 2, clbk ); // $ExpectError
	filledarrayBy( buf, true, 2, clbk ); // $ExpectError
	filledarrayBy( buf, null, 2, clbk ); // $ExpectError
	filledarrayBy( buf, [], 2, clbk ); // $ExpectError
	filledarrayBy( buf, {}, 2, clbk ); // $ExpectError
	filledarrayBy( buf, ( x: number ): number => x, 2, clbk ); // $ExpectError

	filledarrayBy( buf, false, 2, clbk, {} ); // $ExpectError
	filledarrayBy( buf, true, 2, clbk, {} ); // $ExpectError
	filledarrayBy( buf, null, 2, clbk, {} ); // $ExpectError
	filledarrayBy( buf, [], 2, clbk, {} ); // $ExpectError
	filledarrayBy( buf, {}, 2, clbk, {} ); // $ExpectError
	filledarrayBy( buf, ( x: number ): number => x, 2, clbk, {} ); // $ExpectError

	filledarrayBy( buf, '5', 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, false, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, true, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, null, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, undefined, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, [], 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, {}, 2, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, ( x: number ): number => x, 2, 'float64', clbk ); // $ExpectError

	filledarrayBy( buf, '5', 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, false, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, true, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, null, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, undefined, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, [], 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, {}, 2, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, ( x: number ): number => x, 2, 'float64', clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a view length argument which is not a number...
{
	const buf = new ArrayBuffer( 32 );

	filledarrayBy( buf, 8, false, clbk ); // $ExpectError
	filledarrayBy( buf, 8, true, clbk ); // $ExpectError
	filledarrayBy( buf, 8, null, clbk ); // $ExpectError
	filledarrayBy( buf, 8, [], clbk ); // $ExpectError
	filledarrayBy( buf, 8, {}, clbk ); // $ExpectError

	filledarrayBy( buf, 8, false, clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, true, clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, null, clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, [], clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, {}, clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, ( x: number ): number => x, clbk, {} ); // $ExpectError

	filledarrayBy( buf, 8, '5', 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, 8, false, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, 8, true, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, 8, null, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, 8, undefined, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, 8, [], 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, 8, {}, 'float64', clbk ); // $ExpectError
	filledarrayBy( buf, 8, ( x: number ): number => x, 'float64', clbk ); // $ExpectError

	filledarrayBy( buf, 8, '5', 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, false, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, true, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, null, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, undefined, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, [], 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, {}, 'float64', clbk, {} ); // $ExpectError
	filledarrayBy( buf, 8, ( x: number ): number => x, 'float64', clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided too many arguments...
{
	const buf = new ArrayBuffer( 32 );

	filledarrayBy( buf, 8, 2, 'float64', 1, clbk, {}, {} ); // $ExpectError
}
