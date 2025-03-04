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
    gen( re, im, name )

Generate fixture data and write to file.

# Arguments

* `re`: real components
* `im`: imaginary components
* `name::AbstractString`: output filename

# Examples

``` julia
julia> re = rand( 1000 );
julia> im = rand( 1000 );
julia> gen( re, im, \"data.json\" );
```
"""
function gen( re, im, name )
	cisre = Array{Float64}( undef, length(re) );
	cisim = Array{Float64}( undef, length(re) );
	for i in eachindex( re )
		z = cis( Complex{Float64}( re[i], im[i] ) );
		cisre[ i ] = real( z );
		cisim[ i ] = imag( z );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("re", re),
		("im", im),
		("cisre", cisre),
		("cisim", cisim),
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

# Pure nonnegative real
re = ( rand( 500 ) .* 10000.0 ) .- 5.0;
im = zeros( 500 );
gen( re, im, "pure_real.json" );

# General complex:
re = ( rand( 500 ) .* 100.0 ) .- 5.0;
im = ( rand( 500 ) .* 100.0 ) .- 5.0;
gen( re, im, "general_complex.json" );
