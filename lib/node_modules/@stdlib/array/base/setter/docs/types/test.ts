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

import setter = require( './index' );


// TESTS //

// The function returns a function...
{
	setter( 'float64' ); // $ExpectType SetFloat64
	setter( 'float32' ); // $ExpectType SetFloat32
	setter( 'int32' ); // $ExpectType SetInt32
	setter( 'int16' ); // $ExpectType SetInt16
	setter( 'int8' ); // $ExpectType SetInt8
	setter( 'uint32' ); // $ExpectType SetUint32
	setter( 'uint16' ); // $ExpectType SetUint16
	setter( 'uint8' ); // $ExpectType SetUint8
	setter( 'uint8c' ); // $ExpectType SetUint8c
	setter<number>( 'generic' ); // $ExpectType SetGeneric<number>
	setter( 'foo' ); // $ExpectType SetArrayLike<unknown>
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	setter( 5 ); // $ExpectError
	setter( true ); // $ExpectError
	setter( false ); // $ExpectError
	setter( null ); // $ExpectError
	setter( {} ); // $ExpectError
	setter( [] ); // $ExpectError
	setter( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	setter(); // $ExpectError
	setter( 'float64', {} ); // $ExpectError
}

// The function returns a function which sets an array element...
{
	const set1 = setter<number>( 'generic' );
	const x1 = [ 1, 2, 3, 4 ];
	set1( x1, 2, 3 ); // $ExpectType void

	const set2 = setter( 'float64' );
	const x2 = new Float64Array( [ 1, 2, 3, 4 ] );
	set2( x2, 2, 3 ); // $ExpectType void

	const set3 = setter( 'float32' );
	const x3 = new Float32Array( [ 1, 2, 3, 4 ] );
	set3( x3, 2, 3 ); // $ExpectType void

	const set4 = setter( 'int32' );
	const x4 = new Int32Array( [ 1, 2, 3, 4 ] );
	set4( x4, 2, 3 ); // $ExpectType void

	const set5 = setter( 'int16' );
	const x5 = new Int16Array( [ 1, 2, 3, 4 ] );
	set5( x5, 2, 3 ); // $ExpectType void

	const set6 = setter( 'int8' );
	const x6 = new Int8Array( [ 1, 2, 3, 4 ] );
	set6( x6, 2, 3 ); // $ExpectType void

	const set7 = setter( 'uint32' );
	const x7 = new Uint32Array( [ 1, 2, 3, 4 ] );
	set7( x7, 2, 3 ); // $ExpectType void

	const set8 = setter( 'uint16' );
	const x8 = new Uint16Array( [ 1, 2, 3, 4 ] );
	set8( x8, 2, 3 ); // $ExpectType void

	const set9 = setter( 'uint8' );
	const x9 = new Uint8Array( [ 1, 2, 3, 4 ] );
	set9( x9, 2, 3 ); // $ExpectType void

	const set10 = setter( 'uint8c' );
	const x10 = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
	set10( x10, 2, 3 ); // $ExpectType void

	const set11 = setter<number>( 'foo' );
	const x11 = [ 1, 2, 3, 4 ];
	set11( x11, 2, 3 ); // $ExpectType void
}

// The compiler throws an error if the returned function is provided a first argument which is not a collection...
{
	const set1 = setter( 'generic' );
	set1( 5, 2, 3 ); // $ExpectError
	set1( true, 2, 3 ); // $ExpectError
	set1( false, 2, 3 ); // $ExpectError
	set1( null, 2, 3 ); // $ExpectError
	set1( {}, 2, 3 ); // $ExpectError

	const set2 = setter( 'float64' );
	set2( 5, 2, 3 ); // $ExpectError
	set2( true, 2, 3 ); // $ExpectError
	set2( false, 2, 3 ); // $ExpectError
	set2( null, 2, 3 ); // $ExpectError
	set2( {}, 2, 3 ); // $ExpectError

	const set3 = setter( 'float32' );
	set3( 5, 2, 3 ); // $ExpectError
	set3( true, 2, 3 ); // $ExpectError
	set3( false, 2, 3 ); // $ExpectError
	set3( null, 2, 3 ); // $ExpectError
	set3( {}, 2, 3 ); // $ExpectError

	const set4 = setter( 'int32' );
	set4( 5, 2, 3 ); // $ExpectError
	set4( true, 2, 3 ); // $ExpectError
	set4( false, 2, 3 ); // $ExpectError
	set4( null, 2, 3 ); // $ExpectError
	set4( {}, 2, 3 ); // $ExpectError

	const set5 = setter( 'int16' );
	set5( 5, 2, 3 ); // $ExpectError
	set5( true, 2, 3 ); // $ExpectError
	set5( false, 2, 3 ); // $ExpectError
	set5( null, 2, 3 ); // $ExpectError
	set5( {}, 2, 3 ); // $ExpectError

	const set6 = setter( 'int8' );
	set6( 5, 2, 3 ); // $ExpectError
	set6( true, 2, 3 ); // $ExpectError
	set6( false, 2, 3 ); // $ExpectError
	set6( null, 2, 3 ); // $ExpectError
	set6( {}, 2, 3 ); // $ExpectError

	const set7 = setter( 'uint32' );
	set7( 5, 2, 3 ); // $ExpectError
	set7( true, 2, 3 ); // $ExpectError
	set7( false, 2, 3 ); // $ExpectError
	set7( null, 2, 3 ); // $ExpectError
	set7( {}, 2, 3 ); // $ExpectError

	const set8 = setter( 'uint16' );
	set8( 5, 2, 3 ); // $ExpectError
	set8( true, 2, 3 ); // $ExpectError
	set8( false, 2, 3 ); // $ExpectError
	set8( null, 2, 3 ); // $ExpectError
	set8( {}, 2, 3 ); // $ExpectError

	const set9 = setter( 'uint8' );
	set9( 5, 2, 3 ); // $ExpectError
	set9( true, 2, 3 ); // $ExpectError
	set9( false, 2, 3 ); // $ExpectError
	set9( null, 2, 3 ); // $ExpectError
	set9( {}, 2, 3 ); // $ExpectError

	const set10 = setter( 'uint8c' );
	set10( 5, 2, 3 ); // $ExpectError
	set10( true, 2, 3 ); // $ExpectError
	set10( false, 2, 3 ); // $ExpectError
	set10( null, 2, 3 ); // $ExpectError
	set10( {}, 2, 3 ); // $ExpectError

	const set11 = setter( 'foo' );
	set11( 5, 2, 3 ); // $ExpectError
	set11( true, 2, 3 ); // $ExpectError
	set11( false, 2, 3 ); // $ExpectError
	set11( null, 2, 3 ); // $ExpectError
	set11( {}, 2, 3 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not a number...
{
	const set1 = setter( 'generic' );
	set1( [ 1, 2, 3, 4 ], '5', 3 ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], true, 3 ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], false, 3 ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], null, 3 ); // $ExpectError
	set1( [ 1, 2, 3, 4 ], {}, 3 ); // $ExpectError

	const set2 = setter( 'float64' );
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set3 = setter( 'float32' );
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set4 = setter( 'int32' );
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set5 = setter( 'int16' );
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set6 = setter( 'int8' );
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set7 = setter( 'uint32' );
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set8 = setter( 'uint16' );
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set9 = setter( 'uint8' );
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set10 = setter( 'uint8c' );
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), '5', 3 ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), true, 3 ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), false, 3 ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), null, 3 ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), {}, 3 ); // $ExpectError

	const set11 = setter( 'foo' );
	set11( [ 1, 2, 3, 4 ], '5', 3 ); // $ExpectError
	set11( [ 1, 2, 3, 4 ], true, 3 ); // $ExpectError
	set11( [ 1, 2, 3, 4 ], false, 3 ); // $ExpectError
	set11( [ 1, 2, 3, 4 ], null, 3 ); // $ExpectError
	set11( [ 1, 2, 3, 4 ], {}, 3 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not a valid value...
{
	const set2 = setter( 'float64' );
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set2( new Float64Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set3 = setter( 'float32' );
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set3( new Float32Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set4 = setter( 'int32' );
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set4( new Int32Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set5 = setter( 'int16' );
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set5( new Int16Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set6 = setter( 'int8' );
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set6( new Int8Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set7 = setter( 'uint32' );
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set7( new Uint32Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set8 = setter( 'uint16' );
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set8( new Uint16Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set9 = setter( 'uint8' );
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set9( new Uint8Array( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError

	const set10 = setter( 'uint8c' );
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, '5' ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, true ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, false ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, null ); // $ExpectError
	set10( new Uint8ClampedArray( [ 1, 2, 3, 4 ] ), 2, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const set1 = setter( 'generic' );
	set1(); // $ExpectError
	set1( [] ); // $ExpectError
	set1( [], 1 ); // $ExpectError
	set1( [], 1, 2, 2 ); // $ExpectError

	const set2 = setter( 'float64' );
	set2(); // $ExpectError
	set2( new Float64Array( [] ) ); // $ExpectError
	set2( new Float64Array( [] ), 1 ); // $ExpectError
	set2( new Float64Array( [] ), 1, 2, 2 ); // $ExpectError

	const set3 = setter( 'float32' );
	set3(); // $ExpectError
	set3( new Float32Array( [] ) ); // $ExpectError
	set3( new Float32Array( [] ), 1 ); // $ExpectError
	set3( new Float32Array( [] ), 1, 2, 2 ); // $ExpectError

	const set4 = setter( 'int32' );
	set4(); // $ExpectError
	set4( new Int32Array( [] ) ); // $ExpectError
	set4( new Int32Array( [] ), 1 ); // $ExpectError
	set4( new Int32Array( [] ), 1, 2, 2 ); // $ExpectError

	const set5 = setter( 'int16' );
	set5(); // $ExpectError
	set5( new Int16Array( [] ) ); // $ExpectError
	set5( new Int16Array( [] ), 1 ); // $ExpectError
	set5( new Int16Array( [] ), 1, 2, 2 ); // $ExpectError

	const set6 = setter( 'int8' );
	set6(); // $ExpectError
	set6( new Int8Array( [] ) ); // $ExpectError
	set6( new Int8Array( [] ), 1 ); // $ExpectError
	set6( new Int8Array( [] ), 1, 2, 2 ); // $ExpectError

	const set7 = setter( 'uint32' );
	set7(); // $ExpectError
	set7( new Uint32Array( [] ) ); // $ExpectError
	set7( new Uint32Array( [] ), 1 ); // $ExpectError
	set7( new Uint32Array( [] ), 1, 2, 2 ); // $ExpectError

	const set8 = setter( 'uint16' );
	set8(); // $ExpectError
	set8( new Uint16Array( [] ) ); // $ExpectError
	set8( new Uint16Array( [] ), 1 ); // $ExpectError
	set8( new Uint16Array( [] ), 1, 2, 2 ); // $ExpectError

	const set9 = setter( 'uint8' );
	set9(); // $ExpectError
	set9( new Uint8Array( [] ) ); // $ExpectError
	set9( new Uint8Array( [] ), 1 ); // $ExpectError
	set9( new Uint8Array( [] ), 1, 2, 2 ); // $ExpectError

	const set10 = setter( 'uint8c' );
	set10(); // $ExpectError
	set10( new Uint8ClampedArray( [] ) ); // $ExpectError
	set10( new Uint8ClampedArray( [] ), 1 ); // $ExpectError
	set10( new Uint8ClampedArray( [] ), 1, 2, 2 ); // $ExpectError

	const set11 = setter( 'foo' );
	set11(); // $ExpectError
	set11( [] ); // $ExpectError
	set11( [], 1 ); // $ExpectError
	set11( [], 1, 2, 2 ); // $ExpectError
}
