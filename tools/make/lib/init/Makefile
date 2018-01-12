
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/init/eslint.mk
include $(TOOLS_MAKE_LIB_DIR)/init/git_hooks.mk


# RULES #

# Perform initialization tasks.
#
# This target performs initialization tasks, such as installing git hooks, installing custom ESLint plugins, etc.

init: init-git-hooks init-stdlib-custom-eslint-plugins

.PHONY: init
