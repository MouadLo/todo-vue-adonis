'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, {response}) {
    return response.status(403).json({
        error: 'The resource did not exists access to resource',
    });
  }
}

module.exports = ResourceNotExistException
