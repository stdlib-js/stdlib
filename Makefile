#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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
#/

# VARIABLES #

# Determine the filename:
this_file := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
this_dir := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
this_dir := $(patsubst %/,%,$(this_dir))

# Define the root project directory:
ROOT_DIR ?= $(this_dir)

# Define the top-level directory containing source files:
SRC_DIR ?= $(ROOT_DIR)/lib/node_modules

# Define the root tools directory:
TOOLS_DIR ?= $(ROOT_DIR)/tools

# Define the directory containing tools which are Node.js packages:
TOOLS_PKGS_DIR ?= $(SRC_DIR)/@stdlib/_tools

# Define the directory containing the entry point for Makefile dependencies:
TOOLS_MAKE_DIR ?= $(TOOLS_DIR)/make

# Define the subdirectory containing Makefile dependencies:
TOOLS_MAKE_LIB_DIR ?= $(TOOLS_MAKE_DIR)/lib

# Define the root build directory:
BUILD_DIR ?= $(ROOT_DIR)/build

# Define the root directory for storing distributable files:
DIST_DIR ?= $(ROOT_DIR)/dist

# Define the root directory for storing temporary files:
TMP_DIR ?= $(ROOT_DIR)/tmp

# Define the root configuration directory:
CONFIG_DIR ?= $(ROOT_DIR)/etc

# Define the directories for writing reports, including code coverage:
REPORTS_DIR ?= $(ROOT_DIR)/reports
COVERAGE_DIR ?= $(REPORTS_DIR)/coverage
COMPLEXITY_DIR ?= $(REPORTS_DIR)/complexity

# Define the directory for workshops:
WORKSHOPS_DIR ?= $(ROOT_DIR)/workshops

# Define the directory for documentation:
DOCS_DIR ?= $(ROOT_DIR)/docs

# Define the directory for generated source code documentation:
SRC_DOCS_DIR ?= $(BUILD_DIR)/docs

# Define the directory for instrumented source code:
COVERAGE_INSTRUMENTATION_DIR ?= $(BUILD_DIR)/coverage

# Define the top-level directory containing executables:
LOCAL_BIN_DIR ?= $(ROOT_DIR)/bin

# Define the top-level directory containing vendor dependencies:
DEPS_DIR ?= $(ROOT_DIR)/deps

# Define the path to the root `package.json`:
ROOT_PACKAGE_JSON ?= $(ROOT_DIR)/package.json

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT_DIR)/node_modules

# Define the folder name convention for node module dependencies:
NODE_MODULES_FOLDER ?= node_modules

# Define the top-level directory containing node module executables:
BIN_DIR ?= $(NODE_MODULES)/.bin

# Define the folder name convention for source files:
SOURCE_FOLDER ?= lib

# Define the folder name convention for source files requiring compilation:
SRC_FOLDER ?= src

# Define the folder name convention for test files:
TESTS_FOLDER ?= test

# Define the folder name convention for test fixtures:
TESTS_FIXTURES_FOLDER ?= $(TESTS_FOLDER)/fixtures

# Define the folder name convention for examples files:
EXAMPLES_FOLDER ?= examples

# Define the folder name convention for examples fixtures:
EXAMPLES_FIXTURES_FOLDER ?= $(EXAMPLES_FOLDER)/fixtures

# Define the folder name convention for benchmark files:
BENCHMARKS_FOLDER ?= benchmark

# Define the folder name convention for benchmark fixtures:
BENCHMARKS_FIXTURES_FOLDER ?= $(BENCHMARKS_FOLDER)/fixtures

# Define the folder name convention for executables:
BIN_FOLDER ?= bin

# Define the folder name convention for documentation files:
DOCUMENTATION_FOLDER ?= docs

# Define the folder name convention for configuration files:
CONFIG_FOLDER ?= etc

# Define the folder name convention for build artifacts:
BUILD_FOLDER ?= build

# Define the folder name convention for distributable files:
DIST_FOLDER ?= dist

# Define the folder name convention for data files:
DATA_FOLDER ?= data

# Define the folder name convention for scripts:
SCRIPTS_FOLDER ?= scripts

# Define the folder name convention for temporary files:
TMP_FOLDER ?= tmp

# Define the folder name convention for TypeScript declaration files:
TYPESCRIPT_DECLARATIONS_FOLDER ?= $(DOCUMENTATION_FOLDER)/types

# Define the folder name convention for REPL tutorial files:
TUTORIALS_FOLDER ?= $(DOCUMENTATION_FOLDER)/tutorials

# Define filename extension conventions (keep in alphabetical order):
AWK_FILENAME_EXT ?= awk
BASH_FILENAME_EXT ?= sh
BIBTEX_FILENAME_EXT ?= bib
C_FILENAME_EXT ?= c
C_HEADER_FILENAME_EXT ?= h
CSL_FILENAME_EXT ?= csl
CSS_FILENAME_EXT ?= css
CSV_FILENAME_EXT ?= csv
CPP_FILENAME_EXT ?= cpp
CPP_HEADER_FILENAME_EXT ?= hpp
FORTRAN_FILENAME_EXT ?= f
GYP_FILENAME_EXT ?= gyp
GYPI_FILENAME_EXT ?= gypi
HTML_FILENAME_EXT ?= html
JAVASCRIPT_FILENAME_EXT ?= js
JPEG_FILENAME_EXT ?= jpg
JSON_FILENAME_EXT ?= json
JULIA_FILENAME_EXT ?= jl
MAKEFILE_FILENAME_EXT ?= mk
MARKDOWN_FILENAME_EXT ?= md
NODEJS_NATIVE_ADDON_FILENAME_EXT ?= node
PNG_FILENAME_EXT ?= png
PYTHON_FILENAME_EXT ?= py
R_FILENAME_EXT ?= R
SHELL_FILENAME_EXT ?= sh
SVG_FILENAME_EXT ?= svg
TEXT_FILENAME_EXT ?= txt
TYPESCRIPT_FILENAME_EXT ?= ts
TYPESCRIPT_DECLARATION_FILENAME_EXT ?= d.$(TYPESCRIPT_FILENAME_EXT)
WASM_FILENAME_EXT ?= wasm
WAT_FILENAME_EXT ?= wat
YAML_FILENAME_EXT ?= yml

# Define Node paths:
NODE_PATH ?= $(ROOT_DIR)/lib/node_modules
NODE_PATH_BENCHMARK ?= $(NODE_PATH)
NODE_PATH_EXAMPLES ?= $(NODE_PATH)
NODE_PATH_REPL ?= $(NODE_PATH)
NODE_PATH_TEST ?= $(NODE_PATH)
NODE_PATH_WORKSHOPS ?= $(NODE_PATH)

# Define Node environments:
ifdef NODE_ENV
	NODE_ENV_BENCHMARK := $(NODE_ENV)
	NODE_ENV_EXAMPLES := $(NODE_ENV)
	NODE_ENV_REPL := $(NODE_ENV)
	NODE_ENV_TEST := $(NODE_ENV)
	NODE_ENV_WORKSHOPS := $(NODE_ENV)
else
	NODE_ENV ?=
	NODE_ENV_BENCHMARK ?= benchmark
	NODE_ENV_EXAMPLES ?= examples
	NODE_ENV_REPL ?= repl
	NODE_ENV_TEST ?= test
	NODE_ENV_WORKSHOPS ?= workshop
endif

# Define command-line flags when invoking the Node executable:
ifdef NODE_FLAGS
	NODE_FLAGS_BENCHMARK := $(NODE_FLAGS)
	NODE_FLAGS_EXAMPLES := $(NODE_FLAGS)
	NODE_FLAGS_REPL := $(NODE_FLAGS)
	NODE_FLAGS_TEST := $(NODE_FLAGS)
	NODE_FLAGS_WORKSHOPS := $(NODE_FLAGS)
else
	NODE_FLAGS ?=
	NODE_FLAGS_BENCHMARK ?=
	NODE_FLAGS_EXAMPLES ?=
	NODE_FLAGS_REPL ?=
	NODE_FLAGS_TEST ?=
	NODE_FLAGS_WORKSHOPS ?=
endif


# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/Makefile
