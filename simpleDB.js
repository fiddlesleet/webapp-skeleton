var AWS require('./keyvaluestore');
var KVS = new AWS('myTable');

var myDB_lookup = function(term, language, callback) {
  KVS.getSet(term, function(err, data) {
    if (err) {
      callback(null, "Lookup error: " + err);
    } else if (data.Attributes == undefined) {
      callback(null, null);
    } else {
      var results = {};
      for (i = 0; i < data.Attributes.length; i++) {
        if (data.Attributes[i].Name === language) {
          results.translation = data.Attributes[i].Value;
        }
      }
      callback(results, null);
    }
  });
};

var database = {
  lookup: myDB_lookup
};

module.exports = database;
