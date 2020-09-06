const bombOmbCost = 7,
        goombasCost = 5,
        cheepCheepsCost = 11;

const bombOmbsTotalPrice = (value) => {return value * bombOmbCost},
        goombasTotalPrice = (value) => {return value * goombasCost},
        cheepCheepPrice = (value) => {return value * cheepCheepsCost};

const totalCoinsOwed = document.getElementById('totalCoins'),    
         pestsControlled = document.pestForm;

pestsControlled.addEventListener('submit', (event) => {
    event.preventDefault()
        parseInt(pestsControlled.bombOmbs.value)
        parseInt(pestsControlled.goombas.value) 
        parseInt(pestsControlled.cheepCheeps.value)

        totalCoinsOwed.textContent = bombOmbsTotalPrice(pestsControlled.bombOmbs.value) + goombasTotalPrice(pestsControlled.goombas.value) + cheepCheepPrice(pestsControlled.cheepCheeps.value); 
});







