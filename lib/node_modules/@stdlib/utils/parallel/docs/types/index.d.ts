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

// TypeScript Version: 2.0

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Executable file/command (default: 'node').
	*/
	cmd?: string;

	/**
	* Number of scripts to execute concurrently.
	*/
	concurrency?: number;

	/**
	* Number of workers.
	*/
	workers?: number;

	/**
	* Boolean indicating whether to preserve the order of script output (default: false).
	*/
	ordered?: boolean;

	/**
	* Process user identity.
	*/
	uid?: number;

	/**
	* Process group identity.
	*/
	gid?: number;

	/**
	* Max child process `stdio` buffer size (default: 200*1024*1024).
	*/
	maxBuffer?: number;
}

/**
* Callback invoked after executing all scripts.
*/
type Nullary = () => void;

/**
* Callback invoked after executing all scripts.
*
* @param err - error argument
*/
type Unary = ( err: Error ) => void;

/**
* Callback invoked after executing all scripts.
*
* @param err - error argument
*/
type Callback = Nullary | Unary;

/**
* Executes scripts in parallel.
*
* @param files - script file paths
* @param clbk - callback to invoke after executing all scripts
* @throws must provide valid options
*
* @example
* var files = [ './a.js', './b.js ' ];
*
* var opts = {
*     'workers': 3,
*     'concurrency': 3
* };
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* parallel( files, opts, done );
*/
declare function parallel( files: Array<string>, clbk: Callback ): void;

/**
* Executes scripts in parallel.
*
* @param files - script file paths
* @param options - function options
* @param options.cmd - executable file/command (default: 'node')
* @param options.concurrency - number of scripts to execute concurrently
* @param options.workers - number of workers
* @param options.ordered - boolean indicating whether to preserve the order of script output
* @param options.uid - process user identity
* @param options.gid - process group identity
* @param options.maxBuffer - max child process `stdio` buffer size (default: 200*1024*1024)
* @param clbk - callback to invoke after executing all scripts
* @throws must provide valid options
*
* @example
* var files = [ './a.js', './b.js ' ];
*
* var opts = {
*     'workers': 3,
*     'concurrency': 3
* };
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* parallel( files, opts, done );
*/
declare function parallel( files: Array<string>, options: Options, clbk: Callback ): void; // tslint-disable-line max-line-length


// EXPORTS //

export = parallel;
