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

import Distributions: cdf, Binomial
import JSON

"""
	gen( x, n, p, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `n`: number of trials
* `p`: success probability
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = rand( 1000 ) .* 15;
julia> n = round.( rand( 1000 ) .* 20 );
julia> p = rand( 1000 );
julia> gen( x, n, p, \"data.json\" );
```
"""
function gen( x, n, p, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = cdf( Binomial( n[i], p[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("n", n),
		("p", p),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Random (small n, small p):
x = rand( 1000 ) .* 15.0;
n = round.( rand( 1000 ) .* 20.0 );
p = rand( 1000 ) .* 0.2;
gen( x, n, p, "small_small.json" );

# Random (small n, high p):
x = rand( 1000 ) .* 15.0;
n = round.( rand( 1000 ) .* 20.0 );
p = ( rand( 1000 ) .* 0.25 ) .+ 0.75;
gen( x, n, p, "small_high.json" );

# Random (high n, high p):
x = rand( 1000 ) .* 80.0;
n = round.( rand( 1000 ) .* 100.0 );
p = ( rand( 1000 ) .* 0.25 ) .+ 0.75;
gen( x, n, p, "high_high.json" );

# Random (high n, small p):
x = rand( 1000 ) .* 40.0;
n = round.( rand( 1000 ) .* 100.0 );
p = rand( 1000 ) .* 0.2;
gen( x, n, p, "high_small.json" );
