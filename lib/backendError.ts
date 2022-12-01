export default class BackendError extends Error {
  backendErrors: BackendErrors;
  constructor(message: BackendErrors) {
    super(JSON.stringify(message));
    this.name = 'BackendError';
    this.backendErrors = message;
  }

  toString() {
    let friendlyMessage = '';

    if (typeof this.backendErrors === 'string') {
      friendlyMessage = this.backendErrors;
    } else {
      for (let field in this.backendErrors) {
        friendlyMessage += `${field}: ${this.backendErrors[field].errors
          .map(e => e.errorMessage)
          .join(', ')}\r`;
      }
    }

    return friendlyMessage;
  }
}
