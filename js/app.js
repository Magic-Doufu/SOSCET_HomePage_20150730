$(document).ready(function() {
            $('#fullpage').fullpage({
                navigation: false,
                sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFC107'],
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
                menu: '#menu',
                css3: true,
                scrollingSpeed: 800,
                scrollOverflow:true,
                keyboardScrolling: true,
                animateAnchor: true,
                recordHistory: true,
            });
        });