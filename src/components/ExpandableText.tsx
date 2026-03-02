import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ExpandableTextProps {
  text: string;
  collapsedLines?: number;
  className?: string;
  buttonClassName?: string;
}

export default function ExpandableText({
  text,
  collapsedLines = 3,
  className = '',
  buttonClassName = '',
}: ExpandableTextProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p
        className={className}
        style={
          isExpanded
            ? undefined
            : {
                display: '-webkit-box',
                WebkitLineClamp: collapsedLines,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }
        }
      >
        {text}
      </p>

      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`text-sm font-semibold dark:text-blue-300 text-[#2577FF] hover:underline cursor-pointer ${buttonClassName}`.trim()}
      >
        {isExpanded ? t('common.hide') : t('common.readMore')}
      </button>
    </div>
  );
}
