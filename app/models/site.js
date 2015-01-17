exports.definition = {
  config: {
    'columns': {
      'name': 'Text',
    },
    'defaults': {
      'id': 0,
      'name': '-'
    },
    'adapter': {
      'type': 'sql',
      'collection_name': 'sites',
      'idAttribute' : 'id'
    }
  }
};
