
# DEPENDENCIES #

# Order is important:
include $(TOOLS_MAKE_DIR)/common.mk
include $(TOOLS_MAKE_LIB_DIR)/help/Makefile
include $(TOOLS_MAKE_LIB_DIR)/init/Makefile

# Please keep sorted in alphabetical order:
include $(TOOLS_MAKE_LIB_DIR)/addons/Makefile
include $(TOOLS_MAKE_LIB_DIR)/benchmark/Makefile
include $(TOOLS_MAKE_LIB_DIR)/bib/Makefile
include $(TOOLS_MAKE_LIB_DIR)/complexity/Makefile
include $(TOOLS_MAKE_LIB_DIR)/contributors/Makefile
include $(TOOLS_MAKE_LIB_DIR)/coverage-service/Makefile
include $(TOOLS_MAKE_LIB_DIR)/debug/Makefile
include $(TOOLS_MAKE_LIB_DIR)/deps/Makefile
include $(TOOLS_MAKE_LIB_DIR)/docs/Makefile
include $(TOOLS_MAKE_LIB_DIR)/examples/Makefile
include $(TOOLS_MAKE_LIB_DIR)/install/Makefile
include $(TOOLS_MAKE_LIB_DIR)/licenses/Makefile
include $(TOOLS_MAKE_LIB_DIR)/links/Makefile
include $(TOOLS_MAKE_LIB_DIR)/lint/Makefile
include $(TOOLS_MAKE_LIB_DIR)/ls/Makefile
include $(TOOLS_MAKE_LIB_DIR)/markdown-equations/Makefile
include $(TOOLS_MAKE_LIB_DIR)/node/Makefile
include $(TOOLS_MAKE_LIB_DIR)/notes/Makefile
include $(TOOLS_MAKE_LIB_DIR)/repl/Makefile
include $(TOOLS_MAKE_LIB_DIR)/stats/Makefile
include $(TOOLS_MAKE_LIB_DIR)/test/Makefile
include $(TOOLS_MAKE_LIB_DIR)/test-browsers/Makefile
include $(TOOLS_MAKE_LIB_DIR)/test-ci/Makefile
include $(TOOLS_MAKE_LIB_DIR)/test-cov/Makefile
include $(TOOLS_MAKE_LIB_DIR)/tools-test/Makefile
include $(TOOLS_MAKE_LIB_DIR)/tools-test-cov/Makefile
include $(TOOLS_MAKE_LIB_DIR)/workshops/Makefile


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
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(BUILD_DIR)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(REPORTS_DIR)

.PHONY: clean
