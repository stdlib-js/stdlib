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

import ArrayBuffer = require( '@stdlib/array/buffer' );
import tensor0d = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	tensor0d(); // $ExpectType float64ndarray

	tensor0d( 10 ); // $ExpectType float64ndarray
	tensor0d( 10, {} ); // $ExpectType float64ndarray

	tensor0d( new ArrayBuffer( 10 ) ); // $ExpectType float64ndarray
	tensor0d( new ArrayBuffer( 10 ), {} ); // $ExpectType float64ndarray

	tensor0d( new ArrayBuffer( 10 ), 8 ); // $ExpectType float64ndarray
	tensor0d( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType float64ndarray

	tensor0d( 'float32' ); // $ExpectType float32ndarray
	tensor0d( 'float32', {} ); // $ExpectType float32ndarray

	tensor0d( 10, 'float32' ); // $ExpectType float32ndarray
	tensor0d( 10, 'float32', {} ); // $ExpectType float32ndarray

	tensor0d( new ArrayBuffer( 10 ), 'int32' ); // $ExpectType int32ndarray
	tensor0d( new ArrayBuffer( 10 ), 'int32', {} ); // $ExpectType int32ndarray

	tensor0d( new ArrayBuffer( 10 ), 8, 'float32' ); // $ExpectType float32ndarray
	tensor0d( new ArrayBuffer( 10 ), 8, 'float32', {} ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	tensor0d( buf, 8, 'int32', {}, {} ); // $ExpectError
}

// Attached the main export is a `factory` method which returns a function...
{
	tensor0d.factory( 'float64' ); // $ExpectType TypedTensor0D<"float64">
	tensor0d.factory( 'float32' ); // $ExpectType TypedTensor0D<"float32">
}

// The `factory` method returns an ndarray...
{
	const f1 = tensor0d.factory( 'float64' );

	f1(); // $ExpectType float64ndarray

	f1( 10 ); // $ExpectType float64ndarray
	f1( 10, {} ); // $ExpectType float64ndarray

	f1( new ArrayBuffer( 10 ) ); // $ExpectType float64ndarray
	f1( new ArrayBuffer( 10 ), {} ); // $ExpectType float64ndarray

	f1( new ArrayBuffer( 10 ), 8 ); // $ExpectType float64ndarray
	f1( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType float64ndarray

	const f2 = tensor0d.factory( 'float32' );

	f2(); // $ExpectType float32ndarray

	f2( 10 ); // $ExpectType float32ndarray
	f2( 10, {} ); // $ExpectType float32ndarray

	f2( new ArrayBuffer( 10 ) ); // $ExpectType float32ndarray
	f2( new ArrayBuffer( 10 ), {} ); // $ExpectType float32ndarray

	f2( new ArrayBuffer( 10 ), 8 ); // $ExpectType float32ndarray
	f2( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType float32ndarray

	const f3 = tensor0d.factory( 'generic' );

	f3(); // $ExpectType genericndarray<number>

	f3( 10 ); // $ExpectType genericndarray<number>
	f3( 10, {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const f = tensor0d.factory( 'float64' );

	const buf = new ArrayBuffer( 32 );
	f( buf, 8, {}, {} ); // $ExpectError
}
