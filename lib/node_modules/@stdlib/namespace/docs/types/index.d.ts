/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Namespace element.
*/
type NamespaceElement = {
	/**
	* A unique identifier suitable for use within a shared context such as a REPL environment.
	*/
	alias: string;

	/**
	* The package path from which the namespace element originates.
	*/
	path: string;

	/**
	* The actual value included in the namespace.
	*/
	value: any;

	/**
	* The value type (e.g., function, number, string, object, etc.).
	*/
	type: string;

	/**
	* Related namespace elements, as identified by their package paths.
	*/
	related: string;
};

/**
* Returns the standard library namespace.
*
* @returns standard library namespace
*/
declare function namespace(): Array<NamespaceElement>;


// EXPORTS //

export = namespace;
