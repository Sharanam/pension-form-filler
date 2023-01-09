import { toGujarati } from "./toGujarati";

function make(arr) {
  return arr?.map((x) => x?.toString().padStart(2, "0")) || ["", "", ""];
}
export function countYMD(...args) {
  let [d1, m1, y1, d2, m2, y2] = args.flat();
  if (
    !/^\d{1,2}$/.test(d1) ||
    !/^\d{1,2}$/.test(m1) ||
    !/^\d{4}$/.test(y1) ||
    !/^\d{1,2}$/.test(d2) ||
    !/^\d{1,2}$/.test(m2) ||
    !/^\d{4}$/.test(y2)
  ) {
    return ["", "", ""];
  }

  let years = y2 - y1;
  let months = m2 - m1;
  let days = d2 - d1;

  if (days < 0) {
    months--;
    let daysInPrevMonth = new Date(y2, m2, 0).getDate();
    days += daysInPrevMonth + 1;
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  return make([years, months, days]);
}

export function sumYMD(...args) {
  let [y1, m1, d1] = args[0];
  let v1 = true,
    v2 = true;
  if (!/^\d{1,2}$/.test(y1) || !/^\d{1,2}$/.test(m1) || !/^\d{1,2}$/.test(d1))
    v1 = false;

  let [y2, m2, d2] = args[1];
  if (!/^\d{1,2}$/.test(y2) || !/^\d{1,2}$/.test(m2) || !/^\d{1,2}$/.test(d2))
    v2 = false;

  if (!v1 && !v2) return ["", "", ""];
  if (!v1) return make([y2, m2, d2]);
  if (!v2) return make([y1, m1, d1]);

  let years = parseInt(y1) + parseInt(y2);
  let months = parseInt(m1) + parseInt(m2);
  let days = parseInt(d1) + parseInt(d2);

  if (days >= 30) {
    months++;
    days -= 30;
  }
  if (months >= 12) {
    years++;
    months -= 12;
  }

  return make([years, months, days]);
}

export function minusYMD(period1, period2) {
  let [y1, m1, d1] = period1;
  let [y2, m2, d2] = period2;
  let v1 = true,
    v2 = true;
  if (!/^\d{1,2}$/.test(y1) || !/^\d{1,2}$/.test(m1) || !/^\d{1,2}$/.test(d1))
    v1 = false;
  if (!/^\d{1,2}$/.test(y2) || !/^\d{1,2}$/.test(m2) || !/^\d{1,2}$/.test(d2))
    v2 = false;
  if (!v1 && !v2) return ["", "", ""];

  if (!v1) return make([-y2, -m2, -d2]);
  if (!v2) return make([y1, m1, d1]);
  let years = y1 - y2;
  let months = m1 - m2;
  let days = d1 - d2;
  if (days < 0) {
    months--;
    let daysInPrevMonth = new Date(y1, m1, 0).getDate();
    days += daysInPrevMonth + 1;
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return make([years, months, days]);
}

export function getSumFrom(subpoint) {
  if (subpoint.length == 0) return [0, 0, 0];
  let sum = [0, 0, 0];
  for (let i = 0; i < subpoint.length; i++) {
    sum = sumYMD(sum, countYMD(subpoint[i][0], subpoint[i][1]));
  }
  return make(sum);
}

export function totalYear([y, m, d]) {
  if (m >= 6) y++;
  return y;
}

export function dasMaas([date, month, year]) {
  if (!date || !month || !year)
    return Array(10).fill(Array(2).fill("____/_____/_______"));
  let [d, m, y] = [date, month, year];
  const result = [];

  if (m - 10 < 0) {
    m = 12 + (m - 10);
    y = y - 1;
  } else {
    m = m - 10;
  }
  d = 1;

  for (let i = 0; i < 10; i++) {
    const firstDay = new Date(y, m, d);
    let lastDay = new Date(y, m + 1, 0);
    if (m == month - 1 && y == year) {
      lastDay = new Date(y, m, date);
    }
    result.push(
      [firstDay, lastDay].map((x) => toGujarati(x.toLocaleDateString("en-GB")))
    );
    if (m === 11) {
      m = 0;
      y = y + 1;
    } else {
      m = m + 1;
    }
  }
  return result;
}
