/**
 * Profile.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'string', columnName: '_id' },
      userid:{
          model: 'user'
      },
      firstname:{
          type: 'string'
      },
      lastname:{
          type: 'string'
      },
      gender:{
          type: 'string'
      },
      address:{
          type: 'string'
      }
  }

};

