export default class ScrollDetector {
  counter1: number;
  counter2: number;
  delta: number;
  marker: boolean;
  dir: number;
  interval: number;
  handleOnScroll: (e: any) => boolean;
  scrollHandler: (e: any) => boolean;
  event: Event;

  constructor() {
    this.counter1 = 0;
    this.counter2 = 0;
    this.delta = 0;
    this.marker = true;
    this.dir = 0;
    this.interval = 50;

    this.handleOnScroll = (e: any) => {
      this.counter1 += 1;
      this.delta = e.deltaY;

      if (this.delta > 0) {
        this.dir = 1;
      } else {
        this.dir = -1;
      }

      if (this.marker) {
        this.wheelStart();
      }

      return false;
    };

    this.scrollHandler = this.handleOnScroll.bind(this);
    this.event = document.createEvent("Event");

    //setup event
    if (this.event) {
      this.event.initEvent("updateScroll");

      //setup scroll events
      window.addEventListener("wheel", this.scrollHandler);
    }
  }

  remove() {
    window.removeEventListener("wheel", this.scrollHandler);
  }

  wheelStart() {
    this.marker = false;
    this.wheelAct();
  }

  wheelAct() {
    this.counter2 = this.counter1;

    setTimeout(() => {
      if (this.counter2 === this.counter1) {
        this.wheelEnd();
      } else {
        this.wheelAct();
      }
    }, this.interval);
  }

  wheelEnd() {
    this.marker = true;
    this.counter1 = 0;
    this.counter2 = 0;
    window.dispatchEvent(this.event);
  }
}
