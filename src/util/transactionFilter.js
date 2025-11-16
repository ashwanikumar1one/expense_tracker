export default function transactionFilter(transactions, filter) {
  const fType = (filter?.type ?? "all").toLowerCase();
  const fCategory = (filter?.category ?? "all").toLowerCase();
  const fFrom = filter?.dateRange?.from ?? null;
  const fTo = filter?.dateRange?.to ?? null;

  return transactions.filter((t) => {
    const tType = (t.type ?? "").toLowerCase();
    const tCategory = (t.category ?? "").toLowerCase();

    if (fType && fType !== "all" && fType !== tType) return false;

    if (fCategory && fCategory !== "all" && tCategory !== fCategory)
      return false;

    if (fFrom && new Date(t.date) < fFrom) return false;
    if (fTo && new Date(t.date) > fTo) return false;

    return true;
  });
}
