class Station<TElement> {
  value: TElement;
  next: Station<TElement> | null = null;
  prev: Station<TElement> | null = null;

  constructor(value: TElement) {
    this.value = value;
  }

  toJSON() {
    return { value: this.value };
  }
}

export class LinkedList<TElement> {
  private stations: Station<TElement>[] = [];

  public unshift(element: TElement) {
    const newStation = new Station(element);

    if(this.stations.length > 0){
      this.stations[0].prev = newStation;
      newStation.next = this.stations[0];
    }

    this.stations.unshift(newStation);
  }

  public push(element: TElement) {
    const newStation = new Station(element);

    if(this.stations.length > 0){
      this.stations[this.stations.length - 1].prev = newStation;
      newStation.next = this.stations[this.stations.length - 1];
    }

    this.stations.push(newStation);
  }

  public shift() {
    if(this.stations.length > 0){
      const firstStation = this.stations[0];
      const firstStationValue = firstStation.value;
      if(firstStation.next){
        firstStation.next.prev = null;
        firstStation.next = null;
      }
      this.stations.shift();
      return firstStationValue;
    }
    return null;
  }

  public pop() {
    if(this.stations.length > 0){
      const lastStation = this.stations[this.stations.length - 1];
      const lastStationValue = lastStation.value;
      if(lastStation.prev){
        lastStation.prev.next = null;
        lastStation.prev = null;
      }
      this.stations.pop();
      return lastStationValue;
    }
    return null;
  }

  public delete(element: number) {
    const index:number = this.stations.findIndex((value: Station<TElement>) => value.value == element);
    if(index == -1){
      return;
    }

    const el = this.stations[index];
    if(el.prev){
      el.prev.next = el.next;
    }

    if(el.next){
      el.next.prev = el.prev;
    }

    el.next = el.prev = null;

    this.stations = this.stations.filter((v: Station<TElement>, i: number) => i !== index);
  }

  public count(): number {
    return this.stations.length;
  }
}