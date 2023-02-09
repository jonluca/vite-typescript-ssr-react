export default function getTwClassByNumber(
  index: number,
  type: "grid-cols" | "gap",
  screen?: "sm" | "md" | "lg" | "xl" | "2xl"
) {
  if (type === "grid-cols") {
    switch (screen) {
      case "sm":
        return _gridColsSM(index);
      case "md":
        return _gridColsMD(index);
      case "lg":
        return _gridColsLG(index);
      case "xl":
        return _gridColsXL(index);
      case "2xl":
        return _gridCols2XL(index);
      default:
        return _gridCols(index);
    }
  }
}

function _gridCols2XL(index: number) {
  switch (index) {
    case 1:
      return "2xl:grid-cols-1";
    case 2:
      return "2xl:grid-cols-2";
    case 3:
      return "2xl:grid-cols-3";
    case 4:
      return "2xl:grid-cols-4";
    case 5:
      return "2xl:grid-cols-5";
    case 6:
      return "2xl:grid-cols-6";
    case 7:
      return "2xl:grid-cols-7";
    case 8:
      return "2xl:grid-cols-8";
    case 9:
      return "2xl:grid-cols-9";
    case 10:
      return "2xl:grid-cols-10";
    case 11:
      return "2xl:grid-cols-11";
    case 12:
      return "2xl:grid-cols-12";

    default:
      return "";
  }
}
function _gridColsXL(index: number) {
  switch (index) {
    case 1:
      return "xl:grid-cols-1";
    case 2:
      return "xl:grid-cols-2";
    case 3:
      return "xl:grid-cols-3";
    case 4:
      return "xl:grid-cols-4";
    case 5:
      return "xl:grid-cols-5";
    case 6:
      return "xl:grid-cols-6";
    case 7:
      return "xl:grid-cols-7";
    case 8:
      return "xl:grid-cols-8";
    case 9:
      return "xl:grid-cols-9";
    case 10:
      return "xl:grid-cols-10";
    case 11:
      return "xl:grid-cols-11";
    case 12:
      return "xl:grid-cols-12";

    default:
      return "";
  }
}
function _gridColsLG(index: number) {
  switch (index) {
    case 1:
      return "lg:grid-cols-1";
    case 2:
      return "lg:grid-cols-2";
    case 3:
      return "lg:grid-cols-3";
    case 4:
      return "lg:grid-cols-4";
    case 5:
      return "lg:grid-cols-5";
    case 6:
      return "lg:grid-cols-6";
    case 7:
      return "lg:grid-cols-7";
    case 8:
      return "lg:grid-cols-8";
    case 9:
      return "lg:grid-cols-9";
    case 10:
      return "lg:grid-cols-10";
    case 11:
      return "lg:grid-cols-11";
    case 12:
      return "lg:grid-cols-12";

    default:
      return "";
  }
}
function _gridColsMD(index: number) {
  switch (index) {
    case 1:
      return "md:grid-cols-1";
    case 2:
      return "md:grid-cols-2";
    case 3:
      return "md:grid-cols-3";
    case 4:
      return "md:grid-cols-4";
    case 5:
      return "md:grid-cols-5";
    case 6:
      return "md:grid-cols-6";
    case 7:
      return "md:grid-cols-7";
    case 8:
      return "md:grid-cols-8";
    case 9:
      return "md:grid-cols-9";
    case 10:
      return "md:grid-cols-10";
    case 11:
      return "md:grid-cols-11";
    case 12:
      return "md:grid-cols-12";

    default:
      return "";
  }
}
function _gridColsSM(index: number) {
  switch (index) {
    case 1:
      return "sm:grid-cols-1";
    case 2:
      return "sm:grid-cols-2";
    case 3:
      return "sm:grid-cols-3";
    case 4:
      return "sm:grid-cols-4";
    case 5:
      return "sm:grid-cols-5";
    case 6:
      return "sm:grid-cols-6";
    case 7:
      return "sm:grid-cols-7";
    case 8:
      return "sm:grid-cols-8";
    case 9:
      return "sm:grid-cols-9";
    case 10:
      return "sm:grid-cols-10";
    case 11:
      return "sm:grid-cols-11";
    case 12:
      return "sm:grid-cols-12";

    default:
      return "";
  }
}
function _gridCols(index: number) {
  switch (index) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    case 6:
      return "grid-cols-6";
    case 7:
      return "grid-cols-7";
    case 8:
      return "grid-cols-8";
    case 9:
      return "grid-cols-9";
    case 10:
      return "grid-cols-10";
    case 11:
      return "grid-cols-11";
    case 12:
      return "grid-cols-12";

    default:
      return "";
  }
}
