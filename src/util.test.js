import { ResolveExpression, ReduceExpression, ExpressionProps } from "./util";

const { clear, backspace, copy } = ExpressionProps;

describe("Calculate the result for an expression", () => {
  test("all Javascript operators can be used", () => {
    expect(ResolveExpression("1+1")).toBe(2);
    expect(ResolveExpression("2-1")).toBe(1);
    expect(ResolveExpression("2*2")).toBe(4);
    expect(ResolveExpression("6/3")).toBe(2);
    expect(ResolveExpression("10 % 3")).toBe(1);
  });

  test("decimals and parentheses can also be used", () => {
    expect(ResolveExpression("(1.1+1.1)*2")).toBe(4.4);
  });

  test("anything returning a number can be used too", () => {
    expect(ResolveExpression("'abc'.length")).toBe(3);
    expect(ResolveExpression("Math.pow(2,2)")).toBe(4);
  });

  test("functions can be added for scientic expressions", () => {
    expect(ResolveExpression("sum(1,2,3)")).toBe(6);
  });

  test("exceptions should return error", () => {
    expect(ResolveExpression("this is an error")).toBeInstanceOf(Error);
    expect(ResolveExpression("'foo'")).toBeInstanceOf(Error);
  });
});

describe("Reduce expression from new value", () => {
  const originalClipboard = { ...global.navigator.clipboard };

  beforeEach(() => {
    const mockClipboard = {
      writeText: jest.fn(),
    };
    global.navigator.clipboard = mockClipboard;
  });

  afterEach(() => {
    jest.resetAllMocks();
    global.navigator.clipboard = originalClipboard;
  });

  test("clear property should just empty the expression", () => {
    expect(ReduceExpression("foo", { clear })).toBe("");
  });

  test("backspace property should remove the last chacter in the expression", () => {
    expect(ReduceExpression("foo", { backspace })).toBe("fo");
  });

  test("copy property should return the same expression and copy the result in clipboard", () => {
    expect(ReduceExpression("1+1", { copy })).toBe("1+1");
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("2");
  });

  test("label property should just concatenate to the expression", () => {
    expect(ReduceExpression("foo", { label: "bar" })).toBe("foobar");
  });
});
