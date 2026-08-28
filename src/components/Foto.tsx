import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type FotoProps = {
  src: string;
  alt: string;
  className?: string | undefined;
};

/**
 * Фотография работы — с честной заглушкой на месте недостающего файла.
 *
 * Фотографии приезжают из выгрузки старого сайта отдельно от кода, и до их
 * отбора браузер рисует битую рамку с крестиком. На показе клиенту это
 * выглядит как сломанный сайт, хотя не сделана ровно одна вещь. Поэтому
 * вместо крестика — панель в цветах макета и подпись, чего тут не хватает:
 * то же правило, что и у `[от ... ₽]` в ценах — заглушка видна заглушкой.
 */
export function Foto({ src, alt, className }: FotoProps) {
  const [net, setNet] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  // Разметка приезжает с сервера готовой, и картинка успевает не загрузиться
  // до того, как React возьмёт страницу в свои руки: onError к этому моменту
  // ещё не навешан, и на экране остаётся крестик. Поэтому при монтировании
  // спрашиваем саму картинку, получилось ли у неё загрузиться.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setNet(true);
  }, []);

  if (net) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 border border-edge bg-edge/40 px-4 text-center",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <span className="dim-line w-16 text-blueprint" aria-hidden="true" />
        <span className="font-mono text-[11px] leading-snug text-blueprint sm:text-xs">
          [фото: {alt.toLowerCase()}]
        </span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      onError={() => setNet(true)}
    />
  );
}
