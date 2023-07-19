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

import { ndarray } from '@stdlib/types/ndarray';
import incrBinaryClassification = require( './index' );

/**
* Returns a mock ndarray object.
*
* @returns ndarray
*/
function array(): ndarray {
	const buf = [ 1, 2, 3 ];
	const x: ndarray = {
		'byteLength': null,
		'BYTES_PER_ELEMENT': null,
		'data': buf,
		'dtype': 'generic',
		'flags': {
			'ROW_MAJOR_CONTIGUOUS': true,
			'COLUMN_MAJOR_CONTIGUOUS': false
		},
		'length': 3,
		'ndims': 1,
		'offset': 0,
		'order': 'row-major',
		'shape': [ 3 ],
		'strides': [ 1 ],
		'get': ( i: number ): number => {
			return buf[ i ];
		},
		'set': ( i: number, v: number ): ndarray => {
			buf[ i ] = v;
			return x;
		}
	};
	return x;
}


// TESTS //

// The function returns an accumulator function...
{
	incrBinaryClassification( 2 ); // $ExpectType Accumulator
	incrBinaryClassification( 2, { 'learningRate': 'pegasos' } ); // $ExpectType Accumulator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	incrBinaryClassification( 'abc' ); // $ExpectError
	incrBinaryClassification( false ); // $ExpectError
	incrBinaryClassification( true ); // $ExpectError
	incrBinaryClassification( null ); // $ExpectError
	incrBinaryClassification( {} ); // $ExpectError
	incrBinaryClassification( [] ); // $ExpectError
	incrBinaryClassification( ( x: number ): number => x ); // $ExpectError

	incrBinaryClassification( 'abc', {} ); // $ExpectError
	incrBinaryClassification( false, {} ); // $ExpectError
	incrBinaryClassification( true, {} ); // $ExpectError
	incrBinaryClassification( null, {} ); // $ExpectError
	incrBinaryClassification( {}, {} ); // $ExpectError
	incrBinaryClassification( [], {} ); // $ExpectError
	incrBinaryClassification( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	incrBinaryClassification( 2, 'abc' ); // $ExpectError
	incrBinaryClassification( 2, false ); // $ExpectError
	incrBinaryClassification( 2, true ); // $ExpectError
	incrBinaryClassification( 2, null ); // $ExpectError
	incrBinaryClassification( 2, 123 ); // $ExpectError
	incrBinaryClassification( 2, [] ); // $ExpectError
	incrBinaryClassification( 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `lambda` option which is not a number...
{
	incrBinaryClassification( 2, { 'lambda': 'abc' } ); // $ExpectError
	incrBinaryClassification( 2, { 'lambda': null } ); // $ExpectError
	incrBinaryClassification( 2, { 'lambda': true } ); // $ExpectError
	incrBinaryClassification( 2, { 'lambda': false } ); // $ExpectError
	incrBinaryClassification( 2, { 'lambda': [] } ); // $ExpectError
	incrBinaryClassification( 2, { 'lambda': {} } ); // $ExpectError
	incrBinaryClassification( 2, { 'lambda': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `learningRate` option which is not an array-like object...
{
	incrBinaryClassification( 2, { 'learningRate': 123 } ); // $ExpectError
	incrBinaryClassification( 2, { 'learningRate': true } ); // $ExpectError
	incrBinaryClassification( 2, { 'learningRate': false } ); // $ExpectError
	incrBinaryClassification( 2, { 'learningRate': null } ); // $ExpectError
	incrBinaryClassification( 2, { 'learningRate': {} } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `loss` option which is not a recognized loss function...
{
	incrBinaryClassification( 2, { 'loss': 'abc' } ); // $ExpectError
	incrBinaryClassification( 2, { 'loss': 123 } ); // $ExpectError
	incrBinaryClassification( 2, { 'loss': true } ); // $ExpectError
	incrBinaryClassification( 2, { 'loss': false } ); // $ExpectError
	incrBinaryClassification( 2, { 'loss': [] } ); // $ExpectError
	incrBinaryClassification( 2, { 'loss': {} } ); // $ExpectError
	incrBinaryClassification( 2, { 'loss': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `intercept` option which is not a boolean...
{
	incrBinaryClassification( 2, { 'intercept': 'abc' } ); // $ExpectError
	incrBinaryClassification( 2, { 'intercept': 123 } ); // $ExpectError
	incrBinaryClassification( 2, { 'intercept': null } ); // $ExpectError
	incrBinaryClassification( 2, { 'intercept': [] } ); // $ExpectError
	incrBinaryClassification( 2, { 'intercept': {} } ); // $ExpectError
	incrBinaryClassification( 2, { 'intercept': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	incrBinaryClassification(); // $ExpectError
	incrBinaryClassification( 2, {}, 2 ); // $ExpectError
}

// The function returns an accumulator function which returns model coefficients...
{
	const x = array();

	const acc1 = incrBinaryClassification( 2 );
	acc1( x, 1 ); // $ExpectType ndarray
	acc1(); // $ExpectType ndarray

	const acc2 = incrBinaryClassification( 2, {} );
	acc2( x, 1 ); // $ExpectType ndarray
	acc2(); // $ExpectType ndarray

	const options = {
		'lambda': 1.0e-7,
		'intercept': true,
		'loss': 'hinge' as any,
		'learningRate': [ 'constant', 0.04 ]
	};
	const acc3 = incrBinaryClassification( 2, options );
	acc3( x, -1 ); // $ExpectType ndarray
	acc3(); // $ExpectType ndarray
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray...
{
	const accumulator = incrBinaryClassification( 2 );
	accumulator( 'abc', 2.5 ); // $ExpectError
	accumulator( false, 2.5 ); // $ExpectError
	accumulator( true, 2.5 ); // $ExpectError
	accumulator( null, 2.5 ); // $ExpectError
	accumulator( 123, 2.5 ); // $ExpectError
	accumulator( [], 2.5 ); // $ExpectError
	accumulator( {}, 2.5 ); // $ExpectError
	accumulator( ( x: number ): number => x, 2.5 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not a number...
{
	const accumulator = incrBinaryClassification( 3 );
	const x = array();
	accumulator( x, 'abc' ); // $ExpectError
	accumulator( x, false ); // $ExpectError
	accumulator( x, true ); // $ExpectError
	accumulator( x, null ); // $ExpectError
	accumulator( x, [] ); // $ExpectError
	accumulator( x, {} ); // $ExpectError
	accumulator( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided too many arguments...
{
	const accumulator = incrBinaryClassification( 3 );
	const x = array();

	accumulator( x, 2.0, 2.0 ); // $ExpectError
}

// Attached to the returned accumulator function is a `predict` method...
{
	const accumulator = incrBinaryClassification( 2 );
	const x = array();
	accumulator.predict( x ); // ExpectType ndarray
}

// The compiler throws an error if the `predict` method is provided a first argument which is not an ndarray...
{
	const accumulator = incrBinaryClassification( 2 );
	accumulator.predict( 'abc' ); // $ExpectError
	accumulator.predict( false ); // $ExpectError
	accumulator.predict( true ); // $ExpectError
	accumulator.predict( null ); // $ExpectError
	accumulator.predict( 123 ); // $ExpectError
	accumulator.predict( [] ); // $ExpectError
	accumulator.predict( {} ); // $ExpectError
	accumulator.predict( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `predict` method is provided a second argument which is not a recognized string...
{
	const accumulator = incrBinaryClassification( 3 );
	const x = array();
	accumulator.predict( x, 'abc' ); // $ExpectError
	accumulator.predict( x, false ); // $ExpectError
	accumulator.predict( x, true ); // $ExpectError
	accumulator.predict( x, null ); // $ExpectError
	accumulator.predict( x, 123 ); // $ExpectError
	accumulator.predict( x, {} ); // $ExpectError
	accumulator.predict( x, [] ); // $ExpectError
	accumulator.predict( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `predict` method is provided an unsupported number of arguments...
{
	const accumulator = incrBinaryClassification( 2 );
	const x = array();
	accumulator.predict(); // $ExpectError
	accumulator.predict( x, 'link', {} ); // $ExpectError
}
