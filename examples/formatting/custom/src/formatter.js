import MessageFormat from 'messageformat'

export default class CustomFormatter {
  constructor (options = {}) {
    this._locale = options.locale || 'en-US'
  }

  interpolate (message, values) {
    return [message]
  }
}
