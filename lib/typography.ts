

/**
 * fixOrphans – poprawia "sieroty" (spójniki/przyimki jedno- i dwuliterowe),
 * zastępując zwykłą spację na końcu słowa twardą spacją (NBSP).
 */
export function fixOrphans(text: string): string {
  const orphans = ["i", "a", "o", "u", "w", "z", "od", "do", "na", "za", "po"];

  let result = text;
  orphans.forEach((word) => {
    const regex = new RegExp(`\\b${word} `, "gi");
    result = result.replace(regex, `${word}\u00A0`); 
  });

  return result;
}
