

    let alderStreng = prompt('Hva er din alder?')                 
    // Nå har vi alderen, men kun som en streng, ikke et tall
                
    let alder = parseInt(alderStreng) 

    // Nå har vi alder som et tall og kan gjøre tall-ting med den: 
    if( alder < 13 )
        alert('Du er ikke tenåring ennå')
    else( alder > 20)
        alert('Du er voksen')






function problem1() {
    var counter = 0   
    var total = 0    

     let by = prompt("Hva heter byen din?")
            if(by.length >= 8 ) 
               alert('Interesant!')    
            else
                 alert('Kort navn, liten by eller?')
}


function problem2() {
    var counter = 0   
    var total = 0    

    let by = prompt("Hva er 2026 minus 2025?") 
    
    let answer = parseInt(by);

    if(answer == 1) {
        alert('Interessant!')    
    } else {
        alert('feil')
    }
}

window.onload = function() {
    const rannum = Math.random();
    
    if (rannum < 0.5) {
        COIN.src = "1-krone-1996-2016-kong-harald-v-samlerhuset.png";
        COIN.alt = "kron";
    } else {
        COIN.src = "1-krone-1996-2016-kong-harald-v-samlerhuset-mynt.png";
        COIN.alt = "Mynt";
    }
};

function COINFLIP() {
    const rannum2 = Math.random();
    
    if (rannum2 < 0.5) {
        COINFLIPimg.src = "1-krone-1996-2016-kong-harald-v-samlerhuset.png";
        COINFLIPimg.alt = "kron";
    } else {
        COINFLIPimg.src = "1-krone-1996-2016-kong-harald-v-samlerhuset-mynt.png";
        COINFLIPimg.alt = "Mynt";
    }
};
