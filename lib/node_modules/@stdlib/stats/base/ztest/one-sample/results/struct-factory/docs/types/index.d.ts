/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Interface describing test results.
*/
interface Results<T> {
	/**
	* Boolean indicating whether the null hypothesis was rejected.
	*/
	rejected?: boolean;

	/**
	* Alternative hypothesis.
	*/
	alternative?: number;

	/**
	* Significance level.
	*/
	alpha?: number;

	/**
	* p-value.
	*/
	pValue?: number;

	/**
	* Test statistic.
	*/
	statistic?: number;

	/**
	* Confidence interval.
	*/
	ci?: T;

	/**
	* Value of the mean under the null hypothesis.
	*/
	nullValue?: number;

	/**
	* Standard error of the mean.
	*/
	sd?: number;
}

/**
* Interface describing a struct data structure.
*/
declare class Struct<T> {
	/**
	* Struct constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns struct
	*/
	constructor( arg?: ArrayBuffer | Results<T>, byteOffset?: number, byteLength?: number );

	/**
	* Boolean indicating whether the null hypothesis was rejected.
	*/
	rejected: boolean;

	/**
	* Alternative hypothesis.
	*/
	alternative: number;

	/**
	* Significance level.
	*/
	alpha: number;

	/**
	* p-value.
	*/
	pValue: number;

	/**
	* Test statistic.
	*/
	statistic: number;

	/**
	* Confidence interval.
	*/
	ci: T;

	/**
	* Value of the mean under the null hypothesis.
	*/
	nullValue: number;

	/**
	* Standard error of the mean.
	*/
	sd: number;
}

/**
* Interface defining a struct constructor which is both "newable" and "callable".
*/
interface StructConstructor<T> {
	/**
	* Struct constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns struct
	*/
	new( arg?: ArrayBuffer | Results<T>, byteOffset?: number, byteLength?: number ): Struct<T>;

	/**
	* Struct constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns struct
	*/
	( arg?: ArrayBuffer | Results<T>, byteOffset?: number, byteLength?: number ): Struct<T>;
}

/**
* Returns a new struct constructor tailored to a specified floating-point data type.
*
* @param dtype - floating-point data type for storing floating-point results
* @returns struct constructor
*
* @example
* var Struct = structFactory( 'float64' );
* // returns <Function>
*
* var s = new Struct();
* // returns <Struct>
*/
declare function structFactory( dtype: 'float64' ): StructConstructor<Float64Array>;

/**
* Returns a new struct constructor tailored to a specified floating-point data type.
*
* @param dtype - floating-point data type for storing floating-point results
* @returns struct constructor
*
* @example
* var Struct = structFactory( 'float32' );
* // returns <Function>
*
* var s = new Struct();
* // returns <Struct>
*/
declare function structFactory( dtype: 'float32' ): StructConstructor<Float32Array>;


// EXPORTS //

export = structFactory;
