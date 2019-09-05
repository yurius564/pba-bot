deb = true;
pokemon = [];
arrow_stat = 0;
log = [];
make_log = true;
steps = 0;
types = ["Normal","Shiny","Dark","Metal","Ghost","Void","Albino"];
type_list = ["Normal","Shiny","Dark","Metal","Ghost","Void","Albino"];
function pokeloop(){
    if(!$("#naviframe img")[0]){ // not loading
        steps++;
        this_message = $("#navig p").text(); // "Level 4  Lileep You currently have..."
        if(!(this_message.split(' ')[0] == "No")){
            this_level = this_message.split(' ')[1];
            this_pokemon = this_message.split(' ')[2];
            if(this_pokemon == ""){
                this_pokemon = this_message.split(' ')[3];
            }

            this_type = $(".wander_info img").attr("src");
            if(this_type){
                this_type = this_type.split(".png")[0].split("/");
                this_type = this_type[this_type.length-1];
                if(this_type == "pokie"){ // already caught icon
                    this_type = "Normal";
                }
            }
            else{
                this_type = "Normal";
            }
    
            if(make_log){
                this_log = {'name':this_pokemon,'type':this_type,'level':this_level,'step':steps};
                log.push(this_log);
            }
        }
        else{
            this_pokemon = "";
        }
        if(pokemon.indexOf(this_pokemon) >= 0 &&  types.indexOf(this_type) >= 0){
            deb = false;
            alert("FIND");
    	}
        else{
            switch(arrow_stat){
                case 0:
                    navig($("td[onclick$='\'south\')']")[0],'south');
                    arrow_stat++;
                    break;
                case 1:
                    navig($("td[onclick$='\'west\')']")[0],'west');
                    arrow_stat++;
                    break;
                case 2:
                    navig($("td[onclick$='\'north\')']")[0],'north');
                    arrow_stat++;
                    break;
                case 3:
                    navig($("td[onclick$='\'east\')']")[0],'east');
                    arrow_stat=0;
                    break;
            }
            if(deb) setTimeout(pokeloop,300);
        }
    }
    else{
        if(deb) setTimeout(pokeloop,100);
    }
}
