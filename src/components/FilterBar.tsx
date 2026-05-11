import { categoriesList, destinationsList } from "@/data/experiences";

interface FilterBarProps {
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onClear: () => void;
}

export function FilterBar({
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
  onClear,
}: FilterBarProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
      <label className="block">
        <span className="mb-2 block text-sm font-bold text-slate-700">
          Category
        </span>
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 shadow-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
        >
          <option value="">All categories</option>
          {categoriesList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-bold text-slate-700">
          Destination
        </span>
        <select
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 shadow-sm outline-none focus:border-emerald-700 focus:ring-4 focus:ring-emerald-100"
        >
          <option value="">All destinations</option>
          {destinationsList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <button
        type="button"
        onClick={onClear}
        className="h-12 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
      >
        Reset
      </button>
    </div>
  );
}
