
# VARIABLES #

# Define the command for recursively creating directories (WARNING: portability issues on some systems!):
MKDIR_RECURSIVE ?= mkdir -p

# Define the path for saving dependency downloads:
DEPS_TMP_DIR ?= $(DEPS_DIR)/tmp

# Define the path for building dependencies:
DEPS_BUILD_DIR ?= $(DEPS_DIR)/build


# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/deps/boost.mk


# TARGETS #

# Create directory for temporary files.
#
# This target creates a directory for storing vendor dependency downloads.

$(DEPS_TMP_DIR):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_TMP_DIR)


# Create directory for dependency builds.
#
# This target creates a directory for storing vendor dependencies.

$(DEPS_BUILD_DIR):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_BUILD_DIR)


# Clean vendor dependencies.
#
# This target removes vendor dependencies.

clean-deps: clean-deps-downloads clean-deps-build

.PHONY: clean-deps


# Clean builds.
#
# This target removes vendor dependency builds.

clean-deps-build:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_BUILD_DIR)

.PHONY: clean-deps-build


# Clean downloads.
#
# This target removes vendor dependency downloads.

clean-deps-downloads:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_TMP_DIR)

.PHONY: clean-deps-downloads
