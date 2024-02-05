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

import JSON

"""
    gen( m, k, name )

Generate fixture data and write to file.

# Arguments

* `n`: input value
* `k`: second input value
* `name::AbstractString`: output filename

# Examples

``` julia
julia> n = round.( Int, rand( 1000 ) .* 170 );
julia> k = round.( Int, rand( 1000 ) .* 170 );
julia> gen( n, k, \"data.json\" );
```
"""
function gen( n, k, name )
	y = Array{Int64}( undef, length( n ) );
	for i in eachindex(n)
		y[i] = binomial( n[i], k[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("n", n),
		("k", k),
		("expected", y)
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

# Integer values:
n = round.( Int, ( rand( 1000 ) .* 50 ) .+ 20 );
k = round.( Int, rand( 1000 ) .* 20 );
gen( n, k, "integers.json" );

# Negative `n` values:
n = -1 .* round.( Int, ( rand( 1000 ) .* 20 ) .+ 10 );
k = round.( Int, rand( 1000 ) .* 10 );
gen( n, k, "negative_n.json" );
