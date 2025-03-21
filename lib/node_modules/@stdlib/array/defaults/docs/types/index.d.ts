/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Interface describing default data types.
*/
interface DataTypes {
	/**
	* Default data type.
	*/
	default: 'float64';

	/**
	* Default numeric data type.
	*/
	numeric: 'float64';

	/**
	* Default real-valued data type.
	*/
	real: 'float64';

	/**
	* Default floating-point data type.
	*/
	floating_point: 'float64';

	/**
	* Default real-valued floating-point data type.
	*/
	real_floating_point: 'float64';

	/**
	* Default complex-valued floating-point data type.
	*/
	complex_floating_point: 'complex128';

	/**
	* Default boolean data type.
	*/
	boolean: 'bool';

	/**
	* Default integer data type.
	*/
	integer: 'int32';

	/**
	* Default signed integer data type.
	*/
	signed_integer: 'int32';

	/**
	* Default unsigned integer data type.
	*/
	unsigned_integer: 'uint32';
}

/**
* Interface describing default settings.
*/
interface Defaults {
	/**
	* Default data types.
	*/
	dtypes: DataTypes;
}

/**
* Interface for returning default settings.
*/
interface DefaultsFunction {
	/**
	* Returns default settings.
	*
	* @returns default settings
	*
	* @example
	* var o = defaults();
	* // returns {...}
	*/
	(): Defaults;

	/**
	* Returns a default setting.
	*
	* @param name - setting name
	* @returns setting value or null
	*
	* @example
	* var v = defaults.get( 'dtypes.default' );
	* // returns <string>
	*/
	get( name: string ): any;
}

/**
* Returns default ndarray settings.
*
* @returns default settings
*
* @example
* var o = defaults();
* // returns {...}
*/
declare var defaults: DefaultsFunction;


// EXPORTS //

export = defaults;
