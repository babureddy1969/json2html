const j1 = require('./sample.json');    
var j = j1['fields'];//[0]['field_name'];
var textarea = '<textarea id="ID" placeholder="PLACEHOLDER" style="position:absolute;left:LEFT;top:TOP;width:WIDTH;height:HEIGHT"></textarea>';
var textbox = '<input type="text" placeholder="PLACEHOLDER" style="position:absolute;left:LEFT;top:TOP;width:WIDTH;height:HEIGHT">';
var submit = '<input action="http://localhost:3000/api/v1/saveform" method="post" target="_blank" type="submit" name="Submit" style="position:absolute;left:30px;top:TOP;width:100px;height:40px">';
var select='<select style="position:absolute;left:LEFT;top:TOP;width:WIDTH;height:WIDTH" name="NAME" id="NAME" MULTIPLE> \
  OPTIONS \ </select>';
var date = '<input type="date" placeholder="PLACEHOLDER" style="position:absolute;left:LEFT;top:TOP;width:WIDTH;height:HEIGHT">';
var checkbox = '<div><input type="checkbox" id="ID" name="NAME" value="VALUE" style="position:absolute;left:LEFT;top:TOP;"> \
<div style="position:absolute; left:LEFT1; top:TOP1;">NAME</div>';
var radio = '<div><input type="radio" id="ID" name="NAME" value="VALUE" style="position:absolute;left:LEFT;top:TOP;"/><label style="position:absolute;left:LEFT1;top:TOP1;"for="id">VALUE</label></div>';
var label = '<div style="position:absolute;left:LEFT;top:TOP;;width:WIDTH;height:HEIGHT">VALUE</div>';
var upload='<div style="position:absolute;left:LEFT;top:TOP;width:WIDTH;height:HEIGHT;background-color:lightblue;text-align:center">Choose a file or drag and drop it here</div> \
<input type="file" id="myfile" accept="FILETYPE" style="position:absolute; left:LEFT1;top:TOP1;width:WIDTH1;height:HEIGHT1"></input>';

var html= '<!DOCTYPE html><html><head><style> </style></head><body><form>';
console.log(j.length);  
for (var i=0; i<j.length; i++) {
    if (j[i]["field_type"] === "textbox") {
        html += textbox.replace('LEFT',j[i]["pos"]["x"]).replace('TOP',j[i]["pos"]["y"]).replace('WIDTH',j[i]['width']).replace('HEIGHT',j[i]['height']).replace('PLACEHOLDER',j[i]['placeholder']);
    }else if (j[i]["field_type"] === "label") {
        html += label.replace('LEFT',j[i]["pos"]["x"]).replace('TOP',j[i]["pos"]["y"]).replace('WIDTH',j[i]['width']).replace('HEIGHT',j[i]['height']).replace('VALUE',j[i]['value']);
    }else if (j[i]["field_type"] === "upload") {
        html += upload.replace('TOP1',j[i]["pos"]["y1"]).replace('LEFT1',j[i]["pos"]["x1"]).replace('LEFT',j[i]["pos"]["x"]).replaceAll('TOP',j[i]["pos"]["y"]).replace('WIDTH',j[i]['width']).replace('HEIGHT',j[i]['height']).replace('WIDTH1',j[i]['width1']).replace('HEIGHT1',j[i]['height1']).replace('FILETYPE',j[i]['file_type']);
    }else if (j[i]["field_type"] === "textarea") {
        html += textarea.replace('LEFT',j[i]["pos"]["x"]).replace('TOP',j[i]["pos"]["y"]).replace('WIDTH',j[i]['width']).replace('HEIGHT',j[i]['height']).replace('PLACEHOLDER',j[i]['placeholder']);
    } else if (j[i]["field_type"] === "drop_down") {
        var options = "";
        for (var o = 0; o < j[i]["options"].length; o++) {
            options += "<option value=" + j[i]["options"][o]["value"] + ">" + j[i]["options"][o]["name"]+ "</option>"
        }
        html += select.replace('LEFT',j[i]["pos"]["x"]).replace('TOP',j[i]["pos"]["y"]).replace('WIDTH',j[i]['width']).replace('HEIGHT',j[i]['height']).replace('PLACEHOLDER',j[i]['placeholder']).replace("OPTIONS",options);
    } else if (j[i]["field_type"] === "date") {
        html += date.replace('LEFT',j[i]["pos"]["x"]).replace('TOP',j[i]["pos"]["y"]).replace('WIDTH',j[i]['width']).replace('HEIGHT',j[i]['height']).replace('PLACEHOLDER',j[i]['placeholder']);
    } else if (j[i]["field_type"] === "checkbox") {
        for (var c=0; c < j[i]["options"].length;c++){
            console.log(j[i]['options'][c]);
            html += checkbox
                .replace('LEFT',j[i]['options'][c]["x"])
                .replace('TOP',j[i]['options'][c]["y"])
                .replace('LEFT1',j[i]['options'][c]["x1"])
                .replace('TOP1',j[i]['options'][c]["y1"])
                .replace('WIDTH',j[i]['width'])
                .replace('HEIGHT',j[i]['height'])
                .replaceAll('VALUE',j[i]['options'][c]['value'])
                .replaceAll('NAME',j[i]['options'][c]['name'])
                .replaceAll('NAME1',j[i]['options'][c]['value'])
                .replace('ID',j[i]['id']);
        }
    } else if (j[i]["field_type"] === "radio") {
        for (var c=0; c < j[i]["options"].length;c++){
            console.log(j[i]['options'][c]);
            html += radio
                .replace('LEFT',j[i]['options'][c]["x"])
                .replace('TOP',j[i]['options'][c]["y"])
                .replace('LEFT1',j[i]['options'][c]["x1"])
                .replace('TOP1',j[i]['options'][c]["y1"])
                .replace('WIDTH',j[i]['width'])
                .replace('HEIGHT',j[i]['height'])
                .replaceAll('VALUE',j[i]['options'][c]['value'])
                .replaceAll('NAME',j[i]['options'][c]['name'])
                .replace('ID',j[i]['id']);
        }
    } else if (j[i]["field_type"] === "submit") {
        html += submit.replace('LEFT',j[i]["pos"]["x"]).replace('TOP',j[i]["pos"]["y"]).replace('WIDTH',j[i]['width']).replace('HEIGHT',j[i]['height']);
    }
}
// const x = (parseInt(j[j.length-1]["pos"]["y"].replace("px","")) + 50) + "px";
// html += submit.replace('TOP',x);

html += '</form></body></html>';

console.log(html);