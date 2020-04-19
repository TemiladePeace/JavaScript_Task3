function replaceNum( input ) {
    let output = [];

    for( let i = 1; i <= input; i++) {
        let val = "";
        if( i % 2 == 0){
            val = "yu";
        }
        if( i % 3 == 0){
            val = (val == "") ? "gi" : val + "-gi";
        }
        if( i % 5 == 0){
            val = (val == "") ? "oh" : val + "-oh";
        }
        if(val == ""){
            val = i;
        }
        output.push(val);
    }
    return output;
}
    replaceNum(100);
    replaceNum(30);