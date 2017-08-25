
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

# Define the root directory for storing temporary files:
TMP_DIR ?= $(ROOT_DIR)/tmp

# Define the root configuration directory:
CONFIG_DIR ?= $(ROOT_DIR)/etc

# Define the directory for writing reports, including code coverage:
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

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT_DIR)/node_modules

# Define the top-level directory containing node module executables:
BIN_DIR ?= $(NODE_MODULES)/.bin

# Define the folder name convention for source files:
SOURCE_FOLDER ?= lib

# Define the folder name convention for source files requiring compilation:
SRC_FOLDER ?= src

# Define the folder name convention for test files:
TESTS_FOLDER ?= test

# Define the folder name convention for test fixtures:
TESTS_FIXTURES_FOLDER ?= test/fixtures

# Define the folder name convention for examples files:
EXAMPLES_FOLDER ?= examples

# Define the folder name convention for benchmark files:
BENCHMARKS_FOLDER ?= benchmark

# Define the folder name convention for executables:
BIN_FOLDER ?= bin

# Define the folder name convention for documentation files:
DOCUMENTATION_FOLDER ?= docs

# Define the folder name convention for configuration files:
CONFIG_FOLDER ?= etc

# Define the folder name convention for build artifacts:
BUILD_FOLDER ?= build

# Define the folder name convention for temporary files:
TMP_FOLDER ?= tmp

# Define filename extension conventions (keep in alphabetical order):
AWK_FILENAME_EXT ?= awk
BASH_FILENAME_EXT ?= sh
BIBTEX_FILENAME_EXT ?= bib
C_FILENAME_EXT ?= c
CSL_FILENAME_EXT ?= csl
CSS_FILENAME_EXT ?= css
CSV_FILENAME_EXT ?= csv
CXX_FILENAME_EXT ?= cpp
FORTRAN_FILENAME_EXT ?= f
GYP_FILENAME_EXT ?= gyp
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
SVG_FILENAME_EXT ?= svg
TEXT_FILENAME_EXT ?= txt
WEBASSEMBLY_FILENAME_EXT ?= wasm
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
	NODE_ENV_BENCHMARK ?= benchmark
	NODE_ENV_EXAMPLES ?= examples
	NODE_ENV_REPL ?= repl
	NODE_ENV_TEST ?= test
	NODE_ENV_WORKSHOPS ?= workshop
endif


# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/Makefile
