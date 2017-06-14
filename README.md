# jest-crash

## Steps to reproduce

* Download or build Node.js canary: https://nodejs.org/download/v8-canary/
* Clone this repo: `git clone https://github.com/targos/jest-crash.git`
* Execute `node run.js`

### Backtrace with debug build

```
#0  0x0000000002b1df2f in v8::base::OS::Abort() () at ../deps/v8/src/base/platform/platform-posix.cc:261
#1  0x0000000002b18668 in V8_Fatal(char const*, int, char const*, ...) (file=0x2e057ed "../deps/v8/src/ic/ic.cc", line=873, format=0x2e0356b "Check failed: %s.") at ../deps/v8/src/base/logging.cc:126
#2  0x00000000023751b4 in v8::internal::(anonymous namespace)::HolderCell(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Smi>) (isolate=0x58cb770, holder=..., name=..., smi_handler=...) at ../deps/v8/src/ic/ic.cc:873
#3  0x00000000023754dc in v8::internal::LoadIC::LoadFromPrototype(v8::internal::Handle<v8::internal::Map>, v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Smi>) (this=0x7ffc5af96d50, receiver_map=..., holder=..., name=..., smi_handler=...) at ../deps/v8/src/ic/ic.cc:907
#4  0x0000000002376cb7 in v8::internal::LoadIC::GetMapIndependentHandler(v8::internal::LookupIterator*) (this=0x7ffc5af96d50, lookup=0x7ffc5af96bb0) at ../deps/v8/src/ic/ic.cc:1124
#5  0x0000000002376295 in v8::internal::IC::ComputeHandler(v8::internal::LookupIterator*) (this=0x7ffc5af96d50, lookup=0x7ffc5af96bb0) at ../deps/v8/src/ic/ic.cc:1033
#6  0x0000000002375fd6 in v8::internal::LoadIC::UpdateCaches(v8::internal::LookupIterator*) (this=0x7ffc5af96d50, lookup=0x7ffc5af96bb0) at ../deps/v8/src/ic/ic.cc:1000
#7  0x0000000002374125 in v8::internal::LoadIC::Load(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>) (this=0x7ffc5af96d50, object=..., name=...) at ../deps/v8/src/ic/ic.cc:583
#8  0x000000000237916e in v8::internal::KeyedLoadIC::Load(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>) (this=0x7ffc5af96d50, object=..., key=...) at ../deps/v8/src/ic/ic.cc:1468
#9  0x000000000237f932 in v8::internal::__RT_impl_Runtime_KeyedLoadIC_Miss(v8::internal::Arguments, v8::internal::Isolate*) (args=..., isolate=0x58cb770) at ../deps/v8/src/ic/ic.cc:2455
#10 0x000000000237f765 in v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*) (args_length=4, args_object=0x7ffc5af96f58, isolate=0x58cb770) at ../deps/v8/src/ic/ic.cc:2443
```
