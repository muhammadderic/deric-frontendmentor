interface SummaryAddOnProps {
  title: string;
  price: number;
}

export function SummaryAddOn({ title, price }: SummaryAddOnProps) {
  return (
    <div className="p-4 lg:p-2 flex justify-between">
      <p className="text-[#9699ab] lg:text-sm">
        {title}
      </p>
      <p className="text-[#02295a] lg:text-sm">
        +${price}/yr
      </p>
    </div>
  );
}