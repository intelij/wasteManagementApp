exports.definition = {
  config: {
    'columns': {
      'title': 'Text',
      'type': 'Text'
    },
    'defaults': {
      'title': '-',
      'type': '-'
    },
    'adapter': {
      'type': 'sql',
      'collection_name': 'categories',
      'idAttribute' : 'id'
    }
  }
};
