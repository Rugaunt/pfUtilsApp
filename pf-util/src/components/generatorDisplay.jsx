import React, { Component } from 'react';


class GeneratorDisplay extends Component {
    state = { 
        typeButtonList: [
            sword: 0
        ]
     } 
    render() { 
        return (
            //list of toggle buttons plus generator button and min max item or value 
            //(maybe dipsplay value limits instead?)
        );
    }
}

function buildWondrousList (listType)  {
    var theList = null;
    if (listType == "Wondrous Item"){
        theList.push("Headband", "Head", "Eyes", "Neck", "Shoulder", "Body", "Chest");
    }elif(listType=="Weapon"){
        theList.push("Shortsword", "Dwarven Pickaxe");
    }elif(listType=="Armor"){
        theList.push("Chainmail", "Leather Armor", "Full Plate");
    }
    return theList;
}

 
export default GeneratorDispla
//list of toggle buttons plus generator button and min max item or value (maybe dipsplay value limits instead?)y;