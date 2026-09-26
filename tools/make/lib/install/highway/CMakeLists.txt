# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

cmake_minimum_required(VERSION 3.10)
project(stdlib_highway LANGUAGES C CXX)

if(NOT EXISTS "${HIGHWAY_SOURCE}/hwy/highway.h")
    message(FATAL_ERROR "HIGHWAY_SOURCE must refer to a Highway source distribution")
endif()
if(NOT CMAKE_BUILD_TYPE MATCHES "^(Debug|Release)$")
    message(FATAL_ERROR "CMAKE_BUILD_TYPE must be Debug or Release")
endif()

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)
set(CMAKE_CXX_VISIBILITY_PRESET hidden)
set(CMAKE_VISIBILITY_INLINES_HIDDEN ON)
set(BUILD_SHARED_LIBS OFF CACHE BOOL "" FORCE)
set(HWY_ENABLE_CONTRIB OFF CACHE BOOL "" FORCE)
set(HWY_ENABLE_EXAMPLES OFF CACHE BOOL "" FORCE)
set(HWY_ENABLE_TESTS OFF CACHE BOOL "" FORCE)
set(HWY_ENABLE_INSTALL OFF CACHE BOOL "" FORCE)

add_subdirectory("${HIGHWAY_SOURCE}" highway)
add_executable(stdlib_highway_test "${HIGHWAY_TEST_SOURCE}")
target_link_libraries(stdlib_highway_test PRIVATE hwy)
set_target_properties(stdlib_highway_test PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY "${HIGHWAY_TEST_OUT}")
enable_testing()
add_test(NAME highway_runtime COMMAND stdlib_highway_test)

get_target_property(defines hwy INTERFACE_COMPILE_DEFINITIONS)
string(REPLACE ";" "\", \"" defines "${defines}")
set(libraries "$<TARGET_FILE:hwy>")
get_target_property(dependencies hwy LINK_LIBRARIES)
if(dependencies)
    foreach(dependency IN LISTS dependencies)
        if(TARGET "${dependency}")
            list(APPEND libraries "$<TARGET_FILE:${dependency}>")
        elseif(IS_ABSOLUTE "${dependency}" OR dependency MATCHES "^-")
            list(APPEND libraries "${dependency}")
        elseif(WIN32)
            list(APPEND libraries "${dependency}.lib")
        else()
            list(APPEND libraries "-l${dependency}")
        endif()
    endforeach()
endif()
string(REPLACE ";" "\", \"" libraries "${libraries}")
file(GENERATE OUTPUT "${CMAKE_BINARY_DIR}/highway.json" CONTENT
"{
  \"include\": [\"${HIGHWAY_SOURCE}\"],
  \"defines\": [\"${defines}\"],
  \"libraries\": [\"${libraries}\"]
}
" CONDITION "$<CONFIG:${CMAKE_BUILD_TYPE}>")
