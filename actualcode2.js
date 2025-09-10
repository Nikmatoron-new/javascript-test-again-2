var points = 0;

function questionare() {
            points = 0;
            
            BirthPlace();
            ageQuestion();
            FNklimamål();
            cpu();
            
            showFinalResult();
        }






function BirthPlace() {
    const TownSVAR = prompt("hvor kommer du fra i norge?");
    const CorrectTown = ["Kristiansand", "kristiansand", "Krs", "krs", "kvadraturen", "Kvadraturen"];
if (CorrectTown.includes(TownSVAR)) {
    alert(TownSVAR + " er riktig by!" );
    points += 1;

} else {
    alert(TownSVAR + " var feil by.");
    points -= 1;
};};


function ageQuestion() {
    const alderStreng = prompt("Hvor gammel er du?");
    let age = parseInt(alderStreng);

    if (age < 20) {
        alert("Du er ikke i 20-årene enda");
        points -= 1;
    } else if (age > 20) {
        alert("Du er voksen");
        points += 1;
    } else {
        alert("Du er akkurat 20 år gammel!");
        points += 1;
    };};






function FNklimamål() {
    const klimamålSVAR = prompt("når skal fn målene være nådd?");
    const klimamål =parseInt(klimamålSVAR)
    if (klimamål == 2030) {
        alert("Riktig!");
        points += 1;
    } else {
        alert("Feil, riktig svar er 2030");
        points -= 1;
    };};

function cpu() {
    const CPUname = prompt("hva står cpu for? (bruk små bokstaver)");
    const CPUdef = ["central processing unit", "prosessor", "hovedprosessor", "hoved prosessor",];
if (CPUdef.includes(CPUname)) {
    alert(CPUname + " er riktig!!! :3" );
    points += 1;

} else {
    alert(CPUname + " er feil >:3.");
    points -= 1;
};
};

