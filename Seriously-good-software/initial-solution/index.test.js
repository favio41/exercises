const Container = require(".");

describe("Water containers version 1", () => {
  test("When a container is created, then should create an instance", () => {
    const a = new Container();
    expect(a).toBeDefined();
  });

  test("When containers are isolated, the should keep their water level", () => {
    const a = new Container();
    const b = new Container();
    const c = new Container();
    const d = new Container();

    a.addWater(12);
    d.addWater(8);

    expect(a.amount).toBe(12);
    expect(b.amount).toBe(0);
    expect(c.amount).toBe(0);
    expect(d.amount).toBe(8);
  });

  test("When containers get connected, the water has to level", () => {
    const a = new Container();
    const b = new Container();

    a.addWater(8);
    a.connectTo(b);

    expect(a.amount).toBe(4);
    expect(b.amount).toBe(4);
  });

  test("When multiple containers get connected, the water has to level", () => {
    const a = new Container();
    const b = new Container();
    const c = new Container();

    a.addWater(8);
    a.connectTo(b);
    c.connectTo(a);
    c.addWater(4);

    expect(a.amount).toBeCloseTo(4);
    expect(b.amount).toBeCloseTo(4);
    expect(c.amount).toBeCloseTo(4);
  });

  test("When previous connected containers get connected, the water has to level", () => {
    const a = new Container();
    const b = new Container();
    const c = new Container();
    const d = new Container();

    a.addWater(5);
    b.addWater(7);
    c.addWater(9);
    d.addWater(11);

    expect(a.amount).toBe(5);
    expect(b.amount).toBe(7);
    expect(c.amount).toBe(9);
    expect(d.amount).toBe(11);

    a.connectTo(b);
    expect(a.amount).toBe(6);
    expect(b.amount).toBe(6);

    c.connectTo(d);
    expect(c.amount).toBe(10);
    expect(d.amount).toBe(10);

    b.connectTo(d);

    expect(a.amount).toBe(8);
    expect(b.amount).toBe(8);
    expect(c.amount).toBe(8);
    expect(d.amount).toBe(8);
  });

  describe("boundary tests", () => {
    test("should not throw when connecting to itself", () => {
      const a = new Container();
      expect(() => {
        a.connectTo(a);
      }).not.toThrow();
    });
  });
});
