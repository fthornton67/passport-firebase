/**
 * `FirebaseTokenError` error.
 *
 * FirebaseTokenError represents an error received from a Firebase's token
 * endpoint.  Note that these responses don't conform to the OAuth 2.0
 * specification.
 *
 * References:
 *   - https://developers.Firebase.com/docs/reference/api/errors/
 *
 * @constructor
 * @param {string} [message]
 * @param {string} [type]
 * @param {number} [code]
 * @param {number} [subcode]
 * @param {string} [traceID]
 * @access public
 */
function FirebaseTokenError(message, type, code, subcode, traceID) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'FirebaseTokenError';
  this.message = message;
  this.type = type;
  this.code = code;
  this.subcode = subcode;
  this.traceID = traceID;
  this.status = 500;
}

// Inherit from `Error`.
FirebaseTokenError.prototype.__proto__ = Error.prototype;


// Expose constructor.
module.exports = FirebaseTokenError;
