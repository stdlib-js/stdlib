
# VARIABLES #

# Define the command for `npm`:
NPM ?= npm

# Define the command for `node`:
NODE ?= node

# Define the command for removing files and directories:
DELETE_CMD ?= -rm -rf

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# Based on the kernel, determine the `open` command:
ifeq ($(KERNEL), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif


# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/lib/help/Makefile
include $(TOOLS_MAKE_DIR)/lib/find/Makefile
include $(TOOLS_MAKE_DIR)/lib/lint/Makefile
include $(TOOLS_MAKE_DIR)/lib/notes/Makefile
include $(TOOLS_MAKE_DIR)/lib/install/Makefile
include $(TOOLS_MAKE_DIR)/lib/test/Makefile
include $(TOOLS_MAKE_DIR)/lib/test-cov/Makefile
include $(TOOLS_MAKE_DIR)/lib/test-browsers/Makefile
include $(TOOLS_MAKE_DIR)/lib/test-ci/Makefile
include $(TOOLS_MAKE_DIR)/lib/coverage-service/Makefile
include $(TOOLS_MAKE_DIR)/lib/examples/Makefile
include $(TOOLS_MAKE_DIR)/lib/docs/Makefile


# TARGETS #

# Perform clean-up.
#
# This target runs the project's cleanup sequence.

clean: clean-node clean-cov clean-docs
	$(DELETE_CMD) $(BUILD_DIR)
	$(DELETE_CMD) $(REPORTS_DIR)


.PHONY: clean
