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
interface Results {
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
	ci?: Float64Array;

	/**
	* Difference in means under the null hypothesis.
	*/
	nullValue?: number;

	/**
	* Sample mean of `x`.
	*/
	xmean?: number;

	/**
	* Sample mean of `y`.
	*/
	ymean?: number;
}

/**
* Interface describing options when serializing a results object to a string.
*/
interface ToStringOptions {
	/**
	* Number of digits to display after decimal points. Default: `4`.
	*/
	digits?: number;

	/**
	* Boolean indicating whether to show the test decision. Default: `true`.
	*/
	decision?: boolean;
}

/**
* Interface describing a results data structure.
*/
declare class ResultsStruct {
	/**
	* Results constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns results
	*/
	constructor( arg?: ArrayBuffer | Results, byteOffset?: number, byteLength?: number );

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
	ci: Float64Array;

	/**
	* Difference in means under the null hypothesis.
	*/
	nullValue: number;

	/**
	* Sample mean of `x`.
	*/
	xmean: number;

	/**
	* Sample mean of `y`.
	*/
	ymean: number;

	/**
	* Test method.
	*/
	method: string;

	/**
	* Serializes a results object as a formatted string.
	*
	* @param options - options object
	* @returns serialized results
	*/
	toString( options?: ToStringOptions ): string;

	/**
	* Serializes a results object as a JSON object.
	*
	* @returns serialized object
	*/
	toJSON(): object;

	/**
	* Returns a DataView of a results object.
	*
	* @returns DataView
	*/
	toDataView(): DataView;
}

/**
* Interface defining a results constructor which is both "newable" and "callable".
*/
interface ResultsConstructor {
	/**
	* Results constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns results object
	*/
	new( arg?: ArrayBuffer | Results, byteOffset?: number, byteLength?: number ): ResultsStruct;

	/**
	* Results constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns results object
	*/
	( arg?: ArrayBuffer | Results, byteOffset?: number, byteLength?: number ): ResultsStruct;
}

/**
* Returns a two-sample Z-test double-precision floating-point results object.
*
* @param arg - buffer or data object
* @param byteOffset - byte offset
* @param byteLength - maximum byte length
* @returns results object
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.0132;
* results.statistic = 2.4773;
* results.xmean = 3.7561;
* results.ymean = 3.0129;
* results.ci = new Float64Array( [ 0.1552, 1.3311 ] );
* results.rejected = true;
*
* var str = results.toString();
* // returns <string>
*/
declare var Results: ResultsConstructor;


// EXPORTS //

export = Results;
