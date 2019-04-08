/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Number of CPUs.
*
* ## Notes
*
* -   In browser environments, the number of CPUs is determined by querying the hardware concurrency API.
* -   In Node.js environments, the number of CPUs is determined via the `os` module.
*
* @example
* var num = NUM_CPUS;
* // returns <number>
*/
declare const NUM_CPUS: number;


// EXPORTS //

export = NUM_CPUS;
