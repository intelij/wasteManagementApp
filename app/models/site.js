exports.definition = {
  config: {
    'columns': {
      'site_id': 'Integer',
    },
    'defaults': {
      'site_id': 0
    },
    'adapter': {
      'type': 'sql',
      'collection_name': 'sites',
      'idAttribute' : 'id'
    }
  }
};
