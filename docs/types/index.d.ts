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

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import array = require( '@stdlib/array' );
import assert = require( '@stdlib/assert' );
import bench = require( '@stdlib/bench' );
import bigint = require( '@stdlib/bigint' );
import blas = require( '@stdlib/blas' );
import buffer = require( '@stdlib/buffer' );
import cli = require( '@stdlib/cli' );
import complex = require( '@stdlib/complex' );
import constants = require( '@stdlib/constants' );
import datasets = require( '@stdlib/datasets' );
import error = require( '@stdlib/error' );
import fs = require( '@stdlib/fs' );
import iter = require( '@stdlib/iter' );
import math = require( '@stdlib/math' );
import ml = require( '@stdlib/ml' );
import namespace = require( '@stdlib/namespace' );
import ndarray = require( '@stdlib/ndarray' );
import net = require( '@stdlib/net' );
import nlp = require( '@stdlib/nlp' );
import number = require( '@stdlib/number' );
import os = require( '@stdlib/os' );
import process = require( '@stdlib/process' );
import proxy = require( '@stdlib/proxy' );
import random = require( '@stdlib/random' );
import regexp = require( '@stdlib/regexp' );
import simulate = require( '@stdlib/simulate' );
import slice = require( '@stdlib/slice' );
import stats = require( '@stdlib/stats' );
import streams = require( '@stdlib/streams' );
import strided = require( '@stdlib/strided' );
import string = require( '@stdlib/string' );
import symbol = require( '@stdlib/symbol' );
import time = require( '@stdlib/time' );
import utils = require( '@stdlib/utils' );

/**
* Interface describing the `stdlib` namespace.
*/
interface Namespace {
	/**
	* Arrays.
	*/
	array: typeof array;

	/**
	* Standard assertion utilities.
	*/
	assert: typeof assert;

	bench: typeof bench;

	/**
	* BigInt.
	*/
	bigint: typeof bigint;

	/**
	* Standard library BLAS.
	*/
	blas: typeof blas;

	/**
	* Buffer.
	*/
	buffer: typeof buffer;

	/**
	* Command-line interface.
	*/
	cli: typeof cli;

	/**
	* Complex numbers.
	*/
	complex: typeof complex;

	/**
	* Standard library constants.
	*/
	constants: typeof constants;

	/**
	* Returns datasets.
	*
	* @param name - dataset name
	* @param options - dataset options
	* @throws unsupported/unrecognized dataset name
	* @returns dataset
	*/
	datasets: typeof datasets;

	/**
	* Errors.
	*/
	error: typeof error;

	/**
	* Standard library for interfacing with a fileystem.
	*/
	fs: typeof fs;

	/**
	* Standard iterator utilities.
	*/
	iter: typeof iter;

	/**
	* Standard math.
	*/
	math: typeof math;

	/**
	* Standard library machine learning algorithms.
	*/
	ml: typeof ml;

	/**
	* Returns the standard library namespace.
	*
	* @returns standard library namespace
	*/
	namespace: typeof namespace;

	/**
	* Multidimensional arrays.
	*/
	ndarray: typeof ndarray;

	/**
	* Standard library networking.
	*/
	net: typeof net;

	/**
	* Standard library natural language processing.
	*/
	nlp: typeof nlp;

	/**
	* Number.
	*/
	number: typeof number;

	/**
	* Standard library OS utilities.
	*/
	os: typeof os;

	/**
	* Standard library process utilities.
	*/
	process: typeof process;

	/**
	* Proxy.
	*/
	proxy: typeof proxy;

	/**
	* Standard library generic random functions.
	*/
	random: typeof random;

	/**
	* Standard library regular expressions.
	*/
	regexp: typeof regexp;

	/**
	* Standard library simulation utilities.
	*/
	simulate: typeof simulate;

	/**
	* Standard library slice utilities.
	*/
	slice: typeof slice;

	/**
	* Standard library statistical functions.
	*/
	stats: typeof stats;

	/**
	* Standard library streams.
	*/
	streams: typeof streams;

	/**
	* Strided.
	*/
	strided: typeof strided;

	/**
	* Standard library string manipulation functions.
	*/
	string: typeof string;

	/**
	* Symbol.
	*/
	symbol: typeof symbol;

	/**
	* Standard library time utilities.
	*/
	time: typeof time;

	/**
	* Standard utilities.
	*/
	utils: typeof utils;
}

/**
* Standard library.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
