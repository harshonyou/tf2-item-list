const fs = require("fs");
var path = require("path");

let rawdataItems = fs.readFileSync(path.join(__dirname, "data", "itemName.json"));
let dataItems = JSON.parse(rawdataItems);

exports.getItemName = function(itemID) {
    return dataItems[itemID];
}
