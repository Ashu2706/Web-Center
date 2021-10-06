import React from 'react'
import mapboxgl from 'mapbox-gl';
import {useEffect} from 'react';
const Contact = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNodTI4OTciLCJhIjoiY2t0bWs5bGM2MXZjNTJxbzZsMmt6ZnlnMyJ9.JM27Rt1kkD3eD3-9EHhVjA';
    // const [map, setmap] = useState();
    
    useEffect(() => {
        var map=new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-73.85316438216256, 41.058162674739286],
            zoom: 15
        });
        // setmap(mapInitializer)
        //Map Control
        map.addControl(new mapboxgl.NavigationControl());
    }, [])
    
    return (
        <section className="contact-info p-5" id="contact-us">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md">
                        <h3 className="text-center mb-3">Contact Info</h3>
                        <ul className="list-group list-group-flush lead">
                            <li className="list-group-item">
                                <span className="fw-bold">Location:</span> 3761 Browning Lane, NY
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Phone Number:</span> 917-356-6862
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Email:</span> webcenter@xyz.com
                            </li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default Contact
