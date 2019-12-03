$(document).ready(function(){
var map;
           var InforObj = [];
                var centerCords = {
            lat: 46.619261,
            lng: -33.134766
        };
         var markersOnMap = [{
                 placeName: "USA (Palm Springs)",
                        LatLng: [{
                            lat: 33.8303,
                            lng: -116.5453
                        }],
                        title: "A beginner's guide to quantum computing",
                        content:"A quantum computer isn't just a more powerful version of the computers we use today; it's something else entirely, based on emerging scientific understanding -- and more than a bit of uncertainty. Enter the quantum wonderland with TED Fellow Shohini Ghose and learn how this technology holds the potential to transform medicine, create unbreakable encryption and even teleport information.",
                        url:"https://www.youtube.com/embed/QuR969uMICM"
                    },
                    {
                        placeName: "Canada (Vancouver)",
                        LatLng: [{
                            lat: 49.2827,
                            lng: -123.1207 
                        }],
                        title: "Everything around you can become a computer",
                        content:"Designer Ivan Poupyrev wants to integrate technology into everyday objects to make them more useful and fun -- like a jacket you can use to answer phone calls or a houseplant you can play like a keyboard. In a talk and tech demo, he lays out his vision for a physical world that's more deeply connected to the internet and shows how, with a little collaboration, we can get there. Unveiled in this talk: Poupyrev announces that his newest device, Jacquard, is now publicly available for all designers to use.",
                        url:"https://www.youtube.com/embed/vjXJ4f-OW0U"
                    },
                    {
                        placeName: "Estonia (Tartu)",
                        LatLng: [{
                            lat: 58.3780,
                            lng: 26.7290
                        }],
                        title: "Cyber security",
                        content:"We live in the 21 st Century. Our entire lives are connected. How to protect youself and your company from cyber crime?  This talk was given at a TEDx event using the TED conference format but independently organized by a local community",
                        url:"https://www.youtube.com/embed/_C7sNvIGQzM"
                    },
                    {
                        placeName: "USA (St. Lawrence University)",
                        LatLng: [{
                            lat: 44.5892,
                            lng: -75.1609
                        }],
                        title: "Artificial Intelligence and the Future of Work",
                        content:"Andy Chan is a Product Manager at Infinia ML, an artificial intelligence company that builds custom algorithms and software for Fortune 500 companies. He currently leads the design, development, and execution of the company’s AI strategies. Prior to Infinia ML, Andy was a Senior Product Manager at Avalara and helped the company go public in June 2018.",
                        url:"https://www.youtube.com/embed/bScAMuegX7Y"
                    },
                    {
                        placeName: "Scotland (Edinburgh)",
                        LatLng: [{
                            lat: 55.9533,
                            lng: -3.1883
                        }],
                        title: "The New Software Revolution: programming biological cells",
                        content:"The cells in your body are like computer software: they're 'programmed' to carry out specific functions at specific times. If we can better understand this process, we could unlock the ability to reprogram cells ourselves, says computational biologist Sara-Jane Dunn. In a talk from the cutting-edge of science, she explains how her team is studying embryonic stem cells to gain a new understanding of the biological programs that power life -- and develop 'living software' that could transform medicine, agriculture and energy",
                        url:"https://www.youtube.com/embed/kdAs3UVgIGg"
                    },
                     {
                        placeName: "Canada (Kingston)",
                        LatLng: [{
                            lat: 44.2253,
                            lng: -76.4951
                        }],
                        title: "How immersive technologies (AR/VR) will reform the human experience",
                        content:"Virtual and augmented reality are among today’s greatest immersive technology trends… but can they be used for more than just gaming and entertainment? In this talk, Tiffany Lam explores the use of immersive technologies like virtual and augmented reality to help tell stories better, bring people closer together, improve learning, and empower education through direct experience. For the last 15 years, Tiffany has been documenting and storytelling her life experiences through digital media. As an introvert, she found 360VR capture revolutionary – a communication tool to better translate stories and experiences to her friends and family without exhausting herself with excessive words.",
                        url:"https://www.youtube.com/embed/Fi97-DAcGMk"
                    }
                ]; // markesOnMap End

                
        
                window.onload = function () {
                    initMap();
                };
       
   

                function addMarker() {
                    for (var i = 0; i < markersOnMap.length; i++) {

                        var contentString = '<div id="content"><h3>' + markersOnMap[i].placeName + 
                            '</h3></div>'+ markersOnMap[i].content;
        
                        const marker = new google.maps.Marker({
                            position: markersOnMap[i].LatLng[0],
                            map: map,
                            title: markersOnMap[i].title,
                            
                             });
        
                        const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });
        
                        marker.addListener('click', function () {
                            closeOtherInfo();
                            infowindow.open(marker.get('map'), marker);
                            InforObj[0] = infowindow;
                        });
                        
                    }   

                   } // add marker end
            
                
        
                function closeOtherInfo() {
                    if (InforObj.length > 0) {
                        /* detach the info-window from the marker ... undocumented in the API docs */
                        InforObj[0].set("marker", null);
                        /* and close it */
                        InforObj[0].close();
                        /* blank the array */
                        InforObj.length = 0;
                    }
                }
        
                function initMap() {
                    map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 3,
                        center: centerCords
                    });
                    addMarker();                 
    

                } // initmap end

        

                


}); // document.ready end
