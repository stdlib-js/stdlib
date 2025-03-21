/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Interface defining function options.
*/
interface Options {
	/**
	* Base directory from which to search (default: current working directory).
	*/
	dir?: string;

	/**
	* Mode of operation.
	*
	* ## Notes
	*
	* -   The following modes are supported:
	*
	*     -   **first**: return the first resolved path.
	*     -   **some**: return one or more paths resolved within the first directory level containing a match.
	*     -   **all**: return all resolved paths within the first directory level containing matches for all provided paths.
	*     -   **each**: independently return the first resolved path for each path at any directory level.
	*
	*     Default: `'all'`.
	*
	* -   In `'some'` mode, the return order of resolved paths is not guaranteed.
	*/
	mode?: 'first' | 'some' | 'all' | 'each';
}

/**
* Callback invoked after resolving paths.
*
* @param err - error argument
* @param paths - resolved paths
*/
type Callback = ( err: Error | null, paths: Array<string|null> ) => void;

/**
* Interface for resolving paths from a set of paths by walking parent directories.
*/
interface ResolveParentPaths {
	/**
	* Asynchronously resolves paths from a set of paths by walking parent directories.
	*
	* @param paths - path to resolve
	* @param options - function options
	* @param options.dir - base directory
	* @param options.mode - mode of operation
	* @param clbk - callback to invoke after resolving paths
	* @throws must provide valid options
	*
	* @example
	* resolveParentPaths( [ 'package.json', 'package-lock.json' ], { 'dir': __dirname, 'mode': 'some' }, onPaths );
	*
	* function onPaths( error, paths ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( paths );
	* }
	*/
	( paths: Array<string>, options: Options, clbk: Callback ): void;

	/**
	* Asynchronously resolves paths from a set of paths by walking parent directories.
	*
	* @param paths - path to resolve
	* @param clbk - callback to invoke after resolving paths
	*
	* @example
	* resolveParentPaths( [ 'package.json', 'package-lock.json' ], onPaths );
	*
	* function onPaths( error, paths ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( paths );
	* }
	*/
	( paths: Array<string>, clbk: Callback ): void;

	/**
	* Synchronously resolves paths from a set of paths by walking parent directories.
	*
	* @param paths - paths to resolve
	* @param options - function options
	* @param options.dir - base directory
	* @param options.mode - mode of operation
	* @throws must provide valid options
	* @returns resolved paths
	*
	* @example
	* var paths = resolveParentPaths.sync( [ 'package.json', 'package-lock.json' ], { 'dir': __dirname, 'mode': 'some' } );
	*/
	sync( paths: Array<string>, options?: Options ): Array<string|null>;
}

/**
* Asynchronously resolves paths from a set of paths by walking parent directories.
*
* @param paths - paths to resolve
* @param options - function options
* @param options.dir - base directory
* @param options.mode - mode of operation
* @param clbk - callback to invoke after resolving paths
* @throws must provide valid options
*
* @example
* resolveParentPaths( [ 'package.json', 'package-lock.json' ], onPaths );
*
* function onPaths( error, paths ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( paths );
* }
*
* @example
* var paths = resolveParentPaths.sync( [ 'package.json', 'package-lock.json' ] );
*/
declare var resolveParentPaths: ResolveParentPaths;


// EXPORTS //

export = resolveParentPaths;
