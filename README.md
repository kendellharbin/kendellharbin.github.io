# kendellharbin.github.io
personal portfolio site for Kendell Harbin


Steps to add a new Section
- add header-image [here](https://github.com/kendellharbin/kendellharbin.github.io/tree/master/assets/imgs) with naming convention home_<something>.png
- create new section file [here](https://github.com/kendellharbin/kendellharbin.github.io/tree/master/_sections) referencing the same name as above minus home.
- copy the format from another section in the same directory.
- each section file will have these properties:
  home-image: ./assets/imgs/home_bells.png (from step 1)
  value: 2 (this is the order of how the sections display)

slides:
  - header-image: ./assets/imgs/home_peel.png
    background: light-blue-stripe-background
    icon-color: yellow
    header-color: yellow
    image-orientation: left
    image: ./assets/imgs/test_image_1.jpg
    title: peel - slide 1
    content:
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  - header-image: ./assets/imgs/home_peel.png
