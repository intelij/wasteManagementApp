exports.definition = {
  config: {
    'columns': {
      'site_id' : 'integer'
     },
    'defaults': {
     },
    'adapter': {
      'type': 'sql',
      'collection_name': 'site',
      'idAttribute' : 'id'
    }
  }
};
