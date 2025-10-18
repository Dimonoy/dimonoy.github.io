class ClassWatcher {
  constructor(node, cls, classAddedCallback, classRemovedCallback) {
    this.node = node;
    this.cls = cls;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.lastState = node.classList.contains(this.cls);
    this.observer = new MutationObserver(this.mutationCallback);
    this.observe();
  }

  observe() {
    this.observer.observe(this.node, { attributes: true });
  }

  disconnect() {
    this.observer.disconnect();
  }

  mutationCallback = mutationsList => {
    for(let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        let currentState = mutation.target.classList.contains(this.cls);

        if (this.lastState !== currentState) {
          this.lastState = currentState;

          if (currentState) {
            this.classAddedCallback();
          } else {
            this.classRemovedCallback();
          }
        }
      }
    }
  }
};

export { ClassWatcher };
