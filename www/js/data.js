var sensationApp = angular.module('sensationApp');

// Home Data: Home page configuration
sensationApp.factory('Data', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Watch Live',
            icon: 'video-camera',
            page: 'watch_live.html'
        },
        { 
            title: 'Programs',
            icon: 'film',
            page: 'programs.html'
        },
        { 
            title: 'TV Schedule',
            icon: 'calendar',
            page: 'tv_schedule.html'
        },
        { 
            title: 'iReporter',
            icon: 'camera',
            page: 'ireporter.html'
        },
        { 
            title: 'News',
            icon: 'comment',
            page: 'posts.html'
        },
        { 
            title: 'iTestify',
            icon: 'bullhorn',
            page: 'itestify.html'
        },
        { 
            title: 'Partnership',
            icon: 'users',
            page: 'partner_with_us.html'
        },
        { 
            title: 'Yookos',
            icon: 'rss',
            page: 'feeds.html'
        },
        { 
            title: 'Contact Us',
            icon: 'envelope',
            page: 'contact.html'
        }
    ]; 
    
    return data;
});

// Menu Data: Menu configuration
sensationApp.factory('MenuData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Home',
            icon: 'home',
            page: 'home.html'
        },
        { 
            title: 'Watch Live',
            icon: 'video-camera',
            page: 'watch_live.html'
        },
        { 
            title: 'Programs',
            icon: 'film',
            page: 'programs.html'
        },
        { 
            title: 'iReporter',
            icon: 'camera',
            page: 'ireporter.html'
        },
        { 
            title: 'LoveWorld News',
            icon: 'comment',
            page: 'posts.html'
        },
        { 
            title: 'iTestify',
            icon: 'bullhorn',
            page: 'itestify.html'
        },
        { 
            title: 'Partnership',
            icon: 'users',
            page: 'partner_with_us.html'
        },
        { 
            title: 'Yookos',
            icon: 'rss',
            page: 'feeds.html'
        },
        { 
            title: 'Send Shout-Outs',
            icon: 'pencil-square-o',
            page: 'shout_out.html'
        },
        { 
            title:'About Us',
            icon: 'info',
            page: 'about.html'
        },
        { 
            title:'Contact Us',
            icon: 'envelope',
            page: 'contact.html'
        }

    ]; 
    
    return data;
});

// Map Data: Map configuration
sensationApp.factory('MapData', function(){
    var data = {};
    
    data.map = {
        zoom: 12,
        center: {
            latitude: 40.74,
            longitude: -74.18
        },
        markers: [
        {
            id: 1,
            icon: 'img/blue_marker.png',
            latitude: 40.71,
            longitude: -74.21,
            title: 'This is our main store'
        }, 
        {
            id: 2,
            latitude: 40.72,
            longitude: -74.20,
            title: 'This is our second store'
        },
        {
            id: 3,
            latitude: 40.73,
            longitude: -74.19,
            title: 'This is our third store'
        },
        {
            id: 4,
            latitude: 40.74,
            longitude: -74.18,
            title: 'This is our fourth store'
        },
        {
            id: 5,
            latitude: 40.75,
            longitude: -74.17,
            title: 'This is our fifth store'
        },
        {
            id: 6,
            latitude: 40.76,
            longitude: -74.16,
            title: 'This is our sixth store'
        },
        {
            id: 7,
            icon: 'img/plane.png',
            latitude: 40.77,
            longitude: -74.15,
            title: 'Airport'
        }]
    };

    return data;
});

// Gallery Data: Gallery configuration
sensationApp.factory('GalleryData', function(){
    var data = {};
    
    data.items = [
        { 
            label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'img/gallery-1.jpg',
            location: 'New York, June 2014'
        },
        { 
            label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
            src: 'img/gallery-2.jpg',
            location: 'Athens, August 2013'
        },
        { 
            label: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: 'img/gallery-3.jpg',
            location: 'Tokyo, May 2013'
        }
    ]; 
    
    return data;
});

// Products Data: JSON Products configuration
sensationApp.factory('ProductsData', function(){
    
    var data = { url: 'json/products.json', letterLimit: 100 };
    
    return data;
});

// News Data: JSON News configuration
sensationApp.factory('NewsData', function(){
    
    var data = { url: 'json/news.json', letterLimit: 100 };
    
    return data;
});

// Posts Data: JSON Wordpress Posts configuration
sensationApp.factory('PostsData', function(){
    
    var data = { url: 'http://www.loveworldtv.co.uk/?json=get_recent_posts' };
    
    return data;
});

// Server Posts Data (Server side pagination with AngularJS)
sensationApp.factory('ServerPostsData', function(){
    
    // Set your URL as you can see in the following example
    //var data = { url: 'YourWordpressURL/?json=get_recent_posts' };
    var data = { url: 'json/serverposts' };
    
    return data;
});

// About Data: JSON News configuration
sensationApp.factory('AboutData', function(){
    
    var data = { url: 'json/about.json' };
    
    return data;
});

// Plugins Data: Mobile Plugins configuration
sensationApp.factory('PluginsData', function(){
    var data = {};
    
    data.items = [
        { 
            title: 'Device Plugin',
            icon: 'mobile',
            page: 'device.html'
        },
        { 
            title: 'Notifications Plugin',
            icon: 'exclamation',
            page: 'notifications.html'
        },
        { 
            title: 'Geolocation Plugin',
            icon: 'location-arrow',
            page: 'geolocation.html'
        }
    ]; 
    
    return data;
});

// Settings Data: Settings configuration
sensationApp.factory('SettingsData', function(){
    var data = {};
    
    data.items = {
        options: [
        {
           name: 'First Setting',
           value: true
        }, 
        {
           name: 'Second Setting',
           value: false
        }, 
        {
           name: 'Third Setting',
           value: false
        }, 
        {
           name: 'Fourth Setting',
           value: false
        }, 
        {
           name: 'Fifth Setting',
           value: false
        }],
        range:30
    };

    return data;
});

// RSS Data: Feeds configuration
sensationApp.factory('FeedData', function(){
    
    var data = { url: 'http://www.yookos.com/community/pastorchrislive/blog/feeds/posts' };
    
    return data;
});