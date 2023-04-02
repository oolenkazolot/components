export function isValidationName(name: string | undefined): boolean {
  if (!name) {
    return false;
  }
  return /^[A-Z]\w+\s+[A-Z]\w+/.test(name);
}

export function isValidationDate(date: string | undefined): boolean {
  if (!date) {
    return false;
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return false;
  }
  const today = new Date();
  const birthday = new Date(date);
  return today >= birthday;
}

export function isValidationSelect(value: string): boolean {
  if (!value) {
    return false;
  }

  if (value === 'Choose the country') {
    return false;
  }

  return true;
}
