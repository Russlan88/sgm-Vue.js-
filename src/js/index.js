document.addEventListener("DOMContentLoaded", function (event) {

    // smooth scroll

    document.addEventListener('DOMContentLoaded', function () {
        const scroll = new SmoothScroll('[data-scroll]', {
            header: '[data-scroll-header]',
            speed: 500,
            speedAsDuration: true,
            easing: 'easeInQuad',
            updateURL: false,
            popstate: false,
        });
    });

    //map

    var eq = 0;
    var positionLI = document.querySelector(".tab");
    var lat = positionLI.children[eq].dataset.lat;
    var lng = positionLI.children[eq].dataset.lng;

    initialize(lat, lng);

    function initialize(lat, lng) {
        var myLatlng = new google.maps.LatLng(lat, lng);

        var mapOptions = {
            zoom: 12,


            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#181818"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#373737"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                    ]
                }
            ],
            center: myLatlng,
        }


        var map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

        var pin = {
            path: 'M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0',
            fillColor: '#3db565',
            fillOpacity: 1,
            scale: 0.8,
            strokeColor: '#3db565',
            strokeWeight: 4,
        };

        var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: pin,
            map: map,


        });

        marker.setMap(map);
    }

    // var countryLI = positionLI.children;

    for (i = 0; i <= positionLI.childElementCount - 1; i++) {
        positionLI.children[i].addEventListener("click", function () {
            lat = this.dataset.lat;
            lng = this.dataset.lng;
            initialize(lat, lng);
        });
    }

    // tab

    let iconBox = document.querySelectorAll('.tab__single-item');
    let contentBx = document.querySelectorAll('.tab__content-item');

    for (let i = 0; i < iconBox.length; i++) {
        iconBox[i].addEventListener('click', function () {
            for (let i = 0; i < contentBx.length; i++) {
                contentBx[i].className = 'tab__content-item';
            }
            document.getElementById(this.dataset.id).className = 'tab__content-item active';

            for (let i = 0; i < iconBox.length; i++) {
                iconBox[i].classList = "tab__single-item";
            }

            this.className = 'tab__single-item active'
        })
    }



});





