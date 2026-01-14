#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2025 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import BenchmarkTools

# Benchmark variables:
repeats = 3;
samples = 1e6;
count = 0;

"""
	print_version()

Prints the TAP version.

# Examples

``` julia
julia> print_version()
```
"""
function print_version()
	@printf( "TAP version 13\n" );
end

"""
	print_summary( total, passing )

Print the benchmark summary.

# Arguments

* `total`: total number of tests
* `passing`: number of passing tests

# Examples

``` julia
julia> print_summary( 3, 3 )
```
"""
function print_summary( total, passing )
	@printf( "#\n" );
	@printf( "1..%d\n", total ); # TAP plan
	@printf( "# total %d\n", total );
	@printf( "# pass  %d\n", passing );
	@printf( "#\n" );
	@printf( "# ok\n" );
end

"""
	print_results( iterations, elapsed )

Print benchmark results.

# Arguments

* `iterations`: number of iterations
* `elapsed`: elapsed time (in seconds)

# Examples

``` julia
julia> print_results( 1000000, 0.131009101868 )
```
"""
function print_results( iterations, elapsed )
	rate = iterations / elapsed

	@printf( "  ---\n" );
	@printf( "  iterations: %d\n", iterations );
	@printf( "  elapsed: %0.9f\n", elapsed );
	@printf( "  rate: %0.9f\n", rate );
	@printf( "  ...\n" );
end

"""
	benchmark( setup, expr )

Run a benchmark.

# Notes

* Benchmark results are returned as a two-element array: [ iterations, elapsed ].
* The number of iterations is not the true number of iterations. Instead, an 'iteration' is defined as a 'sample', which is a computed estimate for a single evaluation.
* The elapsed time is in seconds.

# Arguments

* `setup`: setup expression
* `expr`: expression to benchmark

# Examples

``` julia
julia> out = benchmark( :(), :( sin( 3.14 ) ) );
```
"""
function benchmark( setup, expr )
	t = eval( :( BenchmarkTools.@benchmark $expr samples=$samples setup=($setup) ) )

	# Compute the total "elapsed" time and convert from nanoseconds to seconds:
	s = sum( t.times ) / 1.0e9;

	# Determine the number of "iterations":
	iter = length( t.times );

	# Return the results:
	[ iter, s ];
end

"""
	bench( name, setup, expr )

Run a named benchmark.

# Arguments

* `name`: benchmark name (suffix)
* `setup`: setup expression
* `expr`: expression to benchmark

# Examples

``` julia
julia> bench( "sin", :(), :( sin( 3.14 ) ) );
```
"""
function bench( name, setup, expr )
	for i in 1:repeats
		@printf( "# julia::%s\n", name );
		global count += 1;
		results = benchmark( setup, expr );
		print_results( results[ 1 ], results[ 2 ] );
		@printf( "ok %d benchmark finished\n", count );
	end
end

"""
	main()

Run benchmarks.

# Examples

``` julia
julia> main();
```
"""
function main()
	print_version();

	name = "TODO";
	setup = :();
	stmt = :( TODO );
	bench( name, setup, stmt );

	print_summary( count, count );
end

main();
