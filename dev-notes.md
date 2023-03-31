# todo
- [ ] depreacte/archive https://github.com/BlairCurrey/blaircurrey.com-source
  - add readme note and/or archive this. Dont want to just delete so I can have some record... but it should be clear this site generator is no longer used for blaircurrey.com
  - read up on what archiving does before doing it
- [ ] make color palette a vertical drawer. click on palette icon and the button drop down (not like a menu, just overlayed, doesn't push any elements around - accomplish with position absoltue?)
  - https://freefrontend.com/css-floating-action-buttons/
  - here is an interesting animations... "liquid fab buttons" https://www.linkedin.com/feed/update/urn:li:activity:7026882657695223809?utm_source=share&utm_medium=member_desktop
- [ ] use or delete assets/images/flip-over.svg. make it into an icon somehow?
  - img source https://thenounproject.com/icon/flip-over-267318/
- [ ] add game on backside. 
  - utilize current color palette
  - allow flipping back (what happens? end game? pause?)
- [ ] extend game so it uses the whole page and card canvas is just a fake boundary that the user discovers is fake through playing (hoepfully to their surprise and amusement). Like a brick breaker game but the ball can escape. Or snake. Or something else?
  - https://stackoverflow.com/questions/17006812/make-canvas-the-background-of-an-html-document
  - https://jsfiddle.net/DerekL/uw5XU/
- [ ] consider hosting font awesome icons myself to eek out more performance
  - download and put in public?
  - follow this guide?https://fontawesome.com/docs/web/setup/host-yourself/webfonts
- [ ] skills sections is kinda wierd. off too far to the left. center it?
- [ ] handle card palette/pic/flip button better?
  - remove absolute positioning and make all one row.
  - flip btn is up a level in the DOM. if I want to make it in the row with the palette then I need to duplicate it in the backside of the card (another icon in dom, event listener in js).
  - maybe need to add negative margin to profile to move it up


# chatGPT palletes
## green color palette
```
--green-900: #1B4D3E;
--green-800: #2D6E5B;
--green-700: #3F8E78;
--green-600: #51AF95;
--lime-800: #7ED321;
--olive-900: #343D2B;
--olive-800: #3E482F;
--olive-700: #47523A;
--olive-600: #505C45;
--grey-100: #D9DCE4;
--white-100: #ffffff;
--yellow-300: #F2C94C;
```

## purple
(already have a "purple" one but this maye be interesting)
--purple-900: #231D40;
--purple-800: #332C5E;
--purple-700: #4C3C7D;
--purple-600: #665C9D;
--pink-800: #D72372;
--violet-900: #2E253F;
--violet-800: #3D314F;
--violet-700: #4B3C5F;
--violet-600: #5A4870;
--grey-100: #D9DCE4;
--white-100: #ffffff;
--red-300: #F94144;

## orange
--orange-900: #6B2805;
--orange-800: #8F3E0B;
--orange-700: #B25311;
--orange-600: #D66817;
--yellow-800: #FDB813;
--brown-900: #29221F;
--brown-800: #3C302C;
--brown-700: #4E3F3A;
--brown-600: #624E48;
--grey-100: #D9DCE4;
--white-100: #ffffff;
--green-300: #21C7A8;

## red
--red-900: #5E0C0D;
--red-800: #7E1517;
--red-700: #9F1E22;
--red-600: #BF272C;
--pink-800: #D72372;
--orange-900: #6B2805;
--orange-800: #8F3E0B;
--orange-700: #B25311;
--orange-600: #D66817;
--grey-100: #D9DCE4;
--white-100: #ffffff;
--blue-300: #2D9CDB;

## yellow
--yellow-900: #7B6000;
--yellow-800: #9C7D00;
--yellow-700: #BD9B00;
--yellow-600: #DEB800;
--orange-800: #FCA311;
--brown-900: #29221F;
--brown-800: #3C302C;
--brown-700: #4E3F3A;
--brown-600: #624E48;
--grey-100: #D9DCE4;
--white-100: #ffffff;
--green-300: #21C7A8;

# inspo
http://todotxt.org/
- use the top grey bar, page title, and first box
- page title would be Blair Currey
  - could have a computer icon or smth
  - (could have software engineer as sub title)
- card would have my picture on side and:
  - software engineer if not used above
  - short blurb about myself
  - links
- in mobile, the image of myself would be hidden

https://plaintextproject.online/links.html
- nice plain text style on this website, and links to other nice plaintext websites
- could sorta follow that format where I have name as header, software engineer as sub hearder, and blurb as content. with buttons below (no analogy on this site for that)

https://designrshub.com/2020/09/free-profile-card-css.html
profile card designs

https://www.bootdey.com/snippets/view/profile-card-with-animation
not bad card and cool animation

http://css3transition.com/demo/profile_card_design/
nice gradient background and card

https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1362422378%2Fphoto%2Fabstract-blurred-purple-background-light-spot-on-dark-background.jpg%3Fb%3D1%26s%3D170667a%26w%3D0%26k%3D20%26c%3DamYN1DW4JOaYvCIpmjXigJVNVYQzEpDX0HiTBFW6IF8%3D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdark-gradient&tbnid=B-ATFcDRmWNMRM&vet=12ahUKEwjt5d2Otaj9AhV_Et4AHd6IAhYQMygBegUIARDsAQ..i&docid=g9vfbTPWsBXedM&w=508&h=338&q=dark%20gradient%20background&ved=2ahUKEwjt5d2Otaj9AhV_Et4AHd6IAhYQMygBegUIARDsAQ
dark gradient background

https://color.adobe.com/create/color-wheel
adobe color wheel. the monochromatic with blue might be good

https://codepen.io/lukasvait/pen/OJexNE
snake game implementation tha tmight be good. style looks nice

cool little golf game:
https://www.lexaloffle.com/bbs/?tid=38918