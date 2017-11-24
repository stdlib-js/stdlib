/**
* TODO.
*/
#include <nan.h>
#include "TODO.h"

/**
* Add-on namespace.
*/
namespace addon_TODO {

	using Nan::FunctionCallbackInfo;
	using Nan::ThrowTypeError;
	using Nan::ThrowError;
	using v8::Number;
	using v8::Local;
	using v8::Value;

	/**
	* TODO.
	*
	* When called from JavaScript, the function expects TODO arguments:
	*
	* * __x__: a number.
	* * __y__: a number
	*
	* @param info   arguments
	*/
	void node_TODO( const FunctionCallbackInfo<Value>& info ) {
		if ( info.Length() != 2 ) {
			ThrowError( "invalid invocation. Must provide 2 arguments." );
			return;
		}
		if ( !info[ 0 ]->IsNumber() ) {
			ThrowTypeError( "invalid input argument. First argument must be a number." );
			return;
		}
		if ( !info[ 1 ]->IsNumber() ) {
			ThrowTypeError( "invalid input argument. Second argument must be a number." );
			return;
		}
		const double x = info[ 0 ]->NumberValue();
		const double y = info[ 1 ]->NumberValue();

		Local<Number> out = Nan::New( stdlib_TODO( x, y ) );
		info.GetReturnValue().Set( out );
	}

	NAN_MODULE_INIT( Init ) {
		Nan::Export( target, "TODO", node_TODO );
	}

	NODE_MODULE( addon, Init )
} // end namespace addon_TODO
