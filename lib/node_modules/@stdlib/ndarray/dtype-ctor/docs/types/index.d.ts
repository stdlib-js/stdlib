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
* Data type byte orders.
*
* ## Notes
*
* -   **host**: host platform byte order.
* -   **little-endian**: little-endian byte order.
* -   **big-endian**: big-endian byte order.
*/
type ByteOrder = 'host' | 'little-endian' | 'big-endian';

/**
* Interface describing constructor options.
*/
interface Options {
	/**
	* Data type description.
	*/
	description?: string;
}

/**
* Data type.
*/
declare class DataType<T = unknown> {
	/**
	* Data type constructor.
	*
	* @param value - data type value
	* @param options - constructor options
	* @param options.description - data type description
	* @returns data type instance
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var str = dt.toString();
	* // returns 'float64'
	*/
	constructor( value: T, options?: Options );

	/**
	* Alignment (in bytes) for the data type.
	*
	* ## Notes
	*
	* -   If a data type does not have a known alignment, the returned value is `-1`.
	*
	* @returns alignment (in bytes)
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.alignment;
	* // returns 8
	*/
	readonly alignment: number;

	/**
	* Size (in bytes) of the data type.
	*
	* ## Notes
	*
	* -   If a data type does not have a known size, the returned value is `-1`.
	*
	* @returns byte length (in bytes)
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.byteLength;
	* // returns 8
	*/
	readonly byteLength: number;

	/**
	* Data type byte order.
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.byteOrder;
	* // returns 'host'
	*/
	readonly byteOrder: ByteOrder;

	/**
	* Single letter character abbreviation for the data type.
	*
	* ## Notes
	*
	* -   If a data type does not have a corresponding single letter character abbreviation, the returned value is an empty string.
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.char;
	* // returns 'd'
	*/
	readonly char: string;

	/**
	* Data type description.
	*
	* ## Notes
	*
	* -   If a data type does not have an associated description, the returned value is an empty string.
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.description;
	* // returns <string>
	*/
	readonly description: string;

	/**
	* Enumeration constant for the data type.
	*
	* ## Notes
	*
	* -   If a data type does not have a corresponding known enumeration constant, the returned value is `-1`.
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.enum;
	* // returns <number>
	*/
	readonly enum: number;

	/**
	* "Raw" (original) data type value.
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.value;
	* // returns 'float64'
	*/
	readonly value: T;

	/**
	* Serializes a data type instance as a JSON object.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a `DataType` instance.
	*
	* @returns serialized data type instance
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var o = dt.toJSON();
	* // returns {...}
	*/
	toJSON(): Object;

	/**
	* Serializes a data type instance to a string.
	*
	* @returns serialized data type instance
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.toString();
	* // returns 'float64'
	*/
	toString(): string;

	/**
	* Converts a data type instance to a primitive value.
	*
	* ## Notes
	*
	* -   This method returns the same value as `#.toString()`.
	*
	* @returns primitive value
	*
	* @example
	* var dt = new DataType( 'float64' );
	* // returns <DataType>
	*
	* var v = dt.valueOf();
	* // returns 'float64'
	*/
	valueOf(): string;
}


// EXPORTS //

export = DataType;
