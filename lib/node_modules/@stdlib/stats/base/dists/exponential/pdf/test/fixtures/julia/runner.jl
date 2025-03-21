#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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

import Distributions: pdf, Exponential
import JSON

"""
    gen( x, lambda, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `lambda`: rate parameter
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( 0, stop = 50, length = 2001 );
julia> lambda = range( 10, stop = 20, length = 1001 );
julia> gen( x, lambda, \"data.json\" );
```
"""
function gen( x, lambda, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = pdf( Exponential( 1/lambda[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("lambda", lambda),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Random (x small, lambda small):
x = rand( 1001 );
lambda = rand( 1001 );
gen( x, lambda, "small_small.json" );

# Random (x large, lambda small):
x = rand( 1001 ) .* 100;
lambda = rand( 1001 );
gen( x, lambda, "large_small.json" );

# Random (x small, lambda large):
x = rand( 1001 );
lambda = rand( 1001 ) .* 100;
gen( x, lambda, "small_large.json" );

# Random (x large, lambda large):
x = rand( 1001 ) .* 100;
lambda = rand( 1001 ) .* 100;
gen( x, lambda, "large_large.json" );
