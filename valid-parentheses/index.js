const str = "{{{}}}()()()()[]";

const getHead = (stack) => stack[stack.length - 1];

const isCloseParenthes = (c) =>
  c === ")" || c === "}" || c === "]" ? true : false;

const isOpenParenthes = (c) =>
  c === "(" || c === "{" || c === "[" ? true : false;

const isMatch = (x, y) => {
  if (x === "(" && y === ")") return true;
  if (x === "{" && y === "}") return true;
  if (x === "[" && y === "]") return true;
  return false;
};

const isEmpty = (arr) => Array.isArray(arr) && arr.length === 0;

const isValidParentheses = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    head = getHead(stack);
    if (
      isCloseParenthes(str[i]) &&
      isOpenParenthes(head) &&
      isMatch(head, str[i])
    ) {
      stack.pop();
      continue;
    }
    if (isCloseParenthes(str[i]) && !isMatch(head, str[i])) return false;
    if (isOpenParenthes(str[i])) stack.push(str[i]);
  }
  if (isEmpty(stack)) return true;
  return false;
};

console.log(isValidParentheses(str));
