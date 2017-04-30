
# VARIABLES #

# Define a generic filename pattern:
FILES_PATTERN ?= *.*

# Define a generic filepath pattern:
FILES_FILTER ?= .*/.*

# Define a filename pattern for source files:
SOURCES_PATTERN ?= *.js

# Define a filepath pattern for source files:
SOURCES_FILTER ?= .*/.*

# Define a filename pattern for test files:
TESTS_PATTERN ?= test*.js

# Define a filepath pattern for test files:
TESTS_FILTER ?= .*/.*

# Define a filename pattern for test fixtures:
TESTS_FIXTURES_PATTERN ?= *.*

# Define a filepath pattern for test fixture files:
TESTS_FIXTURES_FILTER ?= .*/.*

# Define a filename pattern for benchmark files:
BENCHMARKS_PATTERN ?= benchmark*.js

# Define a filename pattern for Julia benchmark files:
JULIA_BENCHMARKS_PATTERN ?= benchmark*.jl

# Define a filename pattern for Python benchmark files:
PYTHON_BENCHMARKS_PATTERN ?= benchmark*.py

# Define a filename pattern for R benchmark files:
R_BENCHMARKS_PATTERN ?= benchmark*.R

# Define a filepath pattern for benchmark files:
BENCHMARKS_FILTER ?= .*/.*

# Define a filename pattern for example files:
EXAMPLES_PATTERN ?= *.js

# Define a filepath pattern for example files:
EXAMPLES_FILTER ?= .*/.*

# Define a filename pattern for Markdown files:
MARKDOWN_PATTERN ?= *.md

# Define a filepath pattern for Markdown files:
MARKDOWN_FILTER ?= .*/.*

# Define a filepath pattern for packages:
PACKAGES_FILTER ?= .*/.*


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/ls/files.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/sources.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/tests.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/tests_directories.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/tests_fixtures.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/tools_tests.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/benchmarks.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/benchmarks_julia.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/examples.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/markdown.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/pkgs.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/pkgs_addons.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/pkgs_clis.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/pkgs_names.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/pkgs_namespaces.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/pkgs_tree.mk
include $(TOOLS_MAKE_LIB_DIR)/ls/pkgs_installed.mk
