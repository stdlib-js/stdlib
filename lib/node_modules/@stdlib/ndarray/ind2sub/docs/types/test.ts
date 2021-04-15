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

import ind2sub = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	const shape = [ 3, 3, 3 ];
	const idx = 17;
	ind2sub( shape, idx, { 'mode': 'throw' } ); // $ExpectType number[]
	ind2sub( shape, idx, { 'order': 'row-major' } ); // $ExpectType number[]
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const idx = 17;
	ind2sub( true, idx ); // $ExpectError
	ind2sub( false, idx ); // $ExpectError
	ind2sub( null, idx ); // $ExpectError
	ind2sub( undefined, idx ); // $ExpectError
	ind2sub( '5', idx ); // $ExpectError
	ind2sub( [ '1', '2' ], idx ); // $ExpectError
	ind2sub( {}, idx ); // $ExpectError
	ind2sub( ( x: number ): number => x, idx ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	const shape = [ 3, 3, 3 ];
	ind2sub( shape, 'abc' ); // $ExpectError
	ind2sub( shape, true ); // $ExpectError
	ind2sub( shape, false ); // $ExpectError
	ind2sub( shape, null ); // $ExpectError
	ind2sub( shape, undefined ); // $ExpectError
	ind2sub( shape, [] ); // $ExpectError
	ind2sub( shape, {} ); // $ExpectError
	ind2sub( shape, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a third argument which is not an options object...
{
	const shape = [ 3, 3, 3 ];
	const idx = 17;
	ind2sub( shape, idx, 'abc' ); // $ExpectError
	ind2sub( shape, idx, 123 ); // $ExpectError
	ind2sub( shape, idx, true ); // $ExpectError
	ind2sub( shape, idx, false ); // $ExpectError
	ind2sub( shape, idx, null ); // $ExpectError
	ind2sub( shape, idx, [] ); // $ExpectError
	ind2sub( shape, idx, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a recognized order...
{
	const shape = [ 3, 3, 3 ];
	const idx = 17;
	ind2sub( shape, idx, { 'order': 'abc' } ); // $ExpectError
	ind2sub( shape, idx, { 'order': 123 } ); // $ExpectError
	ind2sub( shape, idx, { 'order': true } ); // $ExpectError
	ind2sub( shape, idx, { 'order': false } ); // $ExpectError
	ind2sub( shape, idx, { 'order': null } ); // $ExpectError
	ind2sub( shape, idx, { 'order': [] } ); // $ExpectError
	ind2sub( shape, idx, { 'order': {} } ); // $ExpectError
	ind2sub( shape, idx, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a recognized mode...
{
	const shape = [ 3, 3, 3 ];
	const idx = 17;
	ind2sub( shape, idx, { 'mode': 'abc' } ); // $ExpectError
	ind2sub( shape, idx, { 'mode': 123 } ); // $ExpectError
	ind2sub( shape, idx, { 'mode': true } ); // $ExpectError
	ind2sub( shape, idx, { 'mode': false } ); // $ExpectError
	ind2sub( shape, idx, { 'mode': null } ); // $ExpectError
	ind2sub( shape, idx, { 'mode': [] } ); // $ExpectError
	ind2sub( shape, idx, { 'mode': {} } ); // $ExpectError
	ind2sub( shape, idx, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const shape = [ 3, 3, 3 ];
	const idx = 17;
	ind2sub(); // $ExpectError
	ind2sub( shape ); // $ExpectError
	ind2sub( shape, idx, {}, {} ); // $ExpectError
}

// Attached to main export is a `assign` method which returns an array of numbers...
{
	const shape = [ 3, 3, 3 ];
	const out = [ 0, 0, 0 ];
	ind2sub.assign( shape, 0, out ); // $ExpectType number[]
	ind2sub.assign( shape, 0, { 'mode': 'throw' }, out ); // $ExpectType number[]
}

// The `assign` method does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const idx = 17;
	const out = [ 0, 0, 0 ];
	ind2sub.assign( 123, idx, out ); // $ExpectError
	ind2sub.assign( true, idx, out ); // $ExpectError
	ind2sub.assign( false, idx, out ); // $ExpectError
	ind2sub.assign( null, idx, out ); // $ExpectError
	ind2sub.assign( undefined, idx, out ); // $ExpectError
	ind2sub.assign( '5', idx, out ); // $ExpectError
	ind2sub.assign( [ '1', '2' ], idx, out ); // $ExpectError
	ind2sub.assign( {}, idx, out ); // $ExpectError
	ind2sub.assign( ( x: number ): number => x, idx, out ); // $ExpectError

	const opts = {
		'order': 'row-major'
	};
	ind2sub.assign( 123, idx, opts, out ); // $ExpectError
	ind2sub.assign( true, idx, opts, out ); // $ExpectError
	ind2sub.assign( false, idx, opts, out ); // $ExpectError
	ind2sub.assign( null, idx, opts, out ); // $ExpectError
	ind2sub.assign( undefined, idx, opts, out ); // $ExpectError
	ind2sub.assign( '5', idx, opts, out ); // $ExpectError
	ind2sub.assign( [ '1', '2' ], idx, opts, out ); // $ExpectError
	ind2sub.assign( {}, idx, opts, out ); // $ExpectError
	ind2sub.assign( ( x: number ): number => x, idx, opts, out ); // $ExpectError
}

// The `assign` method does not compile if provided a second argument which is not a number...
{
	const shape = [ 3, 3, 3 ];
	const out = [ 0, 0, 0 ];
	ind2sub.assign( shape, true, out ); // $ExpectError
	ind2sub.assign( shape, false, out ); // $ExpectError
	ind2sub.assign( shape, null, out ); // $ExpectError
	ind2sub.assign( shape, undefined, out ); // $ExpectError
	ind2sub.assign( shape, 'abc', out ); // $ExpectError
	ind2sub.assign( shape, [ '1', '2' ], out ); // $ExpectError
	ind2sub.assign( shape, {}, out ); // $ExpectError
	ind2sub.assign( shape, ( x: number ): number => x, out ); // $ExpectError

	const opts = {
		'order': 'row-major'
	};
	ind2sub.assign( shape, true opts, out ); // $ExpectError
	ind2sub.assign( shape, false opts, out ); // $ExpectError
	ind2sub.assign( shape, null opts, out ); // $ExpectError
	ind2sub.assign( shape, undefined opts, out ); // $ExpectError
	ind2sub.assign( shape, 'abc' opts, out ); // $ExpectError
	ind2sub.assign( shape, [ '1', '2' ] opts, out ); // $ExpectError
	ind2sub.assign( shape, {} opts, out ); // $ExpectError
	ind2sub.assign( shape, ( x: number ): number => x opts, out ); // $ExpectError
}

// The `assign` method does not compile if provided an options argument which is not an options object...
{
	const shape = [ 3, 3, 3 ];
	const idx = 17;
	const out = [ 0, 0, 0 ];
	ind2sub.assign( shape, idx, 'abc', out ); // $ExpectError
	ind2sub.assign( shape, idx, 123, out ); // $ExpectError
	ind2sub.assign( shape, idx, true, out ); // $ExpectError
	ind2sub.assign( shape, idx, false, out ); // $ExpectError
	ind2sub.assign( shape, idx, null, out ); // $ExpectError
	ind2sub.assign( shape, idx, undefined, out ); // $ExpectError
	ind2sub.assign( shape, idx, [], out ); // $ExpectError
	ind2sub.assign( shape, idx, ( x: number ): number => x, out ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an `order` option which is not a recognized order...
{
	const shape = [ 3, 3, 3 ];
	const idx = 17;
	const out = [ 0, 0, 0 ];
	ind2sub.assign( shape, idx, { 'order': 'abc' }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'order': 123 }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'order': true }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'order': false }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'order': null }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'order': [] }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'order': {} }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'order': ( x: number ): number => x }, out ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a `mode` option which is not a recognized mode...
{
	const shape = [ 3, 3, 3 ];
	const idx = 17;
	const out = [ 0, 0, 0 ];
	ind2sub.assign( shape, idx, { 'mode': 'abc' }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'mode': 123 }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'mode': true }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'mode': false }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'mode': null }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'mode': [] }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'mode': {} }, out ); // $ExpectError
	ind2sub.assign( shape, idx, { 'mode': ( x: number ): number => x }, out ); // $ExpectError
}
