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
* Alternative hypothesis.
*/
type Alternative = 'two-sided' | 'greater' | 'less';

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
	alternative?: Alternative;

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
* Interface describing a results data structure.
*/
declare class ResultsStruct<T> {
	/**
	* Results constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns results
	*/
	constructor( arg?: ArrayBuffer | Results<T>, byteOffset?: number, byteLength?: number );

	/**
	* Boolean indicating whether the null hypothesis was rejected.
	*/
	rejected: boolean;

	/**
	* Alternative hypothesis.
	*/
	alternative: Alternative;

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

	/**
	* Test method.
	*/
	method: string;
}

/**
* Interface defining a results constructor which is both "newable" and "callable".
*/
interface ResultsConstructor<T> {
	/**
	* Results constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns struct
	*/
	new( arg?: ArrayBuffer | Results<T>, byteOffset?: number, byteLength?: number ): ResultsStruct<T>;

	/**
	* Results constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns struct
	*/
	( arg?: ArrayBuffer | Results<T>, byteOffset?: number, byteLength?: number ): ResultsStruct<T>;
}

/**
* Returns a new results constructor for creating a one-sample Z-test results object.
*
* @param dtype - floating-point data type for storing floating-point results
* @returns results constructor
*
* @example
* var Results = resultsFactory( 'float64' );
* // returns <Function>
*
* var r = new Results();
* // returns <Results>
*/
declare function resultsFactory( dtype: 'float64' ): ResultsConstructor<Float64Array>;

/**
* Returns a constructor for creating a one-sample Z-test results object.
*
* @param dtype - floating-point data type for storing floating-point results
* @returns results constructor
*
* @example
* var Results = resultsFactory( 'float32' );
* // returns <Function>
*
* var r = new Results();
* // returns <Results>
*/
declare function resultsFactory( dtype: 'float32' ): ResultsConstructor<Float32Array>;


// EXPORTS //

export = resultsFactory;
