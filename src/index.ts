const order = 'IVXLC'.split('');

const increment = (numeral: string): string => {
  const char_group_regex = /(.)\1*/g;
  const parts: string[] = numeral.match(char_group_regex);
  const partsCount = parts.length;
  const res: string = parts.reduce((previousValue: string[], group: string, currentIndex: number, arr: string[]) => {
    const numeralType = group[0];
    const numNumerals = group.length;
    const isLastGroup = currentIndex === partsCount;
    if (numNumerals === 3) {
      const nextNumeralType = order[order.indexOf(group[0]) + 1];
      if (numeralType === 'I') {
        previousValue.push('IV');
      }
    } else {
      previousValue.push(group + 'I');
    }
    return previousValue;
  }, []).join('');
  return res;
};
const decrement = (numeral: string): string | null => {
  return '';
};

const add = (first: string | null, second: string): string => {
  return '';
};

export {increment, decrement, add};
