

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





