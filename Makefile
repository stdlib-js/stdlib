
# VARIABLES #

ifndef VERBOSE
	QUIET := @
endif

# Define whether the make commands are running on a hosted continuous integration service:
ifeq ($(TRAVIS), true)
	CI_SERVICE ?= travis
else ifeq ($(APPVEYOR), true)
	CI_SERVICE ?= appveyor
else
	CI_SERVICE ?= none
endif

# Determine the filename:
this_file := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
this_dir := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
this_dir := $(patsubst %/,%,$(this_dir))

# Define the root project directory:
ROOT_DIR ?= $(this_dir)

# Define the root tools directory:
TOOLS_DIR ?= $(ROOT_DIR)/tools

# Define the directory containing the entry point for Makefile dependencies:
TOOLS_MAKE_DIR ?= $(TOOLS_DIR)/make

# Define the subdirectory containing Makefile dependencies:
TOOLS_MAKE_LIB_DIR ?= $(TOOLS_MAKE_DIR)/lib

# Define the root build directory:
BUILD_DIR ?= $(ROOT_DIR)/build

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

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT_DIR)/node_modules

# Define the top-level directory containing node module executables:
BIN_DIR ?= $(NODE_MODULES)/.bin

# Define the top-level folder name containing source files:
SOURCE_FOLDER ?= lib

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

# Define Node paths:
NODE_PATH ?= $(ROOT_DIR)/lib/node_modules
NODE_PATH_BENCHMARK ?= $(NODE_PATH)
NODE_PATH_EXAMPLES ?= $(NODE_PATH)
NODE_PATH_REPL ?= $(NODE_PATH)
NODE_PATH_TEST ?= $(NODE_PATH)
NODE_PATH_WORKSHOPS ?= $(NODE_PATH)

# Define Node environments:
ifdef ($(NODE_ENV))
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

# Define whether delete operations should be safe (i.e., deleted items are sent to trash, rather than permanently deleted):
SAFE_DELETE ?= false

# Define the delete command:
ifeq ($(SAFE_DELETE), true)
	# FIXME: -rm -rf
	DELETE := -rm
	DELETE_FLAGS := -rf
else
	DELETE ?= -rm
	DELETE_FLAGS ?= -rf
endif


# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/Makefile
