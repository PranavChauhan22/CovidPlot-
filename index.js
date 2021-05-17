

function updatemap() {
    fetch("/finaldata.json")
    .then(response => response.json())
    .then(rsp=>{
        rsp.data.regional.forEach(element => {
            var colore;
            if (element.totalConfirmed>100000) {
                colore="rgb(255, 0, 0)";
            }
            else if (element.totalConfirmed>50000) {
                colore="rgb(170, 0, 0)";
            }
            else{
                colore="rgb(100, 0, 0)";
            }
            // console.log(element)
            latitude=element.latitude;
            longitude=element.longitude;

            var marker1 = new mapboxgl.Marker({color:`${colore}`})
            .setLngLat([longitude,latitude])
            .addTo(map);
           
        });
    })
}
updatemap();