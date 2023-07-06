class Title {
    constructor() {
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
        this.titleImg = createImg("Title.png", "game title");
        this.greeting = createElement("h1");
      }
    
      setElementsPosition() {
        this.titleImg.position(270, 50);
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 50, height / 2 - 20);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
      }
    
      setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
      }
    
      hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
      }
    
      handleMousePressed() {
        this.playButton.mousePressed(() => {        
          console.log("1");
          
          
        });
      }
    
      display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
      }
    }