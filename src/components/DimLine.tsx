import { cn } from "@/lib/utils";

type DimLineProps = {
  /** Подпись у линии, например «2400 мм» */
  label?: string | undefined;
  className?: string | undefined;
  labelPosition?: "above" | "below" | undefined;

  labelPosition?: "above" | "below";
};

/**
 * Размерная линия — фирменный элемент.
 * Тонкая линия с засечками по концам и числом в миллиметрах.
 * Цвет наследуется от text-* родителя.
 */
export function DimLine({ label, className, labelPosition = "below" }: DimLineProps) {
  return (
    <div className={cn("w-full text-blueprint", className)}>
      {label && labelPosition === "above" && (
        <div className="mb-1.5 font-mono text-[11px] tracking-tight sm:text-xs">{label}</div>
      )}
      <span className="dim-line" aria-hidden="true" />
      {label && labelPosition === "below" && (
        <div className="mt-1.5 font-mono text-[11px] tracking-tight sm:text-xs">{label}</div>
      )}
    </div>
  );
}

/** Размерная линия как разделитель секций, во всю ширину */
export function SectionRule({ label }: { label?: string }) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
      <DimLine label={label} />
    </div>
  );
}
