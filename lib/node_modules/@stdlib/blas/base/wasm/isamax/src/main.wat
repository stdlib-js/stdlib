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
  (type (;1;) (func (param i32 i32 i32) (result i32)))
  (type (;2;) (func (param i32 i32 i32 i32) (result i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result i32)
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
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result i32)
    (local i32 i32 i32 f32 f32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      if  ;; label = @2
        i32.const -1
        local.set 4
        br 1 (;@1;)
      end
      local.get 0
      i32.const 1
      i32.eq
      if  ;; label = @2
        i32.const 0
        return
      end
      local.get 1
      local.get 3
      i32.const 2
      i32.shl
      i32.add
      f32.load
      f32.abs
      local.set 7
      i32.const 1
      local.set 5
      loop  ;; label = @2
        local.get 0
        local.get 5
        i32.eq
        br_if 1 (;@1;)
        local.get 1
        local.get 2
        local.get 3
        i32.add
        local.tee 3
        i32.const 2
        i32.shl
        i32.add
        f32.load
        f32.abs
        local.tee 8
        local.get 7
        local.get 7
        local.get 8
        f32.lt
        local.tee 6
        select
        local.set 7
        local.get 5
        local.get 4
        local.get 6
        select
        local.set 4
        local.get 5
        i32.const 1
        i32.add
        local.set 5
        br 0 (;@2;)
      end
      unreachable
    end
    local.get 4)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_isamax" (func 1))
  (export "c_isamax_ndarray" (func 2)))
