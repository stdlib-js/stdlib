;; @license Apache-2.0
;;
;; Copyright (c) 2025 The Stdlib Authors.
;;
;; Licensed under the Apache License, Version 2.0 (the "License");
;; you may not use this file except in compliance with the License.
;; You may obtain a copy of the License at
;;
;;    http://www.apache.org/licenses/LICENSE-2.0
;;
;; Unless required by applicable law or agreed to in writing, software
;; distributed under the License is distributed on an "AS IS" BASIS,
;; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
;; See the License for the specific language governing permissions and
;; limitations under the License.

(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 i32 i32) (result f64)))
  (type (;2;) (func (param i32 i32 i32 i32) (result f64)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result f64)
    local.get 0
    local.get 1
    local.get 2
    i32.const 1
    local.get 0
    i32.sub
    local.get 2
    i32.mul
    i32.const 0
    local.get 2
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result f64)
    (local f64 i32)
    local.get 0
    i32.const 0
    i32.le_s
    if  ;; label = @1
      f64.const nan (;=nan;)
      return
    end
    block  ;; label = @1
      local.get 2
      i32.eqz
      local.get 0
      i32.const 1
      i32.eq
      i32.or
      i32.eqz
      if  ;; label = @2
        loop  ;; label = @3
          local.get 0
          local.get 5
          i32.eq
          br_if 2 (;@1;)
          local.get 4
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          f64.load
          local.get 4
          f64.sub
          local.get 5
          i32.const 1
          i32.add
          local.tee 5
          f64.convert_i32_u
          f64.div
          f64.add
          local.set 4
          local.get 2
          local.get 3
          i32.add
          local.set 3
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 1
      local.get 3
      i32.const 3
      i32.shl
      i32.add
      f64.load
      local.set 4
    end
    local.get 4)
  (export "__wasm_call_ctors" (func 0))
  (export "stdlib_strided_dmeanwd" (func 1))
  (export "stdlib_strided_dmeanwd_ndarray" (func 2)))
