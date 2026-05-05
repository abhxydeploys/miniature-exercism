export function toRna(dna: string): string {
  // 1. Create a mapping (object or switch) for DNA -> RNA nucleotides.
  const dnaToRnaMap: Record<string, string> = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
  }
  // 2. Loop through each character of the 'dna' string.
  // 3. For each character:
  //    - If it's a valid DNA nucleotide, replace it with its complement.
  //    - If it's NOT valid (e.g., 'X', 'U', etc.), throw new Error('Invalid input DNA.').
  let rna = "";
  for (const s of dna) {
    if (!(s in dnaToRnaMap)) {
      throw new Error('Invalid input DNA.');
    }
    rna += dnaToRnaMap[s] ?? '';
  }
  // 4. Return the joined string of RNA complements.
  return rna
}

