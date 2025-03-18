function calculateResult() {
    let airport = document.querySelector('input[name="airport"]:checked')?.value;
    let weather = document.querySelector('input[name="weather"]:checked')?.value;
    let tax = document.querySelector('input[name="tax"]:checked')?.value;
    let city = document.querySelector('input[name="city"]:checked')?.value;

    if (!airport || !weather || !tax || !city) {
        document.getElementById('result').innerText = "Please answer all questions.";
        return;
    }

    let recommendedRegion = "";

    if (tax === "yes") {
        const taxRegions = ["Sicily", "Calabria", "Sardinia", "Campania", "Basilicata", "Abruzzo", "Molise", "Puglia"];
        recommendedRegion = taxRegions[Math.floor(Math.random() * taxRegions.length)];
    } else {
        if (airport === "very" && city === "city") {
            recommendedRegion = "Lombardy (Milan) or Lazio (Rome)";
        } else if (weather === "warm" && city === "town") {
            recommendedRegion = "Puglia or Sicily";
        } else if (weather === "cold" && city === "town") {
            recommendedRegion = "Trentino-Alto Adige";
        } else if (airport === "moderate" && weather === "mild") {
            recommendedRegion = "Tuscany or Umbria";
        } else {
            recommendedRegion = "Emilia-Romagna";
        }
    }

    document.getElementById('result').innerText = "Your ideal Italian region: " + recommendedRegion;
}