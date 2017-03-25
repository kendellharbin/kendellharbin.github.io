# kendellharbin.github.io
personal portfolio site for Kendell Harbin


Steps to add a new Section
1. add header-image [here](https://github.com/kendellharbin/kendellharbin.github.io/tree/master/assets/imgs) with naming convention home_<something>.png

2. create new section file [here](https://github.com/kendellharbin/kendellharbin.github.io/tree/master/_sections) referencing the same name as above minus home.

3. copy the format from another section in the same directory.

4. each section file will have these properties:
```yaml
   home-image: ./assets/imgs/home_bells.png (from step 1)
   value: 2 (this is the order of how the sections display, annoying, but you will just have to keep a count of the sections for now)
```

5. add any colors you want to reference [here](https://github.com/kendellharbin/kendellharbin.github.io/blob/master/_config.yml), once added you can reference colors by name or by <color-name>-stripe-background.

6. next add a slide block to your section. this block represents every slide within a section.
   ```yaml
   slides:
    - header-image: ./assets/imgs/home_peel.png (this shows up in the upper left corner of the page)
      background: light-blue-stripe-background ( add a color [here](https://github.com/kendellharbin/kendellharbin.github.io/blob/master/_config.yml), strip gets created automatically)
      icon-color: yellow
      header-color: yellow
      image-orientation: left
      image: ./assets/imgs/test_image_1.jpg
      title: peel - slide 1
      content:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
   ```
* header-image: this is the image that shows up in the upper-left corner, could be the same image from step 1 or something different.
* background: put either a color name created in step 5 or a stripe background color.
* icon-color: this is the color of the pancake icon in the upper right corner
* header-color: this is the color of the title/header text above the content
* image-orientation: left or right. refers to if the image is left of text or right of text.
* image: this is the image you want to show on the slide.
* title: this is the text for the the header above the text content.
