
# VARIABLES #

# Define the path to an executable for displaying dependency info:
DEPS_INFO ?= $(TOOLS_DIR)/scripts/deps_info


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/deps/check.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/deps.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/lang.mk


# TARGETS #

# Print dependency info.
#
# This targets prints information regarding installed and/or missing dependencies.

deps-info:
	$(QUIET) $(DEPS_INFO)

.PHONY: deps-info
