
# VARIABLES #

# Define the command to copy files:
CP ?= cp

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the destination directory for git hooks:
GIT_HOOKS_DIR ?= $(ROOT_DIR)/.git/hooks

# Define the directory from which to copy git hooks:
TOOLS_GIT_HOOKS_DIR ?= $(TOOLS_DIR)/git/hooks

# Define the path of the `git pre-push` hook:
GIT_HOOK_PRE_PUSH ?= pre-push


# TARGETS #

# Perform initialization tasks.
#
# This target performs initialization tasks, such as installing git hooks, etc.

init:
	@$(CP) $(TOOLS_GIT_HOOKS_DIR)/$(GIT_HOOK_PRE_PUSH) $(GIT_HOOKS_DIR)
	@$(MAKE_EXECUTABLE) $(GIT_HOOKS_DIR)/$(GIT_HOOK_PRE_PUSH)

.PHONY: init

