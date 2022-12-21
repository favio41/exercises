const LinkedList = require("./linked-list");
const { sum } = require("./utils");

function Container() {
  const container = LinkedList({
    amount: 0,
    addWater(delta) {
      this.amount += delta;
      levelWater();
    },
    connectTo(aContainer) {
      if (this === aContainer) return;
      this.push(aContainer);
      levelWater();
    },
  });

  return container;

  function totalAmount() {
    return container.map((current) => current.amount).reduce(sum, 0);
  }

  function leveledAmount() {
    return totalAmount() / container.size();
  }

  function setAmountToGroup(newAmount) {
    container.foreach((current) => (current.amount = newAmount));
  }

  function levelWater() {
    setAmountToGroup(leveledAmount());
  }
}

module.exports = Container;
