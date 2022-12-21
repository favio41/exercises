function LinkedList(element) {
  element.previous = null;
  element.next = null;

  element.first = () => {
    if (!element.previous) return element;
    return element.previous.first();
  };

  element.push = (aElement) => {
    if (element === aElement) throw new Error("pushing the same element");
    if (!element.next) {
      element.next = aElement.first();
      aElement.first().previous = element;
    } else {
      element.next.connectTo(aElement);
    }
  };

  element.getIterator = function* () {
    let currentElement = element.first();
    while (currentElement) {
      yield currentElement;
      currentElement = currentElement.next;
    }
  };

  element.map = function (callback) {
    const result = [];
    for (const current of element.getIterator()) {
      result.push(callback(current));
    }

    return result;
  };

  element.foreach = function (callback) {
    element.map(callback);
  };

  element.reduce = function (callback, initial) {
    let result = initial;
    for (const current of element.getIterator()) {
      if (result === undefined) {
        result = current;
        continue;
      }
      result = callback(result, current);
    }
    return result;
  };

  element.size = () => {
    let result = 0;
    for (const val of element.getIterator()) {
      result += 1;
    }
    return result;
  };

  return element;
}

module.exports = LinkedList;
