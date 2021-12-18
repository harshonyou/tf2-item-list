var tf2Items = require('../tf2Items')

testGetItemName = () => {
    if(tf2Items.getItemName(0)!="Bat")
        return false
    if(tf2Items.getItemName(1066)!="Operation Two Cities Badge")
        return false
    if(tf2Items.getItemName(5763)!="Unlocked Creepy Scout Crate")
        return false
    if(tf2Items.getItemName(6514)!="Strange Filter: Frontier (Community)")
        return false
    if(tf2Items.getItemName(8422)!="ETF2L Highlander Premier Division Participation Medal")
        return false
    if(tf2Items.getItemName(8914)!="Halloween Spell: Team Spirit Footprints")
        return false
    else
        return true
}

console.log("Get Item Name Function:", testGetItemName())