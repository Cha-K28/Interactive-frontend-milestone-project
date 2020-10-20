# README.md

# ChargingPoint. 

This website was created for two reasons. 

1. For those who have an electric car and want to find out where they can charge it in Ireland. 
2. For those who know nothing about electric cars but might be interested in switching form a traditional petrol or diesel. 


When your interested in a topic like this its no effort to find out any information you wish. However, what if your not remotely interested in cars? what if you just want to get from A to B and want to get there 
without harming the environment. Thats where an electric car comes in. 

The problem with electric cars is that you have to charge them. As someone whos is interested in electric cars, I am constantly noticing new charing points popping up around the country. Again, unless you are interested
this, you wont notice them. They'll blend into the background just like a parking meter. And that will cause a serious problem when you only have two kilometers of range left and no idea where your nearest charging point
is. 

Thats where this website comes in. Simply bookmark this site and and you have can find a charging point with just a few clicks or taps. Plan your trip and where you want to charge or, wait untill you arive at your destination
and find your nearest charging point then. 

It was key to create a website that is simple and usable. The websites main function is to allow users to locate a charging point, using a large map on the home page, but also give information on different electric vehicles for those 
who may be unsure about what electric vehicle to buy. There is also a contact page where a user can send a message requesting further information on a particular EV. 


# UX

This website can be used by anyone. It serves many different functions. 

The Main use for this website is to help the user locate an Electric Vehicle charging station. This is achived once you open the site and are greeting with a lrge map showing the locations of charging points around Ireland. 
This map is ideal for any website user, from someone who already owns an EV and is away from home but needs to locate their nearest charger, down to someone who is thinking of going electric and wants to find out where thier local 
charging station is. 

The second use for the website is for information. There is a page with different examples of electric cars currently availabe in Ireland. Again, this is ideal for sombody lokking to upgrade thier current EV or
sombody who is looking to but their first EV and wants to find out whats on the market. 

The third and final function of the website is again to aquire information about EVs. By using a contact form on the contact page the user can send a message with a request for further information about any of the vehicles
displayed on the examples page or any other EV. 

The entire website is laid out in an easy to use way so that anybody can navigate it. 


# Features

The first first and most important feature of this website is the map on the home page displaying the locations of electric vehicle chargers around Ireland.
this allows the user to easily find their closest Charger. It also contains clusters so its much easier to locate a charger. this will be even more important as more chargers are added. 

The second interactive feature is the contact form on the contact page. If a user enters their name, email, the car they want further information on and a short message, an email will be sent.
a message will then appear to tell the user that the email has been sent. this contact page is accesible from both the nav bar at the top of the page and from the footer. 

The examples page is a simple informative page that gives the user some information about some Electric Vehicles available in Ireland. 


### Features Left to Implement

This website could also incude many more features. Embedded videos of EV reviews one one thing that could really improve the user expeirence. A second feature that would be very benifitial to the user 
is a comparison tool that can compare the specifications of two Electric Vehicles.


## Technologies Used

Bootstrap : "https://getbootstrap.com/docs/4.4/getting-started/introduction/"

- Bootstrap is used for the nav bar aswell as the layout by using the container class and rows. An example of where bootstrap is used is the form.

Google Fonts: "https://fonts.google.com/"

- Google fonts was use to style the fonts used throughout the website.

Font Awesome: "https://fontawesome.com/"

- Font awsome was used for the icons on the website.

W3schools: "https://www.w3schools.com/css/default.asp"

- I used W3 schools at various stages of the project to help me understand some of Javascript, CSS and HTML.

Google Maps Tutorials: https://developers.google.com/maps/documentation/javascript/overview

- I used google maps tutorials to help me render the map and implement the markers. 

EmailJS: https://www.emailjs.com/

- EmailJS is used to power the emails sent fom the contact form on the contact page. 




## Testing

The site was thoroughly tested on various different devices and browsers. Chrome, Safari, Firefox on Mac and PC. Also worked on both Iphone and Android. 

Most importantly, the map worked as it should.

The site works fine on both mobile and laptops. 

Phone Screen sizes varied from Iphone 5/SE to Iphone 11. 

Laptop screen sizes included 13" and 15.6".  It was also tested on a larger 22" monitor. The media quiries also work as they should.

IT was tested using both chrome dev tools and actual devices. 

I also sent it to friends and family for user testing. 

### Issues 

Contact Form: 
1. A message can be submitted even if every field is left blank. Unfurtunatley with time restraints i couldn ammend this. 
2. After clicking ok on the sucess message the site should return to its home page. This does not yet work, instead we get a 404 error. Strangley this worked fine when testing in Gitpod.

Map:
1. The zoom icons, the toggle full scrren icon and the street view icon are missing. This may be a google issue. 


## Deployment


Deploying the website was quite simple as I used Github Pages. The steps to do this were as follows

1. push to github
2. Open Repo on github
3. click on settings
4. Make sure Repo is public
5. Scroll down to github pages

Following Deployment, It took over an hour for the page to work. once it worked i sent it to may friends and family to test it. 

One issue i had was that after i sent a message using the contact form, it did not return to the home page as it should. Strangley this worked fine when testing in Gitpod..

Everything else worked as it should, most importantly the map.


## Credits

### Charger location Data

Charger location Data API - https://api.openchargemap.io/v3/poi/?output=json&countrycode=IE&maxresults=2

### Content: 

EV Examples Content - all this Content was written by myself.

### Media:

All pictures used came from google searches. 

1. VW ID3 image: https://s3-eu-west-1.amazonaws.com/carsireland.ie.review/review/wp-content/uploads/2020/06/17163408/Volkswagen-ID.3.jpg
2. Tesla Model 3: https://www.irishtimes.com/polopoly_fs/1.4099847.1575061040!/image/image.jpg_gen/derivatives/box_620_330/image.jpg
3. Nissan Leaf: https://www.completecar.ie/img/testdrives/8128_large.jpg
4. Hyundai Kona: https://www.topgear.com/sites/default/files/styles/fit_1960x1102/public/cars-car/carousel/2017/10/all-new_hyundai_kona_30.jpg?itok=vIktRgvL
5. BME 330e: https://s3-eu-west-1.amazonaws.com/carsireland.ie.review/review/wp-content/uploads/2020/03/21032115/2020-03-21_lif_57750141_I1.jpg
6. Charge Point banner:  https://thumbs.dreamstime.com/z/charging-point-illustration-vector-ev-charge-banner-simple-thin-line-style-concept-horizontal-142377040.jpg


## Acknowledgements

1. The code institute tutor team who helped me at many stages throughout this project particularly when i had difficulties with displaying markers. 
2. The idea came from my work, as i was recently researching electric vehicles. 
3. The IT team at work who took time out of their busy days to give me advice anytime I asked. 
4. To Gerry, my mentor, for his wonderful guidance and advice throughout the project. 
