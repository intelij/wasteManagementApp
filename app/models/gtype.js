exports.definition = {
  config : {
    'columns' : {
      'site_id' : 'integer',
      'title' : 'Text',
      'description' : 'Text'
    },
    'defaults' : {
      'site_id' : 0,
      'title' : '-',
      'description' : '-'
    },
    'adapter' : {
      'type' : 'sql',
      'collection_name' : 'gtypes',
      'idAttribute' : 'id'
    }
  }
};
