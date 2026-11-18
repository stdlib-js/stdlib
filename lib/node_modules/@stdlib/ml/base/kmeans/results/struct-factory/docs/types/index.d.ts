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

// TypeScript Version: 4.1

/**
* Interface describing clustering results.
*/
interface Results {
	/**
	* Number of times the data was clustered with different initial centroids.
	*/
	replicates?: number;

	/**
	* Index of the initial centroids which produced the best result.
	*/
	replicate?: number;

	/**
	* Distance metric.
	*/
	metric?: number;

	/**
	* Number of iterations for best results.
	*/
	iterations?: number;

	/**
	* Clustering algorithm.
	*/
	algorithm?: number;

	/**
	* Sum of squared distances to the closest centroid for all samples.
	*/
	inertia?: number;

	/**
	* Number of clusters.
	*/
	k?: number;

	/**
	* Number of samples.
	*/
	samples?: number;

	/**
	* Number of features.
	*/
	features?: number;
}

/**
* Interface describing a struct data structure.
*/
declare class Struct {
	/**
	* Struct constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns struct
	*/
	constructor( arg?: ArrayBuffer | Results, byteOffset?: number, byteLength?: number );

	/**
	* Number of times the data was clustered with different initial centroids.
	*/
	replicates: number;

	/**
	* Index of the initial centroids which produced the best result.
	*/
	replicate: number;

	/**
	* Distance metric.
	*/
	metric: number;

	/**
	* Number of iterations for best results.
	*/
	iterations: number;

	/**
	* Clustering algorithm.
	*/
	algorithm: number;

	/**
	* Number of clusters.
	*/
	k: number;

	/**
	* Number of samples.
	*/
	samples: number;

	/**
	* Number of features.
	*/
	features: number;

	/**
	* Sum of squared distances to the closest centroid for all samples.
	*/
	inertia: number;
}

/**
* Interface defining a struct constructor which is both "newable" and "callable".
*/
interface StructConstructor {
	/**
	* Struct constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns struct
	*/
	new( arg?: ArrayBuffer | Results, byteOffset?: number, byteLength?: number ): Struct;

	/**
	* Struct constructor.
	*
	* @param arg - buffer or data object
	* @param byteOffset - byte offset
	* @param byteLength - maximum byte length
	* @returns struct
	*/
	( arg?: ArrayBuffer | Results, byteOffset?: number, byteLength?: number ): Struct;
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
*
* @example
* var Struct = structFactory( 'float32' );
* // returns <Function>
*
* var s = new Struct();
* // returns <Struct>
*/
declare function structFactory( dtype: 'float64' | 'float32' ): StructConstructor;


// EXPORTS //

export = structFactory;
