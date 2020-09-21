// @ts-check

/// <reference path="moment.js" />

/**
 * A result object returned from automaton testing
 * @public
 */
class Result {

  /**
   * The name of the automaton
   * @private @field @type {string}
   */
  name;

  /**
   * All of the moments in the test
   * @private @field @type {Array<Moment>}
   */
  moments;

  /**
   * Constructor for new Result instance
   * @public @constructor
   * @param {string} name
   * @param {Array<Moment>} moments
   */
  constructor (name, moments) {
    this.name = name;
    this.moments = moments;
  }

  /**
   * Get the name of the tested automaton
   * @public @method
   * @returns {string}
   */
  getName () {
    return this.name;
  }

  /**
   * List out all the moments of the test
   * @public @method
   * @returns {IterableIterator<Moment>}
   */
  listMoments () {
    return this.moments.values();
  }

  /**
   * Show that if this language is acceptable in the automaton
   * @public @method
   * @returns {boolean}
   */
  acceptable () {
    let len = this.moments.length;
    if (len > 0) {
      return this.moments[len - 1].acceptable();
    }
    return false;
  }

}