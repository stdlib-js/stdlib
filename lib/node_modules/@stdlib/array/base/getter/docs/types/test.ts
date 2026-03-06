/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import getter = require( './index' );


// TESTS //

// The function returns a function...
{
	getter( 'float64' ); // $ExpectType GetFloat64
	getter( 'float32' ); // $ExpectType GetFloat32
	getter( 'int32' ); // $ExpectType GetInt32
	getter( 'int16' ); // $ExpectType GetInt16
	getter( 'int8' ); // $ExpectType GetInt8
	getter( 'uint32' ); // $ExpectType GetUint32
	getter( 'uint16' ); // $ExpectType GetUint16
	getter( 'uint8' ); // $ExpectType GetUint8
	getter( 'uint8c' ); // $ExpectType GetUint8c
	getter<any>( 'generic' ); // $ExpectType GetGeneric<any>
	getter<number>( 'foo' ); // $ExpectType GetArrayLike<number>
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	getter( 5 ); // $ExpectError
	getter( true ); // $ExpectError
	getter( false ); // $ExpectError
	getter( null ); // $ExpectError
	getter( {} ); // $ExpectError
	getter( [] ); // $ExpectError
	getter( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	getter(); // $ExpectError
	getter( 'float64', {} ); // $ExpectError
}

// The function returns a function which returns an array element...
{
	const get1 = getter<number>( 'generic' );
	const x1 = [ 1, 2, 3, 4 ];
	get1( x1, 2 ); // $ExpectType number | void

	const get2 = getter( 'float64' );
	const x2 = new Float64Array( [ 1, 2, 3, 4 ] );
	get2( x2, 2 ); // $ExpectType number | void

	const get3 = getter( 'float32' );
	const x3 = new Float32Array( [ 1, 2, 3, 4 ] );
	get3( x3, 2 ); // $ExpectType number | void

	const get4 = getter( 'int32' );
	const x4 = new Int32Array( [ 1, 2, 3, 4 ] );
	get4( x4, 2 ); // $ExpectType number | void

	const get5 = getter( 'int16' );
	const x5 = new Int16Array( [ 1, 2, 3, 4 ] );
	get5( x5, 2 ); // $ExpectType number | void

	const get6 = getter( 'int8' );
	const x6 = new Int8Array( [ 1, 2, 3, 4 ] );
	get6( x6, 2 ); // $ExpectType number | void

	const get7 = getter( 'uint32' );
	const x7 = new Uint32Array( [ 1, 2, 3, 4 ] );
	get7( x7, 2 ); // $ExpectType number | void

	const get8 = getter( 'uint16' );
	const x8 = new Uint16Array( [ 1, 2, 3, 4 ] );
	get8( x8, 2 ); // $ExpectType number | void

	const get9 = getter( 'uint8' );
	const x9 = new Uint8Array( [ 1, 2, 3, 4 ] );
	get9( x9, 2 ); // $ExpectType number | void

	const get10 = getter( 'uint8c' );
	const x10 = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
	get10( x10, 2 ); // $ExpectType number | void

	const get11 = getter( 'foo' );
	const x11 = [ 1, 2, 3, 4 ];
	get11( x11, 2 ); // $ExpectType unknown
}

// The compiler throws an error if the returned function is provided a first argument which is not a collection...
{
	const get1 = getter( 'generic' );
	get1( 5, 2 ); // $ExpectError
	get1( true, 2 ); // $ExpectError
	get1( false, 2 ); // $ExpectError
	get1( null, 2 ); // $ExpectError
	get1( {}, 2 ); // $ExpectError

	const get2 = getter( 'float64' );
	get2( 5, 2 ); // $ExpectError
	get2( true, 2 ); // $ExpectError
	get2( false, 2 ); // $ExpectError
	get2( null, 2 ); // $ExpectError
	get2( {}, 2 ); // $ExpectError

	const get3 = getter( 'float32' );
	get3( 5, 2 ); // $ExpectError
	get3( true, 2 ); // $ExpectError
	get3( false, 2 ); // $ExpectError
	get3( null, 2 ); // $ExpectError
	get3( {}, 2 ); // $ExpectError

	const get4 = getter( 'int32' );
	get4( 5, 2 ); // $ExpectError
	get4( true, 2 ); // $ExpectError
	get4( false, 2 ); // $ExpectError
	get4( null, 2 ); // $ExpectError
	get4( {}, 2 ); // $ExpectError

	const get5 = getter( 'int16' );
	get5( 5, 2 ); // $ExpectError
	get5( true, 2 ); // $ExpectError
	get5( false, 2 ); // $ExpectError
	get5( null, 2 ); // $ExpectError
	get5( {}, 2 ); // $ExpectError

	const get6 = getter( 'int8' );
	get6( 5, 2 ); // $ExpectError
	get6( true, 2 ); // $ExpectError
	get6( false, 2 ); // $ExpectError
	get6( null, 2 ); // $ExpectError
	get6( {}, 2 ); // $ExpectError

	const get7 = getter( 'uint32' );
	get7( 5, 2 ); // $ExpectError
	get7( true, 2 ); // $ExpectError
	get7( false, 2 ); // $ExpectError
	get7( null, 2 ); // $ExpectError
	get7( {}, 2 ); // $ExpectError

	const get8 = getter( 'uint16' );
	get8( 5, 2 ); // $ExpectError
	get8( true, 2 ); // $ExpectError
	get8( false, 2 ); // $ExpectError
	get8( null, 2 ); // $ExpectError
	get8( {}, 2 ); // $ExpectError

	const get9 = getter( 'uint8' );
	get9( 5, 2 ); // $ExpectError
	get9( true, 2 ); // $ExpectError
	get9( false, 2 ); // $ExpectError
	get9( null, 2 ); // $ExpectError
	get9( {}, 2 ); // $ExpectError

	const get10 = getter( 'uint8c' );
	get10( 5, 2 ); // $ExpectError
	get10( true, 2 ); // $ExpectError
	get10( false, 2 ); // $ExpectError
	get10( null, 2 ); // $ExpectError
	get10( {}, 2 ); // $ExpectError

	const get11 = getter( 'foo' );
	get11( 5, 2 ); // $ExpectError
	get11( true, 2 ); // $ExpectError
	get11( false, 2 ); // $ExpectError
	get11( null, 2 ); // $ExpectError
	get11( {}, 2 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not a number...
{
	const get1 = getter( 'generic' );
	get1( [ 1, 2, 3, 4 ], '5' ); // $ExpectError
	get1( [ 1, 2, 3, 4 ], true ); // $ExpectError
	get1( [ 1, 2, 3, 4 ], false ); // $ExpectError
	get1( [ 1, 2, 3, 4 ], null ); // $ExpectError
	get1( [ 1, 2, 3, 4 ], {} ); // $ExpectError

	const get2 = getter( 'float64' );
	get2( new Float64Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get2( new Float64Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get2( new Float64Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get2( new Float64Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get2( new Float64Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get3 = getter( 'float32' );
	get3( new Float32Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get3( new Float32Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get3( new Float32Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get3( new Float32Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get3( new Float32Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get4 = getter( 'int32' );
	get4( new Int32Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get4( new Int32Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get4( new Int32Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get4( new Int32Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get4( new Int32Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get5 = getter( 'int16' );
	get5( new Int16Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get5( new Int16Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get5( new Int16Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get5( new Int16Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get5( new Int16Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get6 = getter( 'int8' );
	get6( new Int8Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get6( new Int8Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get6( new Int8Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get6( new Int8Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get6( new Int8Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get7 = getter( 'uint32' );
	get7( new Uint32Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get7( new Uint32Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get7( new Uint32Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get7( new Uint32Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get7( new Uint32Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get8 = getter( 'uint16' );
	get8( new Uint16Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get8( new Uint16Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get8( new Uint16Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get8( new Uint16Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get8( new Uint16Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get9 = getter( 'uint8' );
	get9( new Uint8Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get9( new Uint8Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get9( new Uint8Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get9( new Uint8Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get9( new Uint8Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get10 = getter( 'uint8c' );
	get10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get11 = getter( 'foo' );
	get11( [ 1, 2, 3, 4 ], '5' ); // $ExpectError
	get11( [ 1, 2, 3, 4 ], true ); // $ExpectError
	get11( [ 1, 2, 3, 4 ], false ); // $ExpectError
	get11( [ 1, 2, 3, 4 ], null ); // $ExpectError
	get11( [ 1, 2, 3, 4 ], {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const get1 = getter( 'generic' );
	get1(); // $ExpectError
	get1( [] ); // $ExpectError
	get1( [], 1, 2 ); // $ExpectError

	const get2 = getter( 'float64' );
	get2(); // $ExpectError
	get2( new Float64Array( [] ) ); // $ExpectError
	get2( new Float64Array( [] ), 1, 2 ); // $ExpectError

	const get3 = getter( 'float32' );
	get3(); // $ExpectError
	get3( new Float32Array( [] ) ); // $ExpectError
	get3( new Float32Array( [] ), 1, 2 ); // $ExpectError

	const get4 = getter( 'int32' );
	get4(); // $ExpectError
	get4( new Int32Array( [] ) ); // $ExpectError
	get4( new Int32Array( [] ), 1, 2 ); // $ExpectError

	const get5 = getter( 'int16' );
	get5(); // $ExpectError
	get5( new Int16Array( [] ) ); // $ExpectError
	get5( new Int16Array( [] ), 1, 2 ); // $ExpectError

	const get6 = getter( 'int8' );
	get6(); // $ExpectError
	get6( new Int8Array( [] ) ); // $ExpectError
	get6( new Int8Array( [] ), 1, 2 ); // $ExpectError

	const get7 = getter( 'uint32' );
	get7(); // $ExpectError
	get7( new Uint32Array( [] ) ); // $ExpectError
	get7( new Uint32Array( [] ), 1, 2 ); // $ExpectError

	const get8 = getter( 'uint16' );
	get8(); // $ExpectError
	get8( new Uint16Array( [] ) ); // $ExpectError
	get8( new Uint16Array( [] ), 1, 2 ); // $ExpectError

	const get9 = getter( 'uint8' );
	get9(); // $ExpectError
	get9( new Uint8Array( [] ) ); // $ExpectError
	get9( new Uint8Array( [] ), 1, 2 ); // $ExpectError

	const get10 = getter( 'uint8c' );
	get10(); // $ExpectError
	get10( new Uint8ClampedArray( [] ) ); // $ExpectError
	get10( new Uint8ClampedArray( [] ), 1, 2 ); // $ExpectError

	const get11 = getter( 'foo' );
	get11(); // $ExpectError
	get11( [] ); // $ExpectError
	get11( [], 1, 2 ); // $ExpectError
}
