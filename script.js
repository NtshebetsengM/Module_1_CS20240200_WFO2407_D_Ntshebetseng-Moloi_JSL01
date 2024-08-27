function validateSyntax() {
    let input = document.getElementById('petInput').value;
    const pattern = /^pet_\d{4}[A-Za-z]+$/;
    
    let result = pattern.test(input); // Placeholder for validation result
if ( result === true){
    document.getElementById('result').innerText = `Valid Syntax \u{1F7E2}`
}else{
    document.getElementById('result').innerText = `Invalid Syntax \u{1F534}`
};
}


