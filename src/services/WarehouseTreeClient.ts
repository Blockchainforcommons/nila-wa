/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import { Algodv2, OnApplicationComplete, Transaction, TransactionWithSigner, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "deleteApplication()void": {
      "call_config": {
        "delete_application": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    },
    "verify(byte[],byte[33][3])void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "appendLeaf(byte[],byte[33][3])void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "updateLeaf(byte[],byte[],byte[33][3])void": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "root": {
          "type": "bytes",
          "key": "root"
        },
        "size": {
          "type": "uint64",
          "key": "size"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 1
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNTkuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmRmb3VuZGF0aW9uL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBjYWxsX0RlbGV0ZUFwcGxpY2F0aW9uCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCmNhbGNJbml0Um9vdDoKCXByb3RvIDIgMQoKCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjE5CgkvLyByZXN1bHQgPSBFTVBUWV9IQVNICgkvLyBjb250cmFjdHMvd2FyZWhvdXNlX3RyZWUuYWxnby50czo2CgkvLyBoZXgoJ2UzYjBjNDQyOThmYzFjMTQ5YWZiZjRjODk5NmZiOTI0MjdhZTQxZTQ2NDliOTM0Y2E0OTU5OTFiNzg1MmI4NTUnKQoJYnl0ZSAweGUzYjBjNDQyOThmYzFjMTQ5YWZiZjRjODk5NmZiOTI0MjdhZTQxZTQ2NDliOTM0Y2E0OTU5OTFiNzg1MmI4NTUKCWZyYW1lX2J1cnkgLTEgLy8gcmVzdWx0OiBieXRlWzMyXQoKCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjIxCgkvLyBpID0gMAoJaW50IDAKCWZyYW1lX2J1cnkgLTIgLy8gaTogdWludDY0Cgpmb3JfMDoKCWZyYW1lX2RpZyAtMiAvLyBpOiB1aW50NjQKCWludCAzCgk8CglieiBmb3JfMF9lbmQKCgkvLyBjb250cmFjdHMvd2FyZWhvdXNlX3RyZWUuYWxnby50czoyMgoJLy8gcmVzdWx0ID0gc2hhMjU2KHJlc3VsdCArIHJlc3VsdCkKCWZyYW1lX2RpZyAtMSAvLyByZXN1bHQ6IGJ5dGVbMzJdCglmcmFtZV9kaWcgLTEgLy8gcmVzdWx0OiBieXRlWzMyXQoJY29uY2F0CglzaGEyNTYKCWZyYW1lX2J1cnkgLTEgLy8gcmVzdWx0OiBieXRlWzMyXQoKCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjIxCgkvLyBpID0gaSArIDEKCWZyYW1lX2RpZyAtMiAvLyBpOiB1aW50NjQKCWludCAxCgkrCglmcmFtZV9idXJ5IC0yIC8vIGk6IHVpbnQ2NAoJYiBmb3JfMAoKZm9yXzBfZW5kOgoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6MjUKCS8vIHJldHVybiByZXN1bHQ7CglmcmFtZV9kaWcgLTEgLy8gcmVzdWx0OiBieXRlWzMyXQoJcmV0c3ViCgpoYXNoQ29uY2F0OgoJcHJvdG8gMiAxCgoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6MjkKCS8vIHJldHVybiBzaGEyNTYobGVmdCArIHJpZ2h0KTsKCWZyYW1lX2RpZyAtMSAvLyBsZWZ0OiBieXRlWzMyXQoJZnJhbWVfZGlnIC0yIC8vIHJpZ2h0OiBieXRlWzMyXQoJY29uY2F0CglzaGEyNTYKCXJldHN1YgoKaXNSaWdodFNpYmxpbmc6Cglwcm90byAxIDEKCgkvLyBjb250cmFjdHMvd2FyZWhvdXNlX3RyZWUuYWxnby50czozMwoJLy8gcmV0dXJuIGdldGJ5dGUoZWxlbSwgMCkgPT09IFJJR0hUX1NJQkxJTkdfUFJFRklYOwoJZnJhbWVfZGlnIC0xIC8vIGVsZW06IGJ5dGVbMzNdCglpbnQgMAoJZ2V0Ynl0ZQoJaW50IDE3MAoJPT0KCXJldHN1YgoKY2FsY1Jvb3Q6Cglwcm90byA0IDEKCgkvLyBjb250cmFjdHMvd2FyZWhvdXNlX3RyZWUuYWxnby50czozOQoJLy8gaSA9IDAKCWludCAwCglmcmFtZV9idXJ5IC0zIC8vIGk6IHVpbnQ2NAoKZm9yXzE6CglmcmFtZV9kaWcgLTMgLy8gaTogdWludDY0CglpbnQgMwoJPAoJYnogZm9yXzFfZW5kCglmcmFtZV9kaWcgLTMgLy8gaTogdWludDY0CglmcmFtZV9idXJ5IC00IC8vIGFjY2Vzc29yOiBhY2Nlc3Nvci8vMC8vZWxlbQoKCS8vIGlmMF9jb25kaXRpb24KCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjQyCgkvLyB0aGlzLmlzUmlnaHRTaWJsaW5nKGVsZW0pCglmcmFtZV9kaWcgLTIgLy8gcGF0aDogYnl0ZVszM11bM10KCXN0b3JlIDAgLy8gZnVsbCBhcnJheQoJaW50IDAgLy8gaW5pdGlhbCBvZmZzZXQKCWZyYW1lX2RpZyAtNCAvLyBzYXZlZCBhY2Nlc3NvcjogYWNjZXNzb3IvLzAvL2VsZW0KCWludCAzMwoJKiAvLyBhY2MgKiB0eXBlTGVuZ3RoCgkrCglsb2FkIDAgLy8gZnVsbCBhcnJheQoJc3dhcAoJaW50IDMzCglleHRyYWN0MwoJY2FsbHN1YiBpc1JpZ2h0U2libGluZwoJYnogaWYwX2Vsc2UKCgkvLyBpZjBfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6NDMKCS8vIHJlc3VsdCA9IHRoaXMuaGFzaENvbmNhdChyZXN1bHQsIGV4dHJhY3QzKGVsZW0sIDEsIDMyKSkKCWZyYW1lX2RpZyAtMiAvLyBwYXRoOiBieXRlWzMzXVszXQoJc3RvcmUgMCAvLyBmdWxsIGFycmF5CglpbnQgMCAvLyBpbml0aWFsIG9mZnNldAoJZnJhbWVfZGlnIC00IC8vIHNhdmVkIGFjY2Vzc29yOiBhY2Nlc3Nvci8vMC8vZWxlbQoJaW50IDMzCgkqIC8vIGFjYyAqIHR5cGVMZW5ndGgKCSsKCWxvYWQgMCAvLyBmdWxsIGFycmF5Cglzd2FwCglpbnQgMzMKCWV4dHJhY3QzCglleHRyYWN0IDEgMzIKCWZyYW1lX2RpZyAtMSAvLyBsZWFmOiBieXRlWzMyXQoJY2FsbHN1YiBoYXNoQ29uY2F0CglmcmFtZV9idXJ5IC0xIC8vIHJlc3VsdDogYnl0ZVszMl0KCWIgaWYwX2VuZAoKaWYwX2Vsc2U6CgkvLyBjb250cmFjdHMvd2FyZWhvdXNlX3RyZWUuYWxnby50czo0NQoJLy8gcmVzdWx0ID0gdGhpcy5oYXNoQ29uY2F0KGV4dHJhY3QzKGVsZW0sIDEsIDMyKSwgcmVzdWx0KQoJZnJhbWVfZGlnIC0xIC8vIGxlYWY6IGJ5dGVbMzJdCglmcmFtZV9kaWcgLTIgLy8gcGF0aDogYnl0ZVszM11bM10KCXN0b3JlIDAgLy8gZnVsbCBhcnJheQoJaW50IDAgLy8gaW5pdGlhbCBvZmZzZXQKCWZyYW1lX2RpZyAtNCAvLyBzYXZlZCBhY2Nlc3NvcjogYWNjZXNzb3IvLzAvL2VsZW0KCWludCAzMwoJKiAvLyBhY2MgKiB0eXBlTGVuZ3RoCgkrCglsb2FkIDAgLy8gZnVsbCBhcnJheQoJc3dhcAoJaW50IDMzCglleHRyYWN0MwoJZXh0cmFjdCAxIDMyCgljYWxsc3ViIGhhc2hDb25jYXQKCWZyYW1lX2J1cnkgLTEgLy8gcmVzdWx0OiBieXRlWzMyXQoKaWYwX2VuZDoKCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjM5CgkvLyBpID0gaSArIDEKCWZyYW1lX2RpZyAtMyAvLyBpOiB1aW50NjQKCWludCAxCgkrCglmcmFtZV9idXJ5IC0zIC8vIGk6IHVpbnQ2NAoJYiBmb3JfMQoKZm9yXzFfZW5kOgoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6NDkKCS8vIHJldHVybiByZXN1bHQ7CglmcmFtZV9kaWcgLTEgLy8gbGVhZjogYnl0ZVszMl0KCXJldHN1YgoKLy8gZGVsZXRlQXBwbGljYXRpb24oKXZvaWQKYWJpX3JvdXRlX2RlbGV0ZUFwcGxpY2F0aW9uOgoJLy8gZXhlY3V0ZSBkZWxldGVBcHBsaWNhdGlvbigpdm9pZAoJY2FsbHN1YiBkZWxldGVBcHBsaWNhdGlvbgoJaW50IDEKCXJldHVybgoKZGVsZXRlQXBwbGljYXRpb246Cglwcm90byAwIDAKCgkvLyBjb250cmFjdHMvd2FyZWhvdXNlX3RyZWUuYWxnby50czo1MwoJLy8gdmVyaWZ5VHhuKHRoaXMudHhuLCB7IHNlbmRlcjogdGhpcy5hcHAuY3JlYXRvciB9KQoJLy8gdmVyaWZ5IHNlbmRlcgoJdHhuIFNlbmRlcgoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgoJYXNzZXJ0Cgk9PQoJYXNzZXJ0CglyZXRzdWIKCi8vIGNyZWF0ZUFwcGxpY2F0aW9uKCl2b2lkCmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbjoKCS8vIGV4ZWN1dGUgY3JlYXRlQXBwbGljYXRpb24oKXZvaWQKCWNhbGxzdWIgY3JlYXRlQXBwbGljYXRpb24KCWludCAxCglyZXR1cm4KCmNyZWF0ZUFwcGxpY2F0aW9uOgoJcHJvdG8gMCAwCgoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6NTcKCS8vIHRoaXMucm9vdC52YWx1ZSA9IHRoaXMuY2FsY0luaXRSb290KCkKCWJ5dGUgMHg3MjZmNmY3NCAvLyAicm9vdCIKCWJ5dGUgMHg7IGR1cCAvLyBwdXNoIGVtcHR5IGJ5dGVzIHRvIGZpbGwgdGhlIHN0YWNrIGZyYW1lIGZvciB0aGlzIHN1YnJvdXRpbmUncyBsb2NhbCB2YXJpYWJsZXMKCWNhbGxzdWIgY2FsY0luaXRSb290CglhcHBfZ2xvYmFsX3B1dAoJcmV0c3ViCgovLyB2ZXJpZnkoYnl0ZVszM11bM10sYnl0ZXMpdm9pZAphYmlfcm91dGVfdmVyaWZ5OgoJLy8gcGF0aDogYnl0ZVszM11bM10KCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWR1cAoJbGVuCglpbnQgOTkKCT09Cglhc3NlcnQKCgkvLyBkYXRhOiBieXRlW10KCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWV4dHJhY3QgMiAwCgoJLy8gZXhlY3V0ZSB2ZXJpZnkoYnl0ZVszM11bM10sYnl0ZXMpdm9pZAoJY2FsbHN1YiB2ZXJpZnkKCWludCAxCglyZXR1cm4KCnZlcmlmeToKCXByb3RvIDIgMAoKCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjYxCgkvLyBhc3NlcnQodGhpcy5yb290LnZhbHVlID09PSB0aGlzLmNhbGNSb290KHNoYTI1NihkYXRhKSwgcGF0aCkpCglieXRlIDB4NzI2ZjZmNzQgLy8gInJvb3QiCglhcHBfZ2xvYmFsX2dldAoJYnl0ZSAweDsgZHVwIC8vIHB1c2ggZW1wdHkgYnl0ZXMgdG8gZmlsbCB0aGUgc3RhY2sgZnJhbWUgZm9yIHRoaXMgc3Vicm91dGluZSdzIGxvY2FsIHZhcmlhYmxlcwoJZnJhbWVfZGlnIC0yIC8vIHBhdGg6IGJ5dGVbMzNdWzNdCglmcmFtZV9kaWcgLTEgLy8gZGF0YTogYnl0ZXMKCXNoYTI1NgoJY2FsbHN1YiBjYWxjUm9vdAoJPT0KCWFzc2VydAoJcmV0c3ViCgovLyBhcHBlbmRMZWFmKGJ5dGVbMzNdWzNdLGJ5dGVzKXZvaWQKYWJpX3JvdXRlX2FwcGVuZExlYWY6CgkvLyBwYXRoOiBieXRlWzMzXVszXQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgoJZHVwCglsZW4KCWludCA5OQoJPT0KCWFzc2VydAoKCS8vIGRhdGE6IGJ5dGVbXQoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJZXh0cmFjdCAyIDAKCgkvLyBleGVjdXRlIGFwcGVuZExlYWYoYnl0ZVszM11bM10sYnl0ZXMpdm9pZAoJY2FsbHN1YiBhcHBlbmRMZWFmCglpbnQgMQoJcmV0dXJuCgphcHBlbmRMZWFmOgoJcHJvdG8gMiAwCgoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6NjUKCS8vIGFzc2VydChkYXRhICE9PSAnJykKCWZyYW1lX2RpZyAtMSAvLyBkYXRhOiBieXRlcwoJYnl0ZSAweCAvLyAiIgoJIT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjY2CgkvLyBhc3NlcnQodGhpcy5yb290LnZhbHVlID09PSB0aGlzLmNhbGNSb290KEVNUFRZX0hBU0gsIHBhdGgpKQoJYnl0ZSAweDcyNmY2Zjc0IC8vICJyb290IgoJYXBwX2dsb2JhbF9nZXQKCWJ5dGUgMHg7IGR1cCAvLyBwdXNoIGVtcHR5IGJ5dGVzIHRvIGZpbGwgdGhlIHN0YWNrIGZyYW1lIGZvciB0aGlzIHN1YnJvdXRpbmUncyBsb2NhbCB2YXJpYWJsZXMKCWZyYW1lX2RpZyAtMiAvLyBwYXRoOiBieXRlWzMzXVszXQoKCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjYKCS8vIGhleCgnZTNiMGM0NDI5OGZjMWMxNDlhZmJmNGM4OTk2ZmI5MjQyN2FlNDFlNDY0OWI5MzRjYTQ5NTk5MWI3ODUyYjg1NScpCglieXRlIDB4ZTNiMGM0NDI5OGZjMWMxNDlhZmJmNGM4OTk2ZmI5MjQyN2FlNDFlNDY0OWI5MzRjYTQ5NTk5MWI3ODUyYjg1NQoJY2FsbHN1YiBjYWxjUm9vdAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy93YXJlaG91c2VfdHJlZS5hbGdvLnRzOjY4CgkvLyB0aGlzLnJvb3QudmFsdWUgPSB0aGlzLmNhbGNSb290KHNoYTI1NihkYXRhKSwgcGF0aCkKCWJ5dGUgMHg3MjZmNmY3NCAvLyAicm9vdCIKCWJ5dGUgMHg7IGR1cCAvLyBwdXNoIGVtcHR5IGJ5dGVzIHRvIGZpbGwgdGhlIHN0YWNrIGZyYW1lIGZvciB0aGlzIHN1YnJvdXRpbmUncyBsb2NhbCB2YXJpYWJsZXMKCWZyYW1lX2RpZyAtMiAvLyBwYXRoOiBieXRlWzMzXVszXQoJZnJhbWVfZGlnIC0xIC8vIGRhdGE6IGJ5dGVzCglzaGEyNTYKCWNhbGxzdWIgY2FsY1Jvb3QKCWFwcF9nbG9iYWxfcHV0CgoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6NzAKCS8vIHRoaXMuc2l6ZS52YWx1ZSA9IHRoaXMuc2l6ZS52YWx1ZSArIDEKCWJ5dGUgMHg3MzY5N2E2NSAvLyAic2l6ZSIKCWJ5dGUgMHg3MzY5N2E2NSAvLyAic2l6ZSIKCWFwcF9nbG9iYWxfZ2V0CglpbnQgMQoJKwoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gdXBkYXRlTGVhZihieXRlWzMzXVszXSxieXRlcyxieXRlcyl2b2lkCmFiaV9yb3V0ZV91cGRhdGVMZWFmOgoJLy8gcGF0aDogYnl0ZVszM11bM10KCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWR1cAoJbGVuCglpbnQgOTkKCT09Cglhc3NlcnQKCgkvLyBuZXdEYXRhOiBieXRlW10KCXR4bmEgQXBwbGljYXRpb25BcmdzIDIKCWV4dHJhY3QgMiAwCgoJLy8gb2xkRGF0YTogYnl0ZVtdCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglleHRyYWN0IDIgMAoKCS8vIGV4ZWN1dGUgdXBkYXRlTGVhZihieXRlWzMzXVszXSxieXRlcyxieXRlcyl2b2lkCgljYWxsc3ViIHVwZGF0ZUxlYWYKCWludCAxCglyZXR1cm4KCnVwZGF0ZUxlYWY6Cglwcm90byAzIDAKCgkvLyBjb250cmFjdHMvd2FyZWhvdXNlX3RyZWUuYWxnby50czo3NAoJLy8gYXNzZXJ0KG5ld0RhdGEgIT09ICcnKQoJZnJhbWVfZGlnIC0yIC8vIG5ld0RhdGE6IGJ5dGVzCglieXRlIDB4IC8vICIiCgkhPQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6NzUKCS8vIGFzc2VydCh0aGlzLnJvb3QudmFsdWUgPT09IHRoaXMuY2FsY1Jvb3Qoc2hhMjU2KG9sZERhdGEpLCBwYXRoKSkKCWJ5dGUgMHg3MjZmNmY3NCAvLyAicm9vdCIKCWFwcF9nbG9iYWxfZ2V0CglieXRlIDB4OyBkdXAgLy8gcHVzaCBlbXB0eSBieXRlcyB0byBmaWxsIHRoZSBzdGFjayBmcmFtZSBmb3IgdGhpcyBzdWJyb3V0aW5lJ3MgbG9jYWwgdmFyaWFibGVzCglmcmFtZV9kaWcgLTMgLy8gcGF0aDogYnl0ZVszM11bM10KCWZyYW1lX2RpZyAtMSAvLyBvbGREYXRhOiBieXRlcwoJc2hhMjU2CgljYWxsc3ViIGNhbGNSb290Cgk9PQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL3dhcmVob3VzZV90cmVlLmFsZ28udHM6NzcKCS8vIHRoaXMucm9vdC52YWx1ZSA9IHRoaXMuY2FsY1Jvb3Qoc2hhMjU2KG5ld0RhdGEpLCBwYXRoKQoJYnl0ZSAweDcyNmY2Zjc0IC8vICJyb290IgoJYnl0ZSAweDsgZHVwIC8vIHB1c2ggZW1wdHkgYnl0ZXMgdG8gZmlsbCB0aGUgc3RhY2sgZnJhbWUgZm9yIHRoaXMgc3Vicm91dGluZSdzIGxvY2FsIHZhcmlhYmxlcwoJZnJhbWVfZGlnIC0zIC8vIHBhdGg6IGJ5dGVbMzNdWzNdCglmcmFtZV9kaWcgLTIgLy8gbmV3RGF0YTogYnl0ZXMKCXNoYTI1NgoJY2FsbHN1YiBjYWxjUm9vdAoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgllcnIKCmNhbGxfTm9PcDoKCW1ldGhvZCAidmVyaWZ5KGJ5dGVbXSxieXRlWzMzXVszXSl2b2lkIgoJbWV0aG9kICJhcHBlbmRMZWFmKGJ5dGVbXSxieXRlWzMzXVszXSl2b2lkIgoJbWV0aG9kICJ1cGRhdGVMZWFmKGJ5dGVbXSxieXRlW10sYnl0ZVszM11bM10pdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoIGFiaV9yb3V0ZV92ZXJpZnkgYWJpX3JvdXRlX2FwcGVuZExlYWYgYWJpX3JvdXRlX3VwZGF0ZUxlYWYKCWVycgoKY2FsbF9EZWxldGVBcHBsaWNhdGlvbjoKCW1ldGhvZCAiZGVsZXRlQXBwbGljYXRpb24oKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCBhYmlfcm91dGVfZGVsZXRlQXBwbGljYXRpb24KCWVycg==",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDk="
  },
  "contract": {
    "name": "WarehouseTree",
    "desc": "",
    "methods": [
      {
        "name": "deleteApplication",
        "args": [],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "createApplication",
        "args": [],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "verify",
        "args": [
          {
            "name": "data",
            "type": "byte[]",
            "desc": ""
          },
          {
            "name": "path",
            "type": "byte[33][3]",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "appendLeaf",
        "args": [
          {
            "name": "data",
            "type": "byte[]",
            "desc": ""
          },
          {
            "name": "path",
            "type": "byte[33][3]",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "updateLeaf",
        "args": [
          {
            "name": "oldData",
            "type": "byte[]",
            "desc": ""
          },
          {
            "name": "newData",
            "type": "byte[]",
            "desc": ""
          },
          {
            "name": "path",
            "type": "byte[33][3]",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the WarehouseTree smart contract.
 */
export type WarehouseTree = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'deleteApplication()void' | 'deleteApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
    & Record<'verify(byte[],byte[33][3])void' | 'verify', {
      argsObj: {
        data: Uint8Array
        path: [Uint8Array, Uint8Array, Uint8Array]
      }
      argsTuple: [data: Uint8Array, path: [Uint8Array, Uint8Array, Uint8Array]]
      returns: void
    }>
    & Record<'appendLeaf(byte[],byte[33][3])void' | 'appendLeaf', {
      argsObj: {
        data: Uint8Array
        path: [Uint8Array, Uint8Array, Uint8Array]
      }
      argsTuple: [data: Uint8Array, path: [Uint8Array, Uint8Array, Uint8Array]]
      returns: void
    }>
    & Record<'updateLeaf(byte[],byte[],byte[33][3])void' | 'updateLeaf', {
      argsObj: {
        oldData: Uint8Array
        newData: Uint8Array
        path: [Uint8Array, Uint8Array, Uint8Array]
      }
      argsTuple: [oldData: Uint8Array, newData: Uint8Array, path: [Uint8Array, Uint8Array, Uint8Array]]
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'root'?: BinaryState
      'size'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type WarehouseTreeSig = keyof WarehouseTree['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends WarehouseTreeSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the WarehouseTree smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends WarehouseTreeSig> = WarehouseTree['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the WarehouseTree smart contract to the method's return type
 */
export type MethodReturn<TSignature extends WarehouseTreeSig> = WarehouseTree['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type WarehouseTreeCreateCalls = (typeof WarehouseTreeCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type WarehouseTreeCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * A factory for available 'delete' calls
 */
export type WarehouseTreeDeleteCalls = (typeof WarehouseTreeCallFactory)['delete']
/**
 * Defines supported delete methods for this smart contract
 */
export type WarehouseTreeDeleteCallParams =
  | TypedCallParams<'deleteApplication()void'>
/**
 * Defines arguments required for the deploy method.
 */
export type WarehouseTreeDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: WarehouseTreeCreateCalls) => WarehouseTreeCreateCallParams
  /**
   * A delegate which takes a delete call factory and returns the delete call params for this smart contract
   */
  deleteCall?: (callFactory: WarehouseTreeDeleteCalls) => WarehouseTreeDeleteCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class WarehouseTreeCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the WarehouseTree smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Gets available delete call factories
   */
  static get delete() {
    return {
      /**
       * Constructs a delete call for the WarehouseTree smart contract using the deleteApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      deleteApplication(args: MethodArgs<'deleteApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
        return {
          method: 'deleteApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the verify(byte[],byte[33][3])void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static verify(args: MethodArgs<'verify(byte[],byte[33][3])void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'verify(byte[],byte[33][3])void' as const,
      methodArgs: Array.isArray(args) ? args : [args.data, args.path],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the appendLeaf(byte[],byte[33][3])void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static appendLeaf(args: MethodArgs<'appendLeaf(byte[],byte[33][3])void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'appendLeaf(byte[],byte[33][3])void' as const,
      methodArgs: Array.isArray(args) ? args : [args.data, args.path],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the updateLeaf(byte[],byte[],byte[33][3])void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static updateLeaf(args: MethodArgs<'updateLeaf(byte[],byte[],byte[33][3])void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'updateLeaf(byte[],byte[],byte[33][3])void' as const,
      methodArgs: Array.isArray(args) ? args : [args.oldData, args.newData, args.path],
      ...params,
    }
  }
}

/**
 * A client to make calls to the WarehouseTree smart contract
 */
export class WarehouseTreeClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `WarehouseTreeClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof WarehouseTree['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the WarehouseTree smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: WarehouseTreeDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(WarehouseTreeCallFactory.create)
    const deleteArgs = params.deleteCall?.(WarehouseTreeCallFactory.delete)
    return this.appClient.deploy({
      ...params,
      deleteArgs,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the WarehouseTree smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(WarehouseTreeCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Gets available delete methods
   */
  public get delete() {
    const $this = this
    return {
      /**
       * Deletes an existing instance of the WarehouseTree smart contract using the deleteApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The delete result
       */
      async deleteApplication(args: MethodArgs<'deleteApplication()void'>, params: AppClientCallCoreParams = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'deleteApplication()void'>>> {
        return $this.mapReturnValue(await $this.appClient.delete(WarehouseTreeCallFactory.delete.deleteApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the WarehouseTree smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the verify(byte[],byte[33][3])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public verify(args: MethodArgs<'verify(byte[],byte[33][3])void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(WarehouseTreeCallFactory.verify(args, params))
  }

  /**
   * Calls the appendLeaf(byte[],byte[33][3])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public appendLeaf(args: MethodArgs<'appendLeaf(byte[],byte[33][3])void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(WarehouseTreeCallFactory.appendLeaf(args, params))
  }

  /**
   * Calls the updateLeaf(byte[],byte[],byte[33][3])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public updateLeaf(args: MethodArgs<'updateLeaf(byte[],byte[],byte[33][3])void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(WarehouseTreeCallFactory.updateLeaf(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<WarehouseTree['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get root() {
        return WarehouseTreeClient.getBinaryState(state, 'root')
      },
      get size() {
        return WarehouseTreeClient.getIntegerState(state, 'size')
      },
    }
  }

  public compose(): WarehouseTreeComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      verify(args: MethodArgs<'verify(byte[],byte[33][3])void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.verify(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      appendLeaf(args: MethodArgs<'appendLeaf(byte[],byte[33][3])void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.appendLeaf(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      updateLeaf(args: MethodArgs<'updateLeaf(byte[],byte[],byte[33][3])void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.updateLeaf(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      get delete() {
        const $this = this
        return {
          deleteApplication(args: MethodArgs<'deleteApplication()void'>, params?: AppClientCallCoreParams) {
            promiseChain = promiseChain.then(() => client.delete.deleteApplication(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
            resultMappers.push(undefined)
            return $this
          },
        }
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as WarehouseTreeComposer
  }
}
export type WarehouseTreeComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the verify(byte[],byte[33][3])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  verify(args: MethodArgs<'verify(byte[],byte[33][3])void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): WarehouseTreeComposer<[...TReturns, MethodReturn<'verify(byte[],byte[33][3])void'>]>

  /**
   * Calls the appendLeaf(byte[],byte[33][3])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  appendLeaf(args: MethodArgs<'appendLeaf(byte[],byte[33][3])void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): WarehouseTreeComposer<[...TReturns, MethodReturn<'appendLeaf(byte[],byte[33][3])void'>]>

  /**
   * Calls the updateLeaf(byte[],byte[],byte[33][3])void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  updateLeaf(args: MethodArgs<'updateLeaf(byte[],byte[],byte[33][3])void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): WarehouseTreeComposer<[...TReturns, MethodReturn<'updateLeaf(byte[],byte[],byte[33][3])void'>]>

  /**
   * Gets available delete methods
   */
  readonly delete: {
    /**
     * Deletes an existing instance of the WarehouseTree smart contract using the deleteApplication()void ABI method.
     *
     * @param args The arguments for the smart contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    deleteApplication(args: MethodArgs<'deleteApplication()void'>, params?: AppClientCallCoreParams): WarehouseTreeComposer<[...TReturns, MethodReturn<'deleteApplication()void'>]>
  }

  /**
   * Makes a clear_state call to an existing instance of the WarehouseTree smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): WarehouseTreeComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): WarehouseTreeComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<WarehouseTreeComposerResults<TReturns>>
}
export type WarehouseTreeComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
