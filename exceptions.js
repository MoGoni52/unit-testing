function panicExceptAtLizards(text){
    if (text == "Lizard") {
        return true;
    } else {
        throw "ERROR: input must be a lizard"
    }
}

panicExceptAtLizards("frog")
