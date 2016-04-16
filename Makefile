
# VARIABLES #

# Define the Node environment:
NODE_ENV ?= test

# Define whether the make commands are running on a hosted continuous integration service:
ifeq ($(TRAVIS), true)
	CI_SERVICE ?= travis
else ifeq ($(APPVEYOR), true)
	CI_SERVICE ?= appveyor
else
	CI_SERVICE ?= none
endif

# Determine the filename:
THIS_FILE := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
THIS_DIR := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
THIS_DIR := $(patsubst %/,%,$(THIS_DIR))

# Define the root project directory:
ROOT ?= $(THIS_DIR)

# Define the root tools directory:
TOOLS_DIR ?= $(ROOT)/tools

# Define the directory containing Makefile dependencies:
TOOLS_MAKE_DIR ?= $(TOOLS_DIR)/make

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

# Define the directory name for test fixtures:
TESTS_FIXTURES_DIR ?= test/fixtures

# Define the directory name for examples files:
EXAMPLES_DIR ?= examples

# Define whether delete operations should be safe (i.e., deleted items are sent to trash, rather than permanently deleted):
SAFE_DELETE ?= false

# Define the delete command:
ifeq ($(SAFE_DELETE), true)
	# FIXME: -rm -rf
	DELETE_CMD := -rm -rf
else
	DELETE_CMD ?= -rm -rf
endif

# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/Makefile
