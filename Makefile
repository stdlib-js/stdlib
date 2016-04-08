
# VARIABLES #

# Define the Node environment:
NODE_ENV ?= test

# Define whether the make commands are running on Travis CI:
TRAVIS ?= false

# Determine the filename:
THIS_FILE := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
THIS_DIR := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
THIS_DIR := $(patsubst %/,%,$(THIS_DIR))

# Define the root project directory:
ROOT ?= $(THIS_DIR)

# Define the directory containing Makefile dependencies:
TOOLS_MAKE_DIR ?= $(ROOT)/tools/make

# Define the root build directory:
BUILD_DIR ?= $(ROOT)/build

# Define the root configuration directory:
CONFIG_DIR ?= $(ROOT)/etc

# Define the directory for writing reports, including code coverage:
REPORTS_DIR ?= $(ROOT)/reports
COVERAGE_DIR ?= $(REPORTS_DIR)/coverage

# Define the directory for documentation:
DOCS_DIR ?= $(ROOT)/docs

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT)/node_modules

# Define the top-level directory containing node module executables:
BIN ?= $(NODE_MODULES)/.bin

# Define the top-level directory containing source files:
SOURCE_DIR ?= lib

# Define the directory name for test files:
TESTS_DIR ?= test

# Define the directory name for examples files:
EXAMPLES_DIR ?= examples


# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/Makefile
