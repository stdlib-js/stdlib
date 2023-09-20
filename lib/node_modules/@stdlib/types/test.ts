/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import * as array from '@stdlib/types/array';
import * as iter from '@stdlib/types/iter';
import * as ndarray from '@stdlib/types/ndarray';
import * as obj from '@stdlib/types/object';
import * as complex from '@stdlib/types/complex';
import * as random from '@stdlib/types/random';
import * as slice from '@stdlib/types/slice';

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function createIterator1(): iter.Iterator {
	return {
		'next': next1
	};
}

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next1(): iter.IteratorResult {
	return {
		'value': true,
		'done': false
	};
}

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function createIterator2(): iter.Iterator {
	return {
		'next': next2
	};
}

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next2(): iter.IteratorResult {
	return {
		'done': true
	};
}

/**
* Returns an iterable iterator protocol-compliant object.
*
* @returns iterable iterator protocol-compliant object
*/
function createIterableIterator(): iter.IterableIterator {
	return {
		'next': next3,
		[ Symbol.iterator ]: factory
	};
}

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next3(): iter.IteratorResult {
	return {
		'done': true
	};
}

/**
* Returns an iterable iterator protocol-compliant object.
*
* @returns iterable iterator protocol-compliant object
*/
function factory(): iter.IterableIterator {
	return createIterableIterator();
}

/**
* Returns a complex number array-like object.
*
* @returns complex number array-like object
*/
function cmplxArray(): array.ComplexArrayLike {
	const buf: array.TypedArray = new Float64Array( 8 );
	const obj: array.ComplexArrayLike = {
		'byteLength': 64,
		'byteOffset': 0,
		'BYTES_PER_ELEMENT': 8,
		'length': 8,
		'get': ( i: number ): complex.ComplexLike => {
			return {
				're': i * 10,
				'im': i * 10
			};
		},
		'set': ( value: complex.ComplexLike, i?: number ) => {
			i = ( i ) ? i : 0;
			buf[ i ] = value.re;
			buf[ i + 1 ] = value.im;
		}
	};
	return obj;
}

/**
* Returns a 64-bit complex number array.
*
* @returns 64-bit complex number array
*/
function cmplx64Array(): array.Complex64Array {
	const buf: array.TypedArray = new Float64Array( 8 );
	const obj: array.Complex64Array = {
		'byteLength': 64,
		'byteOffset': 0,
		'BYTES_PER_ELEMENT': 8,
		'length': 8,
		'get': ( i: number ): complex.Complex64 => {
			return {
				're': i * 10,
				'im': i * 10,
				'byteLength': 8,
				'BYTES_PER_ELEMENT': 4
			};
		},
		'set': ( value: complex.Complex64, i?: number ) => {
			i = ( i ) ? i : 0;
			buf[ i ] = value.re;
			buf[ i + 1 ] = value.im;
		}
	};
	return obj;
}

/**
* Returns a 128-bit complex number array.
*
* @returns 128-bit complex number array
*/
function cmplx128Array(): array.Complex128Array {
	const buf: array.TypedArray = new Float64Array( 16 );
	const obj: array.Complex128Array = {
		'byteLength': 128,
		'byteOffset': 0,
		'BYTES_PER_ELEMENT': 16,
		'length': 8,
		'get': ( i: number ): complex.Complex128 => {
			return {
				're': i * 10,
				'im': i * 10,
				'byteLength': 16,
				'BYTES_PER_ELEMENT': 8
			};
		},
		'set': ( value: complex.Complex128, i?: number ) => {
			i = ( i ) ? i : 0;
			buf[ i ] = value.re;
			buf[ i + 1 ] = value.im;
		}
	};
	return obj;
}


// TESTS //

// The compiler should not throw an error when using array type aliases...
{
	const v1: array.TypedArray = new Float64Array( 10 );
	if ( v1[ 0 ] !== 0.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v2: array.IntegerTypedArray = new Int32Array( 10 );
	if ( v2[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v3: array.NumericArray = new Float64Array( 10 );
	if ( v3[ 0 ] !== 0.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v4: array.ArrayLike<string> = 'beep';
	if ( v4[ 0 ] !== 'b' ) {
		throw new Error( 'something went wrong' );
	}

	const v5: array.ArrayLike<number> = [ 1, 2, 3 ];
	if ( v5[ 0 ] !== 1 ) {
		throw new Error( 'something went wrong' );
	}

	const v6: array.ArrayLike<number> = new Int8Array( 10 );
	if ( v6[ 0 ] !== 1 ) {
		throw new Error( 'something went wrong' );
	}

	const v7: array.ComplexArrayLike = cmplxArray();
	if ( v7.byteOffset !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v8: array.Complex64Array = cmplx64Array();
	if ( v8.byteOffset !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v9: array.Complex128Array = cmplx128Array();
	if ( v9.byteOffset !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v10: array.ComplexTypedArray = cmplx64Array();
	if ( v10.byteOffset !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v11: array.ArrayOrTypedArray = new Float64Array( 10 );
	if ( v11[ 0 ] !== 0.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v12: array.FloatTypedArray = new Float64Array( 10 );
	if ( v12[ 0 ] !== 0.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v13: array.RealOrComplexArray = new Float64Array( 10 );
	if ( v13[ 0 ] !== 0.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v14: array.RealOrComplexTypedArray = new Float64Array( 10 );
	if ( v14[ 0 ] !== 0.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v15buf: array.ArrayLike<number> = new Float64Array( 10 );
	const v15: array.AccessorArrayLike<number> = {
		'length': 10,
		'data': v15buf,
		'get': ( i: number ): number => v15buf[ i ],
		'set': ( value: number, i?: number ): void => {
			v15buf[ i || 0 ] = value;
			return;
		}
	};
	if ( v15.length !== 10 ) {
		throw new Error( 'something went wrong' );
	}

	const v16: array.IntegerTypedArray = new Int32Array( 10 );
	if ( v16[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v17: array.SignedIntegerTypedArray = new Int32Array( 10 );
	if ( v17[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v18: array.UnsignedIntegerTypedArray = new Uint32Array( 10 );
	if ( v18[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v19: array.AnyArray = new Uint32Array( 10 );
	if ( v19[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v20: array.RealTypedArray = new Uint32Array( 10 );
	if ( v20[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v21: array.FloatOrComplexTypedArray = new Float64Array( 10 );
	if ( v21[ 0 ] !== 0.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v22: array.Array1D<number> = [ 1, 2, 3 ];
	if ( v22.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v23: array.Array2D<number> = [ [ 1, 2, 3 ] ];
	if ( v23.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v24: array.Array3D<number> = [ [ [ 1, 2, 3 ] ] ];
	if ( v24.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v25: array.Array4D<number> = [ [ [ [ 1, 2, 3 ] ] ] ];
	if ( v25.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v26: array.Array5D<number> = [ [ [ [ [ 1, 2, 3 ] ] ] ] ];
	if ( v26.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v27: array.Array6D<number> = [ [ [ [ [ [ 1, 2, 3 ] ] ] ] ] ];
	if ( v27.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v28: array.Array7D<number> = [ [ [ [ [ [ [ 1, 2, 3 ] ] ] ] ] ] ];
	if ( v28.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v29: array.Array8D<number> = [ [ [ [ [ [ [ [ 1, 2, 3 ] ] ] ] ] ] ] ];
	if ( v29.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v30: array.Array9D<number> = [ [ [ [ [ [ [ [ [ 1, 2, 3 ] ] ] ] ] ] ] ] ];
	if ( v30.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v31: array.Array10D<number> = [ [ [ [ [ [ [ [ [ [ 1, 2, 3 ] ] ] ] ] ] ] ] ] ];
	if ( v31.length === 0 ) {
		throw new Error( 'something went wrong' );
	}

	const v32: array.Collection<number> = [ 1, 2, 3 ];
	if ( v32.length !== 3 ) {
		throw new Error( 'something went wrong' );
	}
}

// The compiler should not throw an error when using iterator or iterable types...
{
	createIterator1();
	createIterator2();
	createIterableIterator();
}

// The compiler should not throw an error when using ndarray types...
{
	const data = [ 1, 2, 3 ];
	const arr: ndarray.ndarray = {
		'byteLength': null,
		'BYTES_PER_ELEMENT': null,
		'data': data,
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
			return data[ i ];
		},
		'set': ( i: number, v: number ): ndarray.ndarray => {
			data[ i ] = v;
			return arr;
		}
	};
	if ( arr.length !== 3 ) {
		throw new Error( 'something went wrong' );
	}
}

// The compiler should not throw an error when using object types...
{
	const desc1: obj.DataPropertyDescriptor = {
		'configurable': true,
		'enumerable': false,
		'writable': false,
		'value': 'beep'
	};
	if ( desc1.value !== 'beep' ) {
		throw new Error( 'something went wrong' );
	}

	const desc2: obj.DataPropertyDescriptor = {
		'enumerable': false,
		'writable': false,
		'value': 'beep'
	};
	if ( desc2.value !== 'beep' ) {
		throw new Error( 'something went wrong' );
	}

	const desc3: obj.DataPropertyDescriptor = {
		'configurable': true,
		'writable': false,
		'value': 'beep'
	};
	if ( desc3.value !== 'beep' ) {
		throw new Error( 'something went wrong' );
	}

	const desc4: obj.DataPropertyDescriptor = {
		'configurable': true,
		'enumerable': false,
		'writable': false
	};
	if ( desc4.value ) {
		throw new Error( 'something went wrong' );
	}

	const desc5: obj.DataPropertyDescriptor = {
		'writable': false,
		'value': 'beep'
	};
	if ( desc5.value !== 'beep' ) {
		throw new Error( 'something went wrong' );
	}

	const desc6: obj.DataPropertyDescriptor = {
		'configurable': true,
		'value': 'beep'
	};
	if ( desc6.value !== 'beep' ) {
		throw new Error( 'something went wrong' );
	}

	const desc7: obj.DataPropertyDescriptor = {
		'enumerable': false,
		'value': 'beep'
	};
	if ( desc7.value !== 'beep' ) {
		throw new Error( 'something went wrong' );
	}

	const desc8: obj.DataPropertyDescriptor = {
		'enumerable': false,
		'writable': false
	};
	if ( desc8.value ) {
		throw new Error( 'something went wrong' );
	}

	const desc9: obj.AccessorPropertyDescriptor = {
		'configurable': true,
		'enumerable': false,
		'get': (): string => 'beep',
		'set': () => { throw new Error( 'beep' ); }
	};
	if ( desc9.enumerable !== false ) {
		throw new Error( 'something went wrong' );
	}

	const desc10: obj.AccessorPropertyDescriptor = {
		'enumerable': false,
		'get': (): string => 'beep',
		'set': () => { throw new Error( 'beep' ); }
	};
	if ( desc10.enumerable !== false ) {
		throw new Error( 'something went wrong' );
	}

	const desc11: obj.AccessorPropertyDescriptor = {
		'configurable': true,
		'get': (): string => 'beep',
		'set': () => { throw new Error( 'beep' ); }
	};
	if ( desc11.enumerable !== false ) {
		throw new Error( 'something went wrong' );
	}

	const desc12: obj.AccessorPropertyDescriptor = {
		'configurable': true,
		'enumerable': false,
		'set': () => { throw new Error( 'beep' ); }
	};
	if ( desc12.enumerable !== false ) {
		throw new Error( 'something went wrong' );
	}

	const desc13: obj.AccessorPropertyDescriptor = {
		'configurable': true,
		'enumerable': false,
		'get': (): string => 'beep'
	};
	if ( desc13.enumerable !== false ) {
		throw new Error( 'something went wrong' );
	}

	const desc14: obj.AccessorPropertyDescriptor = {
		'get': (): string => 'beep',
		'set': () => { throw new Error( 'beep' ); }
	};
	if ( desc14.enumerable !== false ) {
		throw new Error( 'something went wrong' );
	}

	const desc15: obj.PropertyDescriptor = {
		'configurable': true,
		'enumerable': false,
		'writable': false,
		'value': 'beep'
	};
	if ( desc15.value !== 'beep' ) {
		throw new Error( 'something went wrong' );
	}

	const prop: obj.PropertyName = 'foo';
	if ( prop !== 'foo' ) {
		throw new Error( 'something went wrong' );
	}
}

// The compiler should not throw an error when using complex number types...
{
	const v1: complex.ComplexLike = {
		're': 1.0,
		'im': 1.0
	};
	if ( v1.re !== 1.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v2: complex.Complex64 = {
		're': 1.0,
		'im': 1.0,
		'byteLength': 8,
		'BYTES_PER_ELEMENT': 4
	};
	if ( v2.re !== 1.0 ) {
		throw new Error( 'something went wrong' );
	}

	const v3: complex.Complex128 = {
		're': 1.0,
		'im': 1.0,
		'byteLength': 16,
		'BYTES_PER_ELEMENT': 8
	};
	if ( v3.re !== 1.0 ) {
		throw new Error( 'something went wrong' );
	}
}

// The compiler should not throw an error when using PRNG types...
{
	const rand: random.PRNG = (): number => 3.14;
	if ( rand() !== 3.14 ) {
		throw new Error( 'something went wrong' );
	}

	const s1: random.PRNGSeedMT19937 = 12345;
	if ( s1 !== 12345 ) {
		throw new Error( 'something went wrong' );
	}

	const s2: random.PRNGSeedMT19937 = new Uint32Array( 10 );
	if ( s2[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const s3: random.PRNGSeedMINSTD = 12345;
	if ( s3 !== 12345 ) {
		throw new Error( 'something went wrong' );
	}

	const s4: random.PRNGSeedMINSTD = new Int32Array( 10 );
	if ( s4[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const s5: random.PRNGStateMT19937 = new Uint32Array( 10 );
	if ( s5[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}

	const s6: random.PRNGStateMINSTD = new Int32Array( 10 );
	if ( s6[ 0 ] !== 0 ) {
		throw new Error( 'something went wrong' );
	}
}

// The compiler should not throw an error when using slice types...
{
	const v1: slice.Slice = {
		'start': 0,
		'stop': 10,
		'step': 1
	};
	if ( v1.start !== v1.start ) {
		throw new Error( 'something went wrong' );
	}

	const v2: slice.Slice = {
		'start': null,
		'stop': null,
		'step': null
	};
	if ( v2.start !== v2.start ) {
		throw new Error( 'something went wrong' );
	}

	const v3: slice.Slice = {
		'start': null,
		'stop': 10,
		'step': null
	};
	if ( v3.start !== v3.start ) {
		throw new Error( 'something went wrong' );
	}

	const v4: slice.Slice = {
		'start': 0,
		'stop': 10,
		'step': null
	};
	if ( v4.start !== v4.start ) {
		throw new Error( 'something went wrong' );
	}

	const v5: slice.Slice = {
		'start': 0,
		'stop': null,
		'step': null
	};
	if ( v5.start !== v5.start ) {
		throw new Error( 'something went wrong' );
	}

	const v6: slice.Slice = {
		'start': 0,
		'stop': null,
		'step': 1
	};
	if ( v6.start !== v6.start ) {
		throw new Error( 'something went wrong' );
	}

	const v7: slice.MultiSlice = {
		'ndims': 3,
		'data': [ 1, null, 3 ]
	};
	if ( v7.ndims !== v7.ndims ) {
		throw new Error( 'something went wrong' );
	}
}
