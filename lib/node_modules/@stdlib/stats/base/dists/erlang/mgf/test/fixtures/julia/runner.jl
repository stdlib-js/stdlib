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

import Distributions: mgf, Erlang
import JSON

"""
	gen( x, k, lambda, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `k`: shape parameter
* `lambda`: rate parameter
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = rand( 1000 ) .* 5.0;
julia> k = rand( 1000 ) .* 10.0;
julia> lambda = rand( 1000 ) .* 10.0;
julia> gen( x, k, lambda, "data.json" );
```
"""
function gen( x, k, lambda, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = mgf( Erlang( k[i], 1.0/lambda[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("k", k),
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

# Large shape parameter:
k = round.( Int, ( rand( 1000 ) .* 5.0 ) .+ 5.0 );
lambda = rand( 1000 ) .* 10.0;
t = lambda .- rand( 1000 ) .* 10.0;
gen( t, k, lambda, "large_shape.json" );

# Large rate parameter:
k = round.( Int, rand( 1000 ) .* 5.0 );
lambda = ( rand( 1000 ) .* 10.0 ) .+ 10.0;
t = lambda .- rand( 1000 ) .* 20.0;
gen( t, k, lambda, "large_rate.json" );

# Both large:
k = round.( Int, ( rand( 1000 ) .* 10.0 ) .+ 5.0 );
lambda = ( rand( 1000 ) .* 20.0 ) .+ 10.0;
t = lambda .- rand( 1000 ) .* 30.0;
gen( t, k, lambda, "both_large.json" );
