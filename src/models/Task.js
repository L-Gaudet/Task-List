class Task {
  #timeCreated;
  #id;
  description;
  
  constructor(description) {
    this.#timeCreated = Date.now();
    this.id = this.#timeCreated + (description);
    this.description = description;
  }
}