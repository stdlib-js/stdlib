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
	ci?: Float32Array;

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
	ci: Float32Array;

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
* Returns a one-sample Z-test single-precision floating-point results object.
*
* @param arg - buffer or data object
* @param byteOffset - byte offset
* @param byteLength - maximum byte length
* @returns results object
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.3374;
* results.statistic = 0.9592;
* results.sd = 0.4535;
* results.ci = new Float32Array( [ -0.0316, 0.0923 ] );
* results.rejected = false;
*
* var str = results.toString();
* // returns <string>
*/
declare var Results: ResultsConstructor;


// EXPORTS //

export = Results;
