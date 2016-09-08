
# VARIABLES #

# Define the command for `npm`:
NPM ?= npm

# Define the command for `node`:
NODE ?= node

# Define the command for removing files and directories:
DELETE ?= -rm
DELETE_FLAGS ?= -rf

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# Based on the kernel, determine the `open` command:
ifeq ($(KERNEL), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif
# TODO: add Windows command


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/help/Makefile
include $(TOOLS_MAKE_LIB_DIR)/init/Makefile
include $(TOOLS_MAKE_LIB_DIR)/repl/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/Makefile
include $(TOOLS_MAKE_LIB_DIR)/deps/Makefile
include $(TOOLS_MAKE_LIB_DIR)/licenses/Makefile
include $(TOOLS_MAKE_LIB_DIR)/notes/Makefile
include $(TOOLS_MAKE_LIB_DIR)/install/Makefile
include $(TOOLS_MAKE_LIB_DIR)/test/Makefile
include $(TOOLS_MAKE_LIB_DIR)/test-cov/Makefile
include $(TOOLS_MAKE_LIB_DIR)/test-browsers/Makefile
include $(TOOLS_MAKE_LIB_DIR)/test-ci/Makefile
include $(TOOLS_MAKE_LIB_DIR)/coverage-service/Makefile
include $(TOOLS_MAKE_LIB_DIR)/benchmark/Makefile
include $(TOOLS_MAKE_LIB_DIR)/examples/Makefile
include $(TOOLS_MAKE_LIB_DIR)/complexity/Makefile
include $(TOOLS_MAKE_LIB_DIR)/docs/Makefile
include $(TOOLS_MAKE_LIB_DIR)/workshops/Makefile
include $(TOOLS_MAKE_LIB_DIR)/markdown-equations/Makefile
include $(TOOLS_MAKE_LIB_DIR)/debug/Makefile


# TARGETS #

# Default target.
#
# This target is the default target.

all: help

.PHONY: all


# Perform clean-up.
#
# This target runs the project's cleanup sequence.

clean: clean-node clean-cov clean-docs
	$(DELETE) $(DELETE_FLAGS) $(BUILD_DIR)
	$(DELETE) $(DELETE_FLAGS) $(REPORTS_DIR)

.PHONY: clean
