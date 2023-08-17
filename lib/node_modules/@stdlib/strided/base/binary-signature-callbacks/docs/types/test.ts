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

import { Complex64 as Cmplx64, Complex128 as Cmplx128 } from '@stdlib/types/complex';
import Complex64 = require( '@stdlib/complex/float32' );
import Complex128 = require( '@stdlib/complex/float64' );
import callbacks = require( './index' );

/**
* Default callback.
*
* @param x - input value
* @param y - input value
* @returns result
*/
function defaultCallback( x: number, y: number ): number {
	return x + y;
}

/**
* Callback for single-precision complex floating-point numbers.
*
* @param x - input value
* @param y - input value
* @returns result
*/
function complex64Callback( x: Cmplx64, y: Cmplx64 ): Cmplx64 {
	const re = x.re + y.re;
	const im = x.im + y.im;
	return new Complex64( re, im );
}

/**
* Callback for double-precision complex floating-point numbers.
*
* @param x - input value
* @param y - input value
* @returns result
*/
function complex128Callback( x: Cmplx128, y: Cmplx128 ): Cmplx128 {
	const re = x.re + y.re;
	const im = x.im + y.im;
	return new Complex128( re, im );
}

/**
* Callback table.
*/
const table = {
	'default': defaultCallback,
	'complex64': complex64Callback,
	'complex128': complex128Callback
};

/**
* Signatures.
*/
const sigs = [
	'float64', 'float64', 'float64',
	'complex64', 'complex64', 'complex64',
	'complex128', 'complex128', 'complex128'
];


// TESTS //

// The function returns a list of callbacks...
{
	callbacks( table, sigs ); // $ExpectType ArrayLike<Callback>
}

// The compiler throws an error if provided a first argument which is not callback table object...
{
	callbacks( '10', sigs ); // $ExpectError
	callbacks( 10, sigs ); // $ExpectError
	callbacks( true, sigs ); // $ExpectError
	callbacks( false, sigs ); // $ExpectError
	callbacks( null, sigs ); // $ExpectError
	callbacks( undefined, sigs ); // $ExpectError
	callbacks( [], sigs ); // $ExpectError
	callbacks( {}, sigs ); // $ExpectError
	callbacks( ( x: number ): number => x, sigs ); // $ExpectError
}

// The compiler throws an error if provided an invalid default callback...
{
	const obj1 = {
		'default': '10',
		'complex64': complex64Callback,
		'complex128': complex128Callback
	};
	callbacks( obj1, sigs ); // $ExpectError

	const obj2 = {
		'default': 10,
		'complex64': complex64Callback,
		'complex128': complex128Callback
	};
	callbacks( obj2, sigs ); // $ExpectError

	const obj3 = {
		'default': null,
		'complex64': complex64Callback,
		'complex128': complex128Callback
	};
	callbacks( obj3, sigs ); // $ExpectError

	const obj4 = {
		'default': {},
		'complex64': complex64Callback,
		'complex128': complex128Callback
	};
	callbacks( obj4, sigs ); // $ExpectError

	const obj5 = {
		'default': ( x: string ): string => x,
		'complex64': complex64Callback,
		'complex128': complex128Callback
	};
	callbacks( obj5, sigs ); // $ExpectError
}

// The compiler throws an error if provided an invalid `complex64` callback...
{
	const obj1 = {
		'default': defaultCallback,
		'complex64': '10',
		'complex128': complex128Callback
	};
	callbacks( obj1, sigs ); // $ExpectError

	const obj2 = {
		'default': defaultCallback,
		'complex64': 10,
		'complex128': complex128Callback
	};
	callbacks( obj2, sigs ); // $ExpectError

	const obj3 = {
		'default': defaultCallback,
		'complex64': null,
		'complex128': complex128Callback
	};
	callbacks( obj3, sigs ); // $ExpectError

	const obj4 = {
		'default': defaultCallback,
		'complex64': {},
		'complex128': complex128Callback
	};
	callbacks( obj4, sigs ); // $ExpectError

	const obj5 = {
		'default': defaultCallback,
		'complex64': ( x: string ): string => x,
		'complex128': complex128Callback
	};
	callbacks( obj5, sigs ); // $ExpectError
}

// The compiler throws an error if provided an invalid `complex128` callback...
{
	const obj1 = {
		'default': defaultCallback,
		'complex64': complex64Callback,
		'complex128': '10'
	};
	callbacks( obj1, sigs ); // $ExpectError

	const obj2 = {
		'default': defaultCallback,
		'complex64': complex64Callback,
		'complex128': 10
	};
	callbacks( obj2, sigs ); // $ExpectError

	const obj3 = {
		'default': defaultCallback,
		'complex64': complex64Callback,
		'complex128': null
	};
	callbacks( obj3, sigs ); // $ExpectError

	const obj4 = {
		'default': defaultCallback,
		'complex64': complex64Callback,
		'complex128': {}
	};
	callbacks( obj4, sigs ); // $ExpectError

	const obj5 = {
		'default': defaultCallback,
		'complex64': complex64Callback,
		'complex128': ( x: string ): string => x
	};
	callbacks( obj5, sigs ); // $ExpectError
}

// The compiler throws an error if provided a second argument which is not an array-like object...
{
	callbacks( table, 10 ); // $ExpectError
	callbacks( table, true ); // $ExpectError
	callbacks( table, false ); // $ExpectError
	callbacks( table, null ); // $ExpectError
	callbacks( table, undefined ); // $ExpectError
	callbacks( table, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	callbacks(); // $ExpectError
	callbacks( table ); // $ExpectError
	callbacks( table, sigs, {} ); // $ExpectError
}
