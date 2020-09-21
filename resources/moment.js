// @ts-check

/// <reference path="state.js" />
/// <reference path="character.js" />

class Moment {

  /**
   * The states where the automaton in at this moment
   * @private @field @type {Array<State>}
   */
  states = [];

  /**
   * The symbol that make this transition
   * @private @field @type {Character}
   */
  character;

  /**
   * Constructor for new Moment instance
   * @public @constructor
   * @param {Character} character
   * @param {Array<State>} states
   */
  constructor (character, states) {
    this.character = character;
    this.states = states;
  }

  /**
   * Get the character in this moment
   * @public @method
   * @returns {Character}
   */
  getCharacter () {
    return this.character;
  }

  /**
   * Check whether this moment has states or not
   * @public @method
   * @returns {boolean}
   */
  hasStates () {
    return (this.states.length > 0);
  }

  /**
   * List out all the states in this moment
   * @public @method
   * @returns {IterableIterator<State>}
   */
  listStates () {
    return this.states.values();
  }

  /**
   * Check if the language is acceptable until this moment
   * @public @method
   * @returns {boolean}
   */
  acceptable () {
    for (const state of this.states) {
      if (state.isFinal()) return true;
    }
    return false;
  }

}