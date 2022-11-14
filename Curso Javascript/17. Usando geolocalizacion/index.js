// Initialize and add the map
function initMap() {
    // Localizaciones
    const malaga = { lat: 36.71982507531983, lng: -4.4211033338499615 };
    const brujas = { lat: 51.21310233869096, lng: 3.227255907570576 };
    const paris = { lat: 48.88786176015784, lng: 2.326902379230491 };
    // Mapa centrado en
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: malaga,
    });
    // Pines
    const marcadorMalaga = new google.maps.Marker({
        position: malaga,
        map: map,
    });
    const marcadorBrujas = new google.maps.Marker({
        position: brujas,
        map: map,
    });
    const marcadorParis = new google.maps.Marker({
        position: paris,
        map: map,
    });
    
}

window.initMap = initMap;