/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

/*
* See [D3]{@link https://github.com/d3/d3-scale/blob/master/README.md}.
*/

var COLORS = {};

COLORS.category10 = [
	'#1f77b4', // 'category10-1'
	'#ff7f0e', // 'category10-2'
	'#2ca02c', // 'category10-3'
	'#d62728', // 'category10-4'
	'#9467bd', // 'category10-5'
	'#8c564b', // 'category10-6'
	'#e377c2', // 'category10-7'
	'#7f7f7f', // 'category10-8'
	'#bcdb22', // 'category10-9'
	'#17becf'  // 'category10-10'
];

COLORS.category20 = [
	'#1f77b4', // 'category20-1'
	'#aec7e8', // 'category20-2'
	'#ff7f0e', // 'category20-3'
	'#ffbb78', // 'category20-4'
	'#2ca02c', // 'category20-5'
	'#98df8a', // 'category20-6'
	'#d62728', // 'category20-7'
	'#ff9896', // 'category20-8'
	'#9467bd', // 'category20-9'
	'#c5b0d5', // 'category20-10'
	'#8c564b', // 'category20-11'
	'#c49c94', // 'category20-12'
	'#e377c2', // 'category20-13'
	'#f7b6d2', // 'category20-14'
	'#7f7f7f', // 'category20-15'
	'#c7c7c7', // 'category20-16'
	'#bcbd22', // 'category20-17'
	'#dbdb8d', // 'category20-18'
	'#17becf', // 'category20-19'
	'#9edae5'  // 'category20-20'
];

COLORS.category20b = [
	'#393b79', // 'category20b-1'
	'#5254a3', // 'category20b-2'
	'#6b6ecf', // 'category20b-3'
	'#9c9ede', // 'category20b-4'
	'#637939', // 'category20b-5'
	'#8ca252', // 'category20b-6'
	'#b5cf6b', // 'category20b-7'
	'#cedb9c', // 'category20b-8'
	'#8c6d31', // 'category20b-9'
	'#bd9e39', // 'category20b-10'
	'#e7ba52', // 'category20b-11'
	'#e7cb94', // 'category20b-12'
	'#843c39', // 'category20b-13'
	'#ad494a', // 'category20b-14'
	'#d6616b', // 'category20b-15'
	'#e7969c', // 'category20b-16'
	'#7b4173', // 'category20b-17'
	'#a55194', // 'category20b-18'
	'#ce6dbd', // 'category20b-19'
	'#de9ed6'  // 'category20b-20'
];

COLORS.category20c = [
	'#3182bd', // 'category20c-1'
	'#6baed6', // 'category20c-2'
	'#9ecae1', // 'category20c-3'
	'#c6dbef', // 'category20c-4'
	'#e6550d', // 'category20c-5'
	'#fd8d3c', // 'category20c-6'
	'#fdae6b', // 'category20c-7'
	'#fdd0a2', // 'category20c-8'
	'#31a354', // 'category20c-9'
	'#74c476', // 'category20c-10'
	'#a1d99b', // 'category20c-11'
	'#c7e9c0', // 'category20c-12'
	'#756bb1', // 'category20c-13'
	'#9e9ac8', // 'category20c-14'
	'#bcbddc', // 'category20c-15'
	'#dadaeb', // 'category20c-16'
	'#636363', // 'category20c-17'
	'#969696', // 'category20c-18'
	'#bdbdbd', // 'category20c-19'
	'#d9d9d9'  // 'category20c-20'
];


// EXPORTS //

module.exports = COLORS;
