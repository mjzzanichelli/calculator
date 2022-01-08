function sum(...args) {
  return args.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

const ext = { sum };

export function ResolveExpression(calc) {
  const args = Object.getOwnPropertyNames(ext);
  const params = args.map((key) => ext[key]);
  try {
    const fn = new Function(...args, `return ${calc}`);
    const result = fn(...params);
    if (isNaN(result)) throw new Error();
    return result;
  } catch (e) {
    return new Error("no result!");
  }
}

export const ExpressionProps = { clear: true, backspace: true, copy: true };

export function ReduceExpression(prev, { label, clear, backspace, copy }) {
  if (clear) return "";
  if (backspace) return prev.slice(0, -1);
  if (copy) {
    const result = ResolveExpression(prev);
    navigator?.clipboard?.writeText(`${result}`);
    return prev;
  }
  return `${prev}${label}`;
}
