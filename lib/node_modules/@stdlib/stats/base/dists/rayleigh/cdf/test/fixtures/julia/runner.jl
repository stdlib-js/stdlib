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

import Distributions: cdf, Rayleigh
import JSON

"""
	gen( x, sigma, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `sigma`: scale parameter
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( 0, stop = 50, length = 1001 );
julia> sigma = range( 1, stop = 10, length = 1001 );
julia> gen( x, sigma, \"data.json\" );
```
"""
function gen( x, sigma, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = cdf( Rayleigh( sigma[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("sigma", sigma),
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

# Large scale parameter:
x = rand( 1000 ) .* 20.0;
sigma = rand( 1000 ) .* 50.0;
gen( x, sigma, "large_scale.json" );

# Medium scale parameter:
x = rand( 1000 ) .* 20.0;
sigma = rand( 1000 ) .* 20.0;
gen( x, sigma, "medium_scale.json" );

# Small scale parameter:
x = rand( 1000 ) .* 20.0;
sigma = rand( 1000 ) .* 5.0;
gen( x, sigma, "small_scale.json" );
