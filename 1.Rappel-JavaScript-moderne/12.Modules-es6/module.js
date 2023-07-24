const a = 12;
const name = "dz";

function foo() {
  console.log("hello");
}
function foos() {
  console.log("hello foos");
}
export default foo;
export { foos };
export { a, name };
