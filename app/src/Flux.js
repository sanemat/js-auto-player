import Flummox from 'flummox';
import Actions from './actions/DefaultActions.js';

export default class Flux extends Flummox {

  constructor() {
    super();

    this.createActions('app', Actions);
  }
}
