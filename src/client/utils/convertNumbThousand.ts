export default function convertNumbThousand(number: number): string {
  let str = "";
  if (number < 1000) {
    str = String(number);
  } else {
    str = (number / 1000).toFixed(1) + "k";
  }
  return str;
}
