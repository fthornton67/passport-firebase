/**
 * `FirebaseAuthorizationError` error.
 *
 * FirebaseAuthorizationError represents an error in response to an
 * authorization request on Firebase.  Note that these responses don't conform
 * to the OAuth 2.0 specification.
 *
 * References:
 *   - https://developers.Firebase.com/docs/reference/api/errors/
 *
 * @constructor
 * @param {string} [message]
 * @param {number} [code]
 * @access public
 */
function FirebaseAuthorizationError(message, code) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'FirebaseAuthorizationError';
  this.message = message;
  this.code = code;
  this.status = 500;
}

// Inherit from `Error`.
FirebaseAuthorizationError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = FirebaseAuthorizationError;
